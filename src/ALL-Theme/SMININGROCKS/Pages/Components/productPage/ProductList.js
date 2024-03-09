import React, { useCallback, useEffect, useState } from "react";
import Header from "../home/Header/Header";
import Footer from "../home/Footer/Footer";
import SmilingRock from "../home/smiling_Rock/SmilingRock";
import "./product.css";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import prodListData from "../../jsonFile/Productlist_4_95oztttesi0o50vr.json";
// import prodListData from "../../jsonFile/testingFile/Productlist_4_95oztttesi0o50vr_Original.json";
import filterData from "../../jsonFile/M_4_95oztttesi0o50vr.json";
import PriceData from "../../jsonFile/Productlist_4_95oztttesi0o50vr_8.json";
// import PriceData from "../../jsonFile/testingFile/Productlist_4_95oztttesi0o50vr_8_Original.json";
import { Accordion,AccordionDetails,AccordionSummary, Checkbox, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { event } from "jquery";
import { CommonAPI} from "../../../Utils/API/CommonAPI";
import { async } from "q";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CartListCounts, WishListCounts } from "../../../../../Recoil/atom";
import { GetCount } from "../../../Utils/API/GetCount";

 
const ProductList = () => {
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [ProductApiData,setProductApiData] =useState([])
  const [drawerShowOverlay, setDrawerShowOverlay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [HoveredID, setHoveredID] = useState();
  const [filterChecked, setFilterChecked] = useState({});
  const [wishFlag,setWishFlag] = useState(false)
  const [cartFlag,setCartFlag] = useState(false)
  const[cartData,setCartData] = useState([]);
  const[WishData,setWishData] = useState([]);
  const [cartRemoveData,setCartRemoveData] = useState("");
  const [wishListRemoveData,setWishListRemoveData] = useState("");

  console.log("wishData",cartData);

  const setCartCount = useSetRecoilState(CartListCounts)
  const setWishCount = useSetRecoilState(WishListCounts)

  const navigate = useNavigate();

  const toggleDeatilList = () => {
    setIsOpenDetail(!isOpenDetail)
  };

  const getCountFunc = async() =>{

    await GetCount().then((res)=>{
      if(res){
        setCartCount(res.CountCart)
        setWishCount(res.WishCount)
      }
    })

  }




  const fetchFile = async () => {

    let storeinit=JSON.parse(localStorage.getItem("storeInit"))
    let loginInfo=JSON.parse(localStorage.getItem("loginUserDetail"))

    await axios.get(
      `https://${storeinit?.domain}/assets/${storeinit?.FrontEnd_RegNo}/Store_Data/Productlist/Productlist_${loginInfo?.PackageId}_${storeinit?.FrontEnd_RegNo}.txt`
    ).then(
      (res)=>
        {
          setProductApiData(res?.data)
        })
    .catch((err)=>console.log("err",err))
   
  }; 

  useEffect(()=>{
    fetchFile()
  },[])

  const toggleDrawerOverlay = () => {
    setDrawerShowOverlay(!drawerShowOverlay);
  };

  let productData = [];

  if (ProductApiData?.data?.[0]) {
    ProductApiData.data[0].map((ele) => {
      let obj = {};
      Object.entries(prodListData.ProductsList).map((objele) => {
        obj[objele[0]] = ele[objele[1]];
      });
      productData.push(obj);
    });
  }

  // let product2Data = [];

  // ProductApiData.data[0].map((ele) => {
  //   let obj = {};
  //   Object.entries(prodListData.ProductsList).map((objele) => {
  //     obj[objele[0]] = ele[objele[1]];
  //   });
  //   product2Data.push(obj);
  // });

  // console.log("product2Data",ProductApiData?.data[0]?.map((ele)=>ele))

  useEffect(() => {
    // if(ProductApiData.length){
      // window.scrollTo(0,0);
      const element = document.getElementById("finejwelery")
      element.scrollIntoView()
    // }
  }, []); 




  // let collectionsfilter = () =>{
  //   let arr1=[]
  //  filterData.CollectionList.map((filcollist)=>{
  //   console.log("arr",productData.Collectionid);
  //    productData?.map((pdColl)=>{
  //     if(filcollist.Collectionid === pdColl.Collectionid){
  //       arr1.push(filcollist.CollectionName)
  //     }
  //   })
  //   })
  //   return arr1
  // }

  // let Categoryfilter = () =>{
  //   let arr1=[]
  //  filterData.CategoryList.map((filcatlist)=>{
  //    productData?.map((pdColl)=>{
  //     if(filcatlist.Categoryid === pdColl.Categoryid){
  //       arr1.push(filcatlist.CategoryName)
  //     }
  //   })
  //   })
  //   return arr1
  // }

  // const MetalColor = () =>{
  //   let mtCol= [];
  //   filterData.MetalColorList.map((mtc)=>{
  //     productData.map((pdColl)=>{
  //       if(mtc.MetalColorid === pdColl.MetalColorid){
  //         mtCol.push(mtc.MetalColorName)
  //       }
  //     })
  //   })

  //   return mtCol
  // }

  function updateProductsWithMetalColorName() {
    productData.forEach((product) => {
      const metalColor = filterData.MetalColorList.find(
        (color) => color.MetalColorid === product.MetalColorid
      );
      const categoryName = filterData.CategoryList.find(
        (cate) => cate.Categoryid === product.Categoryid
      );
      const collectionName = filterData.CollectionList.find(
        (coll) => coll.Collectionid === product.Collectionid
      );
      const mtpurity = filterData.MetalPurityList.find(
        (mtp) => mtp.MetalPurityid === product.MetalPurityid
      );
      const prodtype = filterData.ProductTypeList.find(
        (pt) => pt.Producttypeid === product.Producttypeid
      );
      const gendertype = filterData.GenderList.find(
        (gen) => gen.Genderid === product.Genderid
      );
      const Berandtype = filterData.BrandList.find(
        (brand) => brand.Brandid === product.Brandid
      )
      const MetalType = filterData.MetalTypeList.find(
        (mt)=> mt.MetalTypeid === product.MetalTypeid
      )
      const OcassionType = filterData.OcassionList.find(
        (ocs)=> ocs.Ocassionid === product.Ocassionid
      )
      const SubCategoryType = filterData.SubCategoryList.find(
        (sct)=>sct.SubCategoryid === product.SubCategoryid
      )
      const ThemeType = filterData.ThemeList.find(
        (tl)=>tl.Themeid === product.Themeid
      )

      if (metalColor) {
        product.MetalColorName = metalColor.MetalColorName;
      }
      if (categoryName) {
        product.CategoryName = categoryName.CategoryName;
      }
      if (collectionName) {
        product.CollectionName = collectionName.CollectionName;
      }
      if (mtpurity) {
        product.MetalPurity = mtpurity.MetalPurity;
      }
      if (prodtype) {
        product.ProducttypeName = prodtype.ProducttypeName;
      }
      if (gendertype) {
        product.GenderName = gendertype.GenderName;
      }
      if(Berandtype){
        product.Berandid = Berandtype.BrandName
      }
      if(MetalType){
        product.MetalTypeName = MetalType.MetalTypeName
      }
      if(OcassionType){
        product.OcassionName = OcassionType.OcassionName
      }
      if(SubCategoryType){
        product.SubCategoryName = SubCategoryType.SubCategoryName
      }
      if(ThemeType){
        product.Themeid = ThemeType.Themeid
      }
    });

    return productData;
  }


  const diffCartData = useCallback(() =>{

  // let pdata;
  
  productData.forEach((pd)=>{
    const pdata = cartData.find((cd)=>pd.designno === cd.DesignNo)
    
    // console.log("pdata",pdata);

    if(pdata && !pd?.checkFlag){
      pd.checkFlag = true
    }
    else{
      pd.checkFlag = false
    }
  })


return productData
  
},[productData,cartData])


diffCartData()

console.log("WishData",WishData);


const diffWishData = useCallback(()=>{

  productData.forEach((pd)=>{
    const pdata = WishData.find((cd)=>pd.designno === cd.DesignNo)
    

    if(pdata && !pd?.wishCheck){
      pd.wishCheck = true
    }
    else{
      pd.wishCheck = false
    }
  })


return productData

},[productData,WishData])


diffWishData()

const removefromCart=()=>{
  productData.map((pd)=>{
 

    if(cartRemoveData && pd.designno === cartRemoveData){
        pd.checkFlag = false
    }
    
    if(wishListRemoveData  && pd.designno === wishListRemoveData){
      pd.wishCheck = false
    }

  })


return productData
// // console.log("prodddd",product);
// let prodD;
// productData.forEach((pd)=>{

//   // let prodD = productData.find((p)=>p?.designno === product?.designno && p?.checkFlag === true)

//   // if(prodD){
//   //   pd.checkFlag = false
//   // }

// if(pd?.designno===product?.designno){
//    prodD = pd
// }
// if(prodD){
//   pd.checkFlag = false
// }

// })

// console.log("prodD",prodD);
// return productData
}

removefromCart()




  

  // let GetPrice = () =>{
  //   // let PriceDataChange=[]
  //   updateProductsWithMetalColorName()?.forEach(product=>{
  //     const priceData = PriceData.find( priceD => priceD.A === product.autocode && priceD.B === product.diamondquality && priceD.C === product.diamondcolorname && priceD.D.split(" ")[1] === product.MetalPurity)
  //     if(priceData){
  //       product.price = priceData.E
  //      }

  //   })
  //   return updateProductsWithMetalColorName()

  // }


  // useEffect(()=>{

  //   let isWishHasCartData = productData?.filter((pd)=> WishData.find((wd)=>wd.autocode===pd.autocode))
  //   console.log("isWishHasCartData",isWishHasCartData)

  // },[WishData])



  updateProductsWithMetalColorName()?.forEach((product) => {
    const priceData = PriceData?.find(
      (priceD) =>
        priceD.A === product.autocode &&
        priceD.B === product.diamondquality &&
        priceD.C === product.diamondcolorname &&
        priceD.D.split(" ")[1] === product.MetalPurity
    );

    if (priceData) {
      product.price = priceData.E;
    } else {
      product.price = "Not Availabel";
    }
  });

  // console.log(updateProductsWithMetalColorName().map(()=>{    }));

  updateProductsWithMetalColorName()?.forEach((prods) => {
    let fullTitle =
      prods.CollectionName +
      " " +
      prods.totaldiamondweight +
      " " +
      prods.diamondquality +
      " " +
      "Diamond" +
      " " +
      prods.CategoryName +
      " " +
      prods.designno;
    prods.title = fullTitle;
  });

  const handelProductSubmit = (product) => {
    localStorage.setItem("srProductsData", JSON.stringify(product));
    navigate("/productdetail");
  };


  const NewFilterData = () =>{
    const newFilter = [];
    filterData.SideMenuList.forEach((ele) => {
        if (ele.Fno === '1') {
          newFilter.push({ label: "CATEGORY",filterList: filterData.CategoryList?.map((ele)=>{return ele.CategoryName }),listType:'CategoryName'});
        } else if (ele.Fno === '2') {
          newFilter.push({ label: "PRODUCT TYPE",filterList:filterData.ProductTypeList?.map((ele)=>{return ele.ProducttypeName}),listType:'ProducttypeName'});
        } else if (ele.Fno === '8') {
          newFilter.push({ label: "GENDER",filterList:filterData.GenderList?.map((ele)=>{return ele.GenderName}),listType:'GenderName'});
        } else if (ele.Fno === '12') {
          newFilter.push({ label: "PRICE",filterList:[]});
        } else if (ele.Fno === '15') {
          newFilter.push({ label: "COLLECTION",filterList:filterData.CollectionList?.map((ele)=>{return ele.CollectionName}),listType:'CollectionName'});
        } else if (ele.Fno === '18') {
          newFilter.push({ label: "CENTERSTONE",filterList:filterData.CenterStoneList?.map((ele)=>{return ele?.ColorStoneName }),listType:'ColorStoneName'});
        }
      });
      
      return newFilter;
  }


  const handleCheckboxChange = (e,ele,flist)=>{
    const { name, checked ,value } = e.target;

    setFilterChecked((prev) => ({
      ...prev,
      [name]: {checked,value:flist,type:ele.listType}
    }));
  }

  let NewFilterArr = []
  for (let key in filterChecked){
    if(filterChecked[key] === 'checked' && filterChecked['checked']===true){
      NewFilterArr.push(filterChecked)
    }
  }

  const filteredObjects = Object.entries(filterChecked)
  .filter(([key, value]) => value.checked)
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

 
  const sepeTypeVal = Object.entries(filteredObjects).map(ele=>{
    return {type:ele[1].type,value:ele[1].value}
  })

  // const filteredProducts = productData.filter(product => {
  //   return sepeTypeVal.every(filter => {
  //     return product[filter.type] === filter.value 
  //   })
  // })

  // let ArrFil = []

  const filteredProducts = (productData).filter(product => {
    return sepeTypeVal.every(condition => {
        return product[condition.type] === condition.value
    });
});

  const mergedArray = filteredProducts.reduce((acc, curr) => acc.concat(curr), []);
  const finalDataOfDisplaying = () =>{
    if(mergedArray.length && mergedArray){
      return mergedArray
    }
    else{
      return updateProductsWithMetalColorName()
    }
  }

  // console.log("finalDataOfDisplaying",finalDataOfDisplaying());

  
  // const getCountApi = async()=>{

  //       const storeInit = JSON.parse(localStorage.getItem("storeInit"))
  //       const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));
  //       const UserEmail = localStorage.getItem("userEmail")


  //   let EncodeData = {FrontEnd_RegNo:`${storeInit?.FrontEnd_RegNo}`,Customerid:`${Customer_id?.id}`}

  //   const encodedCombinedValue = btoa(JSON.stringify(EncodeData));

  //   let body = {
  //       "con":`{\"id\":\"\",\"mode\":\"Getcount\",\"appuserid\":\"${UserEmail}\"}`,
  //       "f":"onAddToCart-AddToWishList-Reload (cartcount)",
  //       "p":encodedCombinedValue
  //       }

  //   await CommonAPI(body).then((res)=>{
  //     if(res?.Data?.rd[0]?.stat_msg === "success"){
  //       const CountCart = res?.Data?.rd[0]?.cartcount
  //       const WishCount = res?.Data?.rd[0]?.wishcount

  //       setCartCount(CountCart)
  //       setWishCount(WishCount)

  //     }
  //   })

  // }

  const getCartAndWishListData = async() =>{
  
    const UserEmail = localStorage.getItem("registerEmail")
    const storeInit = JSON.parse(localStorage.getItem("storeInit"))
    const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

    let EncodeData = {FrontEnd_RegNo:`${storeInit?.FrontEnd_RegNo}`,Customerid:`${Customer_id?.id}`}

    const encodedCombinedValue = btoa(JSON.stringify(EncodeData));

    const body = {
        "con":`{\"id\":\"Store\",\"mode\":\"getdesignnolist\",\"appuserid\":\"${UserEmail}\"}`,
        "f":" useEffect_login ( getdataofcartandwishlist )",
        "p":encodedCombinedValue
    }

    await CommonAPI(body).then((res)=>{
      if(res?.Message === "Success"){
        setCartData(res?.Data?.rd)
        setWishData(res?.Data?.rd1)
      }
    })

  }


  useEffect(()=>{

    getCartAndWishListData();
    // getCountApi()
    getCountFunc()

  },[])



  const handelWishList = async(event,prod) =>{

    try{
      setWishFlag(event.target.checked)

      if(event.target.checked === true){

        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        const product =  prod 

  
        const finalJSON = {
          "stockweb_event": "",
          "Mastermanagement_CategorySize": "",
          "sizeamountpersentage": "",
          "stockno": "",
          "is_show_stock_website": "0",
          "cmboDiaQualityColor": "C-VS#@#FG",
          "cmboMetalType": `${product?.MetalTypeName} ${product?.MetalPurity}`,
          "AdditionalValWt":Number(`${product?.AdditionalValWt}`),
          "BrandName":`${product?.BrandName ?? ""}`,
          "Brandid": 5,
          "CategoryName":`${product?.CategoryName}`,
          "Categoryid":Number(`${product?.Categoryid}`),
          "CenterStoneId":Number(`${product?.CenterStoneId}`),
          "CenterStonePieces":Number(`${product?.CenterStonePieces}`),
          "CollectionName":`${product?.CollectionName}`,
          "Collectionid":Number(`${product?.Collectionid}`),
          "ColorWiseRollOverImageName":`${product?.ColorWiseRollOverImageName}`,
          "DefaultImageName":`${product?.DefaultImageName}`,
          "DisplayOrder":Number(`${product?.DisplayOrder}`),
          "FrontEnd_OrderCnt":Number(`${product?.FrontEnd_OrderCnt}`),
          "GenderName":`${product?.GenderName}`,
          "Genderid":Number(`${product?.Genderid}`),
          "Grossweight":Number(`${product?.Grossweight}`),
          "InReadyStockCnt":Number(`${product?.InReadyStockCnt}`),
          "IsBestSeller":Number(`${product?.IsBestSeller}`),
          "IsColorWiseImageExists":`${product?.IsColorWiseImageExists}`,
          "IsInReadyStock":Number(`${product?.IsInReadyStock}`),
          "IsNewArrival":`${product?.IsNewArrival}`,
          "IsRollOverColorWiseImageExists":`${product?.IsRollOverColorWiseImageExists}`,
          "IsTrending":Number(`${product?.IsTrending}`),
          "MasterManagement_labid":Number(`${product?.MasterManagement_labid}`),
          "MasterManagement_labname": "",
          "MetalColorName": `${product?.MetalColorName}`,
          "MetalColorid": Number(`${product?.MetalColorid}`),
          "MetalPurity": `${product?.MetalPurity}`,
          "MetalPurityid": Number(`${product?.MetalTypeid}`),
          "MetalTypeName":`${product?.MetalTypeName ?? ""}`,
          "MetalTypeid": Number(`${product?.IsInReadyStock}`),
          "MetalWeight": Number(`${product?.MetalWeight}`),
          "OcassionName": `${product?.OcassionName ?? ""}`,
          "Ocassionid": Number(`${product?.Ocassionid}`),
          "ProducttypeName":`${product?.ProducttypeName}`,
          "Producttypeid": Number(`${product?.Producttypeid}`),
          "RollOverImageName":`${product?.RollOverImageName}`,
          "SubCategoryName":`${product?.SubCategoryName ?? ""}`,
          "SubCategoryid":Number(`${product?.SubCategoryid ?? ""}`),
          "ThemeName":`${product?.ThemeName ?? ""}`,
          "Themeid":Number(`${product?.Themeid}`),
          "TitleLine":`${product?.TitleLine}`,
          "UnitCost": Number(`${product?.UnitCost}`),
          "UnitCostWithmarkup":Number( `${product?.UnitCostWithmarkup}`),
          "autocode": `${product?.autocode}`,
          "colorstonecolorname": `${product?.colorstonecolorname}`,
          "colorstonequality": `${product?.colorstonequality}`,
          "designno": `${product?.designno}`,
          "diamondcolorname": `${product?.diamondcolorname}`,
          "diamondpcs":Number(`${product?.diamondpcs}`),
          "diamondquality":`${product?.diamondquality.split(",")[0]}`,
          "diamondsetting":`${product?.diamondsetting}`,
          "diamondshape": `${product?.diamondshape}`,
          "diamondweight": Number(`${product?.diamondweight}`),
          "encrypted_designno":`${product?.encrypted_designno}`,
          "hashtagid":`${product?.hashtagid}`,
          "hashtagname": `${product?.hashtagname}`,
          "imagepath": `${product?.imagepath}`,
          "imgrandomno": `${product?.imgrandomno}`,
          "mediumimage":`${product?.mediumimage ?? ""}`,
          "originalimage":`${product?.originalimage}`,
          "storyline_html": `${product?.storyline_html}`,
          "storyline_video": `${product?.storyline_video}`,
          "thumbimage":`${product?.thumbimage}`,
          "totaladditionalvalueweight": 0,
          "totalcolorstoneweight": Number(`${product?.totalcolorstoneweight}`),
          "totaldiamondweight": Number(`${product?.totaldiamondweight}`),
          "updatedate": `${product?.updatedate}`,
          "videoname":`${product?.videoname ?? ""}`,
          "FrontEnd_RegNo":`${storeInit?.FrontEnd_RegNo}`,
          "Customerid": `${Customer_id?.id}`,
          "PriceMastersetid": `${product?.PriceMastersetid ?? ""}`,
          "DQuality": `${product?.diamondquality.split(",")[0]}`,
          "DColor":`${product?.diamondcolorname}`,
          "UploadLogicalPath":`${product?.UploadLogicalPath ?? ""}`,
          "ukey": `${storeInit?.ukey}`
        }


        const encodedCombinedValue =  btoa(JSON.stringify(finalJSON));
  
        const body = {
          con: `{\"id\":\"\",\"mode\":\"addwishlist\",\"appuserid\":\"${UserEmail}\"}`,
          f: "AddToWishListIconClick (addwishlist)",
          p: encodedCombinedValue,
        };
    
        await CommonAPI(body).then(async(res)=>{

          if(res?.Data?.rd[0]?.msg === "success"){
            

            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
            
          }
      })
      }
      else{
        // {"designlist":"'MCJ10'","isselectall":"0","FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}


        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));
        
        
        setWishListRemoveData(prod.designno)
  
  
        let Data = {"designlist":`'${prod?.designno}'`,"isselectall":"0","FrontEnd_RegNo":`${storeInit?.FrontEnd_RegNo}`,"Customerid":`${Customer_id?.id}`}
  
        let encodedCombinedValue = btoa(JSON.stringify(Data))
        const body = {
          con: `{\"id\":\"\",\"mode\":\"removeFromWishList\",\"appuserid\":\"${UserEmail}\"}`,
          f: "RemoveFromWishlistIconClick (removeFromWishList)",
          p: encodedCombinedValue,
        }
  
        await CommonAPI(body).then(async(res)=>{
          // console.log("responsePlist",res?.Data?.rd[0]?.msg === "success");
          if(res?.Data?.rd[0]?.stat_msg === "success"){
            // removefromCart()
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
            // removefromCart(prod)
          }
      })

      }



    } 
    catch(error){
      console.log("error",error);
    }
    // console.log("productsWish",prod)
    // prod["checkFlag"] = event.target.checked
  }




const handelCartList = async(event,prod)=>{

    try{
      setCartFlag(event.target.checked)

      if(event.target.checked === true){
        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
      const UserEmail = localStorage.getItem("registerEmail")
      const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));
  
      const product =  prod 

      let isWishHasCartData = WishData?.filter((pd)=> product.autocode===pd.autocode)
      console.log("isWishHasCartData",isWishHasCartData)

      let wishToCartEncData = {"autocodelist":`${isWishHasCartData[0]?.autocode}`,"ischeckall":0,"FrontEnd_RegNo":`${storeInit?.FrontEnd_RegNo}`,"Customerid":`${Customer_id?.id}`} 
      

  
      const finalJSON = {
          "stockweb_event": "",
          "designno": `${product?.designno}`,
          "autocode": `${product?.autocode}`,
          "imgrandomno": `${product?.imgrandomno}`,
          "producttypeid": `${product?.Producttypeid}`,
          "metaltypeid": `${product?.MetalTypeid}`,
          "metalcolorid": `${product?.MetalColorid}`,
          "stockno": "",
          "DQuality": `${product?.diamondquality.split(",")[0]}`,
          "DColor":`${product?.diamondcolorname}`,
          "cmboMetalType": `${product?.MetalTypeName} ${product?.MetalPurity}`,
          "AdditionalValWt":Number(`${product?.AdditionalValWt}`),
          "BrandName":`${product?.BrandName ?? ""}`,
          "Brandid":Number(`${product?.Brandid}`),
          "CategoryName":`${product?.CategoryName}`,
          "Categoryid":Number(`${product?.Categoryid}`),
          "CenterStoneId":Number(`${product?.CenterStoneId}`),
          "CenterStonePieces":Number(`${product?.CenterStonePieces}`),
          "CollectionName":`${product?.CollectionName}`,
          "Collectionid":Number(`${product?.Collectionid}`),
          "ColorWiseRollOverImageName":`${product?.ColorWiseRollOverImageName}`,
          "DefaultImageName":`${product?.DefaultImageName}`,
          "DisplayOrder":Number(`${product?.DisplayOrder}`),
          "FrontEnd_OrderCnt":Number(`${product?.FrontEnd_OrderCnt}`),
          "GenderName":`${product?.GenderName}`,
          "Genderid":Number(`${product?.Genderid}`),
          "Grossweight":Number(`${product?.Grossweight}`),
          "InReadyStockCnt":Number(`${product?.InReadyStockCnt}`),
          "IsBestSeller":Number(`${product?.IsBestSeller}`),
          "IsColorWiseImageExists":`${product?.IsColorWiseImageExists ?? 0}`,
          "IsInReadyStock":Number(`${product?.IsInReadyStock}`),
          "IsNewArrival":`${product?.IsNewArrival}`,
          "IsRollOverColorWiseImageExists":`${product?.IsRollOverColorWiseImageExists}`,
          "IsTrending":Number(`${product?.IsTrending}`),
          "MasterManagement_labid":Number(`${product?.MasterManagement_labid}`),
          "MasterManagement_labname": "",
          "MetalColorName": `${product?.MetalColorName}`,
          "MetalColorid": Number(`${product?.MetalColorid}`),
          "MetalPurity": `${product?.MetalPurity}`,
          "MetalPurityid": Number(`${product?.MetalTypeid}`),
          "MetalTypeName": `${product?.MetalTypeName}`,
          "MetalTypeid": Number(`${product?.IsInReadyStock}`),
          "MetalWeight": Number(`${product?.MetalWeight}`),
          "OcassionName": `${product?.OcassionName ?? ""}`,
          "Ocassionid": Number(`${product?.Ocassionid}`),
          "ProducttypeName":`${product?.ProducttypeName}`,
          "Producttypeid": Number(`${product?.Producttypeid}`),
          "RollOverImageName":`${product?.RollOverImageName}`,
          "SubCategoryName":`${product?.SubCategoryName ?? ""}`,
          "SubCategoryid":Number(`${product?.SubCategoryid}`),
          "ThemeName":`${product?.ThemeName ?? ""}`,
          "Themeid":Number(`${product?.Themeid}`),
          "TitleLine":`${product?.TitleLine}`,
          "UnitCost": Number(`${product?.UnitCost}`),
          "UnitCostWithmarkup":Number( `${product?.UnitCostWithmarkup}`),
          "colorstonecolorname": `${product?.colorstonecolorname}`,
          "colorstonequality": `${product?.colorstonequality}`,
          "diamondcolorname": `${product?.diamondcolorname}`,
          "diamondpcs":Number(`${product?.diamondpcs}`),
          "diamondquality":`${product?.diamondquality.split(",")[0]}`,
          "diamondsetting":`${product?.diamondsetting}`,
          "diamondshape": `${product?.diamondshape}`,
          "diamondweight": Number(`${product?.diamondweight}`),
          "encrypted_designno":`${product?.encrypted_designno}`,
          "hashtagid":`${product?.hashtagid}`,
          "hashtagname": `${product?.hashtagname}`,
          "imagepath": `${product?.imagepath}`,
          "mediumimage":`${product?.mediumimage ?? ""}`,
          "originalimage":`${product?.originalimage}`,
          "storyline_html": `${product?.storyline_html}`,
          "storyline_video": `${product?.storyline_video}`,
          "thumbimage":`${product?.thumbimage}`,
          "totaladditionalvalueweight":Number(`${product?.totaladditionalvalueweight}`),
          "totalcolorstoneweight": Number(`${product?.totalcolorstoneweight}`),
          "totaldiamondweight": Number(`${product?.totaldiamondweight}`),
          "updatedate": `${product?.updatedate}`,
          "videoname":`${product?.videoname ?? ""}`,
          "FrontEnd_RegNo":`${storeInit?.FrontEnd_RegNo}`,
          "Customerid": `${Customer_id?.id}`,
          "PriceMastersetid": `${product?.PriceMastersetid ?? ""}`,
          "quantity": `${product?.quantity ?? "1"}`
      }

      const encodedCombinedValue =  btoa(JSON.stringify(finalJSON));
      const wishToCartEncData1 =  btoa(JSON.stringify(wishToCartEncData));

      const body = {
        con: `{\"id\":\"\",\"mode\":\"ADDTOCART\",\"appuserid\":\"${UserEmail}\"}`,
        f: "AddToCartIconClick (addcartlist)",
        p: encodedCombinedValue,
      };

      let body1 = {
        con:`{\"id\":\"Store\",\"mode\":\"addwishlisttocart\",\"appuserid\":\"${UserEmail}\"}`,
        f:"iconclick (addwishlisttocart)",
        p: wishToCartEncData1
      }

  
      
      
      await CommonAPI(isWishHasCartData.length? body1 : body).then(async(res)=>{
          // console.log("responsePlist",res?.Data?.rd[0]?.msg === "success");
          if(!isWishHasCartData.length && res?.Data?.rd[0]?.msg === "success"){
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
            // prod.checkFlag=false
          }

          if(isWishHasCartData.length && res?.Data?.rd[0]?.stat_msg === "success"){
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
          }
      })

      // let isWishHasCartData = WishData?.filter((wd)=> wd.autocode === prod.autocode)
      //  console.log("isWishHasCartData",isWishHasCartData)

    }
    else{
      const storeInit = JSON.parse(localStorage.getItem("storeInit"))
      const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));
      const UserEmail = localStorage.getItem("registerEmail")
      
      setCartRemoveData(prod.designno)

      let Data = {"designno":`${prod?.designno}`,"autocode":`${prod?.autocode}`,"metalcolorid":0,"isSolStockNo":0,"is_show_stock_website":"0","isdelete_all":0,"FrontEnd_RegNo":`${storeInit?.FrontEnd_RegNo}`,"Customerid":`${Customer_id?.id}`,"cartidlist":""}

      let encodedCombinedValue = btoa(JSON.stringify(Data))
      const body = {
        con: `{\"id\":\"\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${UserEmail}\"}`,
        f: "RemoveFromCartIconClick (removeFromCartList)",
        p: encodedCombinedValue,
      }

      await CommonAPI(body).then(async(res)=>{
        // console.log("responsePlist",res?.Data?.rd[0]?.msg === "success");
        if(res?.Data?.rd[0]?.stat_msg === "success"){
          // removefromCart()
          await getCartAndWishListData()
          // await getCountApi()
          getCountFunc()
          // removefromCart(prod)
        }
    })

    }

    }
    catch(error){
      console.log("error",error);
    }
    
}



  return (
    <div>
      <div
        style={{
          backgroundColor: "#c0bbb1",
          height: "100%",
          width: "100%",
          paddingBottom: "100px",

        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: '110px'
          }}
        >
          <div className="smilingProductMain" id="smilingProductMain">
            <div
              className="smilingProductSubMain"
              style={{ width: "100%", display: "flex" }}
            >
              <div
                style={{
                  width: "20%",
                  margin: "0px 100px 0px 0px",
                  padding: "100px 0px 40px 50px",
                }}
                className="smilingWebProductListSideBar"
              >
                <ul>
                  <li className="finejwelery" id="finejwelery">Filters</li>
                  {/* <li className="finejli">Rings</li>
                  <li className="finejli">Necklaces</li>
                  <li className="finejli">Earrings</li>
                  <li className="finejli">Bracelets</li>
                  <li className="finejli">All</li> */}
                </ul>
                {/* <hr
                  style={{
                    width: "239px",
                    // marginTop: "30px",
                    marginLeft: "30px",
                  }}
                /> */}
                <div>
                  {NewFilterData().map((ele, index) => (
                    <Accordion
                      elevation={0}
                      sx={{
                        borderBottom: "1px solid #c7c8c9",
                        borderRadius: 0,
                        marginLeft: "28px",
                        "&.Mui-expanded": {
                          marginLeft: "28px",
                        },
                        "&.MuiPaper-root.MuiAccordion-root:last-of-type": {
                          borderBottomLeftRadius: "0px",
                          borderBottomRightRadius: "0px",
                        },
                        "&.MuiPaper-root.MuiAccordion-root:before": {
                          background: "none",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ width: "20px" }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                          color: "#7f7d85",
                          borderRadius: 0,

                          "&.MuiAccordionSummary-root": {
                            padding: 0,
                          },
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "TT Commons, sans-serif",
                            fontSize: "12px",
                            opacity: "0.7",
                          }}
                        >
                          {ele.label}
                        </span>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}
                      >
                        {ele.filterList.map((flist, i) => (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                            key={i}
                          >
                            <Checkbox
                              name={`checkbox${index + 1}${i + 1}`}
                              checked={
                                filterChecked[`checkbox${index + 1}${i + 1}`]
                                  ?.checked
                              }
                              style={{
                                color: "#7f7d85",
                                padding: 0,
                                width: "10px",
                              }}
                              onClick={(e) =>
                                handleCheckboxChange(e, ele, flist)
                              }
                              size="small"
                            />
                            <small
                              style={{
                                fontFamily: "TT Commons, sans-serif",
                                color: "#7f7d85",
                                textTransform: "lowercase",
                              }}
                            >
                              {flist}
                            </small>
                          </div>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              </div>
              <div className="smilingMobileProductListSideBar"> 
                <div onClick={toggleDeatilList} style={{ padding: "15px" }}>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#7d7f85",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    CATEGORY<span>{isOpenDetail ? "-" : "+"}</span>
                  </p>

                  <ul
                    className={`smilingProductCategory ${
                      isOpenDetail ? "open" : ""
                    }`}
                  >
                    <li className="finejwelery">fine Jewelry</li>
                    <li className="finejli">Rings</li>
                    <li className="finejli">Necklaces</li>
                    <li className="finejli">Earrings</li>
                    <li className="finejli">Bracelets</li>
                    <li className="finejli">All</li>
                  </ul>
                </div>
                <hr style={{ marginTop: "-25px" }} />
                <div style={{ display: "flex", marginInline: "15px" }}>
                  <div style={{ width: "49%" }} onClick={toggleDrawerOverlay}>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#7d7f85",
                        fontSize: "13px",
                        fontWeight: 500,
                        margin: "0px",
                      }}
                    >
                      FILTER<span>{isOpenDetail ? "-" : "+"}</span>
                    </p>
                  </div>
                  <hr
                    style={{
                      border: "none",
                      marginBottom: "0px",
                      marginInline: "5px",
                      borderLeft: "1px solid black",
                      height: "50px",
                      marginTop: "-16px",
                    }}
                  />
                  <div
                    style={{
                      width: "49%",
                      display: "flex",
                      marginTop: "-15px",
                      alignItems: "center",
                    }}
                  >
                    <select
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        fontSize: "13px ",
                      }}
                    >
                      <option>RECOMMENDED</option>
                      <option>PRICE HIGH TO LOW</option>
                      <option>PRICE LOW TO HIGH</option>
                    </select>
                    <p style={{ margin: "0px" }}>+</p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "40px 50px 0px 0px",
                }}
                className="smilingProductImageMain"
                id="smilingProductImageMain"
              >
                <div
                  style={{
                    width: "100%",
                    // border: "1px solid #e1e1e1",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {finalDataOfDisplaying()?.map((products, i) => (
                    <div
                      style={{
                        width: "33.33%",
                        border: "1px solid #e1e1e1",
                        textAlign: "center",
                        color: "#7d7f85",
                        position: "relative",
                        zIndex:0
                      }}
                      className="smilingProductImageBox"
                      
                    >
                      <div onClick={() => handelProductSubmit(products)}>
                        <img
                          className="prod_img"
                          // onMouseEnter={() => {
                          //   setIsHovered(true);
                          //   setHoveredID(products.id);
                          // }}
                          // onMouseLeave={() => setIsHovered(false)}
                          // src={products.imagepath + products.mediumimage.split(",")[isHovered && HoveredID === products.id ? 1 : 0    ]}
                          src={
                            products.imagepath +
                            products.mediumimage.split(",")[0]
                          }
                          // style={{
                          //   backgroundImage: `url(${
                          //     products.imagepath +
                          //     products.mediumimage.split(",")[0]
                          //   })`,
                          //   "&:hover": {
                          //     backgroundImage: `url(${
                          //       products.imagepath +
                          //       products.mediumimage.split(",")[1]
                          //     })`,
                          //   },
                          // }}
                        />
                      </div>
                      <div onClick={() => handelProductSubmit(products)}>
                        <p
                          style={{
                            fontSize: "13px",
                            textTransform: "uppercase",
                            fontWeight: "500",
                            cursor:"pointer"
                          }}
                        >
                          {products?.title}
                          {/* <br />
                        R-00363WHT */}
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: "12px" }}>
                          {products?.MetalColorName} / ${products?.price}
                        </p>
                      </div>
                      <div style={{ position: "absolute",zIndex:999999,top:0,right:0,display:'flex'}}>
                        <div>
                          <Checkbox
                            icon={
                              <StarBorderIcon
                                sx={{ fontSize: "22px", color: "#ffd200" }}
                              />
                            }
                            checkedIcon={
                              <StarIcon
                                sx={{ fontSize: "22px", color: "#ffd200" }}
                              />
                            }
                            disableRipple={true}
                            sx={{padding:"5px"}}
                            // onClick={()=>handelWishList(products)}
                            // value={wishFlag}
                            checked={products?.wishCheck}
                            onChange={(e)=>handelWishList(e,products)}
                          />
                       
                        </div>
                        <div>
                          <Checkbox
                            icon={
                              <LocalMallOutlinedIcon
                                sx={{ fontSize: "22px", color: "#ffd200" }}
                              />
                            }
                            checkedIcon={
                              <LocalMallIcon
                                sx={{ fontSize: "22px", color: "#ffd200" }}
                              />
                            }
                            disableRipple={true}
                            sx={{padding:"5px"}}
                            // onClick={()=>}
                            // value={cartFlag}
                            checked={products?.checkFlag}
                            onChange={(e)=>handelCartList(e,products)}
                          />
                        </div>
                      </div>
                      {products?.IsColorWiseImageExists !== null && (
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: "9px",
                              height: "9px",
                              backgroundColor: "#c8c8c8",
                              borderRadius: "50%",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "9px",
                              height: "9px",
                              backgroundColor: "#ffcfbc",
                              borderRadius: "50%",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "9px",
                              height: "9px",
                              backgroundColor: "#e0be77",
                              borderRadius: "50%",
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* <div
                    style={{
                      width: "33.33%",
                      border: "1px solid #e1e1e1",
                      textAlign: "center",
                      color: "#7d7f85",
                    }}
                    className="smilingProductImageBox"
                  >
                    <div className="prod_img"></div>
                    <div>
                      <p
                        style={{
                          fontSize: "13px",
                          textTransform: "uppercase",
                          fontWeight: "500",
                        }}
                      >
                        Drizzle 0.51ct Lab Grown Diamond Ring
                        <br />
                        R-00363WHT
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "12px" }}>White Gold / $1125.00</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#c8c8c8",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#ffcfbc",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#e0be77",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "33.33%",
                      border: "1px solid #e1e1e1",
                      textAlign: "center",
                      color: "#7d7f85",
                    }}
                    className="smilingProductImageBox"
                  >
                    <div className="prod_img"></div>
                    <div>
                      <p
                        style={{
                          fontSize: "13px",
                          textTransform: "uppercase",
                          fontWeight: "500",
                        }}
                      >
                        Drizzle 0.51ct Lab Grown Diamond Ring
                        <br />
                        R-00363WHT
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "12px" }}>White Gold / $1125.00</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#c8c8c8",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#ffcfbc",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#e0be77",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <SmilingRock />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

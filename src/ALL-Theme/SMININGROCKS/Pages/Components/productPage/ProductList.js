import React, { useCallback, useEffect, useState } from "react";
import Footer from "../home/Footer/Footer";
import SmilingRock from "../home/smiling_Rock/SmilingRock";
import "./product.css";
import { json, useLocation, useNavigate } from "react-router-dom";
import prodListData from "../../jsonFile/Productlist_4_95oztttesi0o50vr.json";
// import prodListData from "../../jsonFile/testingFile/Productlist_4_95oztttesi0o50vr_Original.json";
import filterData from "../../jsonFile/M_4_95oztttesi0o50vr.json";
import PriceData from "../../jsonFile/Productlist_4_95oztttesi0o50vr_8.json";
// import PriceData from "../../jsonFile/testingFile/Productlist_4_95oztttesi0o50vr_8_Original.json";
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Slider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { CommonAPI } from "../../../Utils/API/CommonAPI";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CartListCounts, HeaderData, HeaderData2, WishListCounts, productDataNew } from "../../../../../Recoil/atom";
import { GetCount } from "../../../Utils/API/GetCount";
import memoizeOne from 'memoize-one';



function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;


const ProductList = () => {

  const ProductData2=[];

  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [ProductApiData, setProductApiData] = useState([])
  const [ProductApiData2, setProductApiData2] = useState([])
  const [drawerShowOverlay, setDrawerShowOverlay] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);
  // const [HoveredID, setHoveredID] = useState();
  const [filterChecked, setFilterChecked] = useState({});
  const [wishFlag, setWishFlag] = useState(false)
  const [cartFlag, setCartFlag] = useState(false)
  const [cartData, setCartData] = useState([]);
  const [WishData, setWishData] = useState([]);
  const [cartRemoveData, setCartRemoveData] = useState("");
  const [wishListRemoveData, setWishListRemoveData] = useState("");
  const [newProData, setNewProData] = useState([]);
  const [priceDataApi,setpriceDataApi] = useState([]);
  const [currencySym,setCurrencySym] = useState();

  const setCartCount = useSetRecoilState(CartListCounts)
  const setWishCount = useSetRecoilState(WishListCounts)
  const getHeaderData = useRecoilValue(HeaderData)
  const getHeaderData2 = useRecoilValue(HeaderData2)

  const navigate = useNavigate();
  const location = useLocation();

  const getPdData = useRecoilValue(productDataNew)


  // useEffect(()=>{
  //   const data = JSON.parse(localStorage.getItem("allproductlist"))
  //   let loginUserDetail = JSON.parse(localStorage.getItem('loginUserDetail')) 

  //   // setTimeout(()=>{
  //     data?.map((product) => {
  
  //         const newPriceData = priceDataApi.rd?.find(
  //           (pda) => 
  //             pda.A === product.autocode && 
  //             pda.B === product.designno &&
  //             pda.D === loginUserDetail?.cmboMetalType 
  //         )
      
  //         const newPriceData1 = priceDataApi.rd1?.find(
  //           (pda) => 
  //             pda.A === product.autocode && 
  //             pda.B === product.designno && 
  //             pda.H === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[0] &&
  //             pda.J === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[1]
  //         )
      
  //         const newPriceData2 = priceDataApi.rd2?.find(
  //           (pda) => 
  //             pda.A === product.autocode && 
  //             pda.B === product.designno && 
  //             pda.H === loginUserDetail?.cmboCSQualityColor?.split('#@#')[0] &&
  //             pda.J === loginUserDetail?.cmboCSQualityColor?.split('#@#')[1]
      
  //         )

  //         console.log("priceList",{newPriceData,newPriceData1,newPriceData2})
      
  //         if (newPriceData || newPriceData1 || newPriceData2) {
  //           product['price'] = (newPriceData?.Z ?? 0) + (newPriceData1?.S ?? 0) + (newPriceData2?.S ?? 0)
  //         } else {
  //           product['price'] = "Not Availabel";
  //         }
          
  //       });

  //       localStorage.setItem("allproductlist",JSON?.stringify(data))
  //       setProductApiData2(data)
  //       console.log("END");
  //   // },1000)



  // },[])

  useEffect(() => {
    const fetchData = async () => {
        const data = JSON.parse(localStorage.getItem("allproductlist"));
        const loginUserDetail = JSON.parse(localStorage.getItem('loginUserDetail'));

        const updatedData = await Promise.all(data.map(async (product) => {
            const newPriceData = priceDataApi.rd?.find(
                (pda) =>
                    pda.A === product.autocode &&
                    pda.B === product.designno &&
                    pda.D === loginUserDetail?.cmboMetalType
            );

            const newPriceData1 = priceDataApi.rd1?.find(
                (pda) =>
                    pda.A === product.autocode &&
                    pda.B === product.designno &&
                    pda.H === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[0] &&
                    pda.J === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[1]
            );

            const newPriceData2 = priceDataApi.rd2?.find(
                (pda) =>
                    pda.A === product.autocode &&
                    pda.B === product.designno &&
                    pda.H === loginUserDetail?.cmboCSQualityColor?.split('#@#')[0] &&
                    pda.J === loginUserDetail?.cmboCSQualityColor?.split('#@#')[1]
            );


            let price="Not Available";
            let isLoading = true;

            if (newPriceData || newPriceData1 || newPriceData2) {
                price = (newPriceData?.Z ?? 0) + (newPriceData1?.S ?? 0) + (newPriceData2?.S ?? 0);
                isLoading = false;
            }
            else{
                // price = " " ;
                isLoading = false;
            }

            console.log("priceList", price);
          

            return { ...product, price ,isLoading };
        }));

        localStorage.setItem("allproductlist", JSON.stringify(updatedData));
        setProductApiData2(updatedData);
        console.log("END");
    };

    fetchData();
}, [priceDataApi]);










  const toggleDeatilList = () => {
    setIsOpenDetail(!isOpenDetail)
  };

  const getCountFunc = async () => {

    await GetCount().then((res) => {
      if (res) {
        setCartCount(res.CountCart)
        setWishCount(res.WishCount)
      }
    })

  }
  
  const fetchFile = async () => {

    let storeinit = JSON.parse(localStorage.getItem("storeInit"))
    let loginInfo = JSON.parse(localStorage.getItem("loginUserDetail"))

    await axios.get(
      `https://${storeinit?.domain}/assets/${storeinit?.FrontEnd_RegNo}/Store_Data/Productlist/Productlist_${loginInfo?.PackageId}_${storeinit?.FrontEnd_RegNo}.txt`
    ).then(
      (res) => {
        setProductApiData(res?.data)
      })
      .catch((err) => console.log("err", err))
  };

  useEffect(() => {
    
    let Symbol = JSON.parse(localStorage.getItem('CURRENCYCOMBO'))
    setCurrencySym(Symbol)

    fetchFile()
  }, [])

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

  // if(location.state){
  //   console.log("location",location.state.param1.value1)
  //   // if(location.state.param1.label1 ==="collection"){
  //     const data = productData.filter((pd)=> pd?.CollectionName === "AURORA")
  //     console.log("data",data)
  //   // }
  // }

  // if (location.state && location.state.param1 && location.state.param1.value1) {
  //   console.log("location", location.state.param1.value1);
  // }

  // const data = productData.filter((pd) => pd && pd.CollectionName === "AURORA");



  useEffect(() => {
    const element = document.getElementById("top")
    element.scrollIntoView()
  }, []);






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
        (mt) => mt.MetalTypeid === product.MetalTypeid
      )
      const OcassionType = filterData.OcassionList.find(
        (ocs) => ocs.Ocassionid === product.Ocassionid
      )
      const SubCategoryType = filterData.SubCategoryList.find(
        (sct) => sct.SubCategoryid === product.SubCategoryid
      )
      const ThemeType = filterData.ThemeList.find(
        (tl) => tl.Themeid === product.Themeid
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
      if (Berandtype) {
        product.BrandName = Berandtype.BrandName
      }
      if (MetalType) {
        product.MetalTypeName = MetalType.MetalTypeName
      }
      if (OcassionType) {
        product.OcassionName = OcassionType.OcassionName
      }
      if (SubCategoryType) {
        product.SubCategoryName = SubCategoryType.SubCategoryName
      }
      if (ThemeType) {
        product.ThemeName = ThemeType.ThemeName
      }
    });

    return productData;
  }


  const diffCartData = useCallback(() => {

    // let pdata;

    productData.forEach((pd) => {
      const pdata = cartData.find((cd) => pd.designno === cd.DesignNo)



      if (pdata && !pd?.checkFlag) {
        pd.checkFlag = true
      }
      else {
        pd.checkFlag = false
      }
    })


    return productData

  }, [productData, cartData])

  diffCartData()

  const diffWishData = useCallback(() => {

    productData.forEach((pd) => {
      const pdata = WishData.find((cd) => pd.designno === cd.DesignNo)


      if (pdata && !pd?.wishCheck) {
        pd.wishCheck = true
      }
      else {
        pd.wishCheck = false
      }
    })


    return productData

  }, [productData, WishData])


  diffWishData()

  const removefromCart = () => {
    productData.map((pd) => {


      if (cartRemoveData && pd.designno === cartRemoveData) {
        pd.checkFlag = false
      }

      if (wishListRemoveData && pd.designno === wishListRemoveData) {
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


 

  // ProductApiData2?.map((product) => {
  //     console.log("product",product);

  //    let loginUserDetail = JSON.parse(localStorage.getItem('loginUserDetail')) 

  //   const newPriceData = priceDataApi.rd?.find(
  //     (pda) => 
  //       pda.A === product.autocode && 
  //       pda.B === product.designno &&
  //       pda.D === loginUserDetail?.cmboMetalType 
  //   )

  //   const newPriceData1 = priceDataApi.rd1?.find(
  //     (pda) => 
  //       pda.A === product.autocode && 
  //       pda.B === product.designno && 
  //       pda.H === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[0] &&
  //       pda.J === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[1]
  //   )

  //   const newPriceData2 = priceDataApi.rd2?.find(
  //     (pda) => 
  //       pda.A === product.autocode && 
  //       pda.B === product.designno && 
  //       pda.H === loginUserDetail?.cmboCSQualityColor?.split('#@#')[0] &&
  //       pda.J === loginUserDetail?.cmboCSQualityColor?.split('#@#')[1]

  //   )



  //   if (newPriceData || newPriceData1 || newPriceData2) {
  //     product['price'] = (newPriceData?.Z ?? 0) + (newPriceData1?.S ?? 0) + (newPriceData2?.S ?? 0)
  //   } else {
  //     product['price'] = "Not Availabel";
  //   }
    
    
  
  // });

  //     localStorage.setItem("allproductlist",JSON?.stringify(product))
  //     setProductApiData2(product)


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


  // console.log("productData",productData);


  const NewFilterData = () => {
    const newFilter = [];
    filterData.SideMenuList.forEach((ele) => {
      if (ele.Fno === '1') {
        newFilter.push({ label: "CATEGORY", filterList: filterData.CategoryList?.map((ele) => { return ele.CategoryName }), listType: 'CategoryName' });
      } else if (ele.Fno === '2') {
        newFilter.push({ label: "PRODUCT TYPE", filterList: filterData.ProductTypeList?.map((ele) => { return ele.ProducttypeName }), listType: 'ProducttypeName' });
      } else if (ele.Fno === '8') {
        newFilter.push({ label: "GENDER", filterList: filterData.GenderList?.map((ele) => { return ele.GenderName }), listType: 'GenderName' });
      } else if (ele.Fno === '12') {
        newFilter.push({ label: "PRICE", filterList: [] });
      } else if (ele.Fno === '15') {
        newFilter.push({ label: "COLLECTION", filterList: filterData.CollectionList?.map((ele) => { return ele.CollectionName }), listType: 'CollectionName' });
      } else if (ele.Fno === '18') {
        newFilter.push({ label: "CENTERSTONE", filterList: filterData.CenterStoneList?.map((ele) => { return ele?.ColorStoneName }), listType: 'ColorStoneName' });
      }
    });

    return newFilter;
  }


  const handleCheckboxChange = (e, ele, flist) => {
    const { name, checked, value } = e.target;

    setFilterChecked((prev) => ({
      ...prev,
      [name]: { checked, value: flist, type: ele.listType }
    }));
  }

  let NewFilterArr = []
  for (let key in filterChecked) {
    if (filterChecked[key] === 'checked' && filterChecked['checked'] === true) {
      NewFilterArr.push(filterChecked)
    }
  }


  const filteredObjects = Object.entries(filterChecked)
    .filter(([key, value]) => value.checked)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});


  const sepeTypeVal = Object.entries(filteredObjects).map(ele => {
    return { type: ele[1].type, value: ele[1].value }
  })


  const filteredProducts = sepeTypeVal.map((st) => (newProData.length ? newProData : productData).filter((pd) => pd[st.type] === st.value)).reverse()

  console.log("filteredProducts", filteredProducts)



  const mergedArray = [...filteredProducts].reduce((acc, curr) => acc.concat(curr), []);
  const finalDataOfDisplaying = () => {
    if (mergedArray.length && mergedArray) {
      return mergedArray
    }
    else {
      return updateProductsWithMetalColorName()
    }
  }


  const getCartAndWishListData = async () => {

    const UserEmail = localStorage.getItem("registerEmail")
    const storeInit = JSON.parse(localStorage.getItem("storeInit"))
    const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

    let EncodeData = { FrontEnd_RegNo: `${storeInit?.FrontEnd_RegNo}`, Customerid: `${Customer_id?.id}` }

    const encodedCombinedValue = btoa(JSON.stringify(EncodeData));

    const body = {
      "con": `{\"id\":\"Store\",\"mode\":\"getdesignnolist\",\"appuserid\":\"${UserEmail}\"}`,
      "f": " useEffect_login ( getdataofcartandwishlist )",
      "p": encodedCombinedValue
    }

    await CommonAPI(body).then((res) => {
      if (res?.Message === "Success") {
        setCartData(res?.Data?.rd)
        setWishData(res?.Data?.rd1)
      }
    })

  }


  useEffect(() => {

    getCartAndWishListData();
    // getCountApi()
    getCountFunc()

  }, [])



  const handelWishList = async (event, prod) => {

    try {
      setWishFlag(event.target.checked)

      if (event.target.checked === true) {

        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        const product = prod


        const finalJSON = {
          "stockweb_event": "",
          "Mastermanagement_CategorySize": "",
          "sizeamountpersentage": "",
          "stockno": "",
          "is_show_stock_website": "0",
          "cmboDiaQualityColor": "C-VS#@#FG",
          "cmboMetalType": `${product?.MetalTypeName} ${product?.MetalPurity}`,
          "AdditionalValWt": Number(`${product?.AdditionalValWt}`),
          "BrandName": `${product?.BrandName ?? ""}`,
          "Brandid": 5,
          "CategoryName": `${product?.CategoryName}`,
          "Categoryid": Number(`${product?.Categoryid}`),
          "CenterStoneId": Number(`${product?.CenterStoneId}`),
          "CenterStonePieces": Number(`${product?.CenterStonePieces}`),
          "CollectionName": `${product?.CollectionName}`,
          "Collectionid": Number(`${product?.Collectionid}`),
          "ColorWiseRollOverImageName": `${product?.ColorWiseRollOverImageName}`,
          "DefaultImageName": `${product?.DefaultImageName}`,
          "DisplayOrder": Number(`${product?.DisplayOrder}`),
          "FrontEnd_OrderCnt": Number(`${product?.FrontEnd_OrderCnt}`),
          "GenderName": `${product?.GenderName}`,
          "Genderid": Number(`${product?.Genderid}`),
          "Grossweight": Number(`${product?.Grossweight}`),
          "InReadyStockCnt": Number(`${product?.InReadyStockCnt}`),
          "IsBestSeller": Number(`${product?.IsBestSeller}`),
          "IsColorWiseImageExists": `${product?.IsColorWiseImageExists}`,
          "IsInReadyStock": Number(`${product?.IsInReadyStock}`),
          "IsNewArrival": `${product?.IsNewArrival}`,
          "IsRollOverColorWiseImageExists": `${product?.IsRollOverColorWiseImageExists}`,
          "IsTrending": Number(`${product?.IsTrending}`),
          "MasterManagement_labid": Number(`${product?.MasterManagement_labid}`),
          "MasterManagement_labname": "",
          "MetalColorName": `${product?.MetalColorName}`,
          "MetalColorid": Number(`${product?.MetalColorid}`),
          "MetalPurity": `${product?.MetalPurity}`,
          "MetalPurityid": Number(`${product?.MetalTypeid}`),
          "MetalTypeName": `${product?.MetalTypeName ?? ""}`,
          "MetalTypeid": Number(`${product?.IsInReadyStock}`),
          "MetalWeight": Number(`${product?.MetalWeight}`),
          "OcassionName": `${product?.OcassionName ?? ""}`,
          "Ocassionid": Number(`${product?.Ocassionid}`),
          "ProducttypeName": `${product?.ProducttypeName}`,
          "Producttypeid": Number(`${product?.Producttypeid}`),
          "RollOverImageName": `${product?.RollOverImageName}`,
          "SubCategoryName": `${product?.SubCategoryName ?? ""}`,
          "SubCategoryid": Number(`${product?.SubCategoryid ?? ""}`),
          "ThemeName": `${product?.ThemeName ?? ""}`,
          "Themeid": Number(`${product?.Themeid}`),
          "TitleLine": `${product?.TitleLine}`,
          "UnitCost": Number(`${product?.UnitCost}`),
          "UnitCostWithmarkup": Number(`${product?.UnitCostWithmarkup}`),
          "autocode": `${product?.autocode}`,
          "colorstonecolorname": `${product?.colorstonecolorname}`,
          "colorstonequality": `${product?.colorstonequality}`,
          "designno": `${product?.designno}`,
          "diamondcolorname": `${product?.diamondcolorname}`,
          "diamondpcs": Number(`${product?.diamondpcs}`),
          "diamondquality": `${product?.diamondquality?.split(",")[0]}`,
          "diamondsetting": `${product?.diamondsetting}`,
          "diamondshape": `${product?.diamondshape}`,
          "diamondweight": Number(`${product?.diamondweight}`),
          "encrypted_designno": `${product?.encrypted_designno}`,
          "hashtagid": `${product?.hashtagid}`,
          "hashtagname": `${product?.hashtagname}`,
          "imagepath": `${product?.imagepath}`,
          "imgrandomno": `${product?.imgrandomno}`,
          "mediumimage": `${product?.mediumimage ?? ""}`,
          "originalimage": `${product?.originalimage}`,
          "storyline_html": `${product?.storyline_html}`,
          "storyline_video": `${product?.storyline_video}`,
          "thumbimage": `${product?.thumbimage}`,
          "totaladditionalvalueweight": 0,
          "totalcolorstoneweight": Number(`${product?.totalcolorstoneweight}`),
          "totaldiamondweight": Number(`${product?.totaldiamondweight}`),
          "updatedate": `${product?.updatedate}`,
          "videoname": `${product?.videoname ?? ""}`,
          "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
          "Customerid": `${Customer_id?.id}`,
          "PriceMastersetid": `${product?.PriceMastersetid ?? ""}`,
          "DQuality": `${product?.diamondquality?.split(",")[0]}`,
          "DColor": `${product?.diamondcolorname}`,
          "UploadLogicalPath": `${product?.UploadLogicalPath ?? ""}`,
          "ukey": `${storeInit?.ukey}`
        }


        const encodedCombinedValue = btoa(JSON.stringify(finalJSON));

        const body = {
          con: `{\"id\":\"\",\"mode\":\"addwishlist\",\"appuserid\":\"${UserEmail}\"}`,
          f: "AddToWishListIconClick (addwishlist)",
          p: encodedCombinedValue,
        };

        await CommonAPI(body).then(async (res) => {

          if (res?.Data?.rd[0]?.msg === "success") {


            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()

          }
        })
      }
      else {
        // {"designlist":"'MCJ10'","isselectall":"0","FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}


        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));


        setWishListRemoveData(prod.designno)


        let Data = { "designlist": `'${prod?.designno}'`, "isselectall": "0", "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}` }

        let encodedCombinedValue = btoa(JSON.stringify(Data))
        const body = {
          con: `{\"id\":\"\",\"mode\":\"removeFromWishList\",\"appuserid\":\"${UserEmail}\"}`,
          f: "RemoveFromWishlistIconClick (removeFromWishList)",
          p: encodedCombinedValue,
        }

        await CommonAPI(body).then(async (res) => {
          // console.log("responsePlist",res?.Data?.rd[0]?.msg === "success");
          if (res?.Data?.rd[0]?.stat_msg === "success") {
            // removefromCart()
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
            // removefromCart(prod)
          }
        })

      }



    }
    catch (error) {
      console.log("error", error);
    }
    // console.log("productsWish",prod)
    // prod["checkFlag"] = event.target.checked
  }

  const handelCartList = async (event, prod) => {

    try {
      setCartFlag(event.target.checked)

      if (event.target.checked === true) {
        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        const product = prod

        let isWishHasCartData = WishData?.filter((pd) => product.autocode === pd.autocode)
        // console.log("isWishHasCartData", isWishHasCartData)

        let wishToCartEncData = { "autocodelist": `${isWishHasCartData[0]?.autocode}`, "ischeckall": 0, "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}` }



        const finalJSON = {
          "stockweb_event": "",
          "designno": `${product?.designno}`,
          "autocode": `${product?.autocode}`,
          "imgrandomno": `${product?.imgrandomno}`,
          "producttypeid": `${product?.Producttypeid}`,
          "metaltypeid": `${product?.MetalTypeid}`,
          "metalcolorid": `${product?.MetalColorid}`,
          "stockno": "",
          "DQuality": `${product?.diamondquality?.split(",")[0]}`,
          "DColor": `${product?.diamondcolorname}`,
          "cmboMetalType": `${product?.MetalTypeName} ${product?.MetalPurity}`,
          "AdditionalValWt": Number(`${product?.AdditionalValWt}`),
          "BrandName": `${product?.BrandName ?? ""}`,
          "Brandid": Number(`${product?.Brandid}`),
          "CategoryName": `${product?.CategoryName}`,
          "Categoryid": Number(`${product?.Categoryid}`),
          "CenterStoneId": Number(`${product?.CenterStoneId}`),
          "CenterStonePieces": Number(`${product?.CenterStonePieces}`),
          "CollectionName": `${product?.CollectionName}`,
          "Collectionid": Number(`${product?.Collectionid}`),
          "ColorWiseRollOverImageName": `${product?.ColorWiseRollOverImageName}`,
          "DefaultImageName": `${product?.DefaultImageName}`,
          "DisplayOrder": Number(`${product?.DisplayOrder}`),
          "FrontEnd_OrderCnt": Number(`${product?.FrontEnd_OrderCnt}`),
          "GenderName": `${product?.GenderName}`,
          "Genderid": Number(`${product?.Genderid}`),
          "Grossweight": Number(`${product?.Grossweight}`),
          "InReadyStockCnt": Number(`${product?.InReadyStockCnt}`),
          "IsBestSeller": Number(`${product?.IsBestSeller}`),
          "IsColorWiseImageExists": `${product?.IsColorWiseImageExists ?? 0}`,
          "IsInReadyStock": Number(`${product?.IsInReadyStock}`),
          "IsNewArrival": `${product?.IsNewArrival}`,
          "IsRollOverColorWiseImageExists": `${product?.IsRollOverColorWiseImageExists}`,
          "IsTrending": Number(`${product?.IsTrending}`),
          "MasterManagement_labid": Number(`${product?.MasterManagement_labid}`),
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
          "ProducttypeName": `${product?.ProducttypeName}`,
          "Producttypeid": Number(`${product?.Producttypeid}`),
          "RollOverImageName": `${product?.RollOverImageName}`,
          "SubCategoryName": `${product?.SubCategoryName ?? ""}`,
          "SubCategoryid": Number(`${product?.SubCategoryid}`),
          "ThemeName": `${product?.ThemeName ?? ""}`,
          "Themeid": Number(`${product?.Themeid}`),
          "TitleLine": `${product?.TitleLine}`,
          "UnitCost": Number(`${product?.UnitCost}`),
          "UnitCostWithmarkup": Number(`${product?.UnitCostWithmarkup}`),
          "colorstonecolorname": `${product?.colorstonecolorname}`,
          "colorstonequality": `${product?.colorstonequality}`,
          "diamondcolorname": `${product?.diamondcolorname}`,
          "diamondpcs": Number(`${product?.diamondpcs}`),
          "diamondquality": `${product?.diamondquality?.split(",")[0]}`,
          "diamondsetting": `${product?.diamondsetting}`,
          "diamondshape": `${product?.diamondshape}`,
          "diamondweight": Number(`${product?.diamondweight}`),
          "encrypted_designno": `${product?.encrypted_designno}`,
          "hashtagid": `${product?.hashtagid}`,
          "hashtagname": `${product?.hashtagname}`,
          "imagepath": `${product?.imagepath}`,
          "mediumimage": `${product?.mediumimage ?? ""}`,
          "originalimage": `${product?.originalimage}`,
          "storyline_html": `${product?.storyline_html}`,
          "storyline_video": `${product?.storyline_video}`,
          "thumbimage": `${product?.thumbimage}`,
          "totaladditionalvalueweight": Number(`${product?.totaladditionalvalueweight}`),
          "totalcolorstoneweight": Number(`${product?.totalcolorstoneweight}`),
          "totaldiamondweight": Number(`${product?.totaldiamondweight}`),
          "updatedate": `${product?.updatedate}`,
          "videoname": `${product?.videoname ?? ""}`,
          "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
          "Customerid": `${Customer_id?.id}`,
          "PriceMastersetid": `${product?.PriceMastersetid ?? ""}`,
          "quantity": `${product?.quantity ?? "1"}`
        }

        const encodedCombinedValue = btoa(JSON.stringify(finalJSON));
        const wishToCartEncData1 = btoa(JSON.stringify(wishToCartEncData));

        const body = {
          con: `{\"id\":\"\",\"mode\":\"ADDTOCART\",\"appuserid\":\"${UserEmail}\"}`,
          f: "AddToCartIconClick (addcartlist)",
          p: encodedCombinedValue,
        };

        let body1 = {
          con: `{\"id\":\"Store\",\"mode\":\"addwishlisttocart\",\"appuserid\":\"${UserEmail}\"}`,
          f: "iconclick (addwishlisttocart)",
          p: wishToCartEncData1
        }




        await CommonAPI(isWishHasCartData.length ? body1 : body).then(async (res) => {
          // console.log("responsePlist",res?.Data?.rd[0]?.msg === "success");
          if (!isWishHasCartData.length && res?.Data?.rd[0]?.msg === "success") {
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
            // prod.checkFlag=false
          }

          if (isWishHasCartData.length && res?.Data?.rd[0]?.stat_msg === "success") {
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
          }
        })

        // let isWishHasCartData = WishData?.filter((wd)=> wd.autocode === prod.autocode)
        //  console.log("isWishHasCartData",isWishHasCartData)

      }
      else {
        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));
        const UserEmail = localStorage.getItem("registerEmail")

        setCartRemoveData(prod.designno)

        let Data = { "designno": `${prod?.designno}`, "autocode": `${prod?.autocode}`, "metalcolorid": 0, "isSolStockNo": 0, "is_show_stock_website": "0", "isdelete_all": 0, "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}`, "cartidlist": "" }

        let encodedCombinedValue = btoa(JSON.stringify(Data))
        const body = {
          con: `{\"id\":\"\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${UserEmail}\"}`,
          f: "RemoveFromCartIconClick (removeFromCartList)",
          p: encodedCombinedValue,
        }

        await CommonAPI(body).then(async (res) => {
          // console.log("responsePlist",res?.Data?.rd[0]?.msg === "success");
          if (res?.Data?.rd[0]?.stat_msg === "success") {
            // removefromCart()
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
            // removefromCart(prod)
          }
        })

      }

    }
    catch (error) {
      console.log("error", error);
    }

  }

  useEffect(() => {
    let flag = localStorage.getItem('productDataShow') ?? 'true';
    if (newProData.length === 0 && flag === 'true') {
      let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData?.value1)
      setNewProData(data);
      setTimeout(() => {
        localStorage.setItem('productDataShow', 'false')
      }, 100);
    }
  }, [getHeaderData, newProData])


  useEffect(() => {

    console.log('getHeaderData2?.label2getHeaderData2?.label2', getHeaderData2?.label2);

    if (getHeaderData2?.label2 === "brand") {
      console.log('getHeaderData2?.value1', getHeaderData2?.value1);
      console.log('getHeaderData2?.value2', getHeaderData2?.value2);
      console.log('brandbrandbrandbrandbrand', newProData);

      let data = productData.filter((pd) => pd && pd.BrandName === getHeaderData2?.value2)

      console.log('datadatadata', data);
      setNewProData(data);

    }

    if (getHeaderData2?.label2 === "category") {
      console.log('ppppppppppppppppppp', newProData);

      let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData2?.value1 && pd.CategoryName === getHeaderData2?.value2)
      setNewProData(data);
    }
  }, [getHeaderData2])




  const newMenuProdData = () => {
    let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData?.value1)
    setNewProData(data)
  }
  useEffect(() => {
    if (getHeaderData && getHeaderData.value1 && productData) {
      newMenuProdData()
    }

  }, [getHeaderData])





  const [value1, setValue1] = useState([20, 37]);

  const handleChange1 = (
    event,
    newValue,
    activeThumb,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = useState([20, 37]);

  const handleChange2 = (
    event,
    newValue,
    activeThumb,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };


  const getDesignPriceList = async() =>{

    const storeInit = JSON.parse(localStorage.getItem("storeInit"))
    const loginUserDetail = JSON.parse(localStorage.getItem("loginUserDetail"));
    const currencyCombo = JSON.parse(localStorage.getItem("CURRENCYCOMBO"));
    const UserEmail = localStorage.getItem("registerEmail")

    const GetPriceReq = {
                  "CurrencyRate":`${currencyCombo?.CurrencyRate}`,
                  "FrontEnd_RegNo":`${storeInit?.FrontEnd_RegNo}`,
                  "Customerid":`${loginUserDetail?.id}`,
                  "Laboursetid":`${loginUserDetail?.pricemanagement_laboursetid}`,
                  "diamondpricelistname":`${loginUserDetail?.diamondpricelistname}`,
                  "colorstonepricelistname":`${loginUserDetail?.colorstonepricelistname}`,
                  "SettingPriceUniqueNo":`${loginUserDetail?.SettingPriceUniqueNo}`,
                  "DesignNo":""
                }

                const encodedCombinedValue = btoa(JSON.stringify(GetPriceReq));

                let body ={
                  "con":`{\"id\":\"Store\",\"mode\":\"getdesignpricelist\",\"appuserid\":\"${UserEmail}\"}`,
                  "f":"onloadFirstTime (getdesignpricelist)",
                  "p":encodedCombinedValue
                  }
    
    await CommonAPI(body).then((res) => {
        // console.log("uncommon",res)
        setpriceDataApi(res.Data)
    })

  }
  
  useEffect(()=>{
    getDesignPriceList()
  },[])

  return (
    <div id="top">

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
          className='paddingTopMobileSet'
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
                    <>
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
                          {ele.label === "PRICE" &&
                            <div>
                              <Slider
                                className='netWtSecSlider'
                                getAriaLabel={() => 'Minimum distance'}
                                value={value1}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                              />
                            </div>}

                          {ele.label === "CENTERSTONE" &&
                            <div>
                              <Slider
                                className='netWtSecSlider'
                                getAriaLabel={() => 'Minimum distance'}
                                value={value1}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                              />
                            </div>
                          }

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
                    </>
                  ))}
                </div>
              </div>
              <div className="smilingMobileProductListSideBar">

                <hr style={{ marginTop: "0px" }} />
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
                      onClick={toggleDeatilList}
                    >
                      FILTER<span>{isOpenDetail ? "-" : "+"}</span>
                    </p>
                    {isOpenDetail && <div>
                      {NewFilterData().map((ele, index) => (
                    <>
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
                          {ele.label === "PRICE" &&
                            <div>
                              <Slider
                                className='netWtSecSlider'
                                getAriaLabel={() => 'Minimum distance'}
                                value={value1}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                              />
                            </div>}

                          {ele.label === "CENTERSTONE" &&
                            <div>
                              <Slider
                                className='netWtSecSlider'
                                getAriaLabel={() => 'Minimum distance'}
                                value={value1}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                              />
                            </div>
                          }

                          {ele?.filterList?.map((flist, i) => (
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
                    </>
                  ))}
                    </div>}
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
                  {/* {(newProData.length ? newProData : finalDataOfDisplaying())?.map((products, i) => ( */}
                  {(newProData.length ? newProData : ProductApiData2)?.map((products, i) => (
                    <div
                      style={{
                        width: "33.33%",
                        border: "1px solid #e1e1e1",
                        textAlign: "center",
                        color: "#7d7f85",
                        position: "relative",
                        zIndex: 0,
                      }}
                      className="smilingProductImageBox"

                    >
                      <div onClick={() => handelProductSubmit(products)}>
                        <img
                          className="prod_img"
                        
                          src={
                            products?.imagepath +
                            products?.MediumImagePath?.split(",")[0]
                          }
                       
                        />
                      </div>
                      <div onClick={() => handelProductSubmit(products)}>
                        <p
                          style={{
                            fontSize: "13px",
                            textTransform: "uppercase",
                            fontWeight: "500",
                            cursor: "pointer",
                            textoverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            padding:'0 15px',
                            minHeight:'19.5px'
                          }}
                        >
                          {products?.TitleLine}
                          
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: "12px" }}>
                        
                          {products?.MetalColorName} / {currencySym?.Currencysymbol}{products?.isLoading ? 'loading...' :products?.price}
                        </p>
                      </div>
                      <div style={{ position: "absolute", zIndex: 999999, top: 0, right: 0, display: 'flex' }}>
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
                            sx={{ padding: "5px" }}
                           
                            checked={products?.wishCheck}
                            onChange={(e) => handelWishList(e, products)}
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
                            sx={{ padding: "5px" }}
                          
                            checked={products?.checkFlag}
                            onChange={(e) => handelCartList(e, products)}
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

import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  CircularProgress,
  Dialog,
  Divider,
  Drawer,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Footer from "../../Footer/Footer";
import {
  CartListCounts,
  WishListCounts,
  colorstoneQualityColorG,
  diamondQualityColorG,
  metalTypeG,
  newTestProdData,
  priceData,
} from "../../../../../../../Recoil/atom";
import { GetCount } from "../../../../../Utils/API/GetCount";
import { CommonAPI } from "../../../../../Utils/API/CommonAPI";
import "./CartPage.css";
import { ToastContainer, toast } from "react-toastify";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function CartPage() {
  const [cartListData, setCartListData] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [yKey, setYouKey] = useState("");
  const [customerID, setCustomerID] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isProductCuFlag, setIsProductCuFlag] = useState("");
  const [isMetalCutoMizeFlag, setIsMetalCutoMizeFlag] = useState("");
  const [isDaimondCstoFlag, setIsDaimondCstoFlag] = useState("");
  const [isCColrStoneCustFlag, setIsCColrStoneCustFlag] = useState("");
  const [currency, setCurrency] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [colorData, setColorData] = useState([]);
  const [metalColorData, setMetalColorData] = useState([]);
  const [metalType, setMetalType] = useState([]);
  const [DaimondQualityColor, setDaimondQualityColor] = useState([]);
  const [showDropdowns, setShowDropdowns] = useState(
    Array(cartListData.length).fill(false)
  );
  const [prodSelectData, setProdSelectData] = useState();
  const [sizeOption, setSizeOption] = useState();
  const [metalFilterData, setMetalFilterData] = useState([]);
  const [daimondFilterData, setDaimondFiletrData] = useState([]);
  const [diaQColOpt, setDiaQColOpt] = useRecoilState(diamondQualityColorG);
  const [cSQopt, setCSQOpt] = useRecoilState(colorstoneQualityColorG);
  const [mtTypeOption, setmtTypeOption] = useRecoilState(metalTypeG);

  const [productData, setProductData] = useState();

  const [cartSelectData, setCartSelectData] = useState();
  const [getAllFilterSizeData, setGetAllFilterSizeData] = useState([]);
  const [sizeData, setSizeData] = useState([]);

  const [mtrdData, setMtrdData] = useState([]);
  const [dqcData, setDqcData] = useState();
  const [csqcData, setCsqcData] = useState();
  const [selectedColor, setSelectedColor] = useState()
  const [getPriceData, setGetPriceData] = useState([])

  const [dqcRate, setDqcRate] = useState()
  const [dqcSettRate, setDqcSettRate] = useState()
  const [csqcRate, setCsqcRate] = useState()
  const [csqcSettRate, setCsqcSettRate] = useState()

  const [dialogOpen, setDialogOpen] = useState(false)

  const setCartCount = useSetRecoilState(CartListCounts);
  const setWishCount = useSetRecoilState(WishListCounts);
  //   const getPriceData = useRecoilValue(priceData);
  const getTestProdData = useRecoilValue(newTestProdData);

  useEffect(()=>{
    console.log("getTestProdData",getTestProdData)
  },[getTestProdData])

  const navigation = useNavigate();
  let currencySymbol = JSON.parse(localStorage.getItem('CURRENCYCOMBO'))

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("getPriceData"))
    setGetPriceData(data)
  }, [])

  useEffect(() => {
    if (!cartListData && cartListData.length === 0) {
      setProdSelectData();
      setCartSelectData();
    }
  }, [])

  console.log("dddd",{metalFilterData,daimondFilterData});

  const getCountFunc = async () => {
    await GetCount().then((res) => {
      if (res) {
        setCartCount(res.CountCart);
        setWishCount(res.WishCount);
      }
    });
  };

  useEffect(() => {
    if (cartListData && !cartSelectData) {
      setCartSelectData(cartListData[0]);
      getSizeData(cartListData[0]?.autocode);
    }
  }, [cartListData, cartSelectData]);

    // console.log('getPriceDatagetPriceData', getPriceData);
    console.log('getPriceDatagetPriceData', mtTypeOption);

  // useEffect(() => {
  //   console.log('getPriceDatagetPriceData', getPriceData);
  //   let mtrd = getPriceData?.rd?.filter(
  //     (ele) =>
  //       ele?.A === cartSelectData?.autocode &&
  //       ele?.B === cartSelectData?.designno &&
  //       ele?.D === mtTypeOption
  //   );


  //   if (mtrd && mtrd.length > 0) {
  //     setMtrdData(mtrd[0] ?? []);
  //   }

  //   let diaqcprice = getPriceData?.rd1?.filter(
  //     (ele) =>
  //       ele.A === cartSelectData?.autocode &&
  //       ele.B === cartSelectData?.designno &&
  //       ele.H === diaQColOpt?.split("_")[0] &&
  //       ele.J === diaQColOpt?.split("_")[1]
  //   );

  //   console.log("diaqcprice", diaqcprice)

  //   if (diaqcprice && diaqcprice.length > 0) {
  //     let totalPrice = diaqcprice.reduce((acc, obj) => acc + obj.S, 0)
  //     setDqcData(totalPrice ?? 0);
  //   }

  //   let csqcpirce = getPriceData?.rd2?.filter(
  //     (ele) =>
  //       ele.A === cartSelectData?.autocode &&
  //       ele.B === cartSelectData?.designno &&
  //       ele.H === cSQopt?.split("_")[0] &&
  //       ele.J === cSQopt?.split("_")[1]
  //   );

  //   if (csqcpirce && csqcpirce.length > 0) {
  //     let totalPrice = csqcpirce.reduce((acc, obj) => acc + obj.S, 0)
  //     setCsqcData(totalPrice ?? 0)
  //   }
  // }, [mtTypeOption, diaQColOpt, cSQopt, cartSelectData, getPriceData]);

  let diaUpdatedPrice = () => {
    let srProductsData = JSON.parse(localStorage.getItem('srProductsData'))

    if (daimondFilterData && daimondFilterData.length) {

      let calcDiaWt = (srProductsData?.diamondweight ?? 0) + (daimondFilterData?.Weight ?? 0)

      let CalcPics = (srProductsData?.diamondpcs ?? 0) + (daimondFilterData?.pieces ?? 0)

      let fpprice = ((dqcRate ?? 0) * (calcDiaWt ?? 0)) + ((dqcSettRate ?? 0) * (CalcPics ?? 0))

      return fpprice
    }
    else {
      return 0
    }

  }

  let colUpdatedPrice = () => {

    let srProductsData = JSON.parse(localStorage.getItem('srProductsData'))

    if (daimondFilterData && daimondFilterData.length) {


      let calcDiaWt = (srProductsData?.totalcolorstoneweight ?? 0) + (daimondFilterData?.Weight ?? 0)

      let CalcPics = (srProductsData?.totalcolorstonepcs ?? 0) + (daimondFilterData?.pieces ?? 0)

      let fpprice = ((csqcRate ?? 0) * (calcDiaWt ?? 0)) + ((csqcSettRate ?? 0) * (CalcPics ?? 0))

      return fpprice
    } else {
      return 0
    }

  }

  let metalUpdatedPrice = () => {

    let srProductsData = JSON.parse(localStorage.getItem('srProductsData'));

    if (metalFilterData && metalFilterData.length) {

      let CalcNetwt = ((srProductsData?.netwt ?? 0) + (metalFilterData?.Weight ?? 0) ?? 0 )
      console.log("CalcNetwt", CalcNetwt)

      let fprice = ((mtrdData?.AD ?? 0) * CalcNetwt) + ((mtrdData?.AC ?? 0)* CalcNetwt)

      return fprice
    } else {
      return 0
    }


  }

  useEffect(() => {
    let srProductsData = JSON.parse(localStorage.getItem('srProductsData'));
    const storeInit = JSON.parse(localStorage.getItem('storeInit'));
    
    let mtrd = getPriceData?.rd?.filter((ele) =>
    storeInit?.IsMetalCustomization === 1
    ?
    ele?.A === srProductsData?.autocode &&
    ele?.B === srProductsData?.designno &&
    ele?.D === mtTypeOption
    :
    ele?.A === srProductsData?.autocode &&
    ele?.B === srProductsData?.designno

    );
    
    console.log("mtrd",mtrd);
    
    let showPrice = 0;
    if (mtrd && mtrd.length > 0) {
      showPrice = srProductsData?.price - ((srProductsData?.price - srProductsData?.metalrd) + (mtrd[0]?.Z ?? 0));
      setMtrdData(mtrd[0] ?? [])
      // setMetalPrice(mtrd[0]?.Z ?? 0)
    }

    let diaqcprice = getPriceData?.rd1?.filter((ele) =>
    storeInit?.IsDiamondCustomization === 1 
      ?
      ele.A === srProductsData?.autocode &&
      ele.B === srProductsData?.designno &&
      ele.H === diaQColOpt?.split("_")[0] &&
      ele.J === diaQColOpt?.split("_")[1]
      :
      ele.A === srProductsData?.autocode &&
      ele.B === srProductsData?.designno

    )

    console.log("diaqcprice",diaqcprice)

    let showPrice1 = 0;
    if (diaqcprice && diaqcprice.length > 0) {
      showPrice1 = srProductsData?.price - ((srProductsData?.price - srProductsData?.diard1) + (diaqcprice[0]?.S ?? 0));
      let totalPrice = diaqcprice?.reduce((acc, obj) => acc + obj.S, 0)
      let diaRate = diaqcprice?.reduce((acc, obj) => acc + obj.O, 0)
      let diaSettRate = diaqcprice?.reduce((acc, obj) => acc + obj.Q, 0)

      setDqcRate(diaRate ?? 0)
      setDqcSettRate(diaSettRate ?? 0)
      setDqcData(totalPrice ?? 0)
      // setDQCPrice(diaqcprice[0]?.S ?? 0)
    }

    let csqcpirce = getPriceData?.rd2?.filter((ele) =>
    storeInit?.IsCsCustomization === 1
      ?
      ele.A === srProductsData?.autocode &&
      ele.B === srProductsData?.designno &&
      ele.H === cSQopt?.split("_")[0] &&
      ele.J === cSQopt?.split("_")[1]
      :
      ele.A === srProductsData?.autocode &&
      ele.B === srProductsData?.designno

    );

    console.log("csqcpirce1",csqcpirce)

    let showPrice2 = 0;
    if (csqcpirce && csqcpirce.length > 0) {
      showPrice2 = srProductsData?.price - ((srProductsData?.price - srProductsData?.csrd2) + (csqcpirce[0]?.S ?? 0));
      let totalPrice = csqcpirce?.reduce((acc, obj) => acc + obj.S, 0)
      let diaRate = csqcpirce?.reduce((acc, obj) => acc + obj.O, 0)
      let diaSettRate = csqcpirce?.reduce((acc, obj) => acc + obj.Q, 0)
      setCsqcData(totalPrice ?? 0)
      setCsqcRate(diaRate ?? 0)
      setCsqcSettRate(diaSettRate ?? 0)
      // setCSQCPrice(csqcpirce[0]?.S ?? 0)
    }


    console.log("csqcpirce",csqcpirce)

    // let gt = showPrice + showPrice1 + showPrice2;
    // setGrandTotal(gt ?? 0);

  }, [getPriceData, mtTypeOption, diaQColOpt, cSQopt])

  useEffect(() => {
    setmtTypeOption(cartSelectData?.metal);

    let qualityColor = `${cartSelectData?.diamondquality}_${cartSelectData?.diamondcolor}`;
    setDiaQColOpt(qualityColor);

    let csQualColor = `${cartSelectData?.colorstonequality}_${cartSelectData?.colorstonecolor}`;
    setCSQOpt(csQualColor);

    setSelectedColor(cartSelectData?.metalcolorname)

    console.log("cartSelectData?.detail_ringsize",cartSelectData?.detail_ringsize);

    setSizeOption(cartSelectData?.detail_ringsize)
        
  }, [cartSelectData])


  useEffect(() => {
    getCountFunc();
  }, []);

  useEffect(() => {
    const currencyCombo = JSON.parse(localStorage.getItem("CURRENCYCOMBO"));
    setCurrency(currencyCombo?.Currencysymbol);
    getCartData();
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("QualityColor"));
    if (storedData) {
      setColorData(storedData);
    }

    const storedData1 = JSON.parse(
      localStorage.getItem("ColorStoneQualityColor")
    );
    if (storedData1) {
      setDaimondQualityColor(storedData1);
    }

    const storedData2 = JSON.parse(localStorage.getItem("MetalTypeData"));
    if (storedData2) {
      setMetalType(storedData2);
    }

    const storedData3 = JSON.parse(localStorage.getItem("MetalColorData"));
    if (storedData3) {
      setMetalColorData(storedData3);
    }
  }, []);

  const handelLocalStorage = () => {
    let localProductData = JSON.parse(localStorage.getItem("srProductsData"));
    setProductData(localProductData);
  };

  useEffect(() => {
    handelLocalStorage();
  }, []);

  const getSizeData = async (item) => {
    try {
      const storedEmail = localStorage.getItem("registerEmail") || "";
      const storeInit = JSON.parse(localStorage.getItem("storeInit"));
      const { FrontEnd_RegNo } = storeInit;

      const storedData = localStorage.getItem("loginUserDetail") || "0";
      const data = JSON.parse(storedData);
      const customerid = data?.id;
      const combinedValue = JSON.stringify({
        autocode: `${item}`,
        FrontEnd_RegNo: `${FrontEnd_RegNo}`,
        Customerid: `${customerid}`,
      });
      const encodedCombinedValue = btoa(combinedValue);
      const body = {
        con: `{\"id\":\"\",\"mode\":\"CATEGORYSIZECOMBO\",\"appuserid\":\"${storedEmail}\"}`,
        f: "index (getSizeData)",
        p: encodedCombinedValue,
      };
      const response = await CommonAPI(body);
      if (response.Data?.rd) {
        setSizeData(response.Data.rd);
        const sizeDropdownData = response.Data.rd;
        setGetAllFilterSizeData(response.Data.rd1);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = (index) => {
    // Your save logic here
    const newShowDropdowns = [...showDropdowns];
    newShowDropdowns[index] = false;
    setShowDropdowns(newShowDropdowns);
  };

  const getCartData = async () => {
    try {
      // cartListData.length === 0 && setIsLoading(true);
      cartListData.length === 0 && setIsLoading(true);
      const ImageURL = localStorage.getItem("UploadLogicalPath");
      setImageURL(ImageURL);
      const storeInit = JSON.parse(localStorage.getItem("storeInit"));
      const storedData = localStorage.getItem("loginUserDetail");
      const data = JSON.parse(storedData);
      const customerid = data.id;
      setIsProductCuFlag(storeInit.IsProductWebCustomization);
      setIsMetalCutoMizeFlag(storeInit.IsMetalCustomization);
      setIsDaimondCstoFlag(storeInit.IsDiamondCustomization);
      setIsCColrStoneCustFlag(storeInit.IsCsCustomization);
      setCustomerID(data.id);
      const customerEmail = data.userid;
      setUserEmail(customerEmail);

      const { FrontEnd_RegNo, ukey } = storeInit;
      setYouKey(ukey);

      const combinedValue = JSON.stringify({
        CurrentPage: "1",
        PageSize: "1000",
        ukey: `${ukey}`,
        CurrRate: "1",
        FrontEnd_RegNo: `${FrontEnd_RegNo}`,
        Customerid: `${customerid}`,
      });

      const encodedCombinedValue = btoa(combinedValue);
      const body = {
        con: `{\"id\":\"\",\"mode\":\"GetCartDetails\",\"appuserid\":\"${customerEmail}\"}`,
        f: "Header (getCartData)",
        p: encodedCombinedValue,
      };
      const response = await CommonAPI(body);

      if (response?.Data) {
        setCartListData(response?.Data?.rd);
        setMainRemarks(response?.Data?.rd[0].OrderRemarks);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemove = async (data) => {
    try {
      setIsLoading(true);
      const storeInit = JSON.parse(localStorage.getItem("storeInit"));
      const { FrontEnd_RegNo } = storeInit;
      const combinedValue = JSON.stringify({
        designno: `${data.designno}`,
        autocode: `${data.autocode}`,
        metalcolorid: "0",
        isSolStockNo: "0",
        is_show_stock_website: "0",
        isdelete_all: "0",
        FrontEnd_RegNo: `${FrontEnd_RegNo}`,
        Customerid: `${customerID}`,
        cartidlist: "",
      });
      const encodedCombinedValue = btoa(combinedValue);
      const body = {
        con: `{\"id\":\"Store\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${userEmail}\"}`,
        f: "myWishLisy (handleRemoveCatList)",
        p: encodedCombinedValue,
      };
      const response = await CommonAPI(body);
      if (response.Data.rd[0].stat === 1) {
        await getCartData();
        await getCountFunc();
        let prevIndexofCartList = cartListData?.findIndex((cld)=>cld?.autocode === data?.autocode)
        if(prevIndexofCartList === 0){
          setCartSelectData()
        }else{  
          setCartSelectData(cartListData[prevIndexofCartList -1]);
        }
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const [Mainremarks, setMainRemarks] = useState("");
  const handleInputChangeMainRemarks = (e) => {
    setMainRemarks(e.target.value);
  };
  const submitMainRemrks = async () => {
    if (!Mainremarks || Mainremarks.trim() === "") {
      toast.error("Enter a value for remark.");
    } else {
      try {
        setIsLoading(true);
        const storeInit = JSON.parse(localStorage.getItem("storeInit"));
        const { FrontEnd_RegNo } = storeInit;
        const combinedValue = JSON.stringify({
          orderremarks: `${Mainremarks}`,
          FrontEnd_RegNo: `${FrontEnd_RegNo}`,
          Customerid: `${customerID}`,
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          con: `{\"id\":\"\",\"mode\":\"SAVEORDERREMARK\",\"appuserid\":\"${userEmail}\"}`,
          f: "Header (handleMainRemrks)",
          p: encodedCombinedValue,
        };
        const response = await CommonAPI(body);
        if (response.Data.rd[0].stat === 1) {
          toast.success("Add remark successfully");
        } else {
          alert("Error");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };


  const [remarks, setRemarks] = useState(cartSelectData?.Remarks || '');
  const handleInputChangeRemarks = (event, index) => {
    let { value } = event.target;
    setRemarks(value);
  };

  const handleSubmit = async (data) => {
    if (!remarks || remarks.trim() === "") {
      toast.error("Enter a value for remarks.");
    } else {
      try {
        // setIsLoading(true);
        const storeInit = JSON.parse(localStorage.getItem("storeInit"));
        const { FrontEnd_RegNo } = storeInit;
        const combinedValue = JSON.stringify({
          designno: `${data.designno}`,
          autocode: `${data.autocode}`,
          remarks: `${remarks}`,
          FrontEnd_RegNo: `${FrontEnd_RegNo}`,
          Customerid: `${customerID}`,
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          con: `{\"id\":\"\",\"mode\":\"SAVEDESIGNREMARK\",\"appuserid\":\"${userEmail}\"}`,
          f: "Header (handleSingleRemaksSubmit)",
          p: encodedCombinedValue,
        };
        const response = await CommonAPI(body);
        if (response.Data.rd[0].stat === 1) {
          await getCartData()
          toast.success("Add remark successfully");
        } else {
          alert("Error");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const [lastEnteredQuantity, setLastEnteredQuantity] = useState(cartSelectData?.Quantity || "");
  useEffect(() => {
    setLastEnteredQuantity(cartSelectData?.Quantity || "");
  }, [cartSelectData]);

  const handleInputChange = (event) => {
    let { value } = event.target;
    setLastEnteredQuantity(value);
  };


  const handleUpdateQuantity = async (num) => {
    try {
      const storeInit = JSON.parse(localStorage.getItem("storeInit"));
      const { FrontEnd_RegNo } = storeInit;
      const combinedValue = JSON.stringify({
        designno: `${num}`,
        Quantity: `${lastEnteredQuantity}`,
        FrontEnd_RegNo: `${FrontEnd_RegNo}`,
        Customerid: `${customerID}`,
      });
      const encodedCombinedValue = btoa(combinedValue);
      const body = {
        con: `{\"id\":\"\",\"mode\":\"UpdateQuantity\",\"appuserid\":\"${userEmail}\"}`,
        f: "header (handleUpdateQuantity)",
        p: encodedCombinedValue,
      };
      const response = await CommonAPI(body);
      if (response.Data.rd[0].stat === 1) {
        await getCartData()
        toast.success("QTY change successfully");
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {

    }
  };

  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleRemoveAllWishList = async () => {
    try {
      setIsLoading(true);
      const storeInit = JSON.parse(localStorage.getItem("storeInit"));
      const { FrontEnd_RegNo } = storeInit;
      const combinedValue = JSON.stringify({
        designno: "",
        autocode: "",
        metalcolorid: "0",
        isSolStockNo: "0",
        is_show_stock_website: "0",
        isdelete_all: "1",
        FrontEnd_RegNo: `${FrontEnd_RegNo}`,
        Customerid: `${customerID}`,
        cartidlist: "",
      });
      const encodedCombinedValue = btoa(combinedValue);
      const body = {
        con: `{\"id\":\"Store\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${userEmail}\"}`,
        f: "myWishLisy (handleRemoveCatList)",
        p: encodedCombinedValue,
      };
      const response = await CommonAPI(body);
      if (response.Data.rd[0].stat === 1) {
        getCartData();
        getCountFunc();
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const prodData = JSON.parse(localStorage.getItem("allproductlist"))
    let isCartData = cartSelectData ? cartSelectData : cartListData[0]

    const finalProdData = prodData.filter(
      (pd) =>
        pd?.designno === isCartData?.designno &&
        pd?.autocode === isCartData?.autocode
    )[0]

    if (finalProdData) {
      setProdSelectData(finalProdData)
    }
  }, [cartSelectData, cartListData])


  const [sizeMarkup, setSizeMarkup] = useState(0)

  const handelSize = (data) => {
    const selectedSize = sizeData.find((size) => size.sizename === (data ?? sizeOption))

    if (selectedSize) {
      setSizeMarkup(selectedSize?.MarkUp)
    }else{
      setSizeMarkup(0)
    }
    setSizeOption(data);
    const filteredData = getAllFilterSizeData?.filter(
      (item) => item.sizename === (data ?? sizeOption)
    )
    const filteredDataMetal = filteredData?.filter(
      (item) => item.DiamondStoneTypeName === "METAL"
    )
    const filteredDataDaimond = filteredData?.filter(
      (item) => item.DiamondStoneTypeName === "DIAMOND"
    )
    setMetalFilterData(filteredDataMetal)
    setDaimondFiletrData(filteredDataDaimond)
  };

  useEffect(()=>{
    const selectedSize = sizeData.find((size) => size.sizename === (sizeOption))
    console.log("condition",(selectedSize && (sizeData?.length !== 0 || (productData?.DefaultSize && productData.DefaultSize.length !== 0))) !== undefined)

    if (selectedSize) {
      setSizeMarkup(selectedSize?.MarkUp)
    }else{
      setSizeMarkup(0)
    }
    const filteredData = getAllFilterSizeData?.filter(
      (item) => item.sizename === (sizeOption)
    )
    const filteredDataMetal = filteredData?.filter(
      (item) => item.DiamondStoneTypeName === "METAL"
    )
    const filteredDataDaimond = filteredData?.filter(
      (item) => item.DiamondStoneTypeName === "DIAMOND"
    )
    setMetalFilterData(filteredDataMetal)
    setDaimondFiletrData(filteredDataDaimond)
  },[sizeOption,sizeData,getAllFilterSizeData])


  console.log("pricedata",cartSelectData?.UnitCost,mtrdData,dqcData,csqcData,sizeMarkup,metalUpdatedPrice(),diaUpdatedPrice(),colUpdatedPrice())

  // const handleColorSelection = (color) => {
    //     let uploadPath = localStorage.getItem('UploadLogicalPath');
    //     const storedDataAll = localStorage.getItem('storeInit');
    //     const data = JSON.parse(storedDataAll);
    //     if (data.IsColorWiseImages === 1) {
    //       const selectedColor = color;
    //       setSelectedColor(selectedColor);
    //       const filteredData = colorImageData.filter(item => item.colorname.toLowerCase() === selectedColor.toLowerCase());
    //       console.log('Filter Data', filteredData);
    //       if (filteredData.length > 0) {
    //         const correctedData = filteredData.map(item => {
    //           return {
    //             ...item,
    //             imagepath: convertPath(item.imagepath)
    //           };
    //         });
    //         correctedData.forEach(item => {
    //           item.imagepath = uploadPath + '/' + data.ukey + item.imagepath;
    //           console.log('Updated Path:', item.imagepath);
    //         });
    //         correctedData.forEach((item, index) => {
    //           correctedData[index] = item;
    //         });
    //         setTimeout(() => {
    //           setUpdateColorImage(correctedData);
    //         }, 100);
    //       } else {
    //         setUpdateColorImage('');
    //       }
    //       const selectedColorData = colorImageData.find(item => item.colorname === selectedColor);
    //       if (selectedColorData) {
    //         const correctedImagePath = convertPath(selectedColorData.imagepath);
    //         let path = uploadPath + '/' + data.ukey + correctedImagePath
    //         setSelectedImagePath(path);
    //       } else {
    //         setSelectedImagePath('');
    //       }
    //     }
  // };

  console.log('cartListData', cartListData);
  console.log('dqcData', dqcData);
  console.log('csqcData', csqcData);
  console.log('mtrdData', mtrdData?.Z);

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
      // if (res?.Message === "Success") {
      //   setCartData(res?.Data?.rd)
      //   setWishData(res?.Data?.rd1)
      // }
    })

  }

  const handleCartUpdate = async() =>{

        const allproductlist = JSON.parse(localStorage.getItem("allproductlist"));

        const filterProdData = allproductlist?.filter(
          (allpd) =>
            allpd?.autocode === cartListData[0]?.autocode &&
            allpd?.designno === cartListData[0]?.designno
        );

        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));



        let product = filterProdData[0]

        const finalJSON = {
          "stockweb_event": "",
          "designno": `${product?.designno}`,
          "autocode": `${product?.autocode}`,
          "imgrandomno": `${product?.imgrandomno}`,
          "producttypeid": `${product?.Producttypeid}`,
          "metaltypeid": `${product?.MetalTypeid}`,
          "metalcolorid": `${product?.MetalColorid}`,
          "stockno": "",
          "DQuality": `${(diaQColOpt ? diaQColOpt?.split('_')[0] : product?.diamondquality?.split(",")[0])}`,
          "DColor": `${diaQColOpt ? diaQColOpt?.split('_')[1] : product?.diamondcolorname}`,
          "cmboMetalType": `${product?.MetalTypeName} ${product?.MetalPurity}`,
          "AdditionalValWt": `${product?.AdditionalValWt}`,
          "BrandName": `${product?.BrandName ?? ""}`,
          "Brandid": `${product?.Brandid}`,
          "CategoryName": `${product?.CategoryName}`,
          "Categoryid": `${product?.Categoryid}`,
          "CenterStoneId": `${product?.CenterStoneId}`,
          "CenterStonePieces": `${product?.CenterStonePieces}`,
          "CollectionName": `${product?.CollectionName}`,
          "Collectionid": `${product?.Collectionid}`,
          "ColorWiseRollOverImageName": `${product?.ColorWiseRollOverImageName}`,
          "DefaultImageName": `${product?.DefaultImageName}`,
          "DisplayOrder": `${product?.DisplayOrder}`,
          "FrontEnd_OrderCnt": `${product?.FrontEnd_OrderCnt}`,
          "GenderName": `${product?.GenderName}`,
          "Genderid": `${product?.Genderid}`,
          "Grossweight": `${product?.Grossweight}`,
          "InReadyStockCnt": `${product?.InReadyStockCnt}`,
          "IsBestSeller": `${product?.IsBestSeller}`,
          "IsColorWiseImageExists": `${product?.IsColorWiseImageExists ?? 0}`,
          "IsInReadyStock": `${product?.IsInReadyStock}`,
          "IsNewArrival": `${product?.IsNewArrival}`,
          "IsRollOverColorWiseImageExists": `${product?.IsRollOverColorWiseImageExists ?? ""}`,
          "IsTrending": `${product?.IsTrending}`,
          "MasterManagement_labid": `${product?.MasterManagement_labid}`,
          "MasterManagement_labname": "",
          "MetalColorName": `${selectedColor ?? product?.MetalColorName}`,
          "MetalColorid": `${product?.MetalColorid}`,
          "MetalPurity": `${mtTypeOption ? (mtTypeOption?.split(' ')[1]) : product?.MetalPurity}`,
          "MetalPurityid": `${product?.MetalTypeid}`,
          "MetalTypeName": `${mtTypeOption ? mtTypeOption?.split(' ')[0] : product?.MetalTypeName}`,
          "MetalTypeid": `${product?.IsInReadyStock}`,
          "MetalWeight": `${product?.MetalWeight}`,
          "OcassionName": `${product?.OcassionName ?? ""}`,
          "Ocassionid": `${product?.Ocassionid}`,
          "ProducttypeName": `${product?.ProducttypeName}`,
          "Producttypeid": `${product?.Producttypeid}`,
          "RollOverImageName": `${product?.RollOverImageName}`,
          "SubCategoryName": `${product?.SubCategoryName ?? ""}`,
          "SubCategoryid": `${product?.SubCategoryid}`,
          "ThemeName": `${product?.ThemeName ?? ""}`,
          "Themeid": `${product?.Themeid}`,
          "TitleLine": `${product?.TitleLine}`,
          "UnitCost": `${product?.UnitCost ?? 0}`,
          "UnitCostWithmarkup": (`${(product?.UnitCost ?? 0) + (product?.markup ?? 0)}`),
          "colorstonecolorname": `${cSQopt ? cSQopt?.split('_')[1] : product?.colorstonecolorname}`,
          "colorstonequality": `${cSQopt ? cSQopt?.split('_')[0] : product?.colorstonequality}`,
          "diamondcolorname": `${diaQColOpt ? diaQColOpt?.split('_')[1] : product?.diamondcolorname}`,
          "diamondpcs": `${product?.diamondpcs}`,
          "diamondquality": `${(diaQColOpt ? diaQColOpt?.split('_')[0] : product?.diamondquality?.split(",")[0])}`,
          "diamondsetting": `${product?.diamondsetting}`,
          "diamondshape": `${product?.diamondshape}`,
          "diamondweight": `${product?.diamondweight}`,
          "encrypted_designno": `${product?.encrypted_designno ?? ""}`,
          "hashtagid": `${product?.Hashtagid ?? ""}`,
          "hashtagname": `${product?.Hashtagname ?? ""}`,
          "imagepath": `${product?.imagepath}`,
          "mediumimage": `${product?.MediumImagePath ?? ""}`,
          "originalimage": `${product?.OriginalImagePath}`,
          "storyline_html": `${product?.storyline_html ?? ""}`,
          "storyline_video": `${product?.storyline_video ?? ""}`,
          "thumbimage": `${product?.ThumbImagePath}`,
          "totaladditionalvalueweight": `${product?.totaladditionalvalueweight}`,
          "totalcolorstoneweight": `${product?.totalcolorstoneweight}`,
          "totaldiamondweight": `${product?.totaldiamondweight}`,
          "updatedate": `${product?.UpdateDate}`,
          "videoname": `${product?.videoname ?? ""}`,
          "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
          "Customerid": `${Customer_id?.id}`,
          "PriceMastersetid": `${product?.PriceMastersetid ?? ""}`,
          "quantity": `${product?.quantity ?? "1"}`,
          "CurrencyRate": `${product?.CurrencyRate ?? ""}`,
          "remarks_design": `${product?.remarks_design ?? ""}`,
          "diamondcolorid": `${product?.diamondcolorid ?? ""}`,
          "diamondqualityid": `${product?.diamondqualityid ?? ""}`,
          "detail_ringsize": `${sizeOption ? (sizeOption ?? "") : (product?.detail_ringsize ?? "")}`,
          "ProjMode": `${product?.ProjMode ?? ""}`,
          "AlbumMasterid": `${product?.AlbumMasterid ?? ""}`,
          "AlbumMastername": `${product?.AlbumMastername ?? ""}`,
          "Albumcode": `${product?.Albumcode ?? ""}`,
          "Designid": `${product?.Designid ?? ""}`
        }

        let Data = { "designno": `${cartSelectData?.designno}`, "autocode": `${cartSelectData?.autocode}`, "metalcolorid": 0, "isSolStockNo": 0, "is_show_stock_website": "0", "isdelete_all": 0, "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}`, "cartidlist": "" }

        let encodedCombinedValue1 = btoa(JSON.stringify(Data))

        const body1 = {
          con: `{\"id\":\"\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${UserEmail}\"}`,
          f: "RemoveFromCartIconClick (removeFromCartList)",
          p: encodedCombinedValue1,
        }

        await CommonAPI(body1).then(async (res) => {
          if(res?.Data?.rd[0]?.stat_msg === "success") {
            // await getCartAndWishListData()
            // getCountFunc()
            
            const encodedCombinedValue = btoa(JSON.stringify(finalJSON));

            const body = {
              con: `{\"id\":\"\",\"mode\":\"ADDTOCART\",\"appuserid\":\"${UserEmail}\"}`,
              f: "AddToCartIconClick (ADDTOCART)",
              p: encodedCombinedValue,
            };
    
            await CommonAPI(body).then(async(res) => {
              if (res?.Data?.rd[0]?.msg === "success") {
                await getCartAndWishListData()
                getCountFunc()
                getCartData()
                console.log("done",res);
              }
              else{
                console.log("error",res);
              }
            }).catch((error)=>{
              console.log("error",error);
    
            })
           
          }
        })

        console.log("finalJSON",finalJSON);
        console.log("filterProdData",filterProdData);

  }



  return (
    <>
      <div
        className="paddingTopMobileSet"
        style={{ backgroundColor: "#c0bbb1", paddingTop: "110px" }}
      >
        {isLoading && (
          <div className="loader-overlay">
            <CircularProgress className="loadingBarManage" />
          </div>
        )}
        <ToastContainer />

        <div className="smilingCartPageMain">
          <div
            style={{
              width: "-webkit-fill-available",
              backgroundColor: "white",
              zIndex: "111",
            }}
          >
            <p className="SmiWishListTitle" style={{ paddingTop: "30px" }}>
              My Cart
            </p>

            {cartListData?.length !== 0 && (
              <div>
                <div
                  className="smilingListTopButton"
                  style={{ marginTop: "0px" }}
                >
                  <button
                    className="smiTopClearBtn"
                    onClick={() => handleChange(0)}
                  >
                    List View
                  </button>
                  <button
                    className="smiTopAddAllBtn"
                    onClick={() => handleChange(1)}
                  >
                    Image View
                  </button>
                  <button
                    className="smiTopClearBtn"
                    onClick={handleRemoveAllWishList}
                  >
                    CLEAR ALL
                  </button>
                  <button
                    className="smiTopAddAllBtn"
                    onClick={() => navigation("/productpage")}
                  >
                    Show ProductList
                  </button>
                  <button
                    className="placeOrderCartPageBtnMobile"
                    onClick={(event) => {
                      navigation("/Delivery");
                    }}
                  >
                    Place Order
                  </button>
                </div>
                <div
                  className="smilingCartPagePlaceOrderBtnMainWeb"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "-50px 25px 0px 20px",
                    paddingBottom: "50px",
                  }}
                >
                  <button
                    className="placeOrderCartPageBtn"
                    onClick={(event) => {
                      navigation("/Delivery");
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          <CustomTabPanel value={value} index={0}>
            <div
              style={{
                paddingInline: "10px",
                display: "flex",
              }}
            >
              <div className="smilingCartDeatilSub2">
                {cartListData?.length === 0 ? (
                  !isLoading && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "150px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          fontSize: "20px",
                          fontWeight: 500,
                        }}
                      >
                        No Data Available
                      </p>
                      <p>Please First Add To Cart Data</p>
                      <button
                        className="browseBtnMore"
                        onClick={() => navigation("/productpage")}
                      >
                        BROWSE OUR COLLECTION
                      </button>
                    </div>
                  )
                ) : (
                  <div className="mainCartContainer">
                    {!isLoading && (
                      <div className="resproDet">
                        <div
                          className="smilingCartDeatilSub1"
                          style={{
                            display:
                              !prodSelectData && !cartSelectData && "none",
                          }}
                        >
                          <div className="popUpcontainer">
                            <img
                              src={
                                prodSelectData?.imagepath +
                                prodSelectData?.MediumImagePath?.split(",")[0]
                              }
                              style={{
                                border: "1px solid #e1e1e1",
                                borderRadius: "12px",
                                width: "35%",
                              }}
                            />

                            <div style={{ width: "550px" }}>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                                className="srcolorsizecarat"
                              >
                                <div
                                  style={{
                                    fontSize: "40px",
                                    fontFamily: "FreightDisp Pro Medium",
                                    color: "#7d7f85",
                                    lineHeight: "40px",
                                    marginBottom: "14px",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    whiteSpace: "none",
                                    height: "40px",
                                    width: "70%",
                                  }}
                                  className="prodTitleLine"
                                >
                                  {prodSelectData?.TitleLine}
                                </div>

                                {isProductCuFlag === 1 && (
                                  <div
                                    style={{
                                      borderTop: "1px solid #e1e1e1",
                                      marginInline: "-10px",
                                      padding: "20px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        flexWrap: "wrap",
                                        marginTop: "12px",
                                      }}
                                    >
                                      {isMetalCutoMizeFlag == 1 && (
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "45%",
                                          }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12.5px",
                                              color: "#7d7f85",
                                            }}
                                          >
                                            METAL TYPE:
                                          </label>
                                          <select
                                            style={{
                                              border: "none",
                                              outline: "none",
                                              color: "#7d7f85",
                                              fontSize: "12.5px",
                                            }}
                                            // value={mtTypeOption ?? cartSelectData?.metal}
                                            value={mtTypeOption}
                                            onChange={(e) =>
                                              setmtTypeOption(e.target.value)
                                            }
                                          >
                                            {metalType.map((data, index) => (
                                              <option
                                                key={index}
                                                value={data.metalType}
                                              >
                                                {data.metaltype}
                                              </option>
                                            ))}
                                          </select>
                                        </div>
                                      )}

                                      {isMetalCutoMizeFlag == 1 && (
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "45%",
                                          }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12.5px",
                                              color: "#7d7f85",
                                            }}
                                          >
                                            METAL COLOR:
                                          </label>
                                          <select
                                            style={{
                                              border: "none",
                                              outline: "none",
                                              color: "#7d7f85",
                                              fontSize: "12.5px",
                                            }}
                                            value={selectedColor}
                                            onChange={(e) =>
                                              setSelectedColor(e.target.value)
                                            }
                                          >
                                            {metalColorData.map((colorItem) => (
                                              <option
                                                key={colorItem.ColorId}
                                                value={colorItem.metalcolorname}
                                              >
                                                {colorItem.metalcolorname}
                                              </option>
                                            ))}
                                          </select>
                                        </div>
                                      )}

                                      {isDaimondCstoFlag == 1 && (
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "45%",
                                            marginTop: "30px",
                                          }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12.5px",
                                              color: "#7d7f85",
                                            }}
                                          >
                                            DAIMOND :
                                          </label>
                                          <select
                                            style={{
                                              border: "none",
                                              outline: "none",
                                              color: "#7d7f85",
                                              fontSize: "12.5px",
                                            }}
                                            value={diaQColOpt}
                                            onChange={(e) =>
                                              setDiaQColOpt(e.target.value)
                                            }
                                          >
                                            {colorData?.map((colorItem) => (
                                              <option
                                                key={colorItem.ColorId}
                                                value={`${colorItem.Quality}_${colorItem.color}`}
                                              >
                                                {`${colorItem.Quality}_${colorItem.color}`}
                                              </option>
                                            ))}
                                          </select>
                                        </div>
                                      )}

                                      {isCColrStoneCustFlag == 1 && (
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "4%",
                                            marginTop: "20px",
                                          }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12.5px",
                                              color: "#7d7f85",
                                              marginTop: "10px",
                                            }}
                                          >
                                            COLOR STONE:
                                          </label>
                                          <select
                                            style={{
                                              border: "none",
                                              outline: "none",
                                              color: "#7d7f85",
                                              fontSize: "12.5px",
                                            }}
                                            value={cSQopt}
                                            onChange={(e) =>
                                              setCSQOpt(e.target.value)
                                            }
                                          >
                                            {DaimondQualityColor.map(
                                              (data, index) => (
                                                <option
                                                  key={index}
                                                  value={`${data.Quality}_${data.color}`}
                                                >
                                                  {`${data.Quality}_${data.color}`}
                                                </option>
                                              )
                                            )}
                                          </select>
                                        </div>
                                      )}

                                      {(sizeData?.length !== 0 ||
                                        (productData?.DefaultSize &&
                                          productData.DefaultSize.length !==
                                            0)) && (
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "45%",
                                            marginTop: "30px",
                                          }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12.5px",
                                              color: "#7d7f85",
                                            }}
                                          >
                                            SIZE:
                                          </label>
                                          <select
                                            style={{
                                              border: "none",
                                              outline: "none",
                                              color: "#7d7f85",
                                              fontSize: "12.5px",
                                            }}
                                            onChange={(e) =>
                                              handelSize(e.target.value)
                                            }
                                            value={
                                              sizeOption
                                              // ??
                                              // (productData && productData.DefaultSize
                                              //   ? productData.DefaultSize
                                              //   : sizeData.find(
                                              //     (size) =>
                                              //       size.IsDefaultSize === 1
                                              //   )?.id)
                                            }
                                          >
                                            {sizeData?.map((size) => (
                                              <option
                                                key={size.id}
                                                // value={cartSelectData?.detail_ringsize ?? size.sizename} // Pass sizename as value
                                                value={size.sizename} // Pass sizename as value
                                                // selected={
                                                //   productData &&
                                                //   productData.DefaultSize ===
                                                //   size.sizename
                                                // }
                                              >
                                                {size.sizename}
                                              </option>
                                            ))}
                                          </select>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div
                                style={{
                                  marginTop: "20px",
                                  color: "#7d7f85",
                                  fontSize: "14px",
                                  display:'flex',
                                  justifyContent:'space-between',
                                }}
                              >
                                <span>
                                  Price : 
                                  <span  style={{
                                    fontWeight: "500",
                                    fontSize: "18px",
                                    color:'black'
                                  }}>
                                  {currencySymbol?.Currencysymbol}
                                  {(
                                    (cartSelectData?.UnitCost ?? 0) +
                                    (mtrdData?.Z ?? 0) +
                                    (dqcData ?? 0) +
                                    (csqcData ?? 0) +
                                    (sizeMarkup  ?? 0) +
                                    (metalUpdatedPrice() ?? 0) +
                                    (diaUpdatedPrice() ?? 0) +
                                    (colUpdatedPrice() ?? 0)
                                  ).toFixed(2)}
                                  </span>
                                </span>
                                <button style={{border:'none',outline:'none', backgroundColor:'#e1e1e1',padding:'6px 17px',borderRadius:'4px'}}>
                                  <span style={{fontSize:'16px',fontWeight:'500'}} onClick={handleCartUpdate}>Save</span>
                                </button>
                              </div>
                              <div className="similingCartPageBotttomMain">
                                <div
                                  className="smilingQualityMain"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <input
                                    type="text"
                                    style={{
                                      border: "0px",
                                      textAlign: "center",
                                      outline: "none",
                                      width: "80px",
                                      height: "35px",
                                      border: "1px solid #7d7f85",
                                    }}
                                    maxLength={2}
                                    className="simlingQualityBox"
                                    inputMode="numeric"
                                    onClick={(event) => event.target.select()}
                                    value={lastEnteredQuantity}
                                    onChange={(event) =>
                                      handleInputChange(event)
                                    }
                                  />
                                  <button
                                    className="SmilingUpdateQuantityBtn"
                                    onClick={() =>
                                      handleUpdateQuantity(
                                        prodSelectData?.designno
                                      )
                                    }
                                  >
                                    QTY
                                  </button>
                                </div>

                                <div
                                  className="smilingAddresingleMobileMain"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginLeft: "30px",
                                  }}
                                >
                                  <textarea
                                    type="text"
                                    placeholder="Enter Remarks..."
                                    value={remarks}
                                    onChange={(event) =>
                                      handleInputChangeRemarks(event)
                                    }
                                    className="YourCartMainRemkarBoxSingle"
                                  />
                                  <button
                                    onClick={() => handleSubmit(cartSelectData)}
                                    className="SmilingAddSingleRemkarBtn"
                                  >
                                    Add
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {!isLoading && (
                      <div className="cartProdSection resCon">
                        <div
                          // style={{
                          //   display: "flex",
                          //   flexWrap: "wrap",
                          //   height: "565px",
                          //   overflowY: "auto",
                          // }}
                          className="cartProdpart"
                        >
                          {cartListData?.map((item, index) => (
                            <div
                              key={item.id}
                              className="smiling-cartPageBoxMain"
                              onClick={() => {
                                setCartSelectData(item);
                                getSizeData(item.autocode);
                                window.innerWidth <= 1080 &&
                                  setDialogOpen(true);
                              }}
                            >
                              <div
                                style={{
                                  cursor: "pointer",
                                  position: "absolute",
                                  right: "0px",
                                  top: "0px",
                                  backgroundColor: "black",
                                  borderRadius: "2px",
                                  opacity: "0.8",
                                }}
                                onClick={() => handleRemove(item)}
                              >
                                <CloseIcon
                                  sx={{ color: "white", fontSize: "22px" }}
                                />
                              </div>
                              <img
                                src={`${imageURL}/${yKey}/${item.DefaultImageName}`}
                                alt="#"
                                className="cartImageShow"
                              />
                              <div
                                className="smilingCartBox1"
                                style={{ padding: "5px" }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    style={{ margin: "0px", fontSize: "12px" }}
                                  >
                                    NWT :{" "}
                                    <span style={{ fontWeight: 600 }}>
                                      {item?.MetalWeight}
                                    </span>
                                  </p>
                                  <p
                                    style={{ margin: "0px", fontSize: "12px" }}
                                  >
                                    DWT :{" "}
                                    <span style={{ fontWeight: 600 }}>
                                      {item?.Rec_DiamondWeight} /{" "}
                                      {item?.totaldiamondpcs}
                                    </span>
                                  </p>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    style={{ margin: "0px", fontSize: "12px" }}
                                  >
                                    CWT :{" "}
                                    <span style={{ fontWeight: 600 }}>
                                      {item?.Rec_CSWeight} /{" "}
                                      {item?.totalcolorstonepcs}
                                    </span>
                                  </p>
                                  <p
                                    style={{ margin: "0px", fontSize: "12px" }}
                                  >
                                    GWT :{" "}
                                    <span style={{ fontWeight: 600 }}>
                                      {item?.grossweight}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <textarea
                          label="Enter Remarks"
                          variant="outlined"
                          placeholder="Enter Order Remark"
                          value={Mainremarks}
                          rows={4}
                          onChange={(e) => handleInputChangeMainRemarks(e)}
                          className="YourCartPageMainRemkarBox"
                          style={{
                            marginTop: "30px",
                            width: "300px",
                            marginLeft: "20px",
                          }}
                        />
                        <div
                          className="addRemkarMainBottom"
                          style={{ marginLeft: "20px" }}
                        >
                          <button
                            onClick={submitMainRemrks}
                            className="SmilingAddRemkarBtn"
                            style={{ marginTop: "10px" }}
                          >
                            Add Order Remark
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div style={{ paddingBottom: "150px", marginTop: "10px" }}>
              {cartListData?.length === 0 ? (
                !isLoading && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "150px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "20px",
                        fontWeight: 500,
                      }}
                    >
                      No Data Available
                    </p>
                    <p>Please First Add To Cart Data</p>
                    <button
                      className="browseBtnMore"
                      onClick={() => navigation("/productpage")}
                    >
                      BROWSE OUR COLLECTION
                    </button>
                  </div>
                )
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: cartListData?.length > 5 && "center",
                  }}
                >
                  {cartListData?.map((item, index) => (
                    <div key={item.id} className="smiling-cartBoxMainImageView">
                      <div
                        className="smilingCartMobileMain"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={`${imageURL}/${yKey}/${item.DefaultImageName}`}
                          className="smiling-cartPageBoxImgView"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CustomTabPanel>
          <Footer />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBlock: "30px",
          }}
        >
          <p
            style={{
              margin: "0px",
              fontWeight: 500,
              width: "100px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => window.scrollTo(0, 0)}
          >
            BACK TO TOP
          </p>
        </div>
      </div>
      <Dialog
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
        // fullWidth
        // maxWidth={"xl"}
        fullScreen
      >
        {!isLoading && (
          <div style={{ marginTop: "50px" }}>
            <div>
              <div
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "12px",
                  top: "12px",
                  borderRadius: "12px",
                }}
                onClick={() => setDialogOpen(false)}
              >
                <CloseIcon sx={{ color: "black", fontSize: "30px" }} />
              </div>
            </div>
            <div
              className="smilingCartDeatilSub1"
              style={{ display: !prodSelectData && !cartSelectData && "none" }}
            >
              <div className="popUpcontainer">
                <img
                  src={
                    prodSelectData?.imagepath +
                    prodSelectData?.MediumImagePath?.split(",")[0]
                  }
                  style={{
                    border: "1px solid #e1e1e1",
                    borderRadius: "12px",
                    width: "35%",
                  }}
                />

                <div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    className="srcolorsizecarat"
                  >
                    <div
                      style={{
                        fontSize: "40px",
                        fontFamily: "FreightDisp Pro Medium",
                        color: "#7d7f85",
                        lineHeight: "40px",
                        marginBottom: "14px",
                      }}
                      className="prodTitleLine"
                    >
                      {prodSelectData?.TitleLine}
                    </div>

                    {/* <Divider
                    sx={{
                        margin: "12px",
                        backgroundColor: "#e1e1e1",
                        marginLeft: "-5px",
                    }}
                    /> */}
                    {isProductCuFlag === 1 && (
                      <div
                        style={{
                          borderTop: "1px solid #e1e1e1",
                          marginInline: "-10px",
                          padding: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "12px",
                          }}
                        >
                          {isMetalCutoMizeFlag == 1 && (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "49%",
                              }}
                            >
                              <label
                                style={{ fontSize: "12.5px", color: "#7d7f85" }}
                              >
                                METAL COLOR:
                              </label>
                              <select
                                style={{
                                  border: "none",
                                  outline: "none",
                                  color: "#7d7f85",
                                  fontSize: "12.5px",
                                }}
                                value={selectedColor}
                                onChange={(e) =>
                                  setSelectedColor(e.target.value)
                                }
                              >
                                {metalColorData.map((colorItem) => (
                                  <option
                                    key={colorItem.ColorId}
                                    value={colorItem.metalcolorname}
                                  >
                                    {colorItem.metalcolorname}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}

                          {isMetalCutoMizeFlag == 1 && (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "49%",
                              }}
                            >
                              <label
                                style={{ fontSize: "12.5px", color: "#7d7f85" }}
                              >
                                METAL TYPE:
                              </label>
                              <select
                                style={{
                                  border: "none",
                                  outline: "none",
                                  color: "#7d7f85",
                                  fontSize: "12.5px",
                                }}
                                // value={mtTypeOption ?? cartSelectData?.metal}
                                value={mtTypeOption}
                                onChange={(e) =>
                                  setmtTypeOption(e.target.value)
                                }
                              >
                                {metalType.map((data, index) => (
                                  <option key={index} value={data.metalType}>
                                    {data.metaltype}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {isDaimondCstoFlag == 1 && (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "49%",
                                marginTop: "30px",
                              }}
                            >
                              <label
                                style={{ fontSize: "12.5px", color: "#7d7f85" }}
                              >
                                DAIMOND :
                              </label>
                              <select
                                style={{
                                  border: "none",
                                  outline: "none",
                                  color: "#7d7f85",
                                  fontSize: "12.5px",
                                }}
                                value={diaQColOpt}
                                onChange={(e) => setDiaQColOpt(e.target.value)}
                              >
                                {colorData?.map((colorItem) => (
                                  <option
                                    key={colorItem.ColorId}
                                    value={`${colorItem.Quality}_${colorItem.color}`}
                                  >
                                    {`${colorItem.Quality}_${colorItem.color}`}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}

                          {isCColrStoneCustFlag == 1 && (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "49%",
                                marginTop: "20px",
                              }}
                            >
                              <label
                                style={{
                                  fontSize: "12.5px",
                                  color: "#7d7f85",
                                  marginTop: "10px",
                                }}
                              >
                                COLOR STONE:
                              </label>
                              <select
                                style={{
                                  border: "none",
                                  outline: "none",
                                  color: "#7d7f85",
                                  fontSize: "12.5px",
                                }}
                                value={cSQopt}
                                onChange={(e) => setCSQOpt(e.target.value)}
                              >
                                {DaimondQualityColor.map((data, index) => (
                                  <option
                                    key={index}
                                    value={`${data.Quality}-${data.color}`}
                                  >
                                    {`${data.Quality}-${data.color}`}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                        </div>

                        {(sizeData?.length !== 0 ||
                          (productData?.DefaultSize &&
                            productData.DefaultSize.length !== 0)) && (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              width: "49%",
                              marginTop: "30px",
                            }}
                          >
                            <label
                              style={{ fontSize: "12.5px", color: "#7d7f85" }}
                            >
                              SIZE:
                            </label>
                            <select
                              style={{
                                border: "none",
                                outline: "none",
                                color: "#7d7f85",
                                fontSize: "12.5px",
                              }}
                              onChange={(e) => handelSize(e.target.value)}
                              defaultValue={
                                productData && productData.DefaultSize
                                  ? productData.DefaultSize
                                  : sizeData.find(
                                      (size) => size.IsDefaultSize === 1
                                    )?.id
                              }
                            >
                              {sizeData?.map((size) => (
                                <option
                                  key={size.id}
                                  value={sizeOption} // Pass sizename as value
                                  selected={
                                    productData &&
                                    productData.DefaultSize === size.sizename
                                  }
                                >
                                  {size.sizename}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      marginTop: "20px",
                      color: "#7d7f85",
                      fontSize: "14px",
                    }}
                  >
                    <span style={{ fontWeight: "500", fontSize: "16px" }}>
                      Price : {currencySymbol?.Currencysymbol}
                      {(
                        (cartSelectData?.UnitCost ?? 0) +
                        (mtrdData?.Z ?? 0) +
                        (dqcData ?? 0) +
                        (csqcData ?? 0) +
                        (sizeMarkup ?? 0) +
                        (metalUpdatedPrice() ?? 0) +
                        (diaUpdatedPrice() ?? 0) +
                        (colUpdatedPrice() ?? 0)
                      ).toFixed(2)}
                    </span>
                    <button>Save</button>
                  </div>
                  <div className="similingCartPageBotttomMain">
                    <div
                      className="smilingQualityMain"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        type="text"
                        style={{
                          border: "0px",
                          textAlign: "center",
                          outline: "none",
                          width: "80px",
                          height: "35px",
                          border: "1px solid #7d7f85",
                        }}
                        maxLength={2}
                        className="simlingQualityBox"
                        inputMode="numeric"
                        onClick={(event) => event.target.select()}
                        value={lastEnteredQuantity}
                        onChange={(event) => handleInputChange(event)}
                      />
                      <button
                        className="SmilingUpdateQuantityBtn"
                        onClick={() =>
                          handleUpdateQuantity(prodSelectData?.designno)
                        }
                      >
                        QTY
                      </button>
                    </div>

                    <div
                      className="smilingAddresingleMobileMain"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "30px",
                      }}
                    >
                      <textarea
                        type="text"
                        placeholder="Enter Remarks..."
                        value={remarks}
                        onChange={(event) => handleInputChangeRemarks(event)}
                        className="YourCartMainRemkarBoxSingle"
                      />
                      <button
                        onClick={() => handleSubmit(cartSelectData)}
                        className="SmilingAddSingleRemkarBtn"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </>
  );
}

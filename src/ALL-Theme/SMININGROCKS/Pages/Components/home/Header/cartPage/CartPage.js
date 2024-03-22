import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Box, CircularProgress, Divider, Drawer, Tab, Tabs, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Footer from '../../Footer/Footer';
import { CartListCounts, WishListCounts } from '../../../../../../../Recoil/atom';
import { GetCount } from '../../../../../Utils/API/GetCount';
import { CommonAPI } from '../../../../../Utils/API/CommonAPI';
import './CartPage.css'
import { ToastContainer, toast } from 'react-toastify';


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
    const [imageURL, setImageURL] = useState('');
    const [yKey, setYouKey] = useState('');
    const [customerID, setCustomerID] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isProductCuFlag, setIsProductCuFlag] = useState('');
    const [isMetalCutoMizeFlag, setIsMetalCutoMizeFlag] = useState('');
    const [isDaimondCstoFlag, setIsDaimondCstoFlag] = useState('');
    const [isCColrStoneCustFlag, setIsCColrStoneCustFlag] = useState('');
    const [currency, setCurrency] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [colorData, setColorData] = useState([]);
    const [metalColorData, setMetalColorData] = useState([]);
    const [metalType, setMetalType] = useState([]);
    const [DaimondQualityColor, setDaimondQualityColor] = useState([]);
    const [showDropdowns, setShowDropdowns] = useState(Array(cartListData.length).fill(false));
    const [prodSelectData,setProdSelectData] = useState();
    const [cartSelectData,setCartSelectData] = useState();

    const setCartCount = useSetRecoilState(CartListCounts)
    const setWishCount = useSetRecoilState(WishListCounts)

    const navigation = useNavigate();


    const getCountFunc = async () => {
        await GetCount().then((res) => {
            if (res) {
                setCartCount(res.CountCart)
                setWishCount(res.WishCount)
            }
        })

    }


    useEffect(() => {
        getCountFunc()
    }, [])

    useEffect(() => {

        const currencyCombo = JSON.parse(localStorage.getItem("CURRENCYCOMBO"));
        setCurrency(currencyCombo?.Currencysymbol);
        getCartData();
    }, []);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('QualityColor'));
        if (storedData) {
            setColorData(storedData);
        }

        const storedData1 = JSON.parse(localStorage.getItem('ColorStoneQualityColor'));
        if (storedData1) {
            setDaimondQualityColor(storedData1);
        }

        const storedData2 = JSON.parse(localStorage.getItem('MetalTypeData'));
        if (storedData2) {
            setMetalType(storedData2);
        }

        const storedData3 = JSON.parse(localStorage.getItem('MetalColorData'));
        if (storedData3) {
            setMetalColorData(storedData3);
        }
    }, []);

    const getSizeData = async (item, index) => {

        const newShowDropdowns = [...showDropdowns];
        newShowDropdowns[index] = true;
        setShowDropdowns(newShowDropdowns);
        try {
            const storedEmail = localStorage.getItem('registerEmail') || '';
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;

            const storedData = localStorage.getItem('loginUserDetail') || '0';
            const data = JSON.parse(storedData);
            const customerid = data?.id;
            let autoC = item.autocode
            const combinedValue = JSON.stringify({
                autocode: `${autoC}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"\",\"mode\":\"CATEGORYSIZECOMBO\",\"appuserid\":\"${storedEmail}\"}`,
                "f": "index (getSizeData)",
                "p": encodedCombinedValue
            }
            const response = await CommonAPI(body);
            if (response.Data?.rd) {
                const sizeDropdownData = response.Data.rd;
                const selectElement = document.getElementById(`sizeDropdown_${index}`);

                if (selectElement) {
                    console.log('sizeDropdownData.lengthsizeDropdownData.length', sizeDropdownData.length);
                    if (sizeDropdownData.length === 0) {
                        selectElement.innerHTML = '';
                        const optionElement = document.createElement('option');
                        optionElement.text = "NO DATA AVAILABEL";
                        selectElement.add(optionElement);
                    } else {
                        selectElement.innerHTML = '';
                        sizeDropdownData.forEach(option => {
                            const optionElement = document.createElement('option');
                            optionElement.text = option.sizename;
                            optionElement.value = option.id;
                            selectElement.add(optionElement);
                        });
                    }
                }
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleSave = (index) => {
        // Your save logic here
        const newShowDropdowns = [...showDropdowns];
        newShowDropdowns[index] = false;
        setShowDropdowns(newShowDropdowns);
    }

    const getCartData = async () => {
        try {
            // cartListData.length === 0 && setIsLoading(true);
            cartListData.length === 0 && setIsLoading(true);
            const ImageURL = localStorage.getItem('UploadLogicalPath');
            setImageURL(ImageURL);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const storedData = localStorage.getItem('loginUserDetail');
            const data = JSON.parse(storedData);
            const customerid = data.id;
            setIsProductCuFlag(storeInit.IsProductWebCustomization);
            setIsMetalCutoMizeFlag(storeInit.IsMetalCustomization);
            setIsDaimondCstoFlag(storeInit.IsDiamondCustomization)
            setIsCColrStoneCustFlag(storeInit.IsCsCustomization)
            setCustomerID(data.id);
            const customerEmail = data.userid;
            setUserEmail(customerEmail);

            const { FrontEnd_RegNo, ukey } = storeInit;
            setYouKey(ukey);

            const combinedValue = JSON.stringify({
                CurrentPage: "1", PageSize: "1000", ukey: `${ukey}`, CurrRate: "1", FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
            });

            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"\",\"mode\":\"GetCartDetails\",\"appuserid\":\"${customerEmail}\"}`,
                "f": "Header (getCartData)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);

            if (response?.Data) {
                setCartListData(response?.Data?.rd);
                setMainRemarks(response?.Data?.rd[0].OrderRemarks);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleRemove = async (data) => {
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                designno: `${data.designno}`, autocode: `${data.autocode}`, metalcolorid: '0', isSolStockNo: '0', is_show_stock_website: '0', isdelete_all: '0', FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`, cartidlist: ''
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${userEmail}\"}`,
                "f": "myWishLisy (handleRemoveCatList)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                getCartData();
                getCountFunc()
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }

    }

    const [remarks, setRemarks] = useState({});
    const [Mainremarks, setMainRemarks] = useState('');

    const handleInputChangeMainRemarks = (e) => {
        setMainRemarks(e.target.value)
    }
    const submitMainRemrks = async () => {
        if (!Mainremarks || Mainremarks.trim() === '') {
            toast.error('Enter a value for remark.');
        } else {
            try {
                setIsLoading(true);
                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo } = storeInit;
                const combinedValue = JSON.stringify({
                    orderremarks: `${Mainremarks}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
                });
                const encodedCombinedValue = btoa(combinedValue);
                const body =
                {
                    "con": `{\"id\":\"\",\"mode\":\"SAVEORDERREMARK\",\"appuserid\":\"${userEmail}\"}`,
                    "f": "Header (handleMainRemrks)",
                    p: encodedCombinedValue
                };
                const response = await CommonAPI(body);
                if (response.Data.rd[0].stat === 1) {
                    toast.success('Add remark successfully');
                } else {
                    alert('Error');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        }
    }

    const handleSubmit = async (index, data) => {
        const remark = remarks[index];
        if (!remark || remark.trim() === '') {
            toast.error('Enter a value for remarks.');
        } else {

            try {
                setIsLoading(true);
                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo } = storeInit;
                const combinedValue = JSON.stringify({
                    designno: `${data.designno}`, autocode: `${data.autocode}`, remarks: `${remark}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
                });
                const encodedCombinedValue = btoa(combinedValue);
                const body =
                {
                    "con": `{\"id\":\"\",\"mode\":\"SAVEDESIGNREMARK\",\"appuserid\":\"${userEmail}\"}`,
                    "f": "Header (handleSingleRemaksSubmit)",
                    p: encodedCombinedValue
                };
                const response = await CommonAPI(body);
                if (response.Data.rd[0].stat === 1) {
                    // setRemarks(prevRemarks => ({
                    //   ...prevRemarks,
                    //   [index]: ''
                    // }));
                    toast.success('Add remark successfully');
                } else {
                    alert('Error');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const [lastEnteredQuantityIndex, setLastEnteredQuantityIndex] = useState(null);
    const [lastEnteredQuantity, setLastEnteredQuantity] = useState('');

    const handleInputChange = (event, index) => {
        let { value } = event.target;
        if (index >= 0 && index < cartListData.length) {
            value = value.replace(/\D|^0+/g, '');
            const updatedCartList = [...cartListData];
            updatedCartList[index] = { ...updatedCartList[index], Quantity: value };
            setCartListData(updatedCartList);
            setLastEnteredQuantityIndex(index);
            setLastEnteredQuantity(value);
        }
    };

    const handleUpdateQuantity = async (num) => {
        if (lastEnteredQuantity.length === 0) {
            toast.error('change the value first');
        } else {
            try {
                const updatedQuantity = cartListData[lastEnteredQuantityIndex].Quantity;
                const firstItemQuantity = cartListData.length > 0 ? cartListData[0].Quantity : null;
                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo } = storeInit;
                const combinedValue = JSON.stringify({
                    designno: `${num}`, Quantity: `${updatedQuantity}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
                });
                const encodedCombinedValue = btoa(combinedValue);
                const body = {
                    "con": `{\"id\":\"\",\"mode\":\"UpdateQuantity\",\"appuserid\":\"${userEmail}\"}`,
                    "f": "header (handleUpdateQuantity)",
                    p: encodedCombinedValue
                };
                const response = await CommonAPI(body);
                if (response.Data.rd[0].stat === 1) {
                    toast.success('QTY change successfully');
                } else {
                    alert('Error');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
            }
        }
    };


    const [value, setValue] = useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleRemoveAllWishList = async () => {
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                designno: '', autocode: '', metalcolorid: '0', isSolStockNo: '0', is_show_stock_website: '0', isdelete_all: '1', FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`, cartidlist: ''
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${userEmail}\"}`,
                "f": "myWishLisy (handleRemoveCatList)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                getCartData();
                getCountFunc()
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

     useEffect(()=>{
        const prodData = JSON.parse(localStorage.getItem("allproductlist")) 

        let isCartData = cartSelectData ? cartSelectData : cartListData[0]

        const finalProdData = prodData.filter((pd)=>pd?.designno === isCartData?.designno && pd?.autocode === isCartData?.autocode)[0]

        if(finalProdData){
            setProdSelectData(finalProdData)
        }
        
    },[cartSelectData,cartListData])
    
    console.log("finalProdData",prodSelectData)

    return (
        <div className='paddingTopMobileSet' style={{ backgroundColor: '#c0bbb1', paddingTop: '110px' }}>
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <ToastContainer />

            <div className='smilingCartPageMain'>

                <div
                    style={{
                        width: '-webkit-fill-available',
                        backgroundColor: 'white',
                        zIndex: '111'
                    }}
                >

                    <p className='SmiWishListTitle' style={{paddingTop:'30px'}}>My Cart</p>

                    {cartListData?.length !== 0 &&
                        <div>
                            <div className='smilingListTopButton' style={{ marginTop: '0px' }}>
                                <button className='smiTopClearBtn' onClick={() => handleChange(0)}>List View</button>
                                <button className='smiTopAddAllBtn' onClick={() => handleChange(1)}>Image View</button>
                                <button className='smiTopClearBtn' onClick={handleRemoveAllWishList}>CLEAR ALL</button>
                                <button className='smiTopAddAllBtn' onClick={() => navigation('/productpage')}>Show ProductList</button>
                                <button
                                    className="placeOrderCartPageBtnMobile"
                                    onClick={(event) => {
                                        navigation('/Delivery');
                                    }}
                                >
                                    Place Order
                                </button>
                            </div>
                            <div className='smilingCartPagePlaceOrderBtnMainWeb' style={{ display: 'flex', justifyContent: 'flex-end', margin: '-50px 25px 0px 20px', paddingBottom: '50px' }}>
                                <button
                                    className="placeOrderCartPageBtn"
                                    onClick={(event) => {
                                        navigation('/Delivery');
                                    }}
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    }

                </div>

                <CustomTabPanel value={value} index={0}>
                    <div 
                      style={{ 
                        // paddingBottom: "150px", 
                        // marginTop: '10px', 
                        paddingInline: '10px', 
                        display: 'flex' 
                        }}
                    >
                        <div className='smilingCartDeatilSub1'>
                            <div style={{width:'100%',height:'70%',marginTop:'0px',display:'flex',justifyContent:'space-around',alignItems:'center',gap:'20px'}}>
                                <img 
                                src={prodSelectData?.imagepath + prodSelectData?.MediumImagePath?.split(",")[0] }
                                 style={{
                                    border:'1px solid #e1e1e1',
                                    borderRadius:'12px',
                                    width:'50%'
                                }}
                                />

                                <div style={{display:'flex',flexDirection:'column'}}>
                                   <button className='newBtn'> Customize</button>
                                   <button className='newBtn'> Remark</button>
                                </div>
                            </div>
                        </div>
                        <div className='smilingCartDeatilSub2'>

                            {cartListData?.length === 0 ? !isLoading && (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: "150px",
                                    }}
                                >
                                    <p style={{ margin: "0px", fontSize: "20px", fontWeight: 500 }}>
                                        No Data Available
                                    </p>
                                    <p>Please First Add To Cart Data</p>
                                    <button className='browseBtnMore' onClick={() => navigation('/productpage')}>BROWSE OUR COLLECTION</button>
                                </div>
                            ) : (
                                <div>

                                    <div style={{ display: 'flex', flexWrap: 'wrap' , height: '565px', overflowY: 'auto' }}>
                                        {cartListData?.map((item, index) => (
                                            <div key={item.id} className="smiling-cartPageBoxMain" onClick={()=>setCartSelectData(item)}>
                                                <div
                                                    style={{
                                                        cursor: "pointer",
                                                        position: 'absolute',
                                                        right: '15px',
                                                        top: '10px'
                                                    }}
                                                    onClick={() => handleRemove(item)}
                                                >
                                                    <CloseIcon />
                                                </div>
                                                <img
                                                    src={`${imageURL}/${yKey}/${item.DefaultImageName}`}
                                                    alt="#"
                                                    className='cartImageShow'
                                                />
                                                <div className='smilingCartBox1' style={{ padding: '5px' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <p style={{ margin: '0px', fontSize: '12px' }}>NWT : <span style={{ fontWeight: 600 }}>{item?.MetalWeight}</span></p>
                                                        <p style={{ margin: '0px', fontSize: '12px' }}>DWT : <span style={{ fontWeight: 600 }}>{item?.Rec_DiamondWeight} / {item?.totaldiamondpcs}</span></p>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <p style={{ margin: '0px', fontSize: '12px' }}>CWT : <span style={{ fontWeight: 600, }}>{item?.Rec_CSWeight} / {item?.totalcolorstonepcs}</span></p>
                                                        <p style={{ margin: '0px', fontSize: '12px' }}>GWT : <span style={{ fontWeight: 600 }}>{item?.grossweight}</span></p>

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
                                        style={{ marginTop: "30px" }}
                                    />
                                    <div className="addRemkarMainBottom">
                                        <button
                                            onClick={submitMainRemrks}
                                            className="SmilingAddRemkarBtn"
                                            style={{ marginTop: '10px' }}
                                        >
                                            Add Order Remark
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div style={{ paddingBottom: "150px", marginTop: '10px' }}>
                        {cartListData?.length === 0 ? !isLoading && (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: "150px",
                                }}
                            >
                                <p style={{ margin: "0px", fontSize: "20px", fontWeight: 500 }}>
                                    No Data Available
                                </p>
                                <p>Please First Add To Cart Data</p>
                                <button className='browseBtnMore' onClick={() => navigation('/productpage')}>BROWSE OUR COLLECTION</button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: cartListData?.length > 5 && 'center' }}>
                                {cartListData?.map((item, index) => (
                                    <div key={item.id} className="smiling-cartBoxMainImageView">
                                        <div className='smilingCartMobileMain' style={{ display: 'flex' }}>
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
            <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
                <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>BACK TO TOP</p>
            </div>
        </div>
    )
}

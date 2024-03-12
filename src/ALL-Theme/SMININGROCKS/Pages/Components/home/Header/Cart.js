import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { CircularProgress, Divider, Drawer } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { CartListCounts, WishListCounts } from '../../../../../../Recoil/atom';
import { GetCount } from '../../../../Utils/API/GetCount';


export default function Cart({ open, toggleCartDrawer }) {

    const [cartListData, setCartListData] = useState([]);
    const [imageURL, setImageURL] = useState('');
    const [yKey, setYouKey] = useState('');
    const [customerID, setCustomerID] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isProductCuFlag, setIsProductCuFlag] = useState('');
    const [isMetalCutoMizeFlag, setIsMetalCutoMizeFlag] = useState('');
    const [isDaimondCstoFlag, setIsDaimondCstoFlag] = useState('');
    const [isCColrStoneCustFlag, setIsCColrStoneCustFlag] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [colorData, setColorData] = useState([]);
    const [metalColorData, setMetalColorData] = useState([]);
    const [metalType, setMetalType] = useState([]);
    const [DaimondQualityColor, setDaimondQualityColor] = useState([]);
    const [showDropdowns, setShowDropdowns] = useState(Array(cartListData.length).fill(false));

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
        if (open) {
            getCartData();
        }
    }, [open]);
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
                    selectElement.innerHTML = '';
                    sizeDropdownData.forEach(option => {
                        const optionElement = document.createElement('option');
                        optionElement.text = option.sizename;
                        optionElement.value = option.id;
                        selectElement.add(optionElement);
                    });
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
            alert('Enter a value for remarks.');
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
                    alert('done');
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
            alert('Enter a value for remarks.');
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
                    alert('done');
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
            alert('enter value first');
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
                    alert('done');
                } else {
                    alert('Error');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                // Uncomment if needed:
                // setIsLoading(false);
            }
        }
    };


    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={toggleCartDrawer(false)}
            transitionDuration={500}
            sx={{
                "& .MuiDrawer-paper": {
                    width: "40%",
                    maxWidth: "40%",
                },
            }}
            className='cartDrawerMainMobile'
        >
            {/* <div style={{ position: 'relative' }}> */}
            {isLoading && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        paddingTop: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        display: 'flex',
                        justifyContent: 'center',
                        zIndex: 1
                    }}
                >
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        margin: "20px",
                    }}
                >
                    <CloseIcon
                        onClick={toggleCartDrawer(false)}
                        style={{ cursor: "pointer", color: "#7d7f85" }}
                    />
                </div>
                <p
                    style={{
                        fontSize: "40px",
                        color: "#7d7f85",
                        textAlign: "center",
                        fontFamily: "FreightDispProBook-Regular,Times New Roman,serif",
                    }}
                >
                    Your Cart
                </p>
            </div>
            <div style={{ paddingBottom: "150px" }}>
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
                    </div>
                ) : (
                    <div>
                        {cartListData?.map((item, index) => (
                            <div key={item.id} className="smiling-cartBoxMain">
                                <div className='smilingCartMobileMain' style={{ display: 'flex' }}>
                                    <div
                                        style={{
                                            position: "absolute",
                                            right: "25px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => handleRemove(item)}
                                    >
                                        <CloseIcon />
                                    </div>
                                    <div className='smilingCartImage'>
                                        <img
                                            src={`${imageURL}/${yKey}/${item.DefaultImageName}`}
                                            className="smiling-cartBoxImg"
                                        />
                                    </div>
                                    <div className='smilingCartBox1' style={{ width: "65%", margin: "20px" }}>
                                        <p className='smilingMobileCartDeatil' style={{ margin: '10px 70px 10px 10px' }}>
                                            <span style={{ fontWeight: 600 }}>{item.metalcolorname} {item.metaltypename}</span> with
                                            <span style={{ fontWeight: 600 }}> {item.Rec_NetWeight}</span> with gross wt of
                                            <span style={{ fontWeight: 600 }}> {item.grossweight}</span> including
                                            <span style={{ fontWeight: 600 }}>  {item.totalDiaWt}({item.totaldiamondpcs})</span> of daimonds in
                                            <span style={{ fontWeight: 600 }}> {item.diamondcolor} </span>
                                            {
                                                item.totalCSWt !== 0 && (
                                                    <>
                                                        and
                                                        <span style={{ fontWeight: 600 }}> {item.totalCSWt}({item.totalcolorstonepcs})</span>
                                                    </>
                                                )
                                            }
                                            {item.colorstonequality !== "" && (
                                                <>of CS in <span style={{ fontWeight: 600 }}>
                                                    {item.colorstonequality}({item.colorstonecolor})
                                                </span></>
                                            )}
                                        </p>

                                        {showDropdowns[index] ? (<div>
                                            <div
                                                style={{ display: "flex", width: "100%", marginTop: "12px" }}
                                                className="srcolorsizecarat"
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        width: "49.5%",
                                                    }}
                                                >
                                                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                                                        SIZE:
                                                    </label>
                                                    <select
                                                        id={`sizeDropdown_${index}`}
                                                        style={{
                                                            border: "none",
                                                            outline: "none",
                                                            color: "#7d7f85",
                                                            fontSize: "12.5px",
                                                        }}
                                                    >

                                                    </select>
                                                </div>
                                                <Divider
                                                    orientation="vertical"
                                                    flexItem
                                                    style={{
                                                        opacity: 1,
                                                        height: "30px",
                                                        margin: "10px 10px 0px 10px",
                                                    }}
                                                />
                                                {isMetalCutoMizeFlag == 1 &&
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            width: "47.5%",
                                                        }}
                                                    >
                                                        <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                                                            METAL COLOR:
                                                        </label>
                                                        <select
                                                            style={{
                                                                border: "none",
                                                                outline: "none",
                                                                color: "#7d7f85",
                                                                fontSize: "12.5px",
                                                            }}
                                                        >
                                                            {metalColorData.map((colorItem) => (
                                                                <option key={colorItem.ColorId} value={colorItem.ColorId}>
                                                                    {colorItem.metalcolorname}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>}
                                            </div>
                                            <Divider sx={{ marginTop: '10px', background: '#a9a7a7' }} />
                                            <div
                                                style={{ display: "flex", width: "100%", marginTop: "12px" }}
                                                className="srcolorsizecarat"
                                            >
                                                {isDaimondCstoFlag == 1 && <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        width: "49.5%",
                                                    }}
                                                >
                                                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                                                        DAIMOND QUALITY COLOR:
                                                    </label>
                                                    <select
                                                        style={{
                                                            border: "none",
                                                            outline: "none",
                                                            color: "#7d7f85",
                                                            fontSize: "12.5px",
                                                        }}
                                                    >
                                                        {colorData.map((colorItem) => (
                                                            <option key={colorItem.ColorId} value={colorItem.ColorId}>
                                                                {colorItem.color}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>}
                                                <Divider
                                                    orientation="vertical"
                                                    flexItem
                                                    style={{
                                                        opacity: 1,
                                                        height: "30px",
                                                        margin: "0px 10px 0px 10px",
                                                    }}
                                                />
                                                {isMetalCutoMizeFlag == 1 && <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        width: "49.5%",
                                                    }}
                                                >
                                                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                                                        METAL TYPE:
                                                    </label>
                                                    <select
                                                        style={{
                                                            border: "none",
                                                            outline: "none",
                                                            color: "#7d7f85",
                                                            fontSize: "12.5px",
                                                        }}
                                                    >
                                                        {metalType.map((data, index) => (
                                                            <option key={index}>
                                                                {data.metaltype}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>}
                                            </div>
                                            <Divider sx={{ marginTop: '20px', background: '#a9a7a7' }} />
                                            {isCColrStoneCustFlag == 1 && <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    width: "48%",
                                                }}
                                            >
                                                <label style={{ fontSize: "12.5px", color: "#7d7f85", marginTop: '10px' }}>
                                                    COLOR STONE QUALITY COLOR:
                                                </label>
                                                <select
                                                    style={{
                                                        border: "none",
                                                        outline: "none",
                                                        color: "#7d7f85",
                                                        fontSize: "12.5px",
                                                    }}
                                                >
                                                    {DaimondQualityColor.map((data, index) => (
                                                        <option key={index}>
                                                            {data.color}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>}
                                            <button className="SmilingCustomzeSaveBtn" style={{ marginTop: '10px' }} onClick={() => handleSave(index)}>Save</button>
                                        </div>
                                        ) : (
                                            isProductCuFlag == 1 &&
                                            <div className="addRemkarMain">
                                                <button className="SmilingAddRemkarBtn" style={{ marginTop: '20px' }} onClick={() => getSizeData(item, index)}>
                                                    Customization
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='similingCartBotttomMain'>
                                    <div className='smilingQualityMain' style={{ display: "flex", alignItems: 'center', }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                height: "40px",
                                                border: "1px solid #7d7f85",
                                            }}
                                        >
                                            <input
                                                type="text"
                                                style={{
                                                    border: "0px",
                                                    textAlign: "center",
                                                    outline: "none",
                                                    width: "130px",
                                                }}
                                                maxLength={2}
                                                className='simlingQualityBox'
                                                inputMode="numeric"
                                                value={item.Quantity}
                                                onChange={(event) => handleInputChange(event, index)}
                                            />
                                        </div>
                                        <button className="SmilingUpdateQuantityBtn" onClick={() => handleUpdateQuantity(item.designno)}>QTY</button>
                                    </div>

                                    <div className='smilingAddresingleMobileMain' style={{ display: "flex", alignItems: 'center', marginLeft: '30px' }}>
                                        <textarea
                                            type="text"
                                            placeholder="Enter Remarks..."
                                            value={item.Remarks || ""}
                                            onChange={(e) => {
                                                const updatedCartListData = [...cartListData];
                                                updatedCartListData[index].Remarks = e.target.value;
                                                setCartListData(updatedCartListData);
                                                setRemarks((prevRemarks) => ({
                                                    ...prevRemarks,
                                                    [index]: e.target.value,
                                                }));
                                            }}
                                            className="YourCartMainRemkarBoxSingle"
                                        />
                                        <button
                                            onClick={() => handleSubmit(index, item)}
                                            className="SmilingAddSingleRemkarBtn"
                                        >
                                            Add Remarks
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                        <textarea
                            label="Enter Remarks"
                            variant="outlined"
                            placeholder="Enter Main Remark"
                            value={Mainremarks}
                            rows={4}
                            onChange={(e) => handleInputChangeMainRemarks(e)}
                            className="YourCartMainRemkarBox"
                            style={{ marginTop: "30px" }}
                        />
                        <div className="addRemkarMain">
                            <button
                                onClick={submitMainRemrks}
                                className="SmilingAddRemkarBtn"
                            >
                                Add Order Remark
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {cartListData?.length !== 0 && (
                <div className="placeOrderBtnMain">
                    <button
                        className="placeOrderBtn"

                        onClick={(event) => {
                            toggleCartDrawer(false)(event);
                            navigation('/Delivery');
                        }}
                    >
                        Place Order
                    </button>
                </div>
            )}
            {/* </div> */}
        </Drawer>
    )
}

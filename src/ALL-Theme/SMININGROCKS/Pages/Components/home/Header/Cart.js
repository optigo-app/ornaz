import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { CircularProgress, Divider, Drawer } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Cart({ open, toggleCartDrawer }) {

    const [cartListData, setCartListData] = useState([]);
    const [imageURL, setImageURL] = useState('');
    const [yKey, setYouKey] = useState('');
    const [customerID, setCustomerID] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [colorData, setColorData] = useState([]);
    const [metalColorData, setMetalColorData] = useState([]);
    const [metalType, setMetalType] = useState([]);
    const [DaimondQualityColor, setDaimondQualityColor] = useState([]);
    const [showDropdowns, setShowDropdowns] = useState(Array(cartListData.length).fill(false));

    const navigation = useNavigate();



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
        console.log('responseresponse', item.designno);

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
            // setIsLoading(false);
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
            const ImageURL = localStorage.getItem('UploadLogicalPath');
            setImageURL(ImageURL);
            const storedData = localStorage.getItem('loginUserDetail');
            const data = JSON.parse(storedData);
            const customerid = data.id;
            setCustomerID(data.id);
            const customerEmail = data.userid;
            setUserEmail(customerEmail);

            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
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
            // setIsLoading(true);
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
                // navigation('/myWishList')
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
    const handleInputChangeRemarks = (e, index) => {
        const { value } = e.target;
        setRemarks(prevRemarks => ({
            ...prevRemarks,
            [index]: value
        }));
    };

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

    const handleIncrement = (index) => {
        if (index >= 0 && index < cartListData.length && cartListData[index]) {
            const updatedCartList = [...cartListData];
            const currentQuantity = parseInt(updatedCartList[index].Quantity, 10) || 0;
            updatedCartList[index].Quantity = Math.min(currentQuantity + 1, 99);
            setCartListData(updatedCartList);
        }
    };

    const handleDecrement = (index) => {
        if (index >= 0 && index < cartListData.length && cartListData[index]) {
            const updatedCartList = [...cartListData];
            const currentQuantity = parseInt(updatedCartList[index].Quantity, 10) || 0;
            updatedCartList[index].Quantity = Math.max(currentQuantity - 1, 1);
            setCartListData(updatedCartList);
        }
    };

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
        try {
            const updatedQuantity = cartListData[lastEnteredQuantityIndex].Quantity;
            const firstItemQuantity = cartListData.length > 0 ? cartListData[0].Quantity : null;

            // setIsLoading(true);
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
            // setIsLoading(false);
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
        >
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
                {cartListData?.length === 0 ? (
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
                                <div style={{ display: 'flex' }}>
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
                                    <div style={{ width: "65%", margin: "20px" }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <p style={{ fontSize: "14px", color: "#7d7f85" }}>
                                                {item.designno}
                                            </p>
                                            {/* <p className="CartPageShipingIn">Ships in 14 days</p> */}
                                            <p style={{ color: "#7d7f85", marginRight: "50px" }}>
                                                ${item.TotalUnitCost}
                                            </p>
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "14px",
                                                marginTop: "-20px",
                                                color: "#7d7f85",
                                            }}
                                        >
                                            <p style={{ margin: '0px' }}>Category : <span style={{ fontWeight: 500 }}>{item.Mastermanagement_CategoryName}</span></p>
                                            <div style={{ display: 'flex' }}>
                                                <p style={{ marginBlock: '5px' }}>GWT : <span style={{ fontWeight: 500 }}>{item.grossweight}</span></p>
                                                <p style={{ marginLeft: '50px', marginBlock: '5px' }}>NETW : <span style={{ fontWeight: 500 }}>{item.Rec_NetWeight}</span></p>
                                            </div>
                                            <p>MTYPE / MCOLOR : <span style={{ fontWeight: 500 }}>{item.metaltypename} / {item.metalcolorname}</span></p>
                                            <br />
                                        </div>
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
                                                </div>
                                            </div>
                                            <Divider sx={{ marginTop: '10px', background: '#a9a7a7' }} />
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
                                                </div>
                                                <Divider
                                                    orientation="vertical"
                                                    flexItem
                                                    style={{
                                                        opacity: 1,
                                                        height: "30px",
                                                        margin: "0px 10px 0px 10px",
                                                    }}
                                                />
                                                <div
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
                                                </div>
                                            </div>
                                            <Divider sx={{ marginTop: '20px', background: '#a9a7a7' }} />
                                            <div
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
                                            </div>
                                            <button className="SmilingAddRemkarBtn" style={{ marginTop: '10px' }} onClick={() => handleSave(index)}>Save</button>
                                        </div>
                                        ) : (
                                            <div className="addRemkarMain">
                                                <button className="SmilingAddRemkarBtn" onClick={() => getSizeData(item, index)}>
                                                    customization
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', padding: '0px 10px 10px 10px' }}>
                                    <div style={{ display: "flex", alignItems: 'center', }}>
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
                                                    width: "100px",
                                                }}
                                                maxLength={2}
                                                inputMode="numeric"
                                                value={item.Quantity}
                                                onChange={(event) => handleInputChange(event, index)}
                                            />
                                        </div>
                                        <button className="SmilingUpdateQuantityBtn" onClick={() => handleUpdateQuantity(item.designno)}>QUANTITY</button>
                                    </div>

                                    <div style={{ display: "flex", alignItems: 'center', marginLeft: '30px' }}>
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
                                Add Main Remark
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {cartListData?.length !== 0 && (
                <div className="placeOrderBtnMain">
                    <button
                        className="placeOrderBtn"
                        onClick={() => { toggleCartDrawer(false); navigation("/Delivery"); }}
                    >
                        Place Order
                    </button>
                </div>
            )}
        </Drawer>
    )
}

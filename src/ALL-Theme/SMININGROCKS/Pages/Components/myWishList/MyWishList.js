import React, { useEffect, useState } from 'react'
import Header from '../home/Header/Header'
import './MyWishList.css'
import Footer from '../home/Footer/Footer'
import { CommonAPI } from '../../../Utils/API/CommonAPI'
import { useNavigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { CircularProgress } from '@mui/material'

export default function MyWishList() {

    const [wishlistData, setWishlistData] = useState([]);
    const [yKey, setYouKey] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [customerID, setCustomerID] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedData = localStorage.getItem('loginUserDetail');
                const ImageURL = localStorage.getItem('UploadLogicalPath');
                setImageURL(ImageURL);
                const data = JSON.parse(storedData);
                const customerid = data.id;
                setCustomerID(data.id);
                const customerEmail = data.email1;
                setUserEmail(customerEmail);
                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo ,ukey } = storeInit;
                setYouKey(ukey);
                const combinedValue = JSON.stringify({
                    is_show_stock_website: "0", PageSize: "1000", CurrentPage: "1", FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`, UploadLogicalPath: "", ukey: `${ukey}`, ThumDefImg: "", CurrencyRate: '1'
                });
                console.log('combinedValuecombinedValue...', combinedValue);

                const encodedCombinedValue = btoa(combinedValue);
                const body = {
                    "con": `{\"id\":\"Store\",\"mode\":\"GetWishList\",\"appuserid\":\"${customerEmail}\"}`,
                    "f": "MyWishList (GetWishList)",
                    p: encodedCombinedValue
                };
                const response = await CommonAPI(body);
                console.log('response...', response);
                if (response.Data) {
                    setWishlistData(response.Data.rd);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                // setIsLoading(false);
            }
        };
        fetchData();
    }, [isLoading]);


    const handleAddToCart = async (autoCode) => {
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                autocodelist: `${autoCode}`, ischeckall: '', FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"addwishlisttocart\",\"appuserid\":\"${userEmail}\"}`,
                "f": "MyWishLsit(addwishlisttocart)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            console.log('response...', response);
            if (response.Data.rd[0].stat === 1) {
                navigation('/myWishList')
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleAddAll = async () => {
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                autocodelist: '', ischeckall: '1', FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"addwishlisttocart\",\"appuserid\":\"${userEmail}\"}`,
                "f": "MyWishLsit(addwishlisttocart)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            console.log('response...', response);
            if (response.Data.rd[0].stat === 1) {
                navigation('/myWishList')
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleRemoveWichList = async (data) => {
        console.log('dataaaaaaaJ', JSON.stringify(data));

        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                designlist: `'${data.designno}'`, isselectall: '0', FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
            });
            console.log('combinedValuecombinedValue...', combinedValue);
            console.log('userEmailuserEmail...', userEmail);
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"removeFromWishList\",\"appuserid\":\"${userEmail}\"}`,
                "f": "myWishLisy (handleRemoveWichList)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            console.log('response...', response);
            if (response.Data.rd[0].stat === 1) {
                // alert('Remove Success');
                // window.location.reload();
                navigation('/myWishList')
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleRemoveAllWishList = async () => {
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                designlist: '', isselectall: '1', FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
            });
            console.log('combinedValuecombinedValue...', combinedValue);
            console.log('userEmailuserEmail...', userEmail);
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"removeFromWishList\",\"appuserid\":\"${userEmail}\"}`,
                "f": "myWishLisy (handleRemoveWichList)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            console.log('response...', response);
            if (response.Data.rd[0].stat === 1) {
                // alert('Remove Success');
                // window.location.reload();
                navigation('/myWishList')
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div style={{
            backgroundColor: '#c0bbb1',
            paddingTop: '110px'
        }}>
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress />
                </div>
            )}
            <div>
                <div className='smiling-wishlist'>
                    <p className='SmiWishListTitle'>My Wishlist</p>
                    <div className='smilingListTopButton'>
                        <button className='smiTopShareBtn'>SHARE WISHLIST</button>
                        <button className='smiTopClearBtn' onClick={handleRemoveAllWishList}>CLEAR ALL</button>
                        <button className='smiTopAddAllBtn' onClick={handleAddAll}>ADD TO CART ALL</button>
                    </div>

                    <div className='smiWishLsitBoxMain'>
                        {wishlistData?.map(item => (
                            <div key={item.id} className='smiWishLsitBox'>
                                <div style={{ position: 'absolute', right: '20px', top: '5px' }}>
                                    <IoClose style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => handleRemoveWichList(item)} />
                                </div>
                                <img src={`${imageURL}/${yKey}/${item.DefaultImageName}`} className='smiWishLsitBoxImge' alt='Wishlist item' />
                                <p className='smiWishLsitBoxDesc1'>{item.designno}</p>
                                <p className='smiWishLsitBoxDesc2'>{item.mastermanagement_goldtypename} / {item.mastermanagement_goldcolorname} / {item.ActualGrossweight} $ {item.TotalUnitCost}</p>
                                <p className='smiWishLsitBoxDesc3' onClick={() => handleAddToCart(item.autocode)}>ADD TO CART +</p>
                            </div>
                        ))}
                        {/* <div className='smiWishLsitBox'>
                            <img src='https://cdn.shopify.com/s/files/1/0021/8444/6052/products/Lab-grown-diamond-white-gold-necklace-srnl00345wht_grande.jpg?v=1613627041' className='smiWishLsitBoxImge' />
                            <p className='smiWishLsitBoxDesc1'>DRIZZLE 0.38CT LAB GROWN DIAMOND NECKLACE NL-00345WHT</p>
                            <p className='smiWishLsitBoxDesc2'>White Gold / 18 Inches / 0.38 $999.00</p>
                            <p className='smiWishLsitBoxDesc3'>ADD TO CART +</p>
                        </div>
                        <div className='smiWishLsitBox'>
                            <img src='https://cdn.shopify.com/s/files/1/0021/8444/6052/products/Lab-grown-diamond-white-gold-necklace-srnl00345wht_grande.jpg?v=1613627041' className='smiWishLsitBoxImge' />
                            <p className='smiWishLsitBoxDesc1'>DRIZZLE 0.38CT LAB GROWN DIAMOND NECKLACE NL-00345WHT</p>
                            <p className='smiWishLsitBoxDesc2'>White Gold / 18 Inches / 0.38 $999.00</p>
                            <p className='smiWishLsitBoxDesc3'>ADD TO CART +</p>
                        </div>
                        <div className='smiWishLsitBox'>
                            <img src='https://cdn.shopify.com/s/files/1/0021/8444/6052/products/Lab-grown-diamond-white-gold-necklace-srnl00345wht_grande.jpg?v=1613627041' className='smiWishLsitBoxImge' />
                            <p className='smiWishLsitBoxDesc1'>DRIZZLE 0.38CT LAB GROWN DIAMOND NECKLACE NL-00345WHT</p>
                            <p className='smiWishLsitBoxDesc2'>White Gold / 18 Inches / 0.38 $999.00</p>
                            <p className='smiWishLsitBoxDesc3'>ADD TO CART +</p>
                        </div>
                        <div className='smiWishLsitBox'>
                            <img src='https://cdn.shopify.com/s/files/1/0021/8444/6052/products/Lab-grown-diamond-white-gold-necklace-srnl00345wht_grande.jpg?v=1613627041' className='smiWishLsitBoxImge' />
                            <p className='smiWishLsitBoxDesc1'>DRIZZLE 0.38CT LAB GROWN DIAMOND NECKLACE NL-00345WHT</p>
                            <p className='smiWishLsitBoxDesc2'>White Gold / 18 Inches / 0.38 $999.00</p>
                            <p className='smiWishLsitBoxDesc3'>ADD TO CART +</p>
                        </div> */}
                    </div>
                    <Footer />
                </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
                <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => ''}>BACK TO TOP</p>
            </div>
        </div>
    )
}

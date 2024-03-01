import React, { useEffect, useState } from 'react'
import Header from '../home/Header/Header'
import './MyWishList.css'
import Footer from '../home/Footer/Footer'
import { CommonAPI } from '../../../Utils/API/CommonAPI'
import { useNavigate } from 'react-router-dom'

export default function MyWishList() {

    const [wishlistData, setWishlistData] = useState([]);
    const [yKey, setYouKey] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [customerID, setCustomerID] = useState('');

    const navigation = useNavigate();
    https://cdnfs.optigoapps.com/content-global3/gstoreTHO8349NSI2EA6VQP/Design_Image/6jmf6SZ55gMDAwMzg5MQ==/Red_Thumb/0003891_13022024155457613.png

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedData = localStorage.getItem('loginUserDetail');
                const ImageURL = localStorage.getItem('UploadLogicalPath');
                setImageURL(ImageURL);
                const data = JSON.parse(storedData);
                const customerid = data.id;
                setCustomerID(customerID);
                const customerEmail = data.email1;
                const encodedFrontEnd_RegNo = localStorage.getItem('FrontEnd_RegNo');
                const encodedFrontEnd_Ukey = localStorage.getItem('ukey');

                setYouKey(encodedFrontEnd_Ukey);

                const combinedValue = JSON.stringify({
                    is_show_stock_website: "0", PageSize: "1000", CurrentPage: "1", FrontEnd_RegNo: `${encodedFrontEnd_RegNo}`, Customerid: `${customerid}`, UploadLogicalPath: "", ukey: `${encodedFrontEnd_Ukey}`, ThumDefImg: ""
                });
                const encodedCombinedValue = btoa(combinedValue);
                const body = {
                    "con": `{\"id\":\"Store\",\"mode\":\"GetWishList\",\"appuserid\":\"${customerEmail}\"}`,
                    "f": "MyWishList (GetWishList)",
                    p: encodedCombinedValue
                };
                const response = await CommonAPI(body);
                console.log('resssss', response);
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
    }, []);

    const handleAddToCart = (autoCode) => {
        alert(autoCode)
    }
    return (
        <div style={{
            backgroundColor: '#c0bbb1'
        }}>
            <Header />
            <div>
                <div className='smiling-wishlist'>
                    <p className='SmiWishListTitle'>My Wishlist</p>
                    <div className='smilingListTopButton'>
                        <button className='smiTopShareBtn'>SHARE WISHLIST</button>
                        <button className='smiTopClearBtn'>CLEAR ALL</button>
                        <button className='smiTopAddAllBtn'>ADD ALL</button>
                    </div>

                    <div className='smiWishLsitBoxMain'>
                        {wishlistData.map(item => (
                            <div key={item.id} className='smiWishLsitBox'>

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

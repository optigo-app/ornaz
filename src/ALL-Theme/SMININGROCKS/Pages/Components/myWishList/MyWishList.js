import React from 'react'
import Header from '../home/Header/Header'
import './MyWishList.css'
import Footer from '../home/Footer/Footer'

export default function MyWishList() {
    
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
                        </div>
                        <div className='smiWishLsitBox'>
                            <img src='https://cdn.shopify.com/s/files/1/0021/8444/6052/products/Lab-grown-diamond-white-gold-necklace-srnl00345wht_grande.jpg?v=1613627041' className='smiWishLsitBoxImge' />
                            <p className='smiWishLsitBoxDesc1'>DRIZZLE 0.38CT LAB GROWN DIAMOND NECKLACE NL-00345WHT</p>
                            <p className='smiWishLsitBoxDesc2'>White Gold / 18 Inches / 0.38 $999.00</p>
                            <p className='smiWishLsitBoxDesc3'>ADD TO CART +</p>
                        </div>
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

import React from 'react'
import './Masonry.css'

export default function Masonry() {
    return (
        <div>
            <div className='GorMansoryMain'>
                <div className='GorMansoryBox1'>
                    <div>
                        <p>New Layers We Love</p>
                        <img src='https://www.gorjana.com/cdn/shop/files/NOV13-Site_Looks-1.jpg?v=1699488381&%3Bwidth=1180&em-format=avif' className='GorMansoryBox1Img' />
                    </div>
                    <div style={{ marginTop: '40px' }}>
                        <img src='https://www.gorjana.com/cdn/shop/files/NOV13-Site_Looks-2_1.jpg?v=1699639359&%3Bwidth=1180&em-format=avif' className='GorMansoryBox1Img' />
                    </div>
                </div>
                <div className='GorMansoryBox2'>
                    <img src='https://www.gorjana.com/cdn/shop/files/NOV13-Site_Looks-3.jpg?v=1699488426&%3Bwidth=1180&em-format=avif' className='GorMansoryBox2Img' />
                </div>
            </div>
            <div style={{display : 'flex' ,justifyContent: 'center' ,marginBlock: '80px'}}>
                <button className='GorMansoryBtn'>SEE ALL THE LOOKS</button>
            </div>
        </div>
    )
}

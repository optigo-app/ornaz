import React from 'react'
import { PiMapPinLight } from "react-icons/pi";
import './Header.css'

export default function Header() {
    return (
        <div>
            <div className='gorjanaHeader'>
                <div className='gorjanaTopHeader'>
                    <PiMapPinLight  style={{height: '25px' ,width: '40px'}}/>
                    <a href="/pages/store-locator" style={{fontSize: '12px'}}>Find a Store Near You</a>
                </div>
                <div className='gorajanaBottomHeaderMain'>
                    <div className='gorjanaImgMenuMain'>
                        <img src='https://www.gorjana.com/cdn/shop/t/1511/assets/logo-light.svg?v=36596364826355077531701378483&em-format=avif' width='172px' className='gorjanaHederImage' />
                        <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <ul className='gorjanaHeaderMenu'>
                                <li className='gorjana-Menu-item'>Jewelry</li>
                                <li className='gorjana-Menu-item'>Fine Jewelry</li>
                                <li className='gorjana-Menu-item'>New Arrivals</li>
                                <li className='gorjana-Menu-item'>Best Sellers</li>
                                <li className='gorjana-Menu-item'>Gifts</li>
                                <li className='gorjana-Menu-item'>Explore</li>
                            </ul>
                            <p>Sign In</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

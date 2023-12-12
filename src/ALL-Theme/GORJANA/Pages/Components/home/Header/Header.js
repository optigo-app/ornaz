import React from 'react'
import { PiMapPinLight } from "react-icons/pi";
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Header() {

    let navigate = useNavigate()
    return (
        <div>
            <div className='gorjanaHeader'>
                <div className='gorjanaTopHeader'>
                    <PiMapPinLight style={{ height: '25px', width: '40px' }} />
                    <a href="/pages/store-locator" style={{ fontSize: '12px' }}>Find a Store Near You</a>
                </div>
                <div className='gorajanaBottomHeaderMain'>
                    <div className='gorjanaImgMenuMain'>
                        <img src='https://www.gorjana.com/cdn/shop/t/1511/assets/logo-light.svg?v=36596364826355077531701378483&em-format=avif' width='172px' className='gorjanaHederImage'
                            onClick={() => navigate('/')}
                        />
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            alignContent: 'center'
                        }}>
                            <ul className='gorjanaHeaderMenu'>
                                <li className='gorjana-Menu-item' onClick={() => navigate('/jewelry')}>Jewelry</li>
                                <li className='gorjana-Menu-item'>Fine Jewelry</li>
                                <li className='gorjana-Menu-item'>New Arrivals</li>
                                <li className='gorjana-Menu-item'>Best Sellers</li>
                                <li className='gorjana-Menu-item'>Gifts</li>
                                <li className='gorjana-Menu-item'>Explore</li>
                            </ul>
                            <div style={{ 
                                display: 'flex' , 
                                alignItems: 'center',
                                marginRight: '55px'
                            }}>
                                <IoSearch style={{height: '25px',cursor:'pointer',width: '25px' , marginInline: '15px'}}/>
                                <p style={{marginInline: '15px' ,cursor:'pointer',margin: '10px'}}>Sign In</p>
                                <HiOutlineShoppingBag style={{height: '25px',cursor:'pointer',width: '25px' , marginInline: '15px'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

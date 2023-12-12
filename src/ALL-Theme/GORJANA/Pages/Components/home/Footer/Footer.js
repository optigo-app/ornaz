import React from 'react'
import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { MdOutlineMusicNote } from "react-icons/md";
export default function Footer() {
    return (
        <div>
            <div className='gorjanaFooterMain'>
                <div className='gorjanaFooterMainSub'>
                    <div className='gorjanaFooterMainBox1'>
                        <p style={{
                            fontFamily: 'Freight Big Pro,serif',
                            fontSize: '25px',
                            fontWeight: 300,
                            margin:'0px'
                        }}>Newsletter Sign-up</p>
                        <p style={{
                            fontSize:'14px'
                        }}>Get insider information about exclusive offers, events and more.</p>
                        <input type='text' placeholder='Email Address' className='gorjanaFooterMainBox1Input'/>
                    </div>
                    <div className='gorjanaFooterMainBox2'>
                        <p className='gorjanaFooterLink'>FAQ</p>
                        <p className='gorjanaFooterLink'>Contact Us</p>
                        <p className='gorjanaFooterLink'>Shipping & Returns</p>
                        <p className='gorjanaFooterLink'>Store Locator</p>
                        <p className='gorjanaFooterLink'>Wholesale</p>
                        <p className='gorjanaFooterLink'>Careers</p>
                    </div>
                    <div className='gorjanaFooterMainBox3'>
                        <p style={{fontSize: '19px'}}>Contact Us</p>
                        <p>866.829.0030</p>
                        <p>customercare@gorjana.com</p>
                        <div style={{display : 'flex'}}>
                            <FaTwitter style={{margin : '5px', cursor: 'pointer'}}/>
                            <FaFacebookF style={{margin : '5px', cursor: 'pointer'}}/>
                            <FaInstagram style={{margin : '5px', cursor: 'pointer'}}/>
                            <TfiYoutube style={{margin : '5px', cursor: 'pointer'}}/>
                            <MdOutlineMusicNote style={{margin : '5px', cursor: 'pointer'}}/>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderTop: '1px solid black',
                    paddingBlock: '15px'
                }}>
                    <div>
                        <p>© 2023 gorjana & Griffin, Inc. All rights reserved.</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <p style={{paddingInline: '15px' ,fontSize: '14px', borderRight: '1px solid'}}>Accessibility</p>
                        <p style={{paddingInline: '15px' ,fontSize: '14px', borderRight: '1px solid'}}>Privacy Policy</p>
                        <p style={{paddingInline: '15px' ,fontSize: '14px', borderRight: '1px solid'}}>Terms</p>
                        <p style={{paddingInline: '15px' ,fontSize: '14px'}}>Do Not Share My Information</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

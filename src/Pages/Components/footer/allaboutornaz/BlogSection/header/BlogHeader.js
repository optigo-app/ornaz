import React, { useState } from 'react'
import './BlogHeader.css'
import Drawer from '@mui/material/Drawer';

export default function BlogHeader() {


    const handleClose = () => setOpenDrawer(false);
    const handleShow = () => setOpenDrawer(true);
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '100px', border: '1px solid black' }}>
                <div>
                    <button className="menu-toggle" onClick={handleShow}></button>
                </div>
                <div>
                    <img src="https://www.ornaz.com/blog/wp-content/uploads/2020/05/10XX5.png" alt="ORNAZ Blog" style={{height : '90px'}}/>
                </div>
                <div>
                    ICON
                    <div className="top-misc">

                        <div className="header-social">
                            <a href="https://www.facebook.com/ornazjewels/" className="facebook" target="_blank">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com/ORNAZ_com" className="twitter" target="_blank">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/ornaz_com/" className="instagram" target="_blank">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                        <div className="header-search-wrap">
                            <a href="#search" className="toggle-search-box">
                                <i className="fa fa-search"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <Drawer
                open={openDrawer}
            // onClose={() => handleClose(false)}
            >
                <div style={{ width: '350px' }}>
                    <img src="https://www.ornaz.com/blog/wp-content/uploads/2020/05/10XX5.png" alt="ORNAZ Blog" style={{ height: '110px', width: '200px' }} />
                    <h1 onClick={() => handleClose(false)}
                    >close</h1>
                </div>
            </Drawer>
        </div>
    )
}

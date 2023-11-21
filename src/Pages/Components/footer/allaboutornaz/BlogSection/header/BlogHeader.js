import React, { useState } from "react";
import "./BlogHeader.css";
import Drawer from "@mui/material/Drawer";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Divider } from "@mui/material";
import { IoMdClose } from "react-icons/io";

export default function BlogHeader() {
  const handleClose = () => setOpenDrawer(false);
  const handleShow = () => setOpenDrawer(true);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100px",
          boxShadow: "0 0 28px rgba(0,0,0,.07)",
          alignItems: "center",
          position: 'fixed',
          width: '100%',
          backgroundColor: 'white',
          zIndex: 100
        }}
      >
        <div>
          <button className="menu-toggle" onClick={handleShow}></button>
        </div>
        <div>
          <img
            src="https://www.ornaz.com/blog/wp-content/uploads/2020/05/10XX5.png"
            alt="ORNAZ Blog"
            style={{ marginRight: "45px", height: "75px" }}
          />
        </div>
        <div>
          <div className="top-misc">
            <div className="header-social" style={{ height: "auto" }}>
              <a
                href="https://www.facebook.com/ornazjewels/"
                className="facebook"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/ORNAZ_com"
                className="twitter"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/ornaz_com/"
                className="instagram"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
            <Divider
              orientation="vertical"
              flexItem
              style={{ margin: "0px 15px 0px 15px", color: "#1f2025" }}
            />
            <div className="header-search-wrap">
              <a href="#search" className="toggle-search-box">
                <FaSearch />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        open={openDrawer}
      // onClose={() => handleClose(false)}
      >
        <div>

          <div style={{ width: "350px", display: 'flex', justifyContent: 'space-between', padding: '30px' }}>
            <img
              src="https://www.ornaz.com/blog/wp-content/uploads/2020/05/10XX5.png"
              style={{ height: "110px", width: "200px" }}
            />
            <IoMdClose style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => handleClose(false)} />
          </div>

          <div style={{ cursor: 'pointer', marginTop: '10px', marginInline: '20px', paddingLeft: '20px', borderBottom: '1px solid #e8e8e8' }}>
            <p style={{ margin: '0px 0px 8px -20px', fontSize: '13px', }}>HOME</p>
          </div>
          <div style={{ cursor: 'pointer', marginTop: '10px', marginInline: '20px', paddingLeft: '20px', borderBottom: '1px solid #e8e8e8' }}>
            <p style={{ margin: '0px 0px 8px -20px', fontSize: '13px' }}>DIAMOND EDUCATION</p>
          </div>
          <div style={{ cursor: 'pointer', marginTop: '10px', marginInline: '20px', fontSize: '15px', paddingLeft: '20px', borderBottom: '1px solid #e8e8e8' }}>
            <p style={{ margin: '0px 0px 8px -20px', fontSize: '13px' }}>ENGAGEMENT RINGS</p>
          </div>
          <div style={{ cursor: 'pointer', marginTop: '10px', marginInline: '20px', fontSize: '15px', paddingLeft: '20px', borderBottom: '1px solid #e8e8e8' }}>
            <p style={{ margin: '0px 0px 8px -20px', fontSize: '13px' }}>COVID 19</p>
          </div>
          <div style={{ cursor: 'pointer', marginTop: '10px', marginInline: '20px', fontSize: '15px', paddingLeft: '20px', borderBottom: '1px solid #e8e8e8' }}>
            <p style={{ margin: '0px 0px 8px -20px', fontSize: '13px' }}>PROPOSALS</p>
          </div>
          <div style={{ cursor: 'pointer', marginTop: '10px', marginInline: '20px', fontSize: '15px', paddingLeft: '20px', borderBottom: '1px solid #e8e8e8' }}>
            <p style={{ margin: '0px 0px 8px -20px', fontSize: '13px' }}>ETERNITY BANDS</p>
          </div>

          <div style={{display  :'flex' ,justifyContent : 'space-between' ,marginTop : '50px' , marginInline : '20px'}}>
            <div>
              <FaFacebookF style={{margin : '7px' ,cursor : 'pointer'}}/>
              <FaTwitter style={{margin : '7px',cursor : 'pointer'}} />
              <FaInstagram style={{margin : '7px',cursor : 'pointer'}}/>
            </div>
            <div>
              <FaSearch style={{cursor : 'pointer'}}  />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

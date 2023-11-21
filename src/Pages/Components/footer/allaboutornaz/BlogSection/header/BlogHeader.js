import React, { useState } from "react";
import "./BlogHeader.css";
import Drawer from "@mui/material/Drawer";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Divider } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";

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
        <div style={{ width: "350px" }}>
          <img
            src="https://www.ornaz.com/blog/wp-content/uploads/2020/05/10XX5.png"
            alt="ORNAZ Blog"
            style={{ height: "110px", width: "200px" }}
          />
          <h1 onClick={() => handleClose(false)}>close</h1>
        </div>
      </Drawer>
    </div>
  );
}

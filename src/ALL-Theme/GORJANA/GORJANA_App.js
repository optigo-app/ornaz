import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Components/home";
import JewelryPage from "./Pages/Components/jewelry/JewelryPage";
import { useState } from "react";
import { Drawer } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useRecoilState, useRecoilValue } from "recoil";
import { BlurFlag, SideNavListItem } from "./Pages/recoil";
import SignIn from "./Pages/Components/AuthSection/SignIn";
import ContactUs from "./Pages/Components/contactUs/ContactUs";
import Accessibility from "./Pages/Components/Accessibility/Accessibility";
import PrivacyPolicy from "./Pages/Components/PrivacyPolicy/PrivacyPolicy";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import phonesvg from "./Pages/assets/phone.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";


export default function GORJANA_App() {
  const [blurFlag, setBlurFlag] = useRecoilState(BlurFlag);
  const [navItem, setNavItem] = useState('');
  const [subNavFlag, setSubNavFlag] = useState(false);

  const SideNavListItemLabel = useRecoilValue(SideNavListItem)

  let navItems = [
    { label: "jewelry" },
    { label: "fine jewelry" },
    { label: "new Arrivals" },
    { label: "Best sellers" },
    { label: "gifts" },
    { label: "explore" },
  ];


  const CheckFlag = () =>{
    if(blurFlag === true){
      return subNavFlag
    }
    else{
      return false
    }
  }



  return (
    <div>
      <Drawer
        open={blurFlag}
        onClose={() => {
          setBlurFlag(false);
        }}
        elevation={0}
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "transparent" },
          zIndex: 111,
        }}
      >
        <div
          style={{
            width: "375px",
            borderRight: "1px solid #e4e6ec",
            height: "100%",
          }}
        >
          <div style={{ marginTop: "125px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  position: "sticky",
                  top: "124px",
                  width: "373px",
                  padding: "30px 0px 30px 24px",
                  backgroundColor: "white",
                }}
              >
                <CloseRoundedIcon
                  style={{ fontSize: "32px" }}
                  onClick={() => {
                    setBlurFlag(false);
                  }}
                />
              </div>
              <div
                style={{
                  padding: "0px 24px",
                  height: "440px",
                  overflowY: "auto",
                  flex: 1,
                  marginBottom: "170px",
                }}
              >
                {navItems.map((navi) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontFamily: "FreightDisp Pro Medium",
                      fontSize: "32px",
                      textTransform: "capitalize",
                    }}
                    onClick={() => {
                      setNavItem(navi.label)
                      setSubNavFlag((prev)=>!prev)
                    }}
                  >
                    <span
                      style={{
                        padding: "12px 0px",
                        textDecoration:
                          navItem ===(navi.label?navi.label:SideNavListItemLabel) ? "underline" : "",
                        textUnderlineOffset:
                          navItem === (navi.label?navi.label:SideNavListItemLabel) ? "3px" : "",
                        textDecorationThickness:
                          navItem === (navi.label?navi.label:SideNavListItemLabel) ? "1px" : "",
                      }}
                    >
                      {navi.label}
                    </span>
                    <span>
                      <KeyboardArrowRightRoundedIcon
                        style={{ fontSize: "32px" }}
                        
                      />
                    </span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px 32px",
                  gap: "20px",
                  width: "374px",
                  borderTop: "1px solid #e4e6ec",
                  position: "fixed",
                  bottom: 0,
                  backgroundColor: "white",
                }}
              >
                <span>Sign in / Create Account</span>
                <span style={{ display: "flex", gap: "12px" }}>
                  <div>
                    <img src={phonesvg} alt={""} style={{ width: "20px" }} />
                  </div>
                  Contact Us
                </span>
                <span style={{ display: "flex", gap: "12px" }}>
                  <div>
                    <LocationOnOutlinedIcon style={{ width: "20px" }} />
                  </div>
                  Find A Store
                </span>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
      <div
        style={{
          width: "400px", 
          height:"100%",
          backgroundColor: "white",
          zIndex: 111,
          position: "fixed",
          top: "0px",
          left: "375px",
          borderLeft: "1px solid #e4e6ec",
          transform: !CheckFlag() && "translate(-800px,0px)",
          opacity: !CheckFlag()  ? 0 : 1,
          transition: "0.5s",
        }}
      >
        <div style={{marginTop:'125px'}}>
            dfgdfg
        </div>
      </div>

      {/* <Drawer
        open={blurFlag}
        onClose={() => {
          setBlurFlag(false);
        }}
        elevation={3}
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "transparent" },
          zIndex: 1,
        }}
      >
        <div style={{ width: "750px" }}>
          <div style={{ marginTop: "144px" }}>
            <span style={{ paddingLeft: "24px" }}>
              <CloseRoundedIcon
                style={{ fontSize: "32px" }}
                onClick={() => {
                  setBlurFlag(false);
                }}
              />
            </span>
          </div>
        </div>
      </Drawer> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/jewelry" element={<JewelryPage />} />
      </Routes>
    </div>
  );
}

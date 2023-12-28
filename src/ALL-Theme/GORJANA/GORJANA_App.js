import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Components/home";
import JewelryPage from "./Pages/Components/jewelry/JewelryPage";
import { useState } from "react";
import { Drawer } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useRecoilState, useRecoilValue } from "recoil";
import { BlurFlag, SideNavListFlag, SideNavListItem } from "./Pages/recoil";
import SignIn from "./Pages/Components/AuthSection/SignIn";
import ContactUs from "./Pages/Components/contactUs/ContactUs";
import Accessibility from "./Pages/Components/Accessibility/Accessibility";
import PrivacyPolicy from "./Pages/Components/PrivacyPolicy/PrivacyPolicy";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import phonesvg from "./Pages/assets/phone.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Terms from "./Pages/Components/Terms/Terms";
import ShippingReturn from "./Pages/Components/shippingReturn/ShippingReturn";
import StoreLocatore from "./Pages/Components/storeLocatore/StoreLocatore";
import WholeSale from "./Pages/Components/wholesale/WholeSale";
import Carrers from "./Pages/Components/carrers/Carrers";
import AboutUs from "./Pages/Components/Explore/AboutUs/AboutUs";
import FAQ from "./Pages/Components/FAQ/FAQ";
import Charity from "./Pages/Components/Explore/Charity/Charity";
import MontholyHoroscope from "./Pages/Components/Explore/MonthoHoroscope/MontholyHoroscope";
import LayerLikeStyle from "./Pages/Components/Explore/LayerLikeStyle/LayerLikeStyle";
import CareGuide from "./Pages/Components/Explore/CareGuide/CareGuide";

export default function GORJANA_App() {
  const [blurFlag, setBlurFlag] = useRecoilState(BlurFlag);
  const [navItem, setNavItem] = useState('');
  const [subNavFlag, setSubNavFlag] = useRecoilState(SideNavListFlag);


  const SideNavListItemLabel = useRecoilValue(SideNavListItem)
  const naviagtion = useNavigate();

  let navItems = [
    { label: "jewelry" },
    { label: "fine jewelry" },
    { label: "new Arrivals" },
    { label: "Best sellers" },
    { label: "gifts" },
    { label: "explore" },
  ];


  const CheckFlag = () => {
    if (blurFlag === true) {
      return subNavFlag
    }
    else {
      return false
    }
  }

  console.log("CheckFlag", CheckFlag(), blurFlag);



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
                      setSubNavFlag((prev) => !prev)
                    }}
                  >
                    <span
                      style={{
                        padding: "12px 0px",
                        textDecoration:
                          navItem === (navi.label ? navi.label : SideNavListItemLabel) ? "underline" : "",
                        textUnderlineOffset:
                          navItem === (navi.label ? navi.label : SideNavListItemLabel) ? "3px" : "",
                        textDecorationThickness:
                          navItem === (navi.label ? navi.label : SideNavListItemLabel) ? "1px" : "",
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
                <span style={{ cursor: 'pointer' }} onClick={() => { naviagtion('/Signin'); setBlurFlag(false); }}>Sign in / Create Account</span>
                <span style={{ display: "flex", cursor: 'pointer', gap: "12px" }} onClick={() => { naviagtion('/ContactUs'); setBlurFlag(false); }}>
                  <div>
                    <img src={phonesvg} alt={""} style={{ width: "20px" }} />
                  </div>
                  Contact Us
                </span>
                <span style={{ display: "flex", gap: "12px", cursor: 'pointer' }} onClick={() => { naviagtion('/storeLocatore'); setBlurFlag(false); }}>
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
          height: "100%",
          backgroundColor: "white",
          zIndex: 111,
          position: "fixed",
          top: "0px",
          left: "375px",
          borderLeft: "1px solid #e4e6ec",
          transform: !CheckFlag() && "translate(-800px,0px)",
          opacity: !CheckFlag() ? 0 : 1,
          transition: "0.5s",
        }}
      >
        <div style={{ marginTop: '125px' }}>
          <h1 onClick={() => naviagtion('/aboutUs')}>About us</h1>
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
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/shipping" element={<ShippingReturn />} />
        <Route path="/jewelry" element={<JewelryPage />} />
        <Route path="/storeLocatore" element={<StoreLocatore />} />
        <Route path="/WholeSale" element={<WholeSale />} />
        <Route path="/Carrers" element={<Carrers />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Charity" element={<Charity />} />
        <Route path="/horoscope" element={<MontholyHoroscope />} />
        <Route path="/layerLikeStyle" element={<LayerLikeStyle />} />
        <Route path="/careGuide" element={<CareGuide />} />
      </Routes>
    </div>
  );
}

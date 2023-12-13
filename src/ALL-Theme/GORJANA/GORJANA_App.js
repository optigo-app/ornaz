import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Components/home";
import JewelryPage from "./Pages/Components/jewelry/JewelryPage";
import { useState } from "react";
import { Drawer } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useRecoilState } from "recoil";
import { BlurFlag } from "./Pages/recoil";
import SignIn from './Pages/Components/AuthSection/SignIn'
import ContactUs from './Pages/Components/contactUs/ContactUs'
import Accessibility from './Pages/Components/Accessibility/Accessibility'
import PrivacyPolicy from './Pages/Components/PrivacyPolicy/PrivacyPolicy'

export default function GORJANA_App() {

  const [blurFlag, setBlurFlag] = useRecoilState(BlurFlag);

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
      </Drawer>

      <Drawer
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
                <Route path="/Signin" element={<SignIn />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/accessibility" element={<Accessibility />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            </span>
          </div>
        </div>
      </Drawer>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/jewelry"
          element={
            <JewelryPage />
          }
        />
      </Routes>
      
    </div>
  );
}

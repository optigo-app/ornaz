import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Components/home'
import JewelryPage from './Pages/Components/jewelry/JewelryPage'
import SignIn from './Pages/Components/AuthSection/SignIn'
import ContactUs from './Pages/Components/contactUs/ContactUs'
import Accessibility from './Pages/Components/Accessibility/Accessibility'
import PrivacyPolicy from './Pages/Components/PrivacyPolicy/PrivacyPolicy'

export default function GORJANA_App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jewelry" element={<JewelryPage />} />
                <Route path="/Signin" element={<SignIn />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/accessibility" element={<Accessibility />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            </Routes>
        </div>
    )
}

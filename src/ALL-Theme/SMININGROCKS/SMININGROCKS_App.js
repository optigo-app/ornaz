import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Components/home'
import Impact from './Pages/Components/Impact'
import AboutUs from './Pages/Components/aboutUs/AboutUs'
import LabGroDiamonds from './Pages/Components/LabGroDiamonds/LabGroDiamonds'
import SignIn from './Pages/Components/AuthScreen/SignIn/SignIn'
import Register from './Pages/Components/AuthScreen/Registretion/Register'
import ForgotPass from './Pages/Components/AuthScreen/forgotPass/ForgotPass'
import ContactUs from './Pages/Components/contactUs/ContactUs'
import FAQ from './Pages/Components/FAQ/FAQ'
import ServicePolicy from './Pages/Components/ServicePolicy/ServicePolicy'
import MyWishList from './Pages/Components/myWishList/MyWishList'

export default function SMININGROCKS_App() {
    return (
        <div> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/labGrowDaimonds" element={<LabGroDiamonds />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotPass" element={<ForgotPass />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/servicePolicy" element={<ServicePolicy />} />
                <Route path="/myWishList" element={<MyWishList />} />
            </Routes>
        </div>
    )
}

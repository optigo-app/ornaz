import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Components/home'
import Impact from './Pages/Components/Impact'
import AboutUs from './Pages/Components/aboutUs/AboutUs'
import LabGroDiamonds from './Pages/Components/LabGroDiamonds/LabGroDiamonds'
import Register from './Pages/Components/AuthScreen/Registretion/Register'
import ForgotPass from './Pages/Components/AuthScreen/forgotPass/ForgotPass'
import ContactUs from './Pages/Components/contactUs/ContactUs'
import FAQ from './Pages/Components/FAQ/FAQ'
import ServicePolicy from './Pages/Components/ServicePolicy/ServicePolicy'
import MyWishList from './Pages/Components/myWishList/MyWishList'
import Lookbook from './Pages/Components/Lookbook/index'
import Press from './Pages/Components/press/Press'
import Account from './Pages/Components/account/Account'
import QuotationFilters from './Pages/Components/account/quotationFilters/QuotationFilters'
import SearchResult from './Pages/Components/searchResult/SearchResult'
import Celeb from './Pages/Components/celebrity/Celeb'
import Blog from './Pages/Components/Blog/Blog'
import ProductList from './Pages/Components/productPage/ProductList'
import ProdDetail from './Pages/Components/productDetail/ProdDetail'
import ContinueWithEmail from './Pages/Components/AuthScreen/ContinueWithEmail/ContinueWithEmail'
import LoginWithEmail from './Pages/Components/AuthScreen/LoginWithEmail/LoginWithEmail'
import LoginWithEmailCode from './Pages/Components/AuthScreen/LoginWithEmailCode/LoginWithEmailCode'
import ContimueWithMobile from './Pages/Components/AuthScreen/ContimueWithMobile/ContimueWithMobile'
import LoginWithMobileCode from './Pages/Components/AuthScreen/LoginWithMobileCode/LoginWithMobileCode'
import Delivery from './Pages/Components/delivery/Delivery'

export default function SMININGROCKS_App() {
    return (
        <div> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/labGrowDaimonds" element={<LabGroDiamonds />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotPass" element={<ForgotPass />} />
                <Route path="/ContinueWithEmail" element={<ContinueWithEmail />} />
                <Route path="/LoginWithEmail" element={<LoginWithEmail />} />
                <Route path="/LoginWithEmailCode" element={<LoginWithEmailCode />} />
                <Route path="/ContimueWithMobile" element={<ContimueWithMobile />} />
                <Route path="/LoginWithMobileCode" element={<LoginWithMobileCode />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/servicePolicy" element={<ServicePolicy />} />
                <Route path="/myWishList" element={<MyWishList />} />
                <Route path="/lookbook" element={<Lookbook />} />
                <Route path="/press" element={<Press />} />
                <Route path="/account" element={<Account />} />
                <Route path="/searchResult" element={<SearchResult />} />
                <Route path="/celeb" element={<Celeb />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/productpage" element={<ProductList />}/>
                <Route path="/productdetail" element={<ProdDetail />}/>
                <Route path="/Delivery" element={<Delivery />}/>
            </Routes>
        </div>
    )
}

import React, { useState, useEffect, useRef } from 'react'
import { Route, Routes, useLocation, useNavigate, redirect } from 'react-router-dom'
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
import Header from './Pages/Components/home/Header/Header'
import { Dialog } from '@mui/material'
import { IoMdMail } from 'react-icons/io'
import { FaMobileAlt } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import AccountLedgerTable from './Pages/Components/account/accountLedgerTablePrint/AccountLedgerTable';
import AccountLedgerExcel from './Pages/Components/account/accountLedgerExcelDownload/AccountLedgerExcel';
import AccountLedger from './Pages/Components/account/accountLedger/AccountLedger';
import DebitVoucher from './Pages/Components/account/accountLedgerVouchers/debitVoucher/DebitVoucher';
import CreditVoucher from './Pages/Components/account/accountLedgerVouchers/creditVoucher/CreditVoucher';
import { openSignInModal } from '../../Recoil/atom'
import { useRecoilState } from 'recoil'
import Payment from './Pages/Components/Payment/Payment'
import Confirmation from './Pages/Components/confirmation/Confirmation'
// import OrderHistory from './Pages/Components/account/accountOrderHistory/OrderHistory';

export default function SMININGROCKS_App() {

    const [openLoginDailog, setOpenLoginDailog] = useRecoilState(openSignInModal);

    const navigation = useNavigate();
    const location =  useLocation();
    
    const prevLocationRef = useRef(null);
    const navigate = useNavigate();

 
    
    useEffect(() => {
        const originalUrl = window.location.pathname;

        const handleUrlChange = () => {
            if (window.location.pathname !== originalUrl) {
                navigate(originalUrl);
            }
        };

        window.addEventListener('popstate', handleUrlChange);

        return () => {
            window.removeEventListener('popstate', handleUrlChange);
        };
    }, [navigate]);

    const openLoginDailogBox = () => {
        setOpenLoginDailog(true);
    };
    const closeLoginDailog = () => {
        setOpenLoginDailog(false);
    };

    

    return (
        <div>
            <Dialog
                open={openLoginDailog}
                // onClose={closeLoginDailog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className='loginDailog'>
                    <IoClose style={{ float: 'right', height: '30px', width: '30px', cursor: 'pointer', backgroundColor: '#e4e6ec' }} onClick={closeLoginDailog} />
                    <p className='loginDiTile'>Log in or sign up in seconds</p>
                    <p>Use your email or mobile no to continue with the organization.</p>

                    <div className='loginMail' onClick={() => { navigation('/ContinueWithEmail'); setOpenLoginDailog(false) }}>
                        <IoMdMail style={{ height: '25px', width: '25px' }} />
                        <p style={{ margin: '0px', fontSize: '20px', fontWeight: 500, paddingLeft: '25px' }}>Continue with email</p>
                    </div>
                    <div className='loginMobile' onClick={() => { navigation('/ContimueWithMobile'); setOpenLoginDailog(false) }}>
                        <FaMobileAlt style={{ height: '25px', width: '25px', marginRight: '10px' }} />
                        <p style={{ margin: '0px', fontSize: '20px', fontWeight: 500, paddingLeft: '25px' }}>Log in with mobile</p>
                    </div>
                    <p style={{ marginTop: '20px', fontSize: '14px' }}>By continuing, you agree to our Terms of Use. Read our Privacy Policy.</p>
                </div>
            </Dialog>
            <Header />
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
                    <Route path="/accountledger" element={<AccountLedger />} />
                    <Route path="/accountledgertable" element={<AccountLedgerTable />} />
                    <Route path="/accountledgerexcel" element={<AccountLedgerExcel />} />
                    <Route path="/accountledgerdebit" element={<DebitVoucher />} />
                    <Route path="/accountledgercrebit" element={<CreditVoucher />} />
                    <Route path="/searchResult" element={<SearchResult />} />
                    <Route path="/celeb" element={<Celeb />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/productpage" element={<ProductList />} />
                    <Route path="/productdetail" element={<ProdDetail />} />
                    <Route path="/Delivery" element={<Delivery />} />
                    <Route path="/Payment" element={<Payment />} />
                    <Route path="/Confirmation" element={<Confirmation />} />

                </Routes>
            </div>
        </div>
    )
}

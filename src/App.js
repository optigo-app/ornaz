import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Components/home';
import LoginPage from './Pages/Components/login/Login';
import Register from './Pages/Components/register/Register';
import Jewellary from './Pages/Components/Jewellary';
import DisplayTechnology from './Pages/Components/footer/experience/DisplayTechnology';
import BookAppoinment from './Pages/Components/footer/experience/BookAppoinment';
import FreeEngraving from './Pages/Components/footer/experience/FreeEngraving';
import GiaAssistance from './Pages/Components/footer/WhyOrnaz/GiaAssistance';
import QualityValue from './Pages/Components/footer/WhyOrnaz/qualityval/QualityValue';
import LifeTimeExchange from './Pages/Components/footer/Policies/LifeTimeExchange';
import TermsCondition from './Pages/Components/footer/Policies/TermsCondition';
import DeliveryShipping from './Pages/Components/footer/Policies/DeliveryShipping';
import AskedQuetion from './Pages/Components/footer/Policies/AskedQuetion';
import PrivacyPolicy from './Pages/Components/footer/Policies/PrivacyPolicy';
import CelebTakeOver from './Pages/Components/footer/allaboutornaz/CelebTakeOver';
import BlogSection from './Pages/Components/footer/allaboutornaz/BlogSection';
import About from './Pages/Components/footer/allaboutornaz/About';
import Friend from './Pages/Components/footer/allaboutornaz/Friend';
import ProductDeatil from './Pages/Components/productdetails/productDet/ProductDeatil';
import CartDetail from './Pages/Components/cart/cartDeatil/CartDetail';
import CheckOutSummry from './Pages/Components/checkoutsummry';
import DesignRing from './Pages/Components/footer/experience/designRing/DesignRing';
import Certification from './Pages/Components/footer/WhyOrnaz/certification/Certification';
import Craftsmanship from './Pages/Components/footer/WhyOrnaz/craftsmanship/Craftsmanship';
import Forgot from './Pages/Components/forgot/Forgot';
import Payment from './Pages/Components/payment/Payment';
import Account from './Pages/Components/account';
import WatchList from './Pages/Components/mobileComp/wishList/WishList';
import MobileSearch from './Pages/Components/mobileComp/mobileSearch/MobileSearch';
import MobileCart from './Pages/Components/mobileComp/mobileCart/MobileCart';
import Contact from './Pages/Components/footer/allaboutornaz/contactPage/Contact';
import Profile from './Pages/Components/mobileComp/profile/Profile';
import FAQ from './Pages/Components/mobileComp/FAQ/FAQ';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jewelleryPage" element={<Jewellary />} />
        <Route path="/productDetails" element={<ProductDeatil />} />
        <Route path="/DisplayTechnology" element={<DisplayTechnology />} />
        <Route path="/DesignRing" element={<DesignRing />} />
        <Route path="/BookAppoinment" element={<BookAppoinment />} />
        <Route path="/FreeEngraving" element={<FreeEngraving />} />
        <Route path="/GiaAssistance" element={<GiaAssistance />} />
        <Route path="/Certification" element={<Certification />} />
        <Route path="/Craftsmanship" element={<Craftsmanship />} />
        <Route path="/QualityValue" element={<QualityValue />} />
        <Route path="/LifeTimeExchange" element={<LifeTimeExchange />} />
        <Route path="/TermsCondition" element={<TermsCondition />} />
        <Route path="/DeliveryShipping" element={<DeliveryShipping />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/AskedQuetion" element={<AskedQuetion />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Friend" element={<Friend />} />
        <Route path="/CelebTakeOver" element={<CelebTakeOver />} />
        <Route path="/BlogSection" element={<BlogSection />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<Register />} />
        <Route path="/ForgotPassworrd" element={<Forgot />} />
        <Route path="/CartDetail" element={<CartDetail />} />
        <Route path="/CheckOutSummry" element={<CheckOutSummry />} />
        <Route path="/Payment" element={<Payment />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

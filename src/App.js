import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Components/HomePage';
import JewellaryPage from './Pages/Components/JewellaryPage';
import ProductDetailsPage from './Pages/Components/ProductDetailsPage';
import DisplayTechnologyPage from './Pages/Components/FooterSection/OrnazExperience/DisplayTechnologyPage';
import DesignRingPage from './Pages/Components/FooterSection/OrnazExperience/DesignRingPage';
import BookAppoinmentPage from './Pages/Components/FooterSection/OrnazExperience/BookAppoinmentPage';
import FreeEngravingPage from './Pages/Components/FooterSection/OrnazExperience/FreeEngravingPage';
import GiaAssistancePage from './Pages/Components/FooterSection/WhyOrnaz/GiaAssistancePage';
import CertificationPage from './Pages/Components/FooterSection/WhyOrnaz/CertificationPage';
import CraftsmanshipSection from './Pages/Components/FooterSection/WhyOrnaz/CraftsmanshipSection';
import QualityValuePage from './Pages/Components/FooterSection/WhyOrnaz/QualityValuePage';
import LifeTimeExchangeSection from './Pages/Components/FooterSection/Policies/LifeTimeExchangeSection';
import TermsConditionPage from './Pages/Components/FooterSection/Policies/TermsConditionPage';
import DeliveryShippingPage from './Pages/Components/FooterSection/Policies/DeliveryShippingPage';
import PrivacyPolicy from './Pages/Components/FooterSection/Policies/PrivacyPolicy';
import AskedQuetionPage from './Pages/Components/FooterSection/Policies/AskedQuetionPage';
import AboutPage from './Pages/Components/FooterSection/AllAboutOrnaz/AboutPage';
import FriendPage from './Pages/Components/FooterSection/AllAboutOrnaz/FriendPage';
import CelebTakeOverSection from './Pages/Components/FooterSection/AllAboutOrnaz/CelebTakeOverSection';
import BlogSection from './Pages/Components/FooterSection/AllAboutOrnaz/BlogSection';
import ContactPage from './Pages/Components/FooterSection/AllAboutOrnaz/ContactPage';
import LoginPage from './Pages/Components/LoginPage/LoginPage';
import RegisterPage from './Pages/Components/RegisterPage/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jewelleryPage" element={<JewellaryPage />} />
        <Route path="/productDetailsPage" element={<ProductDetailsPage />} />
        <Route path="/DisplayTechnologyPage" element={<DisplayTechnologyPage />} />
        <Route path="/DesignRingPage" element={<DesignRingPage />} />
        <Route path="/BookAppoinmentPage" element={<BookAppoinmentPage />} />
        <Route path="/FreeEngravingPage" element={<FreeEngravingPage />} />
        <Route path="/GiaAssistancePage" element={<GiaAssistancePage />} />
        <Route path="/CertificationPage" element={<CertificationPage />} />
        <Route path="/CraftsmanshipSection" element={<CraftsmanshipSection />} />
        <Route path="/QualityValuePage" element={<QualityValuePage />} />
        <Route path="/LifeTimeExchangeSection" element={<LifeTimeExchangeSection />} />
        <Route path="/TermsConditionPage" element={<TermsConditionPage />} />
        <Route path="/DeliveryShippingPage" element={<DeliveryShippingPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/AskedQuetionPage" element={<AskedQuetionPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/FriendPage" element={<FriendPage />} />
        <Route path="/CelebTakeOverSection" element={<CelebTakeOverSection />} />
        <Route path="/BlogSection" element={<BlogSection />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

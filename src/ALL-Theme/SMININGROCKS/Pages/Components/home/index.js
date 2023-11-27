import React from 'react'
import './index.css';
import Header from './Header/Header'
import Video from './topVideo/Video';
import SmilingRock from './smiling_Rock/SmilingRock';
import FestiveFinds from './FestiveFind/FestiveFinds';
import DaimondEveyone from './DaimondsEveryone/DaimondEveyone';

// import BannerPage from './BannerPage/BannerPage'
// import SallerCard from './SallerCard/SallerCard'
// import ConnectPage from './ConnectPage/ConnectPage'
// import CategoryPage from './CategoryPage/CategoryPage'
// import MentionSection from './MentionSection/MentionSection'
// import CelebrityCardsPage from './CelebrityCardsPage/CelebrityCardsPage'
// import JewelleryGiftsCardsPage from './JewelleryGiftsCardsPage/JewelleryGiftsCardsPage'
// import TestimonialSection from './TestimonialSection/TestimonialSection'
// import AppoinmentSection from './AppoinmentSection/AppoinmentSection'
// import HomeFooter from './HomeFooter/HomeFooter'
// import JewelleryGiftsBannerPage from './jewelleryGiftsBannerPage/JewelleryGiftsBannerPage'

export default function Home() {

  
  return (
    <div className='homeMain' style={{backgroundColor : '#c0bbb1'}}>
      
      <div className='header'>
      <Header />
      <Video />
      {/* <BannerPage />  */}
      </div>
      <div className='homeCompo'>
        <SmilingRock />
        <FestiveFinds />
        <DaimondEveyone />
      </div>
      {/* <div className='sallercard'>
      <SallerCard />
      </div>
      <ConnectPage/>
      <CategoryPage />
      <MentionSection />
      <CelebrityCardsPage />
      <div className='JewelleryGiftsBannerPage'>
        <JewelleryGiftsBannerPage />
      </div>
      <JewelleryGiftsCardsPage />
      <TestimonialSection />
      <AppoinmentSection />
      <HomeFooter /> */}
    </div>
  )
}

import React from 'react'
import './index.css';
import Video from './topVideo/Video';
import SmilingRock from './smiling_Rock/SmilingRock';
import FestiveFinds from './FestiveFind/FestiveFinds';
import DaimondEveyone from './DaimondsEveryone/DaimondEveyone';
import Header from './Header/Header';
import ShopByCategory from './shopByCategory/ShopByCategory';
import SmilingBrides from './SmilingBrides/SmilingBrides';
import FeaturedCollection from './FeaturedCollection/FeaturedCollection';


export default function Home() {


  return (
    <div style={{ backgroundColor: '#c0bbb1' }}>
      <div className='smining-header'> 
        <Header />
      </div>
      <div className='homeMain'>
        <Video />
        <SmilingRock />
        <FestiveFinds />
        <DaimondEveyone />
        <ShopByCategory />
        <SmilingBrides />
        <FeaturedCollection />
        {/* <div className='sal lercard'>
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
    </div>
  )
}

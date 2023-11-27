import React from 'react'
import './index.css';
import Video from './topVideo/Video';
import SmilingRock from './smiling_Rock/SmilingRock';
import FestiveFinds from './FestiveFind/FestiveFinds';
import DaimondEveyone from './DaimondsEveryone/DaimondEveyone';


export default function Home() {


  return (
    <div>
      <div className='smining-header'>
        <Header />
      </div>
      <div className='homeMain'>

      <Video />
        {/* <div className='homeCompo'>
        <SmilingRock />
        <FestiveFinds />
        <DaimondEveyone />
      </div> */}


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
    </div>
  )
}

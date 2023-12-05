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
import ShopifySection from './shopifySection/ShopifySection';
import SustainAbility from '../sustainAbility/SustainAbility';
import ShopOurInstagram from './shopOurInstagram/ShopOurInstagram';
import Footer from './Footer/Footer';


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
        <div style={{ marginTop: '60px' }}>
          <SustainAbility />
        </div>
        <ShopifySection />
        <ShopOurInstagram />
        <Footer />
      </div>
      <div>
        <p style={{
          paddingBlock: '30px',
          margin: '0px',
          textAlign: 'center',
          color:'white',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '1px'
        }}>BACK TO TOP</p>
      </div>
    </div>
  )
}

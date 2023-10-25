import React from 'react'
import Header from '../HomePage/Header'
import ShopByFilterPage from './ShopByFilterPage'
import JewelleryCardSection from './JewelleryCardSection'
import FooterSection from '../FooterSection'

export default function JewellaryPage() {
  return (
    <div>
      <Header />
      <div style={{ display : 'flex'}}>
          <ShopByFilterPage />
          <JewelleryCardSection />
      </div>
      <FooterSection />
    </div>
  )
}

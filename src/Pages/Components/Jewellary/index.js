import React from 'react'
import Header from '../home/Header'
import ShopByFilter from './ShopByFilter/ShopByFilter'
import JewelleryCard from './JewelleryCardSection/JewelleryCard'
import Footer from '../footer'

export default function Jewellary() {
  return (
    <div>
      <Header />
      <div style={{ display : 'flex'}}>
          <ShopByFilter />
          <JewelleryCard />
      </div>
      <Footer />
    </div>
  )
}

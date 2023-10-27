import React from 'react'
import Header from '../home/Header/Header'
import JewelleryCard from './JewelleryCardSection/JewelleryCard'
import ShopByFilter from './ShopByFilter/ShopByFilter'
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

import React from 'react'
import Header from './Header'
import BannerPage from './Banner'
import SallerCard from './SallerCard'
import ConnectPage from './Connect'
import CategoryPage from './Category'
import MentionSection from './MentionSection'
import CelebrityCardsPage from './CelebrityCards'
import JewelleryGiftsCardsPage from './JewelleryGiftsCards'
import TestimonialSection from './TestimonialSection'
import AppoinmentSection from './AppoinmentSection'
import HomeFooter from './HomeFooter'

export default function Home() {
  return (
    <div>
      <Header />
      <BannerPage />
      <SallerCard />
      <ConnectPage />
      <CategoryPage />
      <MentionSection />
      <CelebrityCardsPage />
      <JewelleryGiftsCardsPage />
      <TestimonialSection />
      <AppoinmentSection />
      <HomeFooter />
    </div>
  )
}

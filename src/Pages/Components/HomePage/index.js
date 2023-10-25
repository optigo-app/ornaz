import React from 'react'
import Header from './Header'
import BannerPage from './BannerPage'
import SallerCard from './SallerCard'
import ConnectPage from './ConnectPage'
import CategoryPage from './CategoryPage'
import MentionSection from './MentionSection'
import CelebrityCardsPage from './CelebrityCardsPage'
import JewelleryGiftsCardsPage from './JewelleryGiftsCardsPage'
import TestimonialSection from './TestimonialSection'
import AppoinmentSection from './AppoinmentSection'
import HomeFooter from './HomeFooter'

export default function HomePage() {
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

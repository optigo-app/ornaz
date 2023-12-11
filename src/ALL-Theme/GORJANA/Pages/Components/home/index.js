import React from 'react'
import Header from './Header/Header'
import Favorites from './Favorites/Favorites'
import GiftSection from './GiftSection/GiftSection'
import ShopiCarousel from './ShopifyCarousel/ShopiCarousel'
import TrideBanner from './TriedBanner/TrideBanner'

export default function Home() {
  return (
    <div>
        <div>
            <Header />
            <Favorites />
            <GiftSection />
            <ShopiCarousel />
            <TrideBanner />
        </div>
    </div>
  )
}

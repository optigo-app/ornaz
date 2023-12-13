import React from 'react'
import Header from './Header/Header'
import Favorites from './Favorites/Favorites'
import GiftSection from './GiftSection/GiftSection'
import ShopiCarousel from './ShopifyCarousel/ShopiCarousel'
import TrideBanner from './TriedBanner/TrideBanner'
import FeatureColl from './FeaturedCollection/FeatureColl'
import Masonry from './masonrySection/Masonry'
import Footer from './Footer/Footer'
import Recommended from './Recommended/Recommended'
import VisitAs from './VisitAs/VisitAs'
import InstaSection from './instagram/InstaSection'

export default function Home() {
  return (
    <div>
        <div>
            <Header />
            <Favorites />
            <GiftSection />
            <ShopiCarousel />
            <TrideBanner />
            <FeatureColl />
            <Masonry />
            <Recommended />
            <VisitAs />
            <InstaSection />
            <Footer />
        </div>
    </div>
  )
}

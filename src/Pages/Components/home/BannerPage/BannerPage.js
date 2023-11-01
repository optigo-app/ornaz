import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BannerPage.css'

import banner from '../../../assets/banners/banner.webp'
import banner1 from '../../../assets/banners/banner1.webp'
import banner2 from '../../../assets/banners/banner2.webp'
import banner3 from '../../../assets/banners/banner3.webp'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


export default function BannerPage() {


  const navigation = useNavigate();

  let bannersArr = [
    {prodImg:banner,prodtitle:''},
    {prodImg:banner1,prodtitle:''},
    {prodImg:banner2,prodtitle:''},
    {prodImg:banner3,prodtitle:''},
  ]

  return (
    <>
    {/* <div onClick={() => navigation('/jewelleryPage')}>
      <Cards sallerCardImg={bannersArr} cardTitle={''} type={'banner'}/>
    </div> */}
    <div style={{}}>
      <Carousel
       showArrows={false}
       infiniteLoop={true}
       showThumbs={false}
       showStatus={false}
       autoPlay={true}
       interval={6100}
       showIndicators={false}
       swipeable={true}
       emulateTouch={true}
      >
      
          <img src={banner}  alt='banner Images...'/>
          <img src={banner1}  alt='banner Images...'/>
          <img src={banner2}  alt='banner Images...'/>
          <img src={banner3}  alt='banner Images...'/>

      </Carousel>
    </div>
    </>
  )
}

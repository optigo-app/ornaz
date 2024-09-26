import React, { useState } from 'react'
import './FeaturedCollection.css'
import { Cards } from '../HomeCards/Cards'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import shop1 from '../../../assets/shopByCategory/shopByCategory1.webp'
import shop2 from '../../../assets/shopByCategory/shopByCategory2.jpg'
import shop3 from '../../../assets/shopByCategory/shopByCategory3.webp'
import shop4 from '../../../assets/shopByCategory/shopByCategory4.jpg'

import promoSetMainBanner from '../../../assets/SmilingRockImage/promoSetMainBanner.jpg'
import ring1 from '../../../assets/SmilingRockImage/promoSetBanner1Img1.jpg'
import ring2 from '../../../assets/SmilingRockImage/promoSetBanner1Img2.jpg'
import ring3 from '../../../assets/SmilingRockImage/promoSetBanner1Img3.jpg'
import ring4 from '../../../assets/SmilingRockImage/promoSetBanner1Img4.jpg'
import ring5 from '../../../assets/SmilingRockImage/promoSetBanner1Img5.jpg'
import ring6 from '../../../assets/SmilingRockImage/promoSetBanner1Img6.jpg'
import ring1hover from '../../../assets/SmilingRockImage/promoSetBanner1Img1Hover.jpg'
import ring2hover from '../../../assets/SmilingRockImage/promoSetBanner1Img2Hover.jpg'
import ring3hover from '../../../assets/SmilingRockImage/promoSetBanner1Img3Hover.jpg'
import ring4hover from '../../../assets/SmilingRockImage/promoSetBanner1Img4Hover.jpg'
import ring5hover from '../../../assets/SmilingRockImage/promoSetBanner1Img5Hover.jpg'
import ring6hover from '../../../assets/SmilingRockImage/promoSetBanner1Img6Hover.jpg'

import promoSetMainBanner2 from '../../../assets/SmilingRockImage/promoSetMainBanner2.jpg'
import pring1 from '../../../assets/SmilingRockImage/promoSetBanner2Img1.jpg'
import pring2 from '../../../assets/SmilingRockImage/promoSetBanner2Img2.jpg'
import pring3 from '../../../assets/SmilingRockImage/promoSetBanner2Img3.jpg'
import pring4 from '../../../assets/SmilingRockImage/promoSetBanner2Img4.jpg'
import pring5 from '../../../assets/SmilingRockImage/promoSetBanner2Img5.jpg'
import pring6 from '../../../assets/SmilingRockImage/promoSetBanner2Img6.jpg'
import pring1hover from '../../../assets/SmilingRockImage/promoSetBanner2Img1Hover.jpg'
import pring2hover from '../../../assets/SmilingRockImage/promoSetBanner2Img2Hover.jpg'
import pring3hover from '../../../assets/SmilingRockImage/promoSetBanner2Img3Hover.jpg'
import pring4hover from '../../../assets/SmilingRockImage/promoSetBanner2Img4Hover.jpg'
import pring5hover from '../../../assets/SmilingRockImage/promoSetBanner2Img5Hover.jpg'
import pring6hover from '../../../assets/SmilingRockImage/promoSetBanner2Img6Hover.jpg'




import Slider from 'react-slick'

export default function FeaturedCollection() {

    const [ring1ImageChange, setRing1ImageChange] = useState(false);
    const [ring2ImageChange, setRing2ImageChange] = useState(false);
    const [ring3ImageChange, setRing3ImageChange] = useState(false);
    const [ring4ImageChange, setRing4ImageChange] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // prevArrow: false, 
        // nextArrow: false,
    };

    let demoJSON = [
        { prodImg: shop1, prodtitle: 'Women’s Engagement Rings' },
        { prodImg: shop2, prodtitle: 'Men’s Engagement Rings' },
        { prodImg: shop3, prodtitle: 'Eternity Bands' },
        { prodImg: shop4, prodtitle: 'Fine Jewellery Gifts' },
        { prodImg: shop4, prodtitle: 'Fine Jewellery Gifts' },
    ]

    const handleMouseEnterRing1 = () => {
        setRing1ImageChange(true)
    }
    const handleMouseLeaveRing1 = () => {
        setRing1ImageChange(false)
    }

    const handleMouseEnterRing2 = () => {
        setRing2ImageChange(true)
    }
    const handleMouseLeaveRing2 = () => {
        setRing2ImageChange(false)
    }

    const handleMouseEnterRing3 = () => {
        setRing3ImageChange(true)
    }
    const handleMouseLeaveRing3 = () => {
        setRing3ImageChange(false)
    }

    const handleMouseEnterRing4 = () => {
        setRing4ImageChange(true)
    }
    const handleMouseLeaveRing4 = () => {
        setRing4ImageChange(false)
    }
    return (
        <div>
            <div className='linkingLoveMain'>
                <div className='linkingLove'>
                    <p className='linkingTitle'>LINKING LOVE</p>
                    <p className='linkingDesc'>Ready to share link with your loved ones!</p>
                    <p className='linkingShopCol'>SHOP COLLECTION</p>
                    <Slider {...settings} >
                        <div className='linkRingLove'>
                            <div>
                                <div className='linkLoveRing1'>
                                    <img src={ring1ImageChange ? ring1hover : ring1} className='likingLoveImages' onMouseEnter={handleMouseEnterRing1} onMouseLeave={handleMouseLeaveRing1} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                            <div>
                                <div className='linkLoveRing2'>
                                    <img src={ring2ImageChange ? ring2hover : ring2} className='likingLoveImages' onMouseEnter={handleMouseEnterRing2} onMouseLeave={handleMouseLeaveRing2} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                        </div>

                        <div className='linkRingLove'>

                            <div>
                                <div className='linkLoveRing1'>
                                    <img src={ring1ImageChange ? ring3hover : ring3} className='likingLoveImages' onMouseEnter={handleMouseEnterRing1} onMouseLeave={handleMouseLeaveRing1} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                            <div>
                                <div className='linkLoveRing2'>
                                    <img src={ring2ImageChange ? ring4hover : ring4} className='likingLoveImages' onMouseEnter={handleMouseEnterRing2} onMouseLeave={handleMouseLeaveRing2} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                        </div>

                        <div className='linkRingLove'>

                            <div>
                                <div className='linkLoveRing1'>
                                    <img src={ring1ImageChange ? ring5hover : ring5} className='likingLoveImages' onMouseEnter={handleMouseEnterRing1} onMouseLeave={handleMouseLeaveRing1} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                            <div>
                                <div className='linkLoveRing2'>
                                    <img src={ring2ImageChange ? ring6hover : ring6} className='likingLoveImages' onMouseEnter={handleMouseEnterRing2} onMouseLeave={handleMouseLeaveRing2} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className='linkingLoveImage'>
                    <img src={promoSetMainBanner} className='linkingLoveImageDesign' />
                </div>
            </div>


            <div className='linkingLoveMain'>
                <div className='linkingLoveImage'>
                    <img src={promoSetMainBanner2} className='linkingLoveImageDesign' />
                </div>
                <div className='linkingLove'>
                    <p className='linkingTitle'>FLORA</p>
                    <p className='linkingDesc'>High end affordable luxury with sophisticated designs for your every day.</p>
                    <p className='linkingShopCol'>SHOP COLLECTION</p>
                    <Slider {...settings} >
                    <div className='linkRingLove'>
                            <div>
                                <div className='linkLoveRing1'>
                                    <img src={ring1ImageChange ? pring1hover : pring1} className='likingLoveImages' onMouseEnter={handleMouseEnterRing1} onMouseLeave={handleMouseLeaveRing1} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                            <div>
                                <div className='linkLoveRing2'>
                                    <img src={ring2ImageChange ? pring2hover : pring2} className='likingLoveImages' onMouseEnter={handleMouseEnterRing2} onMouseLeave={handleMouseLeaveRing2} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                        </div>

                        <div className='linkRingLove'>
                            <div>
                                <div className='linkLoveRing1'>
                                    <img src={ring1ImageChange ? pring3hover : pring3} className='likingLoveImages' onMouseEnter={handleMouseEnterRing1} onMouseLeave={handleMouseLeaveRing1} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                            <div>
                                <div className='linkLoveRing2'>
                                    <img src={ring2ImageChange ? pring4hover : pring4} className='likingLoveImages' onMouseEnter={handleMouseEnterRing2} onMouseLeave={handleMouseLeaveRing2} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                        </div>
                        <div className='linkRingLove'>
                            <div>
                                <div className='linkLoveRing1'>
                                    <img src={ring1ImageChange ? pring5hover : pring5} className='likingLoveImages' onMouseEnter={handleMouseEnterRing1} onMouseLeave={handleMouseLeaveRing1} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                            <div>
                                <div className='linkLoveRing2'>
                                    <img src={ring2ImageChange ? pring6hover : pring6} className='likingLoveImages' onMouseEnter={handleMouseEnterRing2} onMouseLeave={handleMouseLeaveRing2} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </div>
    )
}

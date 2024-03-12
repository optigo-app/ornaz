import React from 'react'
import './AboutUs.css'
import Header from '../home/Header/Header'
import ContactForm from '../contactForm/ContactForm'
import Footer from '../home/Footer/Footer'

export default function AboutUs() {
    return (
        <div style={{paddingTop: '110px'}}>
            {/* https://cdn.accentuate.io/19336364132/3641674891364/Stocksy_txpdd2f673ddEJ200_Medium_1086442.jpg?1733x1155 */}
            <div>
                <img
                    src="https://cdn.accentuate.io/19336364132/3641674891364/Stocksy_txpdd2f673ddEJ200_Medium_1086442.jpg?1733x1155"
                    alt="..."
                    className="smiling-About-container"
                />
                <div className="smiling-About-container2"></div>
            </div>
            <div className='smining-about-title'>
                <p style={{
                    textAlign: 'center',
                    fontSize: '40px',
                    color: 'white',
                    fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                }}>About Us</p>
            </div>
            <div className='daimondsEveryAbout'>
                <div className='daimondsEveryAboutSub'>
                    <div style={{
                        paddingBlock: '70px'
                    }}>
                        <p style={{
                            textAlign: 'center',
                            fontSize: '15px',
                            fontWeight: 500,
                            fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif',
                            color: '#7d7f85'
                        }}>#WEARESMILINGROCKS</p>
                        <p style={{
                            textAlign: 'center',
                            fontSize: '22px',
                            fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif',
                            color: '#7d7f85'
                        }}>Spread the Chain of Smile to Everyone from Lab to Home to Community.</p>
                        <p
                            style={{
                                textAlign: 'center',
                                fontSize: '30px',
                                fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif',
                                color: '#7d7f85'
                            }}>DIAMONDS ARE FOR EVERYONE® .</p>
                    </div>
                    <div className='about-daimondBoxMain'>
                        <div className='about-daimondBox1'>
                            <p style={{ fontSize: '25px', color: '#7d7f85', fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif' }}>Wear a Smile</p>
                            <p style={{ textAlign: 'center', color: '#7d7f85', fontSize: '13px' }}>We want you to find reasons to smile in your everyday, from the time leaving your house to the endless experience of the day, we want you to be comfortable and confident wearing Sonasons. Our unique designs and one-of-a-kind styles will bring your personality to a different level. Our sustainable, affordable and conflict-free lab grown diamond jewelry is perfect for your pocket! Love who you are, the way you look and the way you smile.</p>
                        </div>
                        <div className='about-daimondBox2'>
                            <img src='https://smilingrocks.com/cdn/shop/files/0W9A2307-Modifier.jpg?v=1613679005' className='about-daimondBox2-image' />
                        </div>
                    </div>

                    <div className='about-daimondBoxMain' style={{ marginTop: '80px' }}>
                        <div className='about-daimondBox2'>
                            <img src='//smilingrocks.com/cdn/shop/files/Stocksy_txpfc04c93bSEJ200_Medium_1266992_2019-04-11T19_00_12.686_180x.jpg?v=1613679005 180w' className='about-daimondBox2-image' />
                        </div>
                        <div className='about-daimondBox1'>
                            <p style={{ fontSize: '25px', color: '#7d7f85', fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif' }}>Wear a Smile</p>
                            <p style={{ textAlign: 'center', color: '#7d7f85', fontSize: '13px' }}>We want you to find reasons to smile in your everyday, from the time leaving your house to the endless experience of the day, we want you to be comfortable and confident wearing Sonasons. Our unique designs and one-of-a-kind styles will bring your personality to a different level. Our sustainable, affordable and conflict-free lab grown diamond jewelry is perfect for your pocket! Love who you are, the way you look and the way you smile.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <p style={{ fontSize: '25px', color: '#7d7f85', textAlign: 'center', fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif', marginTop: '80px' }}>Founders</p>
                        <div className='about-foundersDesc'>
                            <p style={{ fontSize: '14px', color: '#7d7f85', width: '600px', textAlign: 'center', letterSpacing: '1px' }}>We are on a mission to make this world a better place by first starting with us and our business. Zulu Ghevriya and Manish Jiwani are self-made businessmen with over 20 years of experience in the Diamond and Jewelry Industry. Our Lab Men have built this business as an embodiment of their dream and a lifetime goal. They have seen this industry strive but did not feel 100% satisfied with their accomplishment. They wanted to do something for the world, so that they can leave a positive footprint for the next generations. Sonasons is a brand they built that promotes the betterment in communities and preserve our mother nature. They believe Sonasons is the links for the smiles that will pass from the lab to the world.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='https://smilingrocks.com/cdn/shop/files/Founders-2LSC_1950x.jpg?v=1659340743' className='about-foundersImges' />
                    </div>
                </div>

                <div>
                    <p style={{ fontSize: '30px', color: '#7d7f85', textAlign: 'center', fontFamily : 'FreightDispProMedium-Regular, "Times New Roman", serif' }}>Sonasons Brand Story</p>
                    <div className='about-foundersDesc'>
                        <p style={{ fontSize: '14px', color: '#7d7f85', width: '700px', textAlign: 'center', letterSpacing: '1px' }}>A journey of our diamonds, our mission and our passion with your support and purchase. Watch a short video about us and our mission that we promised together with you. </p>
                    </div>
                    <div style={{display : 'flex', justifyContent : 'center'}}>
                        <iframe src="https://player.vimeo.com/video/431344262" width="640" height="480" frameborder="0" allowfullscreen=""></iframe>
                    </div>
                </div>

                <ContactForm />
                <Footer />
            </div>
        </div>
    )
}

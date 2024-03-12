import React from 'react'
import './FestiveFinds.css'
import { useNavigate } from 'react-router-dom'

export default function FestiveFinds() {

    const navigation = useNavigate();

    return (
        <div>
            <div className='FestiveMainImage'>
                <img src="//smilingrocks.com/cdn/shop/files/homepage_23c755c9-cd22-4cf4-bea5-b5e86a8cee5a_1680x.jpg?v=1700040129" style={{ width: '100%' }} />
                <div className='festiveBox'>
                    <p className='smilingFestiMainTitle1' style={{ color: 'white' }}>LAB GROWN DIAMONDS</p>
                    <p className='smilingFestiMainTitle2' style={{ color: 'white', fontSize: '40px', margin: '0px' }}>Festive Finds!</p>
                    <p className='smilingFestiMainTitle3' style={{ color: 'white', margin: '0px', fontSize: '13px' }}>
                        Explore your jewelry for upcoming holiday!
                    </p>
                    <div >
                        <button className='DiscoverBtn' onClick={() => navigation('/productpage')}>DISCOVER MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

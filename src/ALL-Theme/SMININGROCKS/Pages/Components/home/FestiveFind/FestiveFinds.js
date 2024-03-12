import React from 'react'
import './FestiveFinds.css'
import { useNavigate } from 'react-router-dom'
import banner1 from '../../../assets/banner1.jpg'

export default function FestiveFinds() {

    const navigation = useNavigate();

    return (
        <div>
            <div className='FestiveMainImage'>
                <img src={banner1} style={{ width: '100%' }} />
                <div className='festiveBox'>
                    <p className='smilingFestiMainTitle1' style={{ color: 'gray' }}>LAB GROWN DIAMONDS</p>
                    <p className='smilingFestiMainTitle2' style={{ color: 'gray', fontSize: '40px', margin: '0px' }}>Festive Finds!</p>
                    <p className='smilingFestiMainTitle3' style={{ color: 'gray', margin: '0px', fontSize: '13px' }}>
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

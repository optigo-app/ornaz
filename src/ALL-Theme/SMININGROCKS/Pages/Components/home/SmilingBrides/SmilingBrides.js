import React from 'react'
import './SmilingBrides.css'
import bridesImage from '../../../assets/SmilingRockImage/PromoBanner2.jpg'
import { Colors } from '../../../../lib/consts/Colors'

export default function SmilingBrides() {
    return (
        <div className='paddingTopMobileSet'>
            <div className='smilingBridesMain'>
                <div className='smilingBrides'>
                    <p style={{
                        color: Colors.fontColor,
                        fontSize: '25px',
                        textAlign: 'center',
                        fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif'
                    }} className='smilingBridesMainTitle'>SMILING BRIDES</p>
                    <button className='enagementBtn'>ENGAGEMENT COLLECTION</button>
                </div>
                <div className='smlingBridesImages'>
                    <img src={bridesImage} className='smilingMainImages' alt={''}/>
                </div>
            </div>
        </div>
    )
}

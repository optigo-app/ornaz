import React from 'react'
import './SmilingBrides.css'
import bridesImage from '../../../assets/smilingBrides/brides1.webp'
import { Colors } from '../../../../lib/consts/Colors'

export default function SmilingBrides() {
    return (
        <div>
            <div className='smilingBridesMain'>
                <div className='smilingBrides'>
                    <p style={{
                        color: Colors.fontColor,
                        fontSize: '25px',
                        textAlign: 'center',
                        fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif'
                    }}>SMILING BRIDES</p>
                    <button className='enagementBtn'>ENGAGEMENT COLLECTION</button>
                </div>
                <div className='smlingBridesImages'>
                    <img src={bridesImage} className='smilingMainImages'/>
                </div>
            </div>
        </div>
    )
}

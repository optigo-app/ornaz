import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';

export default function WhyOrnaz() {

  const navigation = useNavigate();

  return (
    <div className='whyOrnazMain'>
      <div style={{ marginLeft: '80px' }}>
      <p style={{fontFamily : 'Lato,sans-serif' ,fontSize:'18px', color : '#45d4d5'}}>WHY ORNAZ ?</p>
        <p className='text' onClick={() => navigation('/GiaAssistancePage')}>GIA TRAINED EXPERT ASSISTANCE</p>
        <p className='text' onClick={() => navigation('/CertificationPage')}>CERTIFICATION</p>
        <p className='text' onClick={() => navigation('/CraftsmanshipSection')}>CRAFTSMANSHIP</p>
        <p className='text' onClick={() => navigation('/QualityValuePage')}>QUALITY & VALUE BEYOND 4CS</p>
      </div>
    </div>
  )
}

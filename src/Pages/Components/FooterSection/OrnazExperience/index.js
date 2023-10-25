import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

export default function OrnazExperience() {

  const navigation = useNavigate();

  return (
    <div className='OrnazExperienceMain'>
      <div style={{ marginLeft: '80px' }}>
        <p style={{fontFamily : 'Lato,sans-serif' ,fontSize:'18px', color : '#45d4d5'}}>ORNAZ EXPERIENCE</p>
        <p className='text' onClick={() => navigation('/DisplayTechnologyPage')}>360 DEGREE DISPLAY TECHNOLOGY</p>
        <p className='text' onClick={() => navigation('/DesignRingPage')}>DESIGN YOUR OWN ENGAGEMENT RING</p>
        <p className='text' onClick={() => navigation('/BookAppoinmentPage')}>BOOK YOUR APPOINTMENT</p>
        <p className='text' onClick={() => navigation('/FreeEngravingPage')}>FREE ENGRAVING</p>
      </div>
    </div>
  )
}

import React from 'react'
import AllAboutOrnaz from './allaboutornaz'
import OrnazExperience from './experience'
import Policies from './Policies'
import WhyOrnaz from './WhyOrnaz'
import './index.css'
export default function Footer() {
  return (
    <div>
      <div className='topSection'>
          <p style={{
            color : 'white',
            fontSize : '20px',
            alignSelf : 'center',
            padding : '10px',
            fontWeight : '300'
          }}>Signup For Newsletters</p>
          <input type='text' className='enterEmail' placeholder='enter your email' />
          <button className='btnjoin'>JOIN</button>
      </div>
      <div style={{ display: 'flex' , padding : '15px' }}>
        <OrnazExperience />
        <WhyOrnaz />
        <AllAboutOrnaz />
        <Policies />
      </div>
    </div>

  )
}

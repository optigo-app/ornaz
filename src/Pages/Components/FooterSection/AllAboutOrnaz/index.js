import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';

export default function AllAboutOrnaz() {

  const navigation = useNavigate();

  return (
    <div className='AllAboutOrnazMain'>
      <div style={{ marginLeft: '80px' }}>
      <p style={{fontFamily : 'Lato,sans-serif' ,fontSize:'18px', color : '#45d4d5'}}>ALL ABOUT ORNAZ</p>
        <p className='text' onClick={() => navigation('/AboutPage')}>ABOUT US</p>
        <p className='text' onClick={() => navigation('/ContactPage')}>CONTACT US</p>
        <p className='text' onClick={() => navigation('/FriendPage')}>REFER YOUR FRIENDS</p>
        <p className='text' onClick={() => navigation('/BlogSection')}>ORNAZ BLOG</p>
        <p className='text' onClick={() => navigation('/CelebTakeOverSection')}>CELEB TAKEOVER</p>
      </div>
    </div>
  )
}

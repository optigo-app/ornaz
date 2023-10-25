import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BannerPage.css'
export default function BannerPage() {

  const navigation = useNavigate();

  return (
    <div style={{ height: '700px', border: '1px solid black', cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>
      <img className='BannerImage' alt='' src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/banners/desktop/main_banner.webp" />
    </div>
  )
}

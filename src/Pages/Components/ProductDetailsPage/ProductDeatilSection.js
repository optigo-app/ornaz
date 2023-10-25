import React from 'react'
import './ProductDeatilSection.css'
import ContactPage from './ContactPage'
import FooterSection from '../FooterSection'


export default function ProductDeatilSection() {
  return (
    <div>
      <div className='imageDetail'>
        <div className='imageDetailImage'>
        <h1>productImage</h1>

        </div>
        <div className='imageDetailByNow'>
        <h1>productByNowSection</h1>

        </div>
      </div>
      <div className='imageDetail'>
        <div className='productDeatils'>
            <h1>productDeatils</h1>
        </div>
        <div className='contactForm'>
            <ContactPage />
        </div>
      </div>
      <FooterSection />
    </div>

  )
}

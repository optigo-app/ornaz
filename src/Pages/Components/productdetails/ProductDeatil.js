import React from 'react'
import './ProductDeatil.css'
import Footer from '../footer'
import Header from '../home/Header'
import ProductContact from './ProductContact'


export default function ProductDeatil() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
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
          <ProductContact />
        </div>
      </div>
      <Footer />
    </div>

  )
}

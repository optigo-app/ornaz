import React from 'react'
import Footer from '../../home/Footer/Footer'
import './Explore.css'

const Explore = () => {
  return (
    <div style={{ width: '100%', background: '#fff', marginBottom: '100px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', color: '#7d7f85', alignItems: 'center', marginTop: '60px', flexDirection: 'column', borderBottom: '1px solid #e1e1e1' }}>
        <h2>Explore More</h2>
        <div className='exploreMain'>
          <div>
            <img
              src={'https://smilingrocks.com/cdn/shop/files/founders_image_resize_2_grande.jpg?v=1613679000'}
              alt={''}
              style={{ width: '735px', height: '459px', objectFit: 'cover' }}
              className='smilingExpolerImgs'
            />
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '10px', margin: '60px 0px 90px 0px' }}>
              <h3 style={{ fontFamily: "FreightDisp Pro Medium" }}>About Us</h3>
              <p className='smilingExpolerBoxDesc' style={{ width: '420px', fontFamily: "TT Commons, sans-serif", fontSize: '13px', textAlign: 'center' }}>The founders of Sonasons have a mission to spread smiles through supporting different charity organizations.</p>
              <a href="#" style={{ textDecoration: 'none', fontFamily: "TT Commons, sans-serif", fontSize: '12px', letterSpacing: '1px', fontWeight: '600' }}>LEARN MORE</a>
            </div>
          </div>
          <div>
            <img
              src={'https://smilingrocks.com/cdn/shop/files/product_image_2_grande.jpg?v=1613689552'}
              alt={''}
              style={{ width: '735px', height: '459px', objectFit: 'cover' }}
              className='smilingExpolerImgs'

            />
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '10px', margin: '60px 0px 90px 0px' }}>
              <h3 style={{ fontFamily: "FreightDisp Pro Medium" }}>Impact Report 2020</h3>
              <p className='smilingExpolerBoxDesc' style={{ width: '420px', fontFamily: "TT Commons, sans-serif", fontSize: '13px', textAlign: 'center' }}>Read our latest Sustainability Impact Report and know more about our efforts towards a better future.</p>
              <a href="#" style={{ textDecoration: 'none', fontFamily: "TT Commons, sans-serif", fontSize: '12px', letterSpacing: '1px', fontWeight: '600' }}>READ NOW</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Explore
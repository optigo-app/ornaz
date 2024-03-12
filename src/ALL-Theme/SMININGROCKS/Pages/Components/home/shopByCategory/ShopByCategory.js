import React from 'react'
import './ShopByCategory.css'
import shop1 from '../../../assets/shopByCategory/shopByCategory1.webp'
import shop2 from '../../../assets/shopByCategory/shopByCategory2.jpg'
import shop3 from '../../../assets/shopByCategory/shopByCategory3.webp'
import shop4 from '../../../assets/shopByCategory/shopByCategory4.jpg'
import { Colors } from '../../../../lib/consts/Colors'

export default function ShopByCategory() {
  return (
    <div>
      <div>
        <p className='shopbycategoryTitle'>Shop By Category</p>
        <div className='shopbycategoryDesc'>
          <p style={{
            color: 'rgb(125, 127, 133)',
            fontSize: '13px',
            width: '240px',
            textAlign: 'center'

          }}>Discover Sonasons Fine Jewelry! Brilliant and Better!</p>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }} className='smilingSopCateMain'>
          <div className='shopByCategoryBox1Main'>
            <div className='shopByCategoryBox'>
              <img src={shop1} className='shopByCategoryBoxImg' />
              <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>RINGS</p>
            </div>
            <div className='shopByCategoryBox'>
              <img src={shop2} className='shopByCategoryBoxImg' />
              <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>EARRINGS</p>
            </div>
          </div>
          <div className='shopByCategoryBox2Main'>
            <div className='shopByCategoryBox'>
              <img src={shop3} className='shopByCategoryBoxImg' />
              <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>NACKLACES</p>
            </div >
            <div className='shopByCategoryBox'>
              <img src={shop4} className='shopByCategoryBoxImg' />
              <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>BRACELETS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

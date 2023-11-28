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

          }}>Discover Smiling Rocks Fine Jewelry! Brilliant and Better!</p>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div className='shopByCategoryBox'>
            <img src={shop1} style={{ height: '200px', width: '200px' }} />
            <p style={{fontWeight : 500, color : Colors.fontColor ,textAlign : 'center'}}>RINGS</p>
          </div>
          <div className='shopByCategoryBox'>
            <img src={shop2} style={{ height: '200px', width: '200px' }} />
            <p style={{fontWeight : 500, color : Colors.fontColor ,textAlign : 'center'}}>EARRINGS</p>
          </div>
          <div className='shopByCategoryBox'>
            <img src={shop3} style={{ height: '200px', width: '200px' }} />
            <p style={{fontWeight : 500, color : Colors.fontColor ,textAlign : 'center'}}>NACKLACES</p>
          </div >
          <div className='shopByCategoryBox'>
            <img src={shop4} style={{ height: '200px', width: '200px' }} />
            <p style={{fontWeight : 500, color : Colors.fontColor ,textAlign : 'center'}}>BRACELETS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

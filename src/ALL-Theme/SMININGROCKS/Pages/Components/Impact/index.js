import React from 'react'
import './index.css'
import i1 from '../../assets/Impact/banner.webp'

const index = () => {
  return (
    <div className='impact-container'>
        <div className='impact-container2'>
         <div className='impact-img-container'>
           <img src={i1} alt={'img'} style={{zIndex:111}}/>
         </div>
        </div>
    </div>
  )
}

export default index
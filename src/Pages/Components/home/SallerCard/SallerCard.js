import React from 'react'
import { Cards } from '../HomeCards/Cards'
import img1 from '../../../assets/cardringimg/cardringimg1.webp'
import img2 from '../../../assets/cardringimg/cardringimg2.webp'
import img3 from '../../../assets/cardringimg/cardringimg3.webp'
import img4 from '../../../assets/cardringimg/cardringimg4.webp'
import img5 from '../../../assets/cardringimg/cardringimg5.webp'
import img6 from '../../../assets/cardringimg/cardringimg6.webp'

export default function SallerCard() {
  let demoJSON= [
    {prodImg:img1,prodtitle:'Brenda'},
    {prodImg:img2,prodtitle:'Beryl'},
    {prodImg:img3,prodtitle:'Selvin'},
    {prodImg:img4,prodtitle:'Mira'},
    {prodImg:img5,prodtitle:'Serena'},
    {prodImg:img6,prodtitle:'Gloriole'},
]

  return (
    <>
    {/* <div
      style={{ height: "auto", marginTop:'80px' }}
    >
      <div className="card-outer-container" >
        <div className="card-header">
          <span className="card-title-text">Shop Our Best Sellers</span>
          <span className="card-shopall">Shop All</span>
        </div>
        <div className='cards-img-text-container'>
          {demoJSON?.map((data) => (
            <div className='card-inner-container'>
              <div className='img-container'>
                <img
                  src={data.prodImg}
                  alt="..."
                  className='cards-img'
                />
              </div>

              <div className="card-footer" style={{ marginTop: '10px', fontWeight: '500', fontSize: '14.3px', position: 'relative', zIndex: 1 }}>
                <font>{data.prodtitle}</font>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}

     <Cards sallerCardImg={demoJSON} cardTitle={'Shop Our Best Sellers'} type={'seller'}/>   
    </>
  )
}

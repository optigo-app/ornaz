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
     <Cards sallerCardImg={demoJSON} cardTitle={'Shop Our Best Sellers'} type={'seller'}/>   
    </>
  )
}

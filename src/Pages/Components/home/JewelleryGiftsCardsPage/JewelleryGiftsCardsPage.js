import React from 'react'
// import { useNavigate } from 'react-router-dom';

import earings from '../../../assets/finegifts/earrings.webp'
import necklaces from '../../../assets/finegifts/necklaces.webp'
import gifts from '../../../assets/finegifts/gifts.webp'
import bands from '../../../assets/finegifts/bands.webp'
import { Cards } from '../HomeCards/Cards'


export default function JewelleryGiftsCardsPage() {
  
  // const navigation = useNavigate();
  let dummyJson=[
    {prodImg:earings,prodtitle:'Earings'},
    {prodImg:necklaces,prodtitle:'Necklaces'},
    {prodImg:gifts,prodtitle:'Gifts'},
    {prodImg:bands,prodtitle:'Stackable Bands'},
    
  ]

  return (
    <div 
    // onClick={() => navigation('/jewelleryPage')}
    >

        <Cards sallerCardImg={dummyJson} cardTitle={'Fine Jewellery Gifts'} type={'category'}/> 

    </div>
  )
}

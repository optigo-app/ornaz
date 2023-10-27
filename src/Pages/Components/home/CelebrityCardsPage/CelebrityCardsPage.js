import React from 'react'
import { useNavigate } from 'react-router-dom'

import tp from '../../../assets/celebrityImg/tejasswi_prakash.webp'
import ma from '../../../assets/celebrityImg/malaika_arora.webp'
import hk from '../../../assets/celebrityImg/hina_khan.webp'
import sb from '../../../assets/celebrityImg/sonam_bajwa.webp'
import sa from '../../../assets/celebrityImg/shraddha_arya.webp'
import gk from '../../../assets/celebrityImg/gauahar_khan.webp'
import kt from '../../../assets/celebrityImg/karishma_tanna.webp'
import { Cards } from '../HomeCards/Cards'

export default function CelebrityCardsPage() {

  const navigation = useNavigate();

  let dummyJson=[
    {prodImg:tp,prodtitle:'Tejasswi Prakash'},
    {prodImg:ma,prodtitle:'Malaika Arora'},
    {prodImg:hk,prodtitle:'Hina Khan'},
    {prodImg:sb,prodtitle:'Sonam Bajwa'},
    {prodImg:sa,prodtitle:'Shraddha Arya'},
    {prodImg:gk,prodtitle:'Gauahar Khan'},
    {prodImg:kt,prodtitle:'Karishma Tanna'},
  ]

  return (
    <div 
    style={{ }} 
    // onClick={() => navigation('/productDetails')}
    > 

      <Cards sallerCardImg={dummyJson} cardTitle={'Celebrity Inspired Rings'} type={'celebs'}/>

    </div>
  )
}

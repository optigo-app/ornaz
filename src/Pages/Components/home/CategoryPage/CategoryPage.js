import React from "react";
import engagement from '../../../assets/shopbycatogery/engagement.webp'
import mens from '../../../assets/shopbycatogery/mens.webp'
import eternity from '../../../assets/shopbycatogery/eternity.webp'
import gifts from '../../../assets/shopbycatogery/gifts.webp'
import { Cards } from "../HomeCards/Cards";

export default function CategoryPage() {

  let demoJSON= [
    {prodImg:engagement,prodtitle:'Women’s Engagement Rings'},
    {prodImg:mens,prodtitle:'Men’s Engagement Rings'},
    {prodImg:eternity,prodtitle:'Eternity Bands'},
    {prodImg:gifts,prodtitle:'Fine Jewellery Gifts'},

]
  return (
    <>
    <div style={{height:'auto'}}>
    <Cards sallerCardImg={demoJSON} cardTitle={'Shop by Category'} type={'category'}/> 
    </div>
    </>
    );
}

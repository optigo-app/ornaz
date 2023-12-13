import React from 'react'
import './JewelryPage.css'
import ProductList from '../ProductList/ProductList'
import Header from '../home/Header/Header'

const JewelryPage = () => {

  return (
    <>
    <Header/>
    <div className='jwpage_container'>
    <ProductList PageType={'jewelry'} />
    </div>
    </>
  )
}

export default JewelryPage
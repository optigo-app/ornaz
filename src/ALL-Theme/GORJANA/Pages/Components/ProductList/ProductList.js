import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

const ProductList = ({pageTitle,prodCateList,FilterCateList,productsList}) => {
  return (
    <div >
        <div style={{display:'flex',justifyContent:'center'}}>
        <span className='gj_pagetitle'>{pageTitle}</span>
        </div>
        <div className='gj_collection_container'>
        {
            prodCateList.map((pcl)=>(
                <div className='gj_pcl_container'>
                    <img className='gj_pcl_img' src={pcl.cateImages} alt={''} />
                    <span className='gj_pcl_title'>{pcl.cateTitle}</span>
                </div>
            ))
        }
        </div>
        <ProductCard productsList={productsList}/>
        <div style={{display:'flex',justifyContent:'center',margin:'40px 0px'}}>
            <button style={{background:'none',border:'1px solid #283045',padding:'10px 25px'}}>BACK TO TOP</button>
        </div>
        <div style={{display:'flex',gap:'80px',justifyContent:'center'}}>
            <div>Previous</div>
            <div>1 of 4</div>
            <div>Next</div>
        </div>
    </div>
  )
}

export default ProductList
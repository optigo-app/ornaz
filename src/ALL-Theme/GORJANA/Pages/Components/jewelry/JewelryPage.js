import React from 'react'
import './JewelryPage.css'
import ProductList from '../ProductList/ProductList'
import Header from '../home/Header/Header'

const JewelryPage = () => {


    let productsList=[
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
    ]

    let prodCateList=[
        {
            cateTitle:'Necklaces',
            cateImages:'https://www.gorjana.com/cdn/shop/collections/Collection-Banner_Necklaces_1.jpg',
        },
        {
            cateTitle:'Earrings',
            cateImages:'https://www.gorjana.com/cdn/shop/collections/Earrings.jpg',
        },
        {
            cateTitle:'Bracelets',
            cateImages:'https://www.gorjana.com/cdn/shop/collections/Collection-Banner_Bracelets_1.jpg',
        },
        {
            cateTitle:'Rings',
            cateImages:'https://www.gorjana.com/cdn/shop/collections/Collection-Banner_Rings_1.jpg',
        },
        {
            cateTitle:'Charms',
            cateImages:'https://www.gorjana.com/cdn/shop/collections/charms.jpg',
        },
        {
            cateTitle:'The Fine Collection',
            cateImages:'https://www.gorjana.com/cdn/shop/collections/FineJewelry.jpg',
        },
    ]

    let FilterCateList=[
        {
            title:'Category',
            cates:[
                {label:'Necklaces'},
                {label:'Earrings'},
                {label:'Rings'},
                {label:'Bracelets'},
                {label:'Charms'},
            ],
        },
        {
            title:'Metal',
            cates:[
                {label:'Gold plated'},
                {label:'silver plated'},
                {label:'Rose Gold plated'},
            ],
        },
    ]


  return (
    <>
    <Header/>
    <div className='jwpage_container'>
    <ProductList pageTitle={'Shop All'} prodCateList={prodCateList} FilterCateList={FilterCateList} productsList={productsList}/>
    </div>
    </>
  )
}

export default JewelryPage
import React from 'react'
import './JewelleryCard.css'
import { useNavigate } from 'react-router-dom'


const allImages = [
  {
    id: 0,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 1,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 2,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 3,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 4,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 5,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 6,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  }, {
    id: 7,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },

  {
    id: 8,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 9,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 10,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 11,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 12,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 0,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 13,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 14,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 15,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
  {
    id: 16,
    src: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg',
    name: 'Ella',
    shape: 'Round Cut',
    productName: 'Ring',
    Price: '100000',
    oldPrice: '20000'
  },
]
export default function JewelleryCard() {

  const navigation = useNavigate();

  return (
    <div className='main'>

      <div className='imagesData'>
        {
          allImages.map((data, index) =>
            <div className='images' onClick={() => navigation('/productDetails')}>
              <img src={data.src} className="productImages" />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{margin : 0}}>{data.name}</p>
                <p style={{margin : 0}}>₹{data.Price}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{margin : 0}}>{data.shape}</p>
                <p style={{margin : 0, textDecoration : 'line-through' , color : 'red'}} >₹{data.oldPrice}</p>
              </div>
              <p style={{margin : 0}}>{data.productName}</p>
            </div>
          )
        }
      </div>

    </div>
  )
}

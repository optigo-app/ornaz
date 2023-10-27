import React from 'react'
import './CartDetail.css'
import Header from '../../home/Header/Header'
import Footer from '../../footer'

const cartData = [
  {
    id: '1',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '12,122,2333',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
  {
    id: '2',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '12,122,2333',

    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },

  {
    id: '3',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '12,122,2333',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
  {
    id: '4',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
  {
    id: '5',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
  {
    id: '6',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },

  {
    id: '7',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  }, {
    id: '8',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
  {
    id: '9',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
  {
    id: '10',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
]
export default function CartDetail() {


  const navigation = useNavigate();
  
  return (
    <div>
      <Header />
      <div className='mainCart'>
        <div className='cardDetails'>
          <div>
            {
              cartData.map((data, index) =>
                <div className='cart' >
                  <img src={data.imageUrl} className='cartImage' />
                  <div style={{ marginLeft: '10px' }}>
                    <p className='cartDetails'>{data.name}</p>
                    <p className='cartDetails'>{data.ringModel}</p>
                    <p className='cartDetails'>Wight:{data.Wight}</p>
                    <div className='cartDetails' style={{ display: 'flex' }}>
                      <p className='cartDetails'>Size:{data.Size}</p>&nbsp;&nbsp;&nbsp;
                      <p className='cartDetails'>Quantity:{data.Quantity}</p>
                    </div>

                    <p className='cartDetails' style={{
                      marginTop: '20px', color: '#6abbd3',
                      fontSize: '0.85rem'
                    }}>{data.DeliveryBy}</p>
                    <div style={{ display: 'flex', }}>
                      <p className='cartDetails' style={{ fontSize: '0.7rem' }}>₹{data.newPrice}</p>&nbsp;&nbsp;&nbsp;
                      <p className='cartDetails' style={{ color: 'red', fontSize: '0.7rem' }}><del>₹{data.oldPrice}</del></p>
                    </div>
                    <p className='cartDetails' style={{ fontSize: '0.7rem', color: 'green', marginTop: '-5px' }}>Save: ₹{data.save}</p>
                  </div>
                  <div>
                    <button className='btnRemove'>Romove</button>
                  </div>

                </div>
              )
            }
          </div>
        </div>
        <div className='cartTotal'>
          <div className='cartTotalData'>
            <div className='totalData bold' style={{ fontSize: '0.9rem' }}>
              <p>SubTotal</p>
              <p>₹3,33,33,235</p>
            </div>
            <div className='totalData'>
              <p style={{ fontSize: '0.9rem' , margin : '0px'}}>Discount</p>
              <p style={{ fontSize: '0.9rem', color: 'green' }}>-₹1,22,223</p>
            </div>
            <div className='totalData'>
              <p style={{ fontSize: '0.9rem',marginTop : '5px' }}>Shipping Charges</p>
              <p style={{ fontSize: '0.9rem', color: '#44D4D5' , marginTop : '5px' }}>FREE</p>
            </div>
            <div className='totalData bold' style={{ fontSize: '0.9rem' }}>
              <p style={{ marginTop : '5px' }}>TOTAL</p>
              <p style={{ marginTop : '5px' }}>₹75,519.50</p>
            </div>
            <div className='totalData' style={{ fontSize: '0.8rem' }}>
              <p style={{ marginTop : '5px' }}>Tax (Inclusive)</p>
              <p style={{ marginTop : '5px' }}>₹75,519.50</p>
            </div>
          </div>
          <button className='btnCheckOut' onClick={() => navigation('/CheckOutSummry')}>Checkout Securely</button>
        </div>

      </div>
      <Footer />
    </div>
  )
}

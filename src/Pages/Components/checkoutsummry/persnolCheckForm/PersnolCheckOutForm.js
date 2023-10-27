import React from 'react'
import './PersnolCheckOutForm.css'
import Header from '../../home/Header/Header'

export default function PersnolCheckOutForm() {
  return (
    <div>
      <Header />
      <div className='persnolForm'>
        <div className='shippingAddress'>
          <div>
            <h2 style={{ fontWeight: 500, fontSize: '1.3rem', lineHeight: '20px' }}>SHIPPING ADDRESS</h2>
          </div>
          <div style={{ display: 'flex', height: '70px', alignItems: 'center' }}>
            <input defaultChecked type='radio' /> <p >Enter a new address</p>
          </div>
          <div className='formMainInput' style={{ height: '100px' }}>
            <div>
              <p className='formMainFont'>First name </p>
              <input type='text' placeholder='First name' className='form-Control' />
            </div>
            <div style={{ marginLeft: '30px' }}>
              <p className='formMainFont'>Last name </p>
              <input type='text' placeholder='Last name' className='form-Control' />
            </div>
          </div>
          <div className='formMainInput' style={{ height: '100px' }}>
            <div>
              <p className='formMainFont' >Address </p>
              <input type='text' className='form-Control' placeholder='Address' />
            </div>
            <div style={{ marginLeft: '30px' }}>
              <p className='formMainFont'>Address </p>
              <input type='text' placeholder='Address' className='form-Control' />
            </div>
          </div>

          <div className='formMainInput' style={{ height: '100px' }}>
            <div>
              <p className='formMainFont'>City</p>
              <input type='text' placeholder='City' className='form-Control' />
            </div>
            <div style={{ marginLeft: '30px' }}>
              <p className='formMainFont'>PIN </p>
              <input type='text' placeholder='PIN' className='form-Control' />
            </div>
          </div>

          <div style={{ height: '100px' }}>
            <p className='formMainFont'>State </p>
            <select className='stateSelect'>
              <option value="18">18</option>
              <option value="14">14</option>
            </select>
          </div>

          <div style={{ height: '100px' }}>
            <p className='formMainFont'>Country </p>
            <input type='label' value='India' className='CountryLabel' />
          </div>

          <div style={{ height: '100px' }}>
            <p className='formMainFont'>Phone Number </p>
            <div style={{ display: 'flex ' }}>
              <select style={{ width: '80px' }}>
                <option value="18">+91</option>
                <option value="14">+ 245</option>
              </select>
              <input type='text' placeholder='Phone Number' style={{ border: '1px solid #ced4da', height: '40px', width: '850px' }} />
            </div>
          </div>

          <h2 style={{ margin: '0 0 2rem', fontSize: '1.3rem' }}>ADD A NOTE TO YOUR ORDER</h2>
          <textarea style={{ border: '1px solid #ced4da', height: '40px', width: '930px' }} />
          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px' }}>
            <button style={{
              backgroundColor: '#45d4d5',
              height: '50px',
              width: '250px',
              border: 'none'
            }}>PLACE ORDER</button>
          </div>

        </div>

        <div className='orderReview'>
          <div style={{ margin: '15px' }}>
            <p style={{ fontSize: '1rem' }}>ORDER REVIEW</p>
            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ margin: '0px', fontWeight: 'bolder', lineHeight: '1.5' }}>Swathe x 1</p>
                <p style={{ margin: '0px' }}>₹101,393.67</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0px' }}>
                <p style={{ margin: '0px' }}>ARA1382</p>
                <p style={{ margin: '0px', color: 'red', fontSize: '14px' }}><del>₹115,293.69</del></p>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ margin: '0px', fontWeight: 'bolder', lineHeight: '1.5' }}>Swathe x 1</p>
                <p style={{ margin: '0px' }}>₹101,393.67</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0px' }}>
                <p style={{ margin: '0px' }}>ARA1382</p>
                <p style={{ margin: '0px', color: 'red', fontSize: '14px' }}><del>₹115,293.69</del></p>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ margin: '0px', fontWeight: 'bolder', lineHeight: '1.5' }}>Swathe x 1</p>
                <p style={{ margin: '0px' }}>₹101,393.67</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0px' }}>
                <p style={{ margin: '0px' }}>ARA1382</p>
                <p style={{ margin: '0px', color: 'red', fontSize: '14px' }}><del>₹115,293.69</del></p>
              </div>
            </div>
            

            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ margin: '0px', fontWeight: 'bolder', lineHeight: '1.5' }}>Swathe x 1</p>
                <p style={{ margin: '0px' }}>₹101,393.67</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0px' }}>
                <p style={{ margin: '0px' }}>ARA1382</p>
                <p style={{ margin: '0px', color: 'red', fontSize: '14px' }}><del>₹115,293.69</del></p>
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '1px solid #cecece',
              borderBottom: '1px solid #cecece',
              marginTop: '20px'
            }}>
              <p>Subtotal</p>
              <p>₹1,216,728.70</p>
            </div>
            <div style={{
              borderBottom: '1px solid #cecece',
              height: '140px'
            }}>
              <p className='PromoTitle'>PROMO CODE</p>
              <input type='text' className='promoCode' />
              <p style={{ fontSize: '1rem', margin: '0px' }}>Gift card or Voucher code</p>
            </div>

            <div style={{
              borderBottom: '1px solid #cecece',
              height: '140px'
            }}>
              <p className='PromoTitle'>REFERRAL CODE</p>
              <input type='text' className='promoCode' />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <p>TOTAL</p>
              <p>₹1,216,728.70</p>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <p style={{ margin: '0px' }}>Tax (inclusive)</p>
              <p style={{ margin: '0px' }}>₹1,216,728.70</p>
            </div>
          </div>
        </div>

      </div>
      <div style={{textAlign : 'center' , marginTop : '30px' , borderTop : '1px solid #cecece',}}>
        <p style={{fontSize : '1rem' , fontWeight : '400',margin : '0px' }}>A-26/5, 2nd floor, DLF city phase-1, sector-28, Near DLF Mega Mall, Golf Course Road, Gurgaon, Haryana 122002</p>
        <p style={{fontSize : '1rem' , fontWeight : '400',margin : '0px'}}>@2023 ORNAZ. All Rights Reserved</p>
      </div>
    </div>
  )
}

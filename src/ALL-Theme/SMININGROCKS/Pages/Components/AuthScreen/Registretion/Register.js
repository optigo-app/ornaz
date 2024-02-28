import React from 'react'
import Header from '../../home/Header/Header'
import './Register.css'
import { TextField } from '@mui/material'
import Footer from '../../home/Footer/Footer'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const navigation = useNavigate();

  return (
    <div style={{
      backgroundColor: '#c0bbb1'
    }}>
      <Header />
      <div style={{
        backgroundColor: '#c0bbb1'
      }}>
        <div className='smling-register-main'>
          <p style={{
            textAlign: 'center',
            paddingBlock: '60px',
            marginTop: '15px',
            fontSize: '40px',
            color: '#7d7f85',
            fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
          }}>Register</p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <TextField id="outlined-basic" label="First Name" variant="outlined" className='labgrowRegister' style={{ margin: '15px' }} />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" className='labgrowRegister' style={{ margin: '15px' }} />
            <TextField id="outlined-basic" label="Email" variant="outlined" className='labgrowRegister' style={{ margin: '15px' }} />
            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" className='labgrowRegister'
              style={{ margin: '15px' }}
            />

            <button className='createBtnRegister'>CREATE ACCOUNT</button>

            <div style={{display : 'flex',marginTop: '10px'}}>
              <input type='checkbox' />
              <p style={{margin : '5px'}}>Subscribe to our newsletter</p>
            </div>
            <p className='SmilingSignInHere' onClick={() => navigation('/signIn')}>SIGN IN HERE</p>

          </div>
          <Footer />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
        <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => ''}>BACK TO TOP</p>
      </div>
    </div>
  )
}

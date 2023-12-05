import React from 'react'
import Header from '../../home/Header/Header'
import { TextField } from '@mui/material'
import './SignIn.css'
import Footer from '../../home/Footer/Footer'
import { useNavigate } from 'react-router-dom'


export default function SignIn() {

    const navigation = useNavigate();

    return (
        <div style={{
            backgroundColor: '#c0bbb1'
        }}>
            <Header />
            <div style={{
                backgroundColor: '#c0bbb1'
            }}>
                <div className='sminingSigninMain'>
                    <p style={{
                        textAlign: 'center',
                        paddingBlock: '60px',
                        marginTop: '15px',
                        fontSize: '40px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}>Login</p>
                    <TextField id="outlined-basic" label="Email" variant="outlined" className='labGroSignTextBox' />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        className='labGroSignTextBox'
                        style={{ marginTop: '50px' }}
                    />
                    <div style={{ marginTop: '70px' }}>
                        <button className='smiling-SignInBtn'>SIGN IN</button>
                        <button className='smiling-RegisterBtn' onClick={() => navigation('/register')}>REGISTER NOW</button>
                    </div>
                    <div className='smilingSignForgotDiv'>
                        <p className='smilingSignForgot' onClick={() => navigation('/forgotPass')}>FORGOT YOUR PASSWORD?</p>
                    </div>
                    <div className='smilinngLogReturnHomeDiv'>
                        <p className='smilingSignForgot' onClick={() => navigation('/')}>RETURN TO HOME</p>
                    </div>
                </div>
                <div className='smilingSignInFooter'>
                    <Footer />
                </div>
            </div>
            <div style={{display : 'flex' , justifyContent : 'center', paddingBlock  :'30px'}}>
                <p style={{ margin : '0px' , fontWeight : 500, width: '100px', color: 'white', cursor: 'pointer'}} onClick={() => ''}>BACK TO TOP</p>
            </div>
        </div>
    )
}

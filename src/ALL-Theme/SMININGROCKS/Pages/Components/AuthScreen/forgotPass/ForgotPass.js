import React from 'react'
import Header from '../../home/Header/Header'
import './ForgotPass.css'
import { TextField } from '@mui/material'
import Footer from '../../home/Footer/Footer'

export default function ForgotPass() {
    return (
        <div style={{
            backgroundColor: '#c0bbb1'
        }}>
            <Header />
            <div style={{
                backgroundColor: '#c0bbb1'
            }}>
                <div className='smling-forgot-main'>
                    <p style={{
                        textAlign: 'center',
                        paddingBlock: '60px',
                        marginTop: '15px',
                        fontSize: '40px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}>Forgot Your Password</p>
                    <p style={{
                        textAlign: 'center',
                        marginTop: '-60px',
                        fontSize: '15px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}>Please enter your email, and we will send you a password reset link.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" className='labGrowForgot' style={{ margin: '15px' }} />
                        <button className='submitBtnForgot'>SUBMIT</button>
                        <p className='cancleForgot'>CANCEL</p>
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

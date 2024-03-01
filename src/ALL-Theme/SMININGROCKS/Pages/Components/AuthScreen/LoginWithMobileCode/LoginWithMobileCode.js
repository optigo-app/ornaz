import React, { useEffect, useState } from 'react';
import Header from '../../home/Header/Header';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import Footer from '../../home/Footer/Footer';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { useNavigate } from 'react-router-dom';
import './LoginWithMobileCode.css';

export default function LoginWithMobileCode() {
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigate();
    const [mobileNo, setMobileNo] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('registerMobile');
        if (storedEmail) setMobileNo(storedEmail);

        const fetchData = async () => {
            try {
                const value = await localStorage.getItem('LoginCodeMobile');
                if (value === 'true') {
                    const encodedFrontEnd_RegNo = localStorage.getItem('FrontEnd_RegNo');
                    const combinedValue = JSON.stringify({
                        userid: `${mobileNo}`, FrontEnd_RegNo: `${encodedFrontEnd_RegNo}`
                    });
                    const encodedCombinedValue = btoa(combinedValue);
                    const body = {
                        "con": "{\"id\":\"\",\"mode\":\"WEBSCEMAIL\"}",
                        "f": "LoginWithEmailCode (firstTimeOTP)",
                        p: encodedCombinedValue
                    };
                    const response = await CommonAPI(body);

                    if (response.Data.rd[0].stat === 1) {
                        localStorage.setItem('LoginCodeMobile', 'false');
                        alert('OTP send Sucssessfully');
                    } else {

                    }
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);



    const handleInputChange = (e, setter, fieldName) => {
        const { value } = e.target;
        setter(value);
        if (fieldName === 'mobileNo') {
            if (!value.trim()) {
                setErrors(prevErrors => ({ ...prevErrors, mobileNo: 'Code is required' }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, mobileNo: '' }));
            }
        }
    };

    const handleSubmit = async () => {
        if (!mobileNo.trim()) {
            errors.mobileNo = 'Password is required';
            return;
        }

        try {
            setIsLoading(true);
            const encodedFrontEnd_RegNo = localStorage.getItem('FrontEnd_RegNo');
            const combinedValue = JSON.stringify({
                userid: `${mobileNo}`, mobileno: '', pass: `${mobileNo}`, mobiletoken: 'otp_email_login', FrontEnd_RegNo: `${encodedFrontEnd_RegNo}`
            });
            const encodedCombinedValue = btoa(combinedValue);

            const body = {
                "con": "{\"id\":\"\",\"mode\":\"WEBLOGIN\"}",
                "f": "LoginWithEmail (handleSubmit)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                localStorage.setItem('LoginUser', 'true')
                localStorage.setItem('registerMobile', mobileNo);
                alert('Register Sucssessfully');
                navigation('/');
            } else {
                errors.mobileNo = 'Code is Invalid'
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };


    const handleResendCode = async () => {
        try {
            const encodedFrontEnd_RegNo = localStorage.getItem('FrontEnd_RegNo');
            const combinedValue = JSON.stringify({
                userid: `${mobileNo}`, FrontEnd_RegNo: `${encodedFrontEnd_RegNo}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": "{\"id\":\"\",\"mode\":\"WEBSCEMAIL\"}",
                "f": "LoginWithEmailCode (firstTimeOTP)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.Table1[0].stat === 1) {
                alert('OTP send Sucssessfully');
            } else {

            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{ backgroundColor: '#c0bbb1' }}>
            {isLoading && (
                <div className="loader-overlay">
                    <div className="loader"></div>
                </div>
            )}
            <Header />
            <div style={{ backgroundColor: '#c0bbb1' }}>
                <div className='smling-forgot-main'>
                    <p style={{
                        textAlign: 'center',
                        paddingBlock: '60px',
                        marginTop: '15px',
                        fontSize: '40px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}>Login With Code</p>
                    <p style={{
                        textAlign: 'center',
                        marginTop: '-80px',
                        fontSize: '15px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}>Last step! To secure your account, enter the code we just sent to {mobileNo}.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                        <TextField
                            id="outlined-basic"
                            label="Enter Code"
                            variant="outlined"
                            className='labgrowRegister'
                            style={{ margin: '15px' }}
                            onChange={(e) => handleInputChange(e, setMobileNo, 'mobileNo')}
                            error={!!errors.mobileNo}
                            helperText={errors.mobileNo}
                        />

                        <button className='submitBtnForgot' onClick={handleSubmit}>Login</button>
                        <p style={{ marginTop: '10px' }}>Didn't get the code ? <span style={{ fontWeight: 500, cursor: 'pointer' }} onClick={handleResendCode}>Resend Code</span></p>

                        <p className='cancleForgot' onClick={() => navigation('/')}>CANCEL</p>
                    </div>
                    <Footer />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
                <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => ''}>BACK TO TOP</p>
            </div>
        </div>
    );
}

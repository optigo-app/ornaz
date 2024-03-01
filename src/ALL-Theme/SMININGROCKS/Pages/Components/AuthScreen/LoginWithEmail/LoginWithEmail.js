import React, { useEffect, useState } from 'react';
import Header from '../../home/Header/Header';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import Footer from '../../home/Footer/Footer';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CryptoJS from 'crypto-js';

export default function LoginWithEmail() {
    const [email, setEmail] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const [emailError, setEmailError] = useState('');
    const [submitClicked, setSubmitClicked] = useState(false);
    const navigation = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem('registerEmail');
        if (storedEmail) setEmail(storedEmail);
    }, []); // 


    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };


    const handleInputChange = (e, setter, fieldName) => {
        const { value } = e.target;
        setter(value);
        if (fieldName === 'confirmPassword') {
            if (!value.trim()) {
                setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Password is required' }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
            }
        }
    };
    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };

    function hashPasswordSHA1(password) {
        const hashedPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);
        return hashedPassword;
    }

    const handleSubmit = async () => {
        setSubmitClicked(true);

        if (!confirmPassword.trim()) {
            errors.confirmPassword = 'Password is required';
            return;
        }

        const hashedPassword = hashPasswordSHA1(confirmPassword);
        try {
            setIsLoading(true);

            const encodedFrontEnd_RegNo = localStorage.getItem('FrontEnd_RegNo');
            const combinedValue = JSON.stringify({
                userid: `${email}`, mobileno: '', pass: `${hashedPassword}`, mobiletoken: '', FrontEnd_RegNo: `${encodedFrontEnd_RegNo}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": "{\"id\":\"\",\"mode\":\"WEBLOGIN\"}",
                "f": "LoginWithEmail (handleSubmit)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            console.log('response...',response);
            if (response.Data.rd[0].stat === 1) {
                localStorage.setItem('LoginUser', 'true')
                localStorage.setItem('loginUserDetail', JSON.stringify(response.Data.rd[0]));
                localStorage.setItem('userEmail', email);
                alert('Register Sucssessfully');
                navigation('/');
            } else {
                errors.confirmPassword = 'Password is Invalid'
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };


    const handleTogglePasswordVisibility = (fieldName) => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleNavigation = () => {
        localStorage.setItem('LoginCodeEmail', 'true');
        localStorage.setItem('registerEmail', email);
        navigation('/LoginWithEmailCode');
    }
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
                    }}>Login With Password</p>
                    <p style={{
                        textAlign: 'center',
                        marginTop: '-80px',
                        fontSize: '15px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}>using {email}</p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextField
                            id="outlined-confirm-password-input"
                            label="Password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            autoComplete="current-password"
                            className='labgrowRegister'
                            style={{ margin: '15px' }}
                            value={confirmPassword}
                            onChange={(e) => handleInputChange(e, setConfirmPassword, 'confirmPassword')}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => handleTogglePasswordVisibility('confirmPassword')}
                                            onMouseDown={handleMouseDownConfirmPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <button className='submitBtnForgot' onClick={handleSubmit}>Login</button>
                        <p className='cancleForgot' onClick={() => navigation('/')}>CANCEL</p>

                        <button className='submitBtnForgot' onClick={handleNavigation}>Login With a Code instead on email</button>
                        <p>Go passwordless! we'll send you an email.</p>

                        <p style={{ color: 'blue' }}>Forgot Password ?</p>
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

import React, { useEffect, useState } from 'react';
import Header from '../../home/Header/Header';
import { CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material';
import Footer from '../../home/Footer/Footer';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CryptoJS from 'crypto-js';
import { useSetRecoilState } from 'recoil';
import { loginState, productDataNew } from '../../../../../../Recoil/atom';
import { productListApiCall } from '../../../../Utils/API/ProductListAPI';
import { ToastContainer, toast } from 'react-toastify';
import './LoginWithEmail.css'

export default function LoginWithEmail() {
    const [email, setEmail] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigate();
    const location = useLocation();


    const setPdData = useSetRecoilState(productDataNew)
    const setIsLoginState = useSetRecoilState(loginState)


    let pdDataCalling = async () => {
        await productListApiCall().then((res) => {
            setPdData(res)
        })
    }

    useEffect(() => {
        const storedEmail = location.state?.email;;
        if (storedEmail) setEmail(storedEmail);
    }, []);


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
        event?.preventDefault();
    };

    function hashPasswordSHA1(password) {
        const hashedPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);
        return hashedPassword;
    }

    const handleSubmit = async () => {
        if (!confirmPassword.trim()) {
            errors.confirmPassword = 'Password is required';
            return;
        }

        const hashedPassword = hashPasswordSHA1(confirmPassword);
        try {
            setIsLoading(true);

            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                userid: `${email}`, mobileno: '', pass: `${hashedPassword}`, mobiletoken: '', FrontEnd_RegNo: `${FrontEnd_RegNo}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": "{\"id\":\"\",\"mode\":\"WEBLOGIN\"}",
                "f": "LoginWithEmail (handleSubmit)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                localStorage.setItem('registerEmail', email)
                setIsLoginState('true')
                localStorage.setItem('LoginUser', 'true')
                localStorage.setItem('loginUserDetail', JSON.stringify(response.Data.rd[0]));
                pdDataCalling()
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

    const handleForgotPassword = async () => {
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo, domain } = storeInit;

            // let Domian = `https://${domain}`
            let Domian = `https://https://dstore.optigoapps.com`

            const combinedValue = JSON.stringify({
                domain: `${Domian}`, userid: `${email}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: '0'
            });

            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": "{\"id\":\"\",\"mode\":\"FORGOTPASSWORDEMAIL\",\"appuserid\":\"\"}",
                "f": "m-test2.orail.co.in (getdesignnolist)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                toast.success('Reset Link Send On Your Email');
            } else {
                alert('Error')
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className='paddingTopMobileSet' style={{ backgroundColor: '#c0bbb1', paddingTop: '110px' }}>
             <ToastContainer />
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <div style={{ backgroundColor: '#c0bbb1' }}>
                <div className='smling-forgot-main'>
                    <p style={{
                        textAlign: 'center',
                        paddingBlock: '60px',
                        marginTop: '15px',
                        fontSize: '40px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}
                        className='AuthScreenMainTitle'
                    >Login With Password</p>
                    <p style={{
                        textAlign: 'center',
                        marginTop: '-80px',
                        fontSize: '15px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}
                        className='AuthScreenSubTitle'
                    >using {email}</p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextField
                            autoFocus
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
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    handleSubmit();
                                }
                            }}
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

                        <button type='submit' className='submitBtnForgot' onClick={handleNavigation}>Login With a Code instead on email</button>
                        <p>Go passwordless! we'll send you an email.</p>

                        <p style={{ color: 'blue', cursor: 'pointer' }} onClick={handleForgotPassword}>Forgot Password ?</p>
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

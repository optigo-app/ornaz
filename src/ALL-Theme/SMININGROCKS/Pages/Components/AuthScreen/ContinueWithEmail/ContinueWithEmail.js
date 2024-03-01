import React, { useState } from 'react';
import Header from '../../home/Header/Header';
import './ContinueWithEmail.css';
import { TextField } from '@mui/material';
import Footer from '../../home/Footer/Footer';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { useNavigate } from 'react-router-dom';

export default function ContinueWithEmail() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigate();

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        if (!value.trim()) {
            setEmailError('Email is required.');
        } else if (!validateEmail(value)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError(''); // Clear the error if email is valid
        }
    };

    const handleSubmit = async () => {
        if (!email.trim()) {
            setEmailError('Email is required.');
            return;
        }
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        try {
            setIsLoading(true);
            const encodedFrontEnd_RegNo = localStorage.getItem('FrontEnd_RegNo');
            const combinedValue = JSON.stringify({
                userid: `${email}`, FrontEnd_RegNo: `${encodedFrontEnd_RegNo}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": "{\"id\":\"\",\"mode\":\"WEBVALDNEMAIL\"}",
                "f": "emilValid (handleEmail)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                navigation('/LoginWithEmail', { email: email });
                localStorage.setItem('registerEmail', email)
            } else {
                navigation('/register', { email: email });
                localStorage.setItem('registerEmail', email)
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
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
                    }}>Continue With Email</p>
                    <p style={{
                        textAlign: 'center',
                        marginTop: '-60px',
                        fontSize: '15px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}>We'll check if you have an account, and help create one if you don't.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            className='labGrowForgot'
                            style={{ margin: '15px' }}
                            value={email}
                            onChange={handleEmailChange}
                            error={!!emailError} // Display error when there's an error
                            helperText={emailError} // Display the error message
                        />
                        <button className='submitBtnForgot' onClick={handleSubmit}>SUBMIT</button>
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

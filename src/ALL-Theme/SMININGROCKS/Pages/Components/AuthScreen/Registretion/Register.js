import React, { useEffect, useState } from 'react';
import Header from '../../home/Header/Header';
import './Register.css';
import { CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material';
import Footer from '../../home/Footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CryptoJS from 'crypto-js';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';

export default function Register() {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('registerEmail');
    const storedMobileNo = localStorage.getItem('registerMobile');

    if (storedEmail) setEmail(storedEmail);
    if (storedMobileNo) setMobileNo(storedMobileNo);
  }, []); // 

  const handleInputChange = (e, setter, fieldName) => {
    const { value } = e.target;
    setter(value);

    if (fieldName === 'firstName') {
      if (!value.trim()) {
        setErrors(prevErrors => ({ ...prevErrors, firstName: 'First Name is required' }));
      } else {
        setErrors(prevErrors => ({ ...prevErrors, firstName: '' }));
      }
    } else if (fieldName === 'lastName') {
      if (!value.trim()) {
        setErrors(prevErrors => ({ ...prevErrors, lastName: 'Last Name is required' }));
      } else {
        setErrors(prevErrors => ({ ...prevErrors, lastName: '' }));
      }
    } else if (fieldName === 'mobileNo') {
      if (!value.trim()) {
        setErrors(prevErrors => ({ ...prevErrors, mobileNo: 'Mobile No. is required' }));
      } else if (!/^\d{10}$/.test(value.trim())) {
        setErrors(prevErrors => ({ ...prevErrors, mobileNo: 'Enter Valid mobile number' }));
      } else {
        setErrors(prevErrors => ({ ...prevErrors, mobileNo: '' }));
      }
    } else if (fieldName === 'email') {
      if (!value.trim()) {
        setErrors(prevErrors => ({ ...prevErrors, email: 'Email is required' }));
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors(prevErrors => ({ ...prevErrors, email: 'Please enter a valid email address' }));
      } else {
        setErrors(prevErrors => ({ ...prevErrors, email: '' }));
      }
    } else if (fieldName === 'confirmPassword') { // Handle confirm password validation
      if (!value.trim()) {
        setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Confirm Password is required' }));
      } else if (value !== password) {
        setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
      } else {
        setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
      }
    }
  };

  const handleTogglePasswordVisibility = (fieldName) => {
    if (fieldName === 'password') {
      setShowPassword(!showPassword);
    } else if (fieldName === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };


  function hashPasswordSHA1(password) {
    const hashedPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);
    return hashedPassword;
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    if (!mobileNo.trim()) {
      errors.mobileNo = 'Mobile No. is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!password.trim()) {
      setPasswordError('Password is required');
      errors.password = 'Password is required';
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (Object.keys(errors).length === 0) {
      const hashedPassword = hashPasswordSHA1(password);
      setIsLoading(true);
      try {
        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;
        const combinedValue = JSON.stringify({
          firstname: `${firstName}`, lastname: `${lastName}`, userid: `${email}`, country_code: '91', mobile: `${mobileNo}`, pass: `${hashedPassword}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: '0'
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": "{\"id\":\"\",\"mode\":\"WEBSIGNUP\"}",
          "f": "Register (handleSubmit)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response.Data.rd[0].stat === 1) {
          localStorage.setItem('LoginUser', 'true')
          localStorage.setItem('userEmail', email);
          alert('Register Sucssessfully');
          navigation('/');
        } else {
          alert(response.Data.rd[0].stat_msg);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(errors);
    }
  };
  const isDefaultValueSet = (value) => {
    return value && value.trim() !== '';
  };

  return (
    <div style={{ backgroundColor: '#c0bbb1' ,paddingTop: '110px' }}>
      {isLoading && (
        <div className="loader-overlay">
          <CircularProgress />
        </div>
      )}
      <div style={{ backgroundColor: '#c0bbb1' }}>
        <div className='smling-register-main'>
          <p style={{
            textAlign: 'center',
            paddingBlock: '60px',
            marginTop: '15px',
            fontSize: '40px',
            color: '#7d7f85',
            fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
          }}>Register</p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              className='labgrowRegister'
              style={{ margin: '15px' }}
              value={firstName}
              onChange={(e) => handleInputChange(e, setFirstName, 'firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />

            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              className='labgrowRegister'
              style={{ margin: '15px' }}
              value={lastName}
              onChange={(e) => handleInputChange(e, setLastName, 'lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />

            <TextField
              id="outlined-basic"
              label="Mobile No."
              variant="outlined"
              className='labgrowRegister'
              style={{ margin: '15px' }}
              value={mobileNo}
              onChange={(e) => handleInputChange(e, setMobileNo, 'mobileNo')}
              error={!!errors.mobileNo}
              helperText={errors.mobileNo}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className='labgrowRegister'
              style={{ margin: '15px' }}
              value={email}
              onChange={(e) => handleInputChange(e, setEmail, 'email')}
              error={!!errors.email}
              helperText={errors.email}
              disabled={isDefaultValueSet(email)}
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              className='labgrowRegister'
              style={{ margin: '15px' }}
              value={password}
              onChange={handlePasswordChange}
              error={!!passwordError}
              helperText={passwordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleTogglePasswordVisibility('password')}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="outlined-confirm-password-input"
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              autoComplete="current-password"
              className='labgrowRegister'
              style={{ margin: '15px' }}
              value={confirmPassword}
              onChange={(e) => handleInputChange(e, setConfirmPassword, 'confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{ // Set InputProps for icon
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

            <button className='createBtnRegister' onClick={handleSubmit}>CREATE ACCOUNT</button>

            <div style={{ display: 'flex', marginTop: '10px' }}>
              <input type='checkbox' />
              <p style={{ margin: '5px' }}>Subscribe to our newsletter</p>
            </div>
            <p className='SmilingSignInHere' onClick={() => navigation('/')}>BACK</p>

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

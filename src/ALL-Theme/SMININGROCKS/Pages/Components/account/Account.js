import React, { useEffect, useState } from 'react'
import Header from '../home/Header/Header'
import './Account.css'
import { Box, CircularProgress, IconButton, InputAdornment, Tab, Tabs, TextField, Typography } from '@mui/material'
import Footer from '../home/Footer/Footer';
import QuotationFilters from './quotationFilters/QuotationFilters';
import { useNavigate } from 'react-router-dom';
import OrderHistory from './accountOrderHistory/OrderHistory';
import CryptoJS from 'crypto-js';
import { CommonAPI } from '../../../Utils/API/CommonAPI';
import { Visibility, VisibilityOff } from '@mui/icons-material';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

//   CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
//   };

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const tabIndicator = {
    '& .MuiTab-textColorPrimary.Mui-selected': {
        color: "#3b3c3d",
    },
    '& .MuiTabs-indicator': {
        backgroundColor: "#3b3c3d"
    }
}

export default function Account() {


    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    const naviagation = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeSub = (event, newValue) => {
        setValue1(newValue);
    }

    const handleLogout = () => {
        localStorage.setItem('LoginUser', 'false');
        naviagation('/')
        window.location.reload()
    }



    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [passwordError, setPasswordError] = useState('');
    const navigation = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [customerID, setCustomerID] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('registerEmail');
        if (storedEmail) setEmail(storedEmail);

        const storedData = localStorage.getItem('loginUserDetail');
        const data = JSON.parse(storedData);
        setCustomerID(data.id);

    }, []); // 



    const handleInputChange = (e, setter, fieldName) => {
        const { value } = e.target;
        setter(value);
        if (fieldName === 'confirmPassword') { // Handle confirm password validation
            if (!value.trim()) {
                setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Confirm Password is required' }));
            } else if (value !== password) {
                setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
            }
        } else if (fieldName === 'oldPassword') {
            if (!value.trim()) {
                setErrors(prevErrors => ({ ...prevErrors, oldPassword: 'oldPassword is required' }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, oldPassword: '' }));
            }
        }
    };

    const handlePasswordChange = (event) => {
        const { value } = event.target;
        setPassword(value);
        // if (!validatePassword(value)) {
        //     setPasswordError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.');
        // } else {
        //     setPasswordError('');
        // }
    };


    const handleTogglePasswordVisibility = (fieldName) => {
        if (fieldName === 'password') {
            setShowPassword(!showPassword);
        } else if (fieldName === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword);
        } else if (fieldName === 'oldPassword') {
            setShowOldPassword(!showOldPassword);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        if (!oldPassword.trim()) {
            errors.oldPassword = 'oldPassword is required';
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

            const hashedOldPassword = hashPasswordSHA1(oldPassword);
            const hashedPassword = hashPasswordSHA1(password);
            const hashedConfirmPassword = hashPasswordSHA1(confirmPassword);
            setIsLoading(true);
            try {
                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo } = storeInit;
                const combinedValue = JSON.stringify({
                    oldpassword: `${hashedOldPassword}`, newpassword: `${hashedPassword}`, confirmpassword: `${hashedConfirmPassword}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
                });
                console.log('combinedValuecombinedValue', combinedValue);
                const encodedCombinedValue = btoa(combinedValue);
                const body = {
                    "con": `{\"id\":\"\",\"mode\":\"CHANGEPASS\",\"appuserid\":\"${email}\"}`,
                    "f": "Account (changePassword)",
                    "p": encodedCombinedValue
                }
                const response = await CommonAPI(body);

                console.log('responseresponseresponse', response);

                if (response.Data.rd[0].stat === 1) {
                    localStorage.setItem('LoginUser', 'false');
                    naviagation('/')
                    window.location.reload()
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


    return (
        <div style={{
            backgroundColor: '#c0bbb1',
            paddingTop: '110px'
        }}>
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress />
                </div>
            )}

            <div>
                <div className='Smiling-AccountMain'>
                    <p className='SmilingAccountTitle'>Your Account</p>
                    <div className='smling-AccountTabMain'>
                        <Box sx={{ width: '100%' }}>
                            <div className='smlingAccountTabWebView'>
                                <Box sx={{ display: 'flex', justifyContent: 'center', borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  >   {/*  orientation="vertical" indicatorColor="#7d7f85" */}
                                        <Tab label="ORDER HISTORY" {...a11yProps(0)} />
                                        <Tab label="MANAGE ADDRESSES" {...a11yProps(1)} />
                                        <Tab label="ACCOUNT" {...a11yProps(2)} />
                                        <Tab label="CHANGE PASSWORD" {...a11yProps(3)} />
                                    </Tabs>
                                    <p className='smilingAccountLogout' onClick={handleLogout}>LOG OUT</p>
                                </Box>
                            </div>
                            <div className='smlingAccountTabMobileView'>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} orientation="vertical" onChange={handleChange} sx={{ width: '100%' }} >   {/*  indicatorColor="#7d7f85" */}
                                        <Tab label="ORDER HISTORY" {...a11yProps(0)} sx={{ textAlign: 'start', borderBottom: 1, width: '90%', borderColor: 'divider' }} />
                                        <Tab label="MANAGE ADDRESSES" {...a11yProps(1)} />
                                        <Tab label="ACCOUNT" {...a11yProps(2)} />
                                        <Tab label="CHANGE PASSWORD" {...a11yProps(3)} />
                                    </Tabs>
                                </Box>
                                <div onClick={() => alert('dddd')}>
                                    <p className='smilingAccountLogoutMobile' onClick={handleLogout}>LOG OUT</p>
                                </div>
                            </div>

                            <CustomTabPanel value={value} index={0}>
                                <div>
                                    <OrderHistory />
                                    {/* <p style={{
                                        textAlign: 'center',
                                        color: '#7d7f85',
                                        marginTop: '30px',
                                        fontSize: '20px'
                                    }}>Your Order History</p>
                                    <div className='smlingOrderHistory'>
                                        <div style={{ padding: '100px', textAlign: 'center' }}>
                                            <p style={{ textAlign: 'center' }}>You have not completed any orders.</p>
                                            <button className='smlingOrderHistoryBtn'>SHOP NOW</button>
                                        </div>
                                    </div> */}
                                </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <div>
                                    <p style={{
                                        textAlign: 'center',
                                        color: '#7d7f85',
                                        marginTop: '30px',
                                        fontSize: '20px'
                                    }}>Saved Addresses</p>
                                    <div className='smilingSavedAddressMain'>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            padding: '30px'
                                        }}>
                                            <p style={{
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                marginTop: '30px',
                                                color: '#7d7f85'
                                            }}>Name Hello</p>
                                            <p style={{
                                                fontSize: '15px',
                                                fontWeight: 500,
                                                marginTop: '20px',
                                                color: '#7d7f85',
                                                textDecoration: 'underline'
                                            }}>DEFAULT ADDRESS</p>
                                        </div>
                                        <p style={{
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            marginTop: '15px',
                                            margin: '30px',
                                            color: '#7d7f85',
                                        }}>United States</p>
                                        <div style={{
                                            display: 'flex',
                                            margin: '30px',
                                        }}>
                                            <p className='smilingAccountSavedRemoveBtn'>EDIT</p>
                                            <p style={{
                                                marginInline: '5px',
                                                marginTop: '-2px',
                                                color: '#7d7f85'
                                            }}>|</p>
                                            <p className='smilingAccountSavedRemoveBtn'>REMOVE</p>
                                        </div>
                                    </div>
                                    <button className='smilingAcoountAddNewBtn'>ADD NEW ADDRESS</button>
                                </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                                {/* <QuotationFilters /> */}
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value1} onChange={handleChangeSub} aria-label="basic tabs example" sx={{ background: "#7d7f8529", ...tabIndicator }}>
                                        <Tab label="Account Quotation Filters" {...a11yProps(0)} sx={{ color: "#7d7f85" }} />
                                        <Tab label="Item Two" {...a11yProps(1)} sx={{ color: "#7d7f85" }} />
                                        <Tab label="Item Three" {...a11yProps(2)} sx={{ color: "#7d7f85" }} />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value1} index={0} className="quotationFilters">
                                    <QuotationFilters />
                                </CustomTabPanel>
                                <CustomTabPanel value={value1} index={1}>
                                    Item Two
                                </CustomTabPanel>
                                <CustomTabPanel value={value1} index={2}>
                                    Item Three
                                </CustomTabPanel>
                            </CustomTabPanel>

                            <CustomTabPanel value={value} index={3}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <TextField
                                        id="outlined-confirm-password-input"
                                        label="Old Password"
                                        type={showOldPassword ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        className='labgrowRegister'
                                        style={{ margin: '15px' }}
                                        value={oldPassword}
                                        onChange={(e) => handleInputChange(e, setOldPassword, 'oldPassword')}
                                        error={!!errors.oldPassword}
                                        helperText={errors.oldPassword}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => handleTogglePasswordVisibility('oldPassword')}
                                                        onMouseDown={handleMouseDownConfirmPassword}
                                                        edge="end"
                                                    >
                                                        {showOldPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
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

                                    <button className='createBtnRegister' onClick={handleSubmit}>Forgot Password</button>
                                </div>
                            </CustomTabPanel>
                        </Box>
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

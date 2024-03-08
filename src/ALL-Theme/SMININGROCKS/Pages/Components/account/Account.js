import React, { useEffect, useState } from 'react'
import Header from '../home/Header/Header'
import './Account.css'
import { Box, CircularProgress, IconButton, InputAdornment, Tab, Tabs, TextField, Typography } from '@mui/material'
import Footer from '../home/Footer/Footer';
import QuotationFilters from './quotationFilters/QuotationFilters';
import { useNavigate } from 'react-router-dom';
import SalesApi from './salesApi/SalesApi';
import ManageAddress from './address/ManageAddress';
import OrderHistory from './accountOrderHistory/OrderHistory';

import AccountLedger from './accountLedger/AccountLedger';
import DesignWiseSalesReport from '../sales/DesignWiseSalesReport/DesignWiseSalesReport';
import { loginState } from '../../../../../Recoil/atom';
import { useSetRecoilState } from 'recoil';
import YourProfile from './yourProfile/YourProfile';
import ChangePassword from './changePassword/ChangePassword';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    useEffect(() => {
        a11yProps(1)
    }, [])


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
    const setIsLoginState = useSetRecoilState(loginState)
    const navigation = useNavigate();


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeSub = (event, newValue) => {
        setValue1(newValue);
    }

    const handleLogout = () => {
        setIsLoginState(false)
        localStorage.setItem('LoginUser', 'false');
        localStorage.removeItem('storeInit');
        localStorage.removeItem('loginUserDetail');
        localStorage.removeItem('remarks');
        localStorage.removeItem('selectedAddressId');
        localStorage.removeItem('orderNumber');
        localStorage.removeItem('registerEmail');
        localStorage.removeItem('UploadLogicalPath');
        localStorage.removeItem('remarks');
        localStorage.removeItem('registerMobile');
        naviagation('/')
    }

    return (
        <div style={{
            backgroundColor: '#c0bbb1',
            paddingTop: '110px'
        }}>

            <div>
                <div className='Smiling-AccountMain'>
                    <p className='SmilingAccountTitle'>Your Account</p>
                    <div className='smling-AccountTabMain'>
                        <Box sx={{ width: '100%' }}>
                            <div className='smlingAccountTabWebView'>
                                <Box sx={{ display: 'flex', justifyContent: 'center', borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  >   {/*  orientation="vertical" indicatorColor="#7d7f85" */}
                                        <Tab label="Your Profile" {...a11yProps(0)} />
                                        <Tab label="ORDER HISTORY" {...a11yProps(1)} />
                                        <Tab label="MANAGE ADDRESSES" {...a11yProps(2)} />
                                        <Tab label="ACCOUNT" {...a11yProps(3)} />
                                        <Tab label="SALES" {...a11yProps(4)} />
                                        <Tab label="CHANGE PASSWORD" {...a11yProps(5)} />
                                    </Tabs>
                                    <p className='smilingAccountLogout' onClick={handleLogout}>LOG OUT</p>
                                </Box>
                            </div>
                            <div className='smlingAccountTabMobileView'>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} orientation="vertical" onChange={handleChange} sx={{ width: '100%' }} >   {/*  indicatorColor="#7d7f85" */}
                                        <Tab label="Your Profile" {...a11yProps(0)} sx={{ textAlign: 'start', borderBottom: 1, width: '90%', borderColor: 'divider' }} />
                                        <Tab label="ORDER HISTORY" {...a11yProps(1)} />
                                        <Tab label="MANAGE ADDRESSES" {...a11yProps(2)} />
                                        <Tab label="ACCOUNT" {...a11yProps(3)} />
                                        <Tab label="SALES" {...a11yProps(4)} />
                                        <Tab label="CHANGE PASSWORD" {...a11yProps(5)} />
                                    </Tabs>
                                </Box>
                                <div onClick={() => alert('dddd')}>
                                    <p className='smilingAccountLogoutMobile' onClick={handleLogout}>LOG OUT</p>
                                </div>
                            </div>

                            <CustomTabPanel value={value} index={0}>
                                <div>
                                    <YourProfile />
                                </div>
                            </CustomTabPanel>

                            <CustomTabPanel value={value} index={1}>
                                <div>
                                    <OrderHistory />
                                </div>
                            </CustomTabPanel>

                            <CustomTabPanel value={value} index={2}>
                                <ManageAddress />
                            </CustomTabPanel>

                            <CustomTabPanel value={value} index={3}>
                                {/* <QuotationFilters /> */}
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value1} onChange={handleChangeSub} aria-label="basic tabs example" sx={{ background: "#7d7f8529", ...tabIndicator }} scrollButtons="auto">
                                        <Tab label="Quotation" {...a11yProps(0)} sx={{ color: "#7d7f85" }} />
                                        <Tab label="Account Ledger" {...a11yProps(1)} sx={{ color: "#7d7f85" }} />
                                        <Tab label="Sales" {...a11yProps(3)} sx={{ color: "#7d7f85" }} />
                                        <Tab label="Item Three" {...a11yProps(2)} sx={{ color: "#7d7f85" }} />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value1} index={0} className="quotationFilters">
                                    <QuotationFilters />
                                </CustomTabPanel>
                                <CustomTabPanel value={value1} index={1}>
                                    <AccountLedger />
                                </CustomTabPanel>
                                <CustomTabPanel value={value1} index={2} className="AcountSales">
                                    <SalesApi />
                                </CustomTabPanel>
                                <CustomTabPanel value={value1} index={3}>
                                    Item Three
                                </CustomTabPanel>
                            </CustomTabPanel>

                            <CustomTabPanel value={value} index={4}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value1} onChange={handleChangeSub} aria-label="basic tabs example" sx={{ background: "#7d7f8529", ...tabIndicator }} scrollButtons="auto">
                                        <Tab label="Design Wise Sales Report" {...a11yProps(0)} sx={{ color: "#7d7f85" }} />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value1} index={0} className="DesignWiseSalesReport">
                                    <DesignWiseSalesReport />
                                </CustomTabPanel>
                            </CustomTabPanel>

                            <CustomTabPanel value={value} index={5}>
                               <div>
                                    <ChangePassword />
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

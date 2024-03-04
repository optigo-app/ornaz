import React, { useState } from 'react'
import Header from '../home/Header/Header'
import './Account.css'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import Footer from '../home/Footer/Footer';
import QuotationFilters from './quotationFilters/QuotationFilters';
import { useNavigate } from 'react-router-dom';
import OrderHistory from './accountOrderHistory/OrderHistory';
import AccountLedger from './accountLedger/AccountLedger';

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

    return (
        <div style={{
            backgroundColor: '#c0bbb1'
        }}>
            <Header />
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
                                    </Tabs>
                                </Box>
                                <div onClick={() => alert('dddd')}>
                                    <p className='smilingAccountLogoutMobile' onClick={handleLogout}>LOG OUT</p>
                                </div>
                            </div>

                            <CustomTabPanel value={value} index={0}>
                                <div>
                                    <OrderHistory />
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
                                    <Tabs value={value1} onChange={handleChangeSub} aria-label="basic tabs example" sx={{ background: "#7d7f8529", ...tabIndicator}}>
                                        <Tab label="Account Quotation Filters" {...a11yProps(0)} sx={{color: "#7d7f85"}} />
                                        <Tab label="Account Ledger" {...a11yProps(1)} sx={{color: "#7d7f85"}} />
                                        <Tab label="Item Three" {...a11yProps(2)} sx={{color: "#7d7f85"}} />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value1} index={0} className="quotationFilters">
                                    <QuotationFilters />
                                </CustomTabPanel>
                                <CustomTabPanel value={value1} index={1}>
                                    <AccountLedger />
                                </CustomTabPanel>
                                <CustomTabPanel value={value1} index={2}>
                                    Item Three
                                </CustomTabPanel>
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

import React, { useState } from 'react'
import Header from '../home/Header/Header'
import './Account.css'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import Footer from '../home/Footer/Footer';

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

export default function Account() {


    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


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
                            <Box sx={{ display: 'flex', justifyContent: 'center', borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  >   {/* indicatorColor="#7d7f85" */}
                                    <Tab label="ORDER HISTORY" {...a11yProps(0)} />
                                    <Tab label="MANAGE ADDRESSES" {...a11yProps(1)} />
                                </Tabs>
                                <p className='smilingAccountLogout'>LOG OUT</p>
                            </Box>
                            <CustomTabPanel value={value} index={0}>

                                <div>
                                    <p style={{
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
                                    </div>
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

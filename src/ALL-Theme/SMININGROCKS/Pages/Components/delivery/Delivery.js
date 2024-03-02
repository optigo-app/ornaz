import React, { useEffect, useState } from 'react'
import Header from '../home/Header/Header'
import Footer from '../home/Footer/Footer'
import './Delivery.css'
import { CommonAPI } from '../../../Utils/API/CommonAPI';

export default function Delivery() {

    const [addressData, setAddressData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedData = localStorage.getItem('loginUserDetail');
                const data = JSON.parse(storedData);
                const customerid = data.id;
                // const customerEmail = data.email1;
                // setUserEmail(customerEmail);
                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo } = storeInit;
                const combinedValue = JSON.stringify({
                    FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
                });
                console.log('combinedValuecombinedValue...', combinedValue);
                const encodedCombinedValue = btoa(combinedValue);
                const body = {
                    "con": `{\"id\":\"\",\"mode\":\"GETSHIPINGADDRESS\",\"appuserid\":\"${data.email1}\"}`,
                    "f": "Delivery (fetchData)",
                    p: encodedCombinedValue
                };
                const response = await CommonAPI(body);
                console.log('response...', response);
                if (response.Data) {
                    setAddressData(response.Data.rd);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                // setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{
            backgroundColor: '#c0bbb1'
        }}>
            <Header />
            <div className='smilingDelivery'>
                <div className='smilingOrderMain'>
                    <div className='smilingdeliverBox1'>
                        <p style={{ fontSize: '30px', fontWeight: 500, color: 'gray' }}>Delivery</p>
                        <p>Order Will be delivered to selected address</p>
                        <div>
                            {
                                addressData?.map(item => (
                                    <div key={item.id} className='AddressMain'>
                                        <p>{item.addressprofile}</p>
                                        <p className='addressData'>{item.shippingfirstname}</p>
                                        <p className='addressData'>{item.shippinglastname}</p>
                                        <p className='addressData'>{item.addressprofile}</p>
                                        <p className='addressData'>{item.city}-{item.zip}</p>
                                        <p className='addressData'>{item.state}</p>
                                        <p className='addressData'>{item.shippingmobile}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='smilingdeliverBox2'>
                        <p style={{ fontSize: '30px', fontWeight: 500, color: 'gray' }}>Order Summary</p>
                        <img src='http://gstore.orail.co.in/assets/newfolder/images/account/blue-box.jpg' className='smilingDeliverImg' />
                    </div>
                </div>
                <Footer />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
                <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => ''}>BACK TO TOP</p>
            </div>
        </div>
    )
}


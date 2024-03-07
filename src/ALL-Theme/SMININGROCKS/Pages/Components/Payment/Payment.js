import React, { useEffect, useState } from 'react'
import './Payment.css'
import Footer from '../home/Footer/Footer'
import { CommonAPI } from '../../../Utils/API/CommonAPI';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Payment() {

    const [CurrencyId, setCustomerId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedAdd, setSelectedAdd] = useState('');
    const navigation = useNavigate();

    useEffect(() => {

        const selectedAddressId = localStorage.getItem('selectedAddressId');
        const selctedid = JSON.parse(selectedAddressId);
        setSelectedAdd(selctedid);
        console.log('selelee', selctedid);

        const fetchData = async () => {
            try {
                const storedData = localStorage.getItem('loginUserDetail');


                const data = JSON.parse(storedData);
                const customerid = data.id;

                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo } = storeInit;

                const combinedValue = JSON.stringify({
                    FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
                });
                console.log('combinedValuecombinedValue...', combinedValue);

                const encodedCombinedValue = btoa(combinedValue);
                const body = {
                    "con": `{\"id\":\"Store\",\"mode\":\"CURRENCYCOMBO\",\"appuserid\":\"${data.userid}\"}`,
                    "f": "payment (getTheId)",
                    p: encodedCombinedValue
                };
                const response = await CommonAPI(body);
                if (response.Data?.rd[0]) {
                    setCustomerId(response.Data.rd[0].Currencyid);
                    console.log('response...', response.Data.rd[0].Currencyid);
                }

            } catch (error) {
                console.error('Error:', error);
            } finally {
                // setIsLoading(false);
            }
        };
        fetchData();
    }, []);


    const handlePayment = async () => {
        try {
            setIsLoading(true);
            const storedData = localStorage.getItem('loginUserDetail');
            const selectedAddressId = localStorage.getItem('selectedAddressId');
            const selctedid = JSON.parse(selectedAddressId);


            const data = JSON.parse(storedData);
            const customerid = data.id;

            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;

            // {"addrid":"51","PaymentMethod":"Cash on Delivery","Istempaddress":"","addrType":"select","OrderPlacedFrom":1,"CurrencyId":"42","orderRemarks":"","FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"197"}

            const combinedValue = JSON.stringify({
                addrid: `${selctedid.id}`, PaymentMethod: 'Cash on Delivery', Istempaddress: '', addrType: 'select', CurrencyId: `${CurrencyId}`, orderRemarks: '', FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
            });

            console.log('combinedValuecombinedValue...', combinedValue);

            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"PlaceOrder\",\"appuserid\":\"${data.userid}\"}`,
                "f": "m-test2.orail.co.in (PlaceOrder)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);

            console.log('response...', response);
            if (response.Data?.rd[0]?.stat == 1 ) {
                let num = response.Data?.rd[0]?.orderno
                localStorage.setItem('orderNumber', num)
                navigation('/Confirmation')

            } else {
                alert('error')
            }

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div style={{ backgroundColor: '#c0bbb1', paddingTop: '110px' }}>
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress />
                </div>
            )}
            <div className='smilingPaymentMain'>
                <div>
                    <div className='smilingPaySub1'>
                        <div className='smilingPaySub1Box1'>
                            <p style={{ fontSize: '25px', fontWeight: 500, color: '#5e5e5e' }}>Payment Card Method</p>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                                <button onClick={handlePayment} className='paymentBtn'>PAY ON ACCOUNT</button>
                            </div>
                            <div style={{ marginTop: '40px' }}>
                                <p style={{ fontSize: '25px', fontWeight: 500, color: '#5e5e5e' }}>Billing Address</p>
                                <p className='AddressTitle'>Name : <span className='AdressData'>{selectedAdd.shippingfirstname} {selectedAdd.shippinglastname}</span></p>
                                <p className='AddressTitle'>Address : <span className='AdressData'>{selectedAdd.street}</span></p>
                                <p className='AddressTitle'>City : <span className='AdressData'>{selectedAdd.city}-{selectedAdd.zip}</span></p>
                                <p className='AddressTitle'>State : <span className='AdressData'>{selectedAdd.state},{selectedAdd.country}</span></p>
                                <p className='AddressTitle'>Mobile : <span className='AdressData'>{selectedAdd.shippingmobile}</span></p>
                            </div>
                        </div>
                        <div className='smilingPaySub1Box2'>
                            <p style={{ fontSize: '25px', fontWeight: 500, color: '#5e5e5e' }}>Order Summary</p>
                            <div style={{display: 'flex' ,justifyContent: 'space-between'}}>
                                <p>Subtotal</p>
                                <p>0.00</p>
                            </div>
                            <div style={{display: 'flex' ,justifyContent: 'space-between'}}>
                                <p>Estimated Tax</p>
                                <p>0.00</p>
                            </div>
                            <div style={{display: 'flex' ,justifyContent: 'space-between'}}>
                                <p>Estimated Total</p>
                                <p>0.00</p>
                            </div>

                            <p style={{ fontSize: '25px', fontWeight: 500, color: '#5e5e5e' }}>Shipping Address</p>
                            <div style={{ marginTop: '0px' }}>
                                <p style={{fontSize: '25px' ,margin:'0px', fontWeight: 500}}>{selectedAdd.shippingfirstname} {selectedAdd.shippinglastname}</p>
                                <p className='AddressTitle'><span className='AdressData'>{selectedAdd.street}</span></p>
                                <p className='AddressTitle'><span className='AdressData'>{selectedAdd.city}-{selectedAdd.zip}</span></p>
                                <p className='AddressTitle'><span className='AdressData'>{selectedAdd.state},{selectedAdd.country}</span></p>
                                <p className='AddressTitle'><span className='AdressData'>{selectedAdd.shippingmobile}</span></p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center',marginTop: '-100px' }}>
                        <img src='http://gstore.orail.co.in/assets/newfolder/images/account/blue-box.jpg' className='smilingPayentImg' />
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

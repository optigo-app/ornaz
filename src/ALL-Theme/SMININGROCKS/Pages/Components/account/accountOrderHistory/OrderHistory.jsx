import React, { useEffect, useState } from 'react'
import "./orderhistory.css"
import CircleIcon from '@mui/icons-material/Circle';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import AccountOrderHistory from "../../../jsonFile/account/AccountOrderHistoryApi.json";
import axios from 'axios';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
// import ReactPaginate from 'react-paginate';
const OrderHistory = () => {
    const [orderHistoryData, setOrderHistoryData] = useState([]);
    const [loaderOH, setLoaderOH] = useState(true);
    const [orderInfo, setOrderInfo] = useState(false);
    // const [itemOffset, setItemOffset] = useState(0);
    // const itemsPerPage = 4;
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // const currentItems = AccountOrderHistory?.slice(itemOffset, endOffset);
    // const pageCount = Math.ceil(AccountOrderHistory.length / itemsPerPage);
    
    const getStatusColor = (orderType) => {
        switch (orderType) {
            case 1:
                return 'text-danger';
            case 2:
                return 'text-success';
            case 3:
                return 'text-primary';
            default:
                return 'text-primary'; // Default color
        }
    }
    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * itemsPerPage) % AccountOrderHistory?.length;
    //     setItemOffset(newOffset);
    // };

   
    
    const getData = async() => {

        let storeinit = JSON.parse(localStorage.getItem("storeInit"))
        let loginInfo = JSON.parse(localStorage.getItem("loginUserDetail"))
        const UserEmail = localStorage.getItem("registerEmail")

        try {

        let EncodeData = { FrontEnd_RegNo:`${storeinit?.FrontEnd_RegNo}`, Customerid:`${loginInfo?.id}` }
        
        const encodedCombinedValue = btoa(JSON.stringify(EncodeData));
        
        const body_currencycombo = {
            "con":`{\"id\":\"Store\",\"mode\":\"CURRENCYCOMBO\",\"appuserid\":\"${UserEmail}\"}`,
            "f":"m-test2.orail.co.in (getcategorysize)",
            "p":`${encodedCombinedValue}`
        }

        const response = await CommonAPI(body_currencycombo);
        
        const CurrencyRate = response?.Data?.rd[0]?.CurrencyRate;
        
        let EncodeData_order_history = { CurrencyRate :`${CurrencyRate}`, FrontEnd_RegNo:`${storeinit?.FrontEnd_RegNo}`, Customerid:`${loginInfo?.id}` }

        const encodedCombinedValue2 = btoa(JSON.stringify(EncodeData_order_history));

        const body_order_history = {
            "con":`{\"id\":\"Store\",\"mode\":\"GETORDERHISTORY\",\"appuserid\":\"${UserEmail}\"}`,
            "f":"zen (cartcount)",
            "p":`${encodedCombinedValue2}`
            }

        const response2 = await CommonAPI(body_order_history);


        if(response2?.Status === '200') {
            if(response2?.Data?.rd){
                setOrderHistoryData(response2?.Data?.rd);
                setLoaderOH(false)
            }else{
                setLoaderOH(true)
            }
        }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const handleClick = (obj) => {
        console.log(obj);
        setOrderInfo(orderInfo === obj?.id ? null : obj?.id);
    }


  return (
    <div>
        <div className='text-center text-secondary w-100 fs-4 fw-bold mt-2 pt-2 pb-4'>Your Order History</div>
        {
            loaderOH ? 'please wait' : <div className='orderedItems'>
            {
                orderHistoryData?.length > 0 && orderHistoryData?.map((e) => {
                    return(
                    <div className='border orderHistory p-1 px-0 my-4' key={e?.id}>
                        <div className=' d-flex w-100 justify-content-between align-items-center p-1'>
                            <div className='w-25'>
                                <div className='d-flex justify-content-start w-100 align-items-center py-2'>
                                    <div className='text-secondary fw-bold fs-5 ps-3 pe-5'>{e?.OrderPrefix}{e?.orderno}</div>
                                    <div className={`d-flex align-items-center  ${getStatusColor(e?.b2c_MasterManagement_ProgressStatusId)} fs-5`}><div className='px-2'><CircleIcon sx={{fontSize:"10px"}} /></div>{e?.b2c_MasterManagement_ProgressStatusName}</div>
                                </div>
                                <div className='py-2 text-secondary ps-3'>Date &nbsp;&nbsp;:&nbsp;&nbsp; <span className='text-danger'>{e?.orderEntryDate}</span></div>
                                <div className='py-2 text-secondary ps-3'>items&nbsp;&nbsp; : &nbsp;&nbsp;(<span className='text-danger'>{e?.TotalQuantity}</span>)</div>
                            </div>
                            <div className='py-2 pe-5 w-50 d-flex fs_price_oh _color fw-bold'><div dangerouslySetInnerHTML={{__html:e?.Currencysymbol}}></div> <div className='px-1'>{e?.orderAmountwithvat}</div></div>
                        </div>
                        {/* <Accordion sx={{boxShadow:'none'}}>
                            <AccordionSummary>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <div>
                                        <div className=' w-25 _center'><img src="https://www.candere.com/media/jewellery/images/GR00103__1.jpeg" alt="#designimage" className='des_img_aoh'  /></div>
                                        <div className='ps-1 pt-1 text-secondary'>
                                            <div className='fw-bold fs-5'>P-W</div>
                                            <div>A19901</div>
                                            <div>$ 0</div>
                                        </div>
                                    </div>
                                    <div className='pt-2 _end'>
                                        <div className='d-flex justify-content-between align-items-center w-25 fs-4 text-secondary'><div className='w-50'>Total :</div><div className='w-50 _end'>$ 0</div></div>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion> */}
                        <div>
                            <div style={{height:'30px', cursor:'pointer'}} title='info' className='border-bottom border-top' onClick={() => handleClick(e)}></div>
                                {
                                    orderInfo === e?.id  ? <div className='p-4'>
                                    <div>
                                        <div className=' w-25 _center'><img src="https://www.candere.com/media/jewellery/images/GR00103__1.jpeg" alt="#designimage" className='des_img_aoh'  /></div>
                                        <div className='ps-1 pt-1 text-secondary'>
                                            <div className='fw-bold fs-5'>P-W</div>
                                            <div>A19901</div>
                                            <div>$ 0</div>
                                        </div>  
                                    </div>
                                    <div className='pt-2 _end'>
                                        <div className='d-flex justify-content-between align-items-center w-25 fs-4 text-secondary'><div className='w-50'>Total :</div><div className='w-50 _end'>$ 0</div></div>
                                    </div>
                                </div> : ''
                                }
                                
                        </div>
                    </div>
                    )
                })
            }
        </div>
        }
        {/* {
            AccountOrderHistory?.length > itemsPerPage && 
            <div className="pagination-container _center mt-2 pt-2">
                <ReactPaginate
                    breakLabel="  .  .  .  "
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    containerClassName="pagination"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    activeClassName="active"
                    previousClassName="page-item previous"
                    nextClassName="page-item next"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                />
            </div>
        } */}
        
    </div>
  )
}

export default OrderHistory
import React, { useEffect, useState } from 'react'
import "./orderhistory.css"
import CircleIcon from '@mui/icons-material/Circle';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import AccountOrderHistory from "../../../jsonFile/account/AccountOrderHistoryApi.json";
// import ReactPaginate from 'react-paginate';
const OrderHistory = () => {
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
            case 'shipped':
                return 'text-success';
            case 'cancelled orders':
                return 'text-danger';
            case 'not yet shipped':
                return 'text-warning';
            default:
                return 'text-primary'; // Default color
        }
    }
    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * itemsPerPage) % AccountOrderHistory?.length;
    //     setItemOffset(newOffset);
    // };
    
    const getData = async() => {

        let storeinit=JSON.parse(localStorage.getItem("storeInit"))
        let loginInfo=JSON.parse(localStorage.getItem("loginUserDetail"))
        console.log(storeinit?.FrontEnd_RegNo, loginInfo);
    }


    useEffect(() => {
        getData();
    }, [])

  return (
    <div>
        <div className='text-center text-secondary w-100 fs-4 fw-bold mt-2 pt-2 pb-4'>Your Order History</div>
        <div className='orderedItems'>
            {
                AccountOrderHistory?.length > 0 && AccountOrderHistory?.map((e) => {
                    return(
                        <div className='border orderHistory p-1 px-0 my-4' key={e?.id}>
                        <div className=' d-flex w-100 justify-content-between align-items-center p-1'>
                            <div className='w-25'>
                                <div className='d-flex justify-content-start w-100 align-items-center py-2'>
                                    <div className='text-secondary fw-bold fs-5 ps-3 pe-5'>A55070</div>
                                    <div className={`d-flex align-items-center  ${getStatusColor(e?.order_type)} fs-5`}><div className='px-2'><CircleIcon sx={{fontSize:"10px"}} /></div>{e?.order_type}</div>
                                </div>
                                <div className='py-2 text-secondary ps-3'>Date &nbsp;&nbsp;:&nbsp;&nbsp; <span className='text-danger'>{e?.ordered_on}</span></div>
                                <div className='py-2 text-secondary ps-3'>items&nbsp;&nbsp; : &nbsp;&nbsp;(<span className='text-danger'>1</span>)</div>
                            </div>
                            <div className='py-2 pe-5 fs-4 w-50'>$ 7200</div>
                        </div>
                        <Accordion sx={{boxShadow:'none'}}>
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
                        </Accordion>
                        </div>
                    )
                })
            }
        </div>
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
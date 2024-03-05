import React from 'react'
import "./accountledger.css"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
const AccountLedger = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filterVisible, setFilterVisible] = useState(false);
    const navigate = useNavigate("");
    useEffect(() => {
        // Get current date
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Add leading zero if needed
        const currentDay = ('0' + currentDate.getDate()).slice(-2); // Add leading zero if needed
        // Set start date to current date
        const formattedCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;
        setEndDate(formattedCurrentDate);
    
        // Set end date to first day of current month
        const formattedFirstDayOfMonth = `${currentYear}-${currentMonth}-01`;
        setStartDate(formattedFirstDayOfMonth);
      }, []);

      const toggleFilter = () => {
        setFilterVisible(!filterVisible);
      };

      const arr = [1,2,3,4,5];

  return (
    <div>
        <div className='fs-4 fw-bold text-center text-secondary my-2 py-2'>Account Ledger</div>
        <div>
            <div className='border'>
                <div className='p-2 ps-4 border-bottom' style={{letterSpacing:'1px'}}>Account Detail for &nbsp; <b>Nimesh856</b>&nbsp; Period of &nbsp;<b>01 Mar 2024</b>&nbsp; to &nbsp;<b>04 Mar 2024</b>&nbsp;</div>
                
                <div className='d-flex justify-content-end'>
                {
                    filterVisible ? <div className='fs_al2 p-2 d-flex justify-content-start w-100 align-items-center'>
                    <div><input type="date" name="date" id="startdate" className='mx-2 p-1' value={startDate} onChange={(e) => setStartDate(e.target.value)}   />
                    To 
                    <input type="date" name="date" id="enddate" className='mx-2 p-1'   value={endDate} onChange={(e) => setEndDate(e.target.value)}  /><SearchIcon /></div>
                    <div><button className='btn btn-secondary mx-2 py-1'>All</button></div>
                    <div><img src="https://cdn22.optigoapps.com/lib/jo/28/images/ExcelExport.png" alt="#excelexport" className='eeal' /></div>
                    <div onClick={() => navigate("/accountledgertable")}><img src="	https://cdn22.optigoapps.com/lib/jo/28/images/print_icon.png" alt="#excelexport" className='eeal' /></div>
                    <div className='mx-2'>
                        <button className='mx-1 btn border p-2 py-0 daybtn' title='days'>7</button>
                        <button className='mx-1 btn border p-2 py-0 daybtn' title='days'>15</button>
                        <button className='mx-1 btn border p-2 py-0 daybtn' title='days'>30</button>
                        <button className='mx-1 btn border p-2 py-0 daybtn' title='days'>60</button>
                        <button className='mx-1 btn border p-2 py-0 daybtn' title='days'>90</button>
                    </div>
                    <div>
                        <select name="status" className='p-1' id="status">
                            <option value="all">All</option>
                            <option value="1">Pending</option>
                            <option value="2">Declined</option>
                            <option value="3">Verified</option>
                        </select>
                    </div>
                    <div className='mx-1 ms-4'>
                        <input type="checkbox" name="duedate" id="duedate" /><label htmlFor="duedate" className='user-select-none ps-1'>Due Date Wise</label>
                    </div>
                </div> : ''
                }
                <div  onClick={toggleFilter}> { !filterVisible ? <ExpandMoreIcon /> : <ExpandLessIcon /> } </div>

                </div>
                
                <div className='text-secondary fs_al d-flex justify-content-between align-items-start p-2'>
                    <div className='d-flex justify-content-start align-items-start'>
                        <div className='px-4'>Balance Gold : <span>NA</span></div>
                        <div className='px-4'>Balance Diam. : <span>NA</span></div>
                        <div className='px-4'>Balance Amount : <span>NA</span></div>
                    </div>
                    
                </div>
                
                <div className='m-2'>
                    {/* <div className='header_al'>
                        <div>Party Ledger</div>
                        <div>
                            <div>
                                <div>gstore</div>
                                <div>G-19,20</div>
                                <div>surat-395006, Gujarat(India)</div>
                                <div>T-12345678910</div>
                                <div>support@orail.in | www.optigoapps,com</div>
                            </div>
                            <div>img</div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center px-2'>
                            <div>Party Ledger Prepared For : <b>Nimesh856</b></div>
                            <div>From : <b>01 Mar 2024</b> To : <b>04 Mar 2024</b></div>
                        </div>
                    </div> */}
                    <table className='w-100'>
                        <thead className='w-100 border'>
                            <tr className='w-100 border-bottom fs_td'>
                                <td className='fw-bold text-center border-end' colSpan={7}>DEBIT</td>
                                <td className='fw-bold text-center' colSpan={7}>CREDIT</td>
                            </tr>
                            <tr className='w-100 border-bottom-0 fw-bold fs_td'>
                                <td className='border-end p-1 text-center w_al'>DATE</td>
                                <td className='border-end p-1 text-center w_al'>PARTICULAR</td>
                                <td className='border-end p-1 text-center w_al'>VOUCHER</td>
                                <td className='border-end p-1 text-center w_al'>METAL</td>
                                <td className='border-end p-1 text-center w_al'>DIAM.</td>
                                <td className='border-end p-1 text-center w_al'>AMOUNT</td>
                                <td className='border-end p-1 text-center w_al'>VERIFIED</td>
                                <td className='border-end p-1 text-center w_al'>DATE</td>
                                <td className='border-end p-1 text-center w_al'>PARTICULAR</td>
                                <td className='border-end p-1 text-center w_al'>VOUCHER</td>
                                <td className='border-end p-1 text-center w_al'>METAL</td>
                                <td className='border-end p-1 text-center w_al'>DIAM.</td>
                                <td className='border-end p-1 text-center w_al'>AMOUNT</td>
                                <td className='p-1 text-center w_al'>VERIFIED</td>
                            </tr>
                        </thead>
                        <tbody className='fs_td'>
                            {
                                arr?.map((e) => {
                                    return(
                                        <tr className='border' key={e}>
                                            <td className='border-end p-1 text-center'>04 Mar 24</td>
                                            <td className='border-end p-1 text-start ps-1'>Party Return</td>
                                            <td className='border-end p-1 text-start ps-1 text-primary text-decoration-underline'>CRO158</td>
                                            <td className='border-end p-1 text-end pe-1'>0.540</td>
                                            <td className='border-end p-1 text-end pe-1'>5.00</td>
                                            <td className='border-end p-1 text-end pe-1'>7500</td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-center'>04 Mar 24</td>
                                            <td className='border-end p-1 text-start ps-1'>Party Receive</td>
                                            <td className='border-end p-1 text-start ps-1 text-primary text-decoration-underline'>CRI683</td>
                                            <td className='border-end p-1 text-end pe-1'>10.000</td>
                                            <td className='border-end p-1 text-end pe-1'>100.00</td>
                                            <td className='border-end p-1 text-end pe-1'>10,000</td>
                                            <td className=' p-1 text-center'></td>
                                        </tr>
                                    )
                                })
                            }
                                        <tr className='border fw-bold'>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-end pe-1'>0.540</td>
                                            <td className='border-end p-1 text-end pe-1'>5.00</td>
                                            <td className='border-end p-1 text-end pe-1'>7500</td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-end pe-1'>10.000</td>
                                            <td className='border-end p-1 text-end pe-1'>100.00</td>
                                            <td className='border-end p-1 text-end pe-1'>10,000</td>
                                            <td className=' p-1 text-center'></td>
                                        </tr>
                        </tbody>
                    </table>
                    {/* <div className='d-flex justify-content-end align-items-center w-100'>
                        <div>
                            <div>Balance Gold : NA</div>
                            <div>Balance Diam. : NA</div>
                            <div>Balance Amount : NA</div>
                        </div>
                    </div> */}
                </div>
                {/* <div className='px-2 text-center w-100 py-3 text-secondary  fs-4'>
                    No Data Found !!
                </div> */}
            </div>
            
        </div>
    </div>
  )
}

export default AccountLedger
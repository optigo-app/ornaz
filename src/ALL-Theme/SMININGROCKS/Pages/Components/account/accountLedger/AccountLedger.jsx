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
    const [selectedStatus, setSelectedStatus] = useState('');
    const [dueDateWise, setDueDateWise] = useState(false);
    const [userName, setUserName] = useState('');
    const [selectedDays, setSelectedDays] = useState(7); 
    const navigate = useNavigate("");

    useEffect(() => {

        getStartNEndDate();

        const userName = JSON.parse(localStorage.getItem('loginUserDetail'));
        setUserName(userName?.customercode)

      }, []);

      const toggleFilter = () => {
        setFilterVisible(!filterVisible);
        
      };

      const arr = [1,2,3,4,5];

      const backToInitial = () => {

        //set checkbox
        setDueDateWise(false);

        //set dropdown
        setSelectedStatus('all');
        
        //set date
        getStartNEndDate();

        //setDays
        setSelectedDays(7)
        const buttons = document.querySelectorAll('.daybtn');
        buttons.forEach(button => {
            const buttonDays = parseInt(button.textContent);
            if (buttonDays === 7) {
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        });

      }
      
      const handleDays = (days) => {
        
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Add leading zero if needed
        const currentDay = ('0' + currentDate.getDate()).slice(-2); // Add leading zero if needed
        
        // Set end date to current date
        const formattedCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;
        setEndDate(formattedCurrentDate);
    
        // Calculate start date based on selected number of days
        const startDate = new Date(currentDate.getTime() - days * 24 * 60 * 60 * 1000);
        const startYear = startDate.getFullYear();
        const startMonth = ('0' + (startDate.getMonth() + 1)).slice(-2);
        const startDay = ('0' + startDate.getDate()).slice(-2);
        const formattedStartDate = `${startYear}-${startMonth}-${startDay}`;
        setStartDate(formattedStartDate);

        filterData(formattedStartDate, formattedCurrentDate);

        const buttons = document.querySelectorAll('.daybtn');
        buttons.forEach(button => {
            const buttonDays = parseInt(button.textContent);
            if (buttonDays === days) {
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        });

      }
      
      const handleSearch = () => {
        // Perform filtering logic based on startDate and endDate
        console.log("Filtering data based on startDate and endDate:", startDate+" "+endDate);
        // You can perform your filtering logic here, such as fetching filtered data from an API
        // For now, let's just log the selected dates
      };

      const filterData = () => {
        // console.log("Filtering data between", startDate, "and", endDate);
      }

      const handleSelect = (e) => {
        setSelectedStatus(e.target.value);
      }

      const getStartNEndDate = () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Add leading zero if needed
        const currentDay = ('0' + currentDate.getDate()).slice(-2); // Add leading zero if needed
        const formattedCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;
        setEndDate(formattedCurrentDate);
        // Set start date to previous 7 days
        const sixDaysAgo = new Date(currentDate.getTime() - 6 * 24 * 60 * 60 * 1000);
        const sixDaysAgoYear = sixDaysAgo.getFullYear();
        const sixDaysAgoMonth = ('0' + (sixDaysAgo.getMonth() + 1)).slice(-2);
        const sixDaysAgoDay = ('0' + sixDaysAgo.getDate()).slice(-2);
        const formattedStartDate = `${sixDaysAgoYear}-${sixDaysAgoMonth}-${sixDaysAgoDay}`;
        setStartDate(formattedStartDate);
      }

      const formatDate = (dateString) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const [year, month, day] = dateString.split('-');
        return `${day} ${months[parseInt(month) - 1]} ${year}`;
      };

  return (
    <div>
        <div className='fs-4 fw-bold text-center text-secondary my-2 py-2'>Ledger</div>
        <div>
            <div className='border'>
                <div className='p-2 ps-4 border-bottom' style={{letterSpacing:'1px'}}>Account Detail for &nbsp; <b>{userName}</b>&nbsp; Period of &nbsp;<b>{formatDate(startDate)}</b>&nbsp; to &nbsp;<b>{formatDate(endDate)}</b>&nbsp;</div>
                
                <div className='d-flex justify-content-end'>
                {
                    filterVisible ? <div className='fs_al2 p-2 d-flex justify-content-start w-100 align-items-center'>
                    <div><input type="date" name="date" id="startdate" className='mx-2 p-1' value={startDate} onChange={(e) => setStartDate(e.target.value)} title='find data'  />
                    To 
                    <input type="date" name="date" id="enddate" className='mx-2 p-1'   value={endDate} onChange={(e) => setEndDate(e.target.value)}  title='enddate' /><SearchIcon titleAccess='search here' sx={{cursor:'pointer'}}   onClick={handleSearch}/></div>
                    <div><button className='btn btn-secondary mx-2 py-1' onClick={() => backToInitial()}>All</button></div>
                    {/* <div onClick={() => navigate("/accountledgerexcel")}><img src="https://cdn22.optigoapps.com/lib/jo/28/images/ExcelExport.png" alt="#excelexport" className='eeal' /></div> */}
                    <div onClick={() => window.open("http://localhost:3000/accountledgerexcel")}><img src="https://cdn22.optigoapps.com/lib/jo/28/images/ExcelExport.png" alt="#excelexport" className='eeal' /></div>
                    {/* <div onClick={() => navigate("/accountledgertable")}><img src="	https://cdn22.optigoapps.com/lib/jo/28/images/print_icon.png" alt="#excelexport" className='eeal' /></div> */}
                    <div onClick={() => window.open("http://localhost:3000/accountledgertable")}><img src="	https://cdn22.optigoapps.com/lib/jo/28/images/print_icon.png" alt="#printtable" className='eeal' /></div>
                    <div>
                        <div className='mx-2 me-4'>
                            {[7, 15, 30, 60, 90].map((days) => (
                                <button key={days} className={`mx-1 btn border p-2 py-0 daybtn ${selectedDays === days ? 'selected' : ''}`} title={`${days} days`} onClick={() => handleDays(days)}>{days}</button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <select name="status" className='p-1' id="status" value={selectedStatus} onChange={(e) => handleSelect(e)}>
                            <option value="all">All</option>
                            <option value="1">Pending</option>
                            <option value="2">Declined</option>
                            <option value="3">Verified</option>
                        </select>
                    </div>
                    <div className='mx-1 ms-4'>
                        <input type="checkbox" name="duedate" checked={dueDateWise} value={dueDateWise} id="duedate" onChange={() => setDueDateWise(!dueDateWise)} /><label htmlFor="duedate" className='user-select-none ps-1'>Due Date Wise</label>
                    </div>
                </div> : ''
                }
                <div  onClick={toggleFilter}> { !filterVisible ? <ExpandMoreIcon sx={{cursor:'pointer'}} titleAccess='Show' /> : <ExpandLessIcon sx={{cursor:'pointer'}} titleAccess='Hide'/> } </div>

                </div>
                
                <div className='text-secondary fs_al d-flex justify-content-between align-items-start p-2'>
                    <div className='d-flex justify-content-start align-items-start'>
                        <div className='px-4'>Balance Gold : <span>NA</span></div>
                        <div className='px-4'>Balance Diam. : <span>NA</span></div>
                        <div className='px-4'>Balance Amount : <span>NA</span></div>
                    </div>
                    
                </div>
                
                <div className='m-2'>
                    <table className='w-100'>
                        <thead className='w-100 border'>
                            <tr className='w-100 border-bottom fs_td'>
                                <td className='fw-bold text-center border-end' colSpan={9}>DEBIT</td>
                                <td className='fw-bold text-center' colSpan={9}>CREDIT</td>
                            </tr>
                            <tr className='w-100 border-bottom-0 fw-bold fs_td'>
                                <td className='border-end p-1 text-center '>DATE</td>
                                <td className='border-end p-1 text-center '>PARTICULAR</td>
                                <td className='border-end p-1 text-center '>VOUCHER</td>
                                <td className='border-end p-1 text-center '>METAL</td>
                                <td className='border-end p-1 text-center '>DIAM.</td>
                                <td className='border-end p-1 text-center '>RATE</td>
                                <td className='border-end p-1 text-center '>CURRENCY RATE</td>
                                <td className='border-end p-1 text-center '>AMOUNT</td>
                                <td className='border-end p-1 text-center '>VERIFIED</td>
                                <td className='border-end p-1 text-center '>DATE</td>
                                <td className='border-end p-1 text-center '>PARTICULAR</td>
                                <td className='border-end p-1 text-center '>VOUCHER</td>
                                <td className='border-end p-1 text-center '>METAL</td>
                                <td className='border-end p-1 text-center '>DIAM.</td>
                                <td className='border-end p-1 text-center '>RATE</td>
                                <td className='border-end p-1 text-center '>CURRENCY RATE</td>
                                <td className='border-end p-1 text-center '>AMOUNT</td>
                                <td className='p-1 text-center'>VERIFIED</td>
                            </tr>
                        </thead>
                        <tbody className='fs_td'>
                            {
                                arr?.map((e) => {
                                    return(
                                        <tr className='border' key={e}>
                                            <td className='border-end p-1 text-center'>04 Mar 24</td>
                                            <td className='border-end p-1 text-start ps-1'>Party Return</td>
                                            <td className='border-end p-1 text-start ps-1 text-primary text-decoration-underline' style={{cursor:'pointer'}} onClick={() => window.open("http://localhost:3000/accountledgerdebit")}>CRO158</td>
                                            <td className='border-end p-1 text-end pe-1'>0.540</td>
                                            <td className='border-end p-1 text-end pe-1'>5.00</td>
                                            <td className='border-end p-1 text-end pe-1'>rate</td>
                                            <td className='border-end p-1 text-end pe-1'>crate</td>
                                            <td className='border-end p-1 text-end pe-1'>7500</td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-center'>04 Mar 24</td>
                                            <td className='border-end p-1 text-start ps-1'>Party Receive</td>
                                            <td className='border-end p-1 text-start ps-1 text-primary text-decoration-underline' onClick={() => window.open("http://localhost:3000/accountledgercredit")} style={{cursor:'pointer'}}>CRI683</td>
                                            <td className='border-end p-1 text-end pe-1'>10.000</td>
                                            <td className='border-end p-1 text-end pe-1'>100.00</td>
                                            <td className='border-end p-1 text-end pe-1'>rate</td>
                                            <td className='border-end p-1 text-end pe-1'>crate</td>
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
                                            <td className='border-end p-1 text-end pe-1'>rate</td>
                                            <td className='border-end p-1 text-end pe-1'>crate</td>
                                            <td className='border-end p-1 text-end pe-1'>7500</td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-end pe-1'>10.000</td>
                                            <td className='border-end p-1 text-end pe-1'>100.00</td>
                                            <td className='border-end p-1 text-end pe-1'>rate</td>
                                            <td className='border-end p-1 text-end pe-1'>crate</td>
                                            <td className='border-end p-1 text-end pe-1'>10,000</td>
                                            <td className=' p-1 text-center'></td>
                                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default AccountLedger
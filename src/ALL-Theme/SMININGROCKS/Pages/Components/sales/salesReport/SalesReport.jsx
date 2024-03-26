import React, { useEffect, useRef, useState } from 'react';
import "./SalesReport.css";
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Label } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { FaBullseye } from 'react-icons/fa';
import { NumberWithCommas, checkDates, checkMonth } from '../../../../Utils/globalFunctions/GlobalFunction';
import moment from 'moment';
import Swal from 'sweetalert2';

function createData(SrNo, EntryDate,
    StockDocumentNo, SKUNo,
    designno, MetalType, MetalAmount,
    DiamondAmount, ColorStoneAmount,
    LabourAmount, OtherAmount, UnitCost, Category,
    GrossWt, NetWt, DiaPcs, DiaWt, CsPcs, CsWt, imgsrc, Netwt_24k) {
    return {
        SrNo, EntryDate, StockDocumentNo, SKUNo, designno, MetalType, MetalAmount, DiamondAmount, ColorStoneAmount,
        LabourAmount, OtherAmount, UnitCost, Category, GrossWt, NetWt, DiaPcs, DiaWt, CsPcs, CsWt, imgsrc, Netwt_24k
    };
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'SrNo',
        numeric: true,
        disablePadding: false,
        label: 'Sr#',
        align: 'center',
        minWidth: 100,
    },
    {
        id: 'EntryDate',
        numeric: false,
        disablePadding: false,
        label: 'Entry Date',
        align: 'center',
        minWidth: 130,
    },
    {
        id: 'StockDocumentNo',
        numeric: false,
        disablePadding: false,
        label: 'Stock DocumentNo',
        align: 'center',
        minWidth: 185,
    },
    {
        id: 'SKUNo',
        numeric: false,
        disablePadding: false,
        label: 'SKU No',
        align: 'center',
        minWidth: 110,
    },
    {
        id: 'designno',
        numeric: false,
        disablePadding: false,
        label: 'designno',
        align: 'center',
        minWidth: 110,
    },
    {
        id: 'MetalType',
        numeric: false,
        disablePadding: false,
        label: 'MetalType',
        align: 'center',
        minWidth: 110,
    },
    {
        id: 'MetalAmount',
        numeric: false,
        disablePadding: false,
        label: 'MetalAmount',
        align: 'center',
        minWidth: 110,
    },
    {
        id: 'DiamondAmount',
        numeric: false,
        disablePadding: false,
        label: 'DiamondAmount',
        align: 'center',
        minWidth: 110,
    },
    {
        id: 'ColorStoneAmount',
        numeric: false,
        disablePadding: false,
        label: 'ColorStone Amount',
        align: 'center',
        minWidth: 185,
    },
    {
        id: 'LabourAmount',
        numeric: false,
        disablePadding: false,
        label: 'Labour Amount',
        align: 'center',
        minWidth: 160,
    },
    {
        id: 'OtherAmount',
        numeric: false,
        disablePadding: false,
        label: 'Other Amount',
        align: 'center',
        minWidth: 160,
    },
    {
        id: 'UnitCost',
        numeric: false,
        disablePadding: false,
        label: 'Unit Cost',
        align: 'center',
        minWidth: 140,
    },
    {
        id: 'Category',
        numeric: false,
        disablePadding: false,
        label: 'Category',
        align: 'center',
        minWidth: 110,
    },
    {
        id: 'GrossWt',
        numeric: false,
        disablePadding: false,
        label: 'GrossWt',
        align: 'center',
        minWidth: 110,
    },
    {
        id: 'NetWt',
        numeric: false,
        disablePadding: false,
        label: 'NetWt',
        align: 'center',
        minWidth: 110,
    },
    {
        id: 'DiaPcs',
        numeric: false,
        disablePadding: false,
        label: 'Dia Pcs',
        align: 'center',
        minWidth: 110,
    },
    {
        id: 'DiaWt',
        numeric: false,
        disablePadding: false,
        label: 'DiaWt',
        align: 'center',
        minWidth: 110,
    },
    {
        id: 'CsPcs',
        numeric: false,
        disablePadding: false,
        label: 'CsPcs',
        align: 'center',
        minWidth: 110,
    },
    {
        id: 'CsWt',
        numeric: false,
        disablePadding: false,
        label: 'CsWt',
        align: 'center',
        minWidth: 110,
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead className='salesReporttabelHead'>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        style={{ minWidth: headCell.minWidth, textAlign: headCell?.align || "left" }}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                            sx={{ textAlign: "center" }}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};


const SalesReport = () => {
    const [searchVal, setSearchVal] = useState("");
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [hoverImg, setHoverImg] = useState("");
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [grossWtInput, setGrossWtInput] = useState({
        from: "",
        to: "",
    });
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [total, setTotal] = useState({
        GrossWt: 0,
        NetWt: 0,
        DiaPcs: 0,
        DiaWt: 0,
        CsPcs: 0,
        CsWt: 0,
        MetalAmount: 0,
        DiamondAmount: 0,
        ColorStoneAmount: 0,
        LabourAmount: 0,
        OtherAmount: 0,
        TotalAmount: 0,
        Netwt_24k: 0,
        uniqueDesigns: 0,
    });
    const fromDateRef = useRef(null);
    const toDateRef = useRef(null);


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = filterData.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    // const handleClick = (event, id) => {
    //     const selectedIndex = selected.indexOf(id);
    //     let newSelected = [];
    //     if (selectedIndex === -1) {
    //         newSelected = newSelected.concat(selected, id);
    //     } else if (selectedIndex === 0) {
    //         newSelected = newSelected.concat(selected.slice(1));
    //     } else if (selectedIndex === selected.length - 1) {
    //         newSelected = newSelected.concat(selected.slice(0, -1));
    //     } else if (selectedIndex > 0) {
    //         newSelected = newSelected.concat(
    //             selected.slice(0, selectedIndex),
    //             selected.slice(selectedIndex + 1),
    //         );
    //     }
    //     setSelected(newSelected);
    // };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const visibleRows = React.useMemo(
        () =>
            stableSort(filterData, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, filterData],
    );

    const handleSearch = (eve, searchValue, fromDates, toDates, grossWtFrom, grossWtTo) => {
        let datass = [];
        let count = 0;
        data?.forEach((e, i) => {
            let flags = {
                searchValue: false,
                fromDate: false,
                toDate: false,
                grossWtFrom: false,
                grossWtTo: false,
            };
            let cutDate = e["EntryDate"]?.split("-");
            let dateFlag = checkDates(fromDates, toDates, cutDate);
            flags.fromDate = dateFlag?.dateFrom;
            flags.toDate = dateFlag?.dateTo;
            if ((
                (String(e?.SrNo)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.EntryDate)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.StockDocumentNo)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.SKUNo)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.designno)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.MetalType)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.MetalAmount)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.DiamondAmount)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.ColorStoneAmount)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.LabourAmount)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.OtherAmount)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.UnitCost)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.Category)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.GrossWt)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.NetWt)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.DiaPcs)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.DiaWt)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.CsPcs)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) ||
                (String(e?.CsWt)?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()))
            ) || (searchValue?.trim()?.toLowerCase() === "")) {
                flags.searchValue = true;
            }

            if ((grossWtFrom?.trim() === "") || (+grossWtFrom <= e?.GrossWt)) {
                flags.grossWtFrom = true;
                  count = count+1;
                Swal.fire({
                    title: "Error !",
                    text: "Enter date From",
                    icon: "error",
                    confirmButtonText: "ok"
                });
            }
            if ((grossWtTo?.trim() === "") || (+grossWtTo >= e?.GrossWt)) {
                flags.grossWtTo = true;
                    count = count+1;
                Swal.fire({
                    title: "Error !",
                    text: "Enter date To",
                    icon: "error",
                    confirmButtonText: "ok"
                });
            }
            if (grossWtFrom?.trim() === "" && grossWtTo?.trim() !== "") {
                flags.grossWtTo = true;
                count = count+1;
                Swal.fire({
                    title: "Error !",
                    text: "Enter Gross Wt From",
                    icon: "error",
                    confirmButtonText: "ok"
                });
            } else if (grossWtFrom?.trim() !== "" && grossWtTo?.trim() === "") {
                flags.grossWtFrom = true;
                count = count+1;
                Swal.fire({
                    title: "Error !",
                    text: "Enter Gross Wt To",
                    icon: "error",
                    confirmButtonText: "ok"
                });
            }
            if (flags.searchValue === true && flags.fromDate === true && flags.toDate === true && flags.grossWtFrom === true && flags.grossWtTo === true && count === 0) {
                let dataObj = createData(i + 1, e?.EntryDate,
                    e?.StockDocumentNo, e?.SKUNo,
                    e?.designno, e?.MetalType, e?.MetalAmount,
                    e?.DiamondAmount, e?.ColorStoneAmount,
                    e?.LabourAmount, e?.OtherAmount, e?.UnitCost, e?.Category,
                    e?.GrossWt, e?.NetWt, e?.DiaPcs, e?.DiaWt, e?.CsPcs, e?.CsWt, e?.imgsrc, e?.Netwt_24k);
                datass?.push(dataObj);
            }
        });
        if(count ===0){
            console.log(datass);
            setFilterData(datass);
        }
        else{
            console.log("asjkcdnhajksdhsh");
            setFilterData(data);
            resetAllFilters();

        }

    }

    const resetAllFilters = () => {
        setGrossWtInput({ ...grossWtInput, from: "", to: "" });
        setFromDate(null);
        setToDate(null);
        setSearchVal("");
        setFilterData(data);
    }

    const handleimageShow = (eve, img) => {
        setHoverImg(img)
        // onMouseEnter={handleMouseEnter}
    }

    const handleChangegrossWt = (eve) => {
        const { name, value } = eve?.target;
        setGrossWtInput({ ...grossWtInput, [name]: value });
        // if (name === "from") {
        //     handleSearch(eve, searchVal, fromDate, toDate, value, grossWtInput?.to);
        // } else if (name === "to") {
        //     handleSearch(eve, searchVal, fromDate, toDate, grossWtInput?.from, value);
        // }
    }

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const storedData = localStorage.getItem('loginUserDetail');
            const data = JSON.parse(storedData);
            const customerid = data.id;
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                CurrencyRate: "1", FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
            });
            // {"CurrencyRate":"1","FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"getsalereport\",\"appuserid\":\"${data.email1}\"}`,
                "f": "zen (cartcount)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data?.rd) {
                // console.log(response.Data?.rd);
                let datass = [];
                let totals = { ...total };
                let designLists = [];
                console.log(response.Data?.rd);
                response.Data?.rd?.forEach((e, i) => {
                    let dataObj = createData(i + 1, e?.Date,
                        e?.StockDocumentNo, e?.SKUNo,
                        e?.designno, e?.MetalType, e?.MetalAmount,
                        e?.DiamondAmount, e?.ColorStoneAmount,
                        e?.LabourAmount, e?.OtherAmount, e?.UnitCost, e?.Category,
                        e?.GrossWt, e?.NetWt, e?.DiaPcs, e?.DiaWt, e?.CsPcs, e?.CsWt, e?.imgsrc, e?.Netwt_24k);
                    totals.GrossWt += e?.GrossWt;
                    totals.NetWt += e?.NetWt;
                    totals.DiaPcs += e?.DiaPcs;
                    totals.DiaWt += e?.DiaWt;
                    totals.CsPcs += e?.CsPcs;
                    totals.CsWt += e?.CsWt;
                    totals.MetalAmount += e?.MetalAmount;
                    totals.DiamondAmount += e?.DiamondAmount;
                    totals.ColorStoneAmount += e?.ColorStoneAmount;
                    totals.LabourAmount += e?.LabourAmount;
                    totals.OtherAmount += e?.OtherAmount;
                    totals.TotalAmount += e?.UnitCost;
                    totals.Netwt_24k += e?.Netwt_24k;
                    let findUniqueDesign = designLists?.findIndex(ele => ele === e?.designno);
                    if (findUniqueDesign === -1) {
                        designLists?.push(e?.designno);
                    }
                    datass?.push(dataObj);
                    (hoverImg === "" && (e?.imgsrc !== "" && setHoverImg(e?.imgsrc)));
                });
                totals.uniqueDesigns = designLists?.length;
                setData(datass);
                setFilterData(datass);
                setTotal(totals);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        let inputFrom = fromDateRef?.current?.querySelector(".MuiInputBase-root input");
        if (inputFrom) {
            inputFrom.placeholder = 'Date From';
        }
        let inputTo = toDateRef?.current?.querySelector(".MuiInputBase-root input");
        if (inputTo) {
            inputTo.placeholder = 'Date To';
        }
    }, []);

    return (
        <Box>
            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
                <Box className="salesReporttable" sx={{ paddingBottom: "45px", paddingRight: "15px" }}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Total Gross Wt</td>
                                <td>Total Net Wt(24k)</td>
                                <td>Total Net Wt</td>
                                <td>Total Diamonds</td>
                                <td>Total Color Stones</td>
                                <td>Unique Designs</td>
                            </tr>
                            <tr>

                                <td className='fw_bold'>{NumberWithCommas(total?.GrossWt, 3)}</td>
                                <td className='fw_bold'> {NumberWithCommas(total?.Netwt_24k, 3)} </td>
                                <td className='fw_bold'>{NumberWithCommas(total?.NetWt, 3)}</td>
                                <td className='fw_bold'>{NumberWithCommas(total?.DiaPcs, 0)} PCs/{NumberWithCommas(total?.DiaWt, 3)} Ctw</td>
                                <td className='fw_bold'>{NumberWithCommas(total?.CsPcs, 0)} PCs/{NumberWithCommas(total?.CsWt, 3)} Ctw</td>
                                <td className='fw_bold'>{NumberWithCommas(total?.uniqueDesigns, 0)}</td>
                            </tr>
                            <tr>
                                <td>Total Metal Amt</td>
                                <td>Total Dia. Amt</td>
                                <td>Total CST Amt</td>
                                <td>Total Labour Amt</td>
                                <td>Total Other Amt</td>
                                <td>Unique Customers</td>
                            </tr>
                            <tr>
                                <td className='fw_bold'>{NumberWithCommas(total?.MetalAmount, 2)}</td>
                                <td className='fw_bold'>{NumberWithCommas(total?.DiamondAmount, 2)}</td>
                                <td className='fw_bold'>{NumberWithCommas(total?.ColorStoneAmount, 2)}</td>
                                <td className='fw_bold'>{NumberWithCommas(total?.LabourAmount, 2)}</td>
                                <td className='fw_bold'>{NumberWithCommas(total?.OtherAmount, 2)}</td>
                                <td className='fw_bold'>1</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
                <Box sx={{ paddingBottom: "20px", paddingRight: "15px" }}>
                    <Typography>Total Amount</Typography>
                    <Typography sx={{ fontWeight: 700, textAlign: "center" }}>{NumberWithCommas(total?.TotalAmount, 2)}</Typography>
                </Box>
                <Box className="salesReportImgSec" sx={{ width: "135px", height: "135px", paddingBottom: "20px", overflow: "hidden", }}>
                    <Box sx={{ border: "1px solid #d6d6d6", height: "135px", }}>
                        {hoverImg !== "" && <img src={hoverImg} alt="" style={{ width: "100%", objectFit: "contain" }} />}
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                <Box sx={{ paddingBottom: "15px", position: 'relative', top: "-2px", paddingRight: "15px" }}>
                    <Button variant="contained" sx={{ background: "#7d7f85" }} className='muiSmilingRocksBtn' onClick={eve => resetAllFilters(eve)}>All</Button>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", position: "relative", maxWidth: "max-content", paddingBottom: "15px", paddingRight: "15px" }} className="searchbox">
                    <TextField id="standard-basic" label="Search" variant="outlined" value={searchVal} onChange={eve => {
                        setSearchVal(eve?.target?.value);
                        handleSearch(eve, eve?.target?.value, fromDate, toDate, grossWtInput?.from, grossWtInput?.to);
                    }} />
                    <Button sx={{ padding: 0, maxWidth: "max-content", minWidth: "max-content", position: "absolute", right: "8px", color: "#757575" }}
                    ><SearchIcon /></Button>
                </Box>
                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date From"
                            value={fromDate}
                            ref={fromDateRef}
                            // onChange={(newValue) => setFromDate(newValue)}
                            format="DD MMM YYYY"
                            className='quotationFilterDates'
                            onChange={(newValue) => {
                                if (newValue === null) {
                                    setFromDate(null)
                                } else {
                                    if (((newValue["$y"] <= 2099 && newValue["$y"] >= 1900) || newValue["$y"] < 1000) || isNaN(newValue["$y"])) {
                                        setFromDate(newValue)
                                    } else {
                                        Swal.fire({
                                            title: "Error !",
                                            text: "Enter Valid Date From",
                                            icon: "error",
                                            confirmButtonText: "ok"
                                        });
                                        resetAllFilters()
                                    }
                                }
                            }}
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date To"
                            value={toDate}
                            ref={toDateRef}
                            // onChange={(newValue) => setToDate(newValue)}
                            format="DD MMM YYYY"
                            className='quotationFilterDates'
                            onChange={(newValue) => {
                                if (newValue === null) {
                                    setToDate(null)
                                } else {
                                    if (((newValue["$y"] <= 2099 && newValue["$y"] >= 1900) || newValue["$y"] < 1000) || isNaN(newValue["$y"])) {
                                        setToDate(newValue)
                                    } else {
                                        Swal.fire({
                                            title: "Error !",
                                            text: "Enter Valid Date To",
                                            icon: "error",
                                            confirmButtonText: "ok"
                                        });
                                        resetAllFilters()
                                    }
                                }
                            }}
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", }}>
                    <Button variant='contained' className='muiSmilingRocksBtn' sx={{ padding: "7px 10px", minWidth: "max-content", background: "#7d7f85" }}
                        onClick={(eve) => handleSearch(eve, searchVal, fromDate, toDate, grossWtInput?.from, grossWtInput?.to)}
                    ><SearchIcon sx={{ color: "#fff !important" }} /></Button>
                </Box>
                <Box sx={{ paddingRight: "10px", paddingBottom: "20px", }}>
                    <Typography>Gross Wt : </Typography>
                </Box>
                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", }}>
                    <TextField placeholder='From' name="from" sx={{ maxWidth: "150px", }} className='grossWtinputSecSalesReport' value={grossWtInput?.from} onChange={eve => handleChangegrossWt(eve)} />
                </Box>
                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", }}>
                    <TextField placeholder='To' name="to" sx={{ maxWidth: "150px", }} className='grossWtinputSecSalesReport'
                        value={grossWtInput?.to} onChange={eve => handleChangegrossWt(eve)} />
                </Box>
                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", }}>
                    <Button variant='contained' className='muiSmilingRocksBtn' sx={{ padding: "7px 10px", minWidth: "max-content", background: "#7d7f85" }}
                        onClick={(eve) => handleSearch(eve, searchVal, fromDate, toDate, grossWtInput?.from, grossWtInput?.to)}
                    ><SearchIcon sx={{ color: "#fff !important" }} /></Button>
                </Box>
            </Box>
            {
                isLoading ?
                    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}><CircularProgress className='loadingBarManage' /></Box> : <>
                        <Paper sx={{ width: '100%', mb: 2 }} className='salesReportTableSec'>
                            <TableContainer sx={{ maxHeight: 580 }}>
                                <Table
                                    sx={{ minWidth: 750 }}
                                    aria-labelledby="tableTitle"
                                >
                                    <EnhancedTableHead
                                        numSelected={selected.length}
                                        order={order}
                                        orderBy={orderBy}
                                        onSelectAllClick={handleSelectAllClick}
                                        onRequestSort={handleRequestSort}
                                        rowCount={filterData.length}
                                    />
                                    <TableBody>
                                        {visibleRows.map((row, index) => {
                                            const labelId = `enhanced-table-checkbox-${index}`;
                                            return (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key={row.id}
                                                    sx={{ cursor: 'pointer' }}
                                                    onMouseEnter={(eve) => handleimageShow(eve, row?.imgsrc)}
                                                    onMouseLeave={(eve) => handleimageShow(eve, row?.imgsrc)}
                                                >
                                                    <TableCell id={labelId} scope="row" align="center"> {index+1} </TableCell>
                                                    <TableCell align="center">{row.EntryDate}</TableCell>
                                                    <TableCell align="center">{row.StockDocumentNo}</TableCell>
                                                    <TableCell align="center">{row.SKUNo}</TableCell>
                                                    <TableCell align="center">{row.designno}</TableCell>
                                                    <TableCell align="center">{row.MetalType}</TableCell>
                                                    <TableCell align="center">{row.MetalAmount}</TableCell>
                                                    <TableCell align="center">{row.DiamondAmount}</TableCell>
                                                    <TableCell align="center">{row.ColorStoneAmount}</TableCell>
                                                    <TableCell align="center">{row.LabourAmount}</TableCell>
                                                    <TableCell align="center">{row.OtherAmount}</TableCell>
                                                    <TableCell align="center">{row.UnitCost}</TableCell>
                                                    <TableCell align="center">{row.Category}</TableCell>
                                                    <TableCell align="center">{row.GrossWt}</TableCell>
                                                    <TableCell align="center">{row.NetWt}</TableCell>
                                                    <TableCell align="center">{row.DiaPcs}</TableCell>
                                                    <TableCell align="center">{row.DiaWt}</TableCell>
                                                    <TableCell align="center">{row.CsPcs}</TableCell>
                                                    <TableCell align="center">{row.CsWt}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100,]}
                                component="div"
                                count={filterData.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </>
            }

        </Box>
    )
}

export default SalesReport;

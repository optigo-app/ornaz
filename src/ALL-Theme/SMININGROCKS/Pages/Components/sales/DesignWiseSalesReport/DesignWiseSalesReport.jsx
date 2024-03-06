import React, { useEffect, useState } from 'react';
import "./DesignWiseSalesReport.css";
import { Box, Button, MenuItem, Select, Slider, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import jsonData from "../../../jsonFile/sales/AccountDesignWiseSales.json";

const DesignWiseSalesReport = () => {

    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [netWtLimit, setNetWtLimit] = useState({
        min: 0,
        max: 0,
    });
    const [grossWtLimit, setGrossWtLimit] = useState({
        min: 0,
        max: 0,
    });
    const [netWtSlider, setNetWtSlider] = useState([netWtLimit?.min, netWtLimit?.max]);
    const [grossWtSlider, setGrossWtSlider] = useState([grossWtLimit?.min, grossWtLimit?.max]);
    const [minDistanceNetWt, setMinDistanceNetWt] = useState(0);
    const [minDistanceGrossWt, setMinDistanceGrossWt] = useState(0);

    const [purchaseCountList, setPurchaseCountList] = useState([]);
    const [purchaseCount, setPurchaseCount] = useState(purchaseCountList?.length > 0 ? purchaseCountList[0]?.value : null);

    const [metalList, setMetalList] = useState([]);
    const [metal, setMetal] = useState(metalList?.length > 0 ? metalList[0]?.value : null);

    const [designNo, setDesignNo] = useState("");

    const handleChangePurchaseCount = (event) => {
        setPurchaseCount(event.target.value);
    };

    const valuetext = (value) => {
        return `${value}°C`;
    }

    const handleNetWtSlider = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistanceNetWt) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], netWtLimit?.max - minDistanceNetWt);
                setNetWtSlider([clamped, clamped + minDistanceNetWt]);
            } else {
                const clamped = Math.max(newValue[1], minDistanceNetWt);
                setNetWtSlider([clamped - minDistanceNetWt, clamped]);
            }
        } else {
            setNetWtSlider(newValue);
        }
    };

    const handleNetWtSliderCustom = (val) => (event) => {
        let vals = event.target.value;
        let min = 0;
        let max = 0;
        const newValue = [...netWtSlider];
        // if (val === 0) {
        //     if (!(vals > newValue[1] || vals >= netWtLimit?.max || vals <= netWtLimit?.min)) {
        //         min = vals;
        //         max = newValue[1];
        //     }else{
        //         min = newValue[0];
        //         max = newValue[1];
        //     }
        // } else if (val === 1) {
        //     if (!(vals < newValue[0] || vals <= netWtLimit?.min || vals >= netWtLimit?.max)) {
        //         max = vals;
        //         min = newValue[0];
        //     }
        //     else{
        //         min = newValue[0];
        //         max = newValue[1];
        //     }
        // }
        // newValue[0] = min;
        // newValue[1] = max;
        newValue[val] = vals === '' ? '' : Number(event.target.value);
        setNetWtSlider(newValue);
    }

    const resetAllFilters = () => {

    }

    const handleBlurNetWt = (index) => (event) => {
        if (netWtSlider[index] < netWtLimit?.min) {
            setNetWtSlider([0, netWtSlider[1]]);
        } else if (netWtSlider[index] > netWtLimit?.max) {
            setNetWtSlider([netWtSlider[0], netWtLimit?.max]);
        }
    };

    const handleGrossWtSlider = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistanceGrossWt) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], netWtLimit?.max - minDistanceGrossWt);
                setGrossWtSlider([clamped, clamped + minDistanceGrossWt]);
            } else {
                const clamped = Math.max(newValue[1], minDistanceGrossWt);
                setGrossWtSlider([clamped - minDistanceGrossWt, clamped]);
            }
        } else {
            setGrossWtSlider(newValue);
        }
    }

    const handleGrossWtSliderCustom = (val) => (event) => {
        let vals = event.target.value;
        let min = 0;
        let max = 0;
        const newValue = [...grossWtSlider];
        newValue[val] = vals === '' ? '' : Number(event.target.value);
        setGrossWtSlider(newValue);
    }

    const handleBlurGrossWt = (index) => (event) => {
        if (grossWtSlider[index] < grossWtLimit?.min) {
            setGrossWtSlider([0, grossWtSlider[1]]);
        } else if (grossWtSlider[index] > grossWtLimit?.max) {
            setGrossWtSlider([grossWtSlider[0], grossWtLimit?.max]);
        }
    }


    useEffect(() => {
        let minNetWt = 0;
        let maxNetWt = 0;
        let minGrossWt = 0;
        let maxGrossWt = 0;
        let purchaseCountArr = [];
        let metalLists = [];
        jsonData?.forEach((e, i) => {
            console.log(e);
            if (minNetWt === 0 || minNetWt > e?.netwt) {
                minNetWt = e?.netwt;
            }
            if (maxNetWt === 0 || maxNetWt < e?.netwt) {
                maxNetWt = e?.netwt;
            }

            if (minGrossWt === 0 || minGrossWt > e?.["grosswt-range"]) {
                minGrossWt = e?.["grosswt-range"];
            }

            if (maxGrossWt === 0 || maxGrossWt < e?.["grosswt-range"]) {
                maxGrossWt = e?.["grosswt-range"];
            }

            let findPurCouArr = purchaseCountArr?.findIndex((ele, index) => ele?.label === e?.purchase_Count);
            if (findPurCouArr === -1) {
                purchaseCountArr.push({ id: purchaseCountArr?.length, label: e?.purchase_Count, value: e?.purchase_Count });
            }

            let findMetal = metalLists?.findIndex((ele, ind) => ele?.label === e?.metal);
            if(findMetal === -1){
                metalLists.push({id: metalLists?.length, label: e?.metal, value: e?.metal });
            }

        });
        setNetWtLimit({ ...netWtLimit, min: minNetWt, max: maxNetWt });
        setNetWtSlider([minNetWt, maxNetWt]);
        setMinDistanceNetWt((maxNetWt - (maxNetWt - minNetWt)) / 100);

        setGrossWtLimit({ ...grossWtLimit, min: minGrossWt, max: maxGrossWt });
        setGrossWtSlider([minGrossWt, maxGrossWt]);
        setMinDistanceGrossWt((maxNetWt - (maxNetWt - minNetWt)) / 100);
        setPurchaseCountList(purchaseCountArr);
        purchaseCountArr?.length > 0 && setPurchaseCount(purchaseCountArr[0]?.value);
        setMetalList(metalLists);
        metalLists?.length > 0 && setMetal(metalLists[0]?.value);
    }, []);

    return (
        <Box className="designWiseSalesReport">
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", }}>
                    <Button variant="contained" sx={{ background: "#7d7f85" }} className='muiSmilingRocksBtn' onClick={eve => resetAllFilters(eve)}>All</Button>
                </Box>

                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date From"
                            value={fromDate}
                            onChange={(newValue) => setFromDate(newValue)}
                            format="DD MMM YYYY"
                            className='quotationFilterDates'
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={{ paddingRight: "25px", paddingBottom: "20px", }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date To"
                            value={toDate}
                            onChange={(newValue) => setToDate(newValue)}
                            format="DD MMM YYYY"
                            className='quotationFilterDates'
                        />
                    </LocalizationProvider>
                </Box>

                <Box sx={{ marginRight: "35px", paddingBottom: "20px", width: 170 }}>
                    <Typography sx={{ textAlign: "center" }}>NetWt(gm)</Typography>
                    <Slider
                        className='netWtSecSlider'
                        getAriaLabel={() => 'NetWt(gm)'}
                        value={netWtSlider}
                        onChange={handleNetWtSlider}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                        min={netWtLimit?.min}
                        max={netWtLimit?.max}
                    />

                    <Box sx={{ display: "flex", justifyContent: "space-between" }} className="netWtSliderSec">
                        <Typography sx={{ maxWidth: "50px" }}>
                            <TextField type="number" value={netWtSlider[0]} sx={{ maxWidth: "50px", width: "50px", minWidth: "50px" }}
                                onChange={handleNetWtSliderCustom(0)}
                                onBlur={handleBlurNetWt(0)}
                                inputProps={{ min: netWtLimit?.min, max: netWtSlider[1], type: 'number', step: 1 }}
                            />
                        </Typography>
                        <Typography sx={{ maxWidth: "50px" }}>
                            <TextField type="number" value={netWtSlider[1]}
                                sx={{ maxWidth: "50px", width: "50px", minWidth: "50px" }}
                                inputProps={{ min: netWtSlider[0], max: netWtLimit?.max, type: 'number', step: 1 }}
                                onChange={handleNetWtSliderCustom(1)}
                                onBlur={handleBlurNetWt(1)}
                            />
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ marginRight: "35px", paddingBottom: "20px", width: 170 }}>
                    <Typography sx={{ textAlign: "center" }}>GrossWt</Typography>
                    <Slider
                        className='netWtSecSlider'
                        getAriaLabel={() => 'GrossWt'}
                        value={grossWtSlider}
                        onChange={handleGrossWtSlider}
                        valueLabelDisplay="auto"
                        disableSwap
                        min={grossWtLimit?.min}
                        max={grossWtLimit?.max}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }} className="netWtSliderSec">
                        <Typography sx={{ maxWidth: "50px" }}>
                            <TextField type="number" value={grossWtSlider[0]} sx={{ maxWidth: "50px", width: "50px", minWidth: "50px" }}
                                onChange={handleGrossWtSliderCustom(0)}
                                onBlur={handleBlurGrossWt(0)}
                                inputProps={{ min: grossWtLimit?.min, max: grossWtSlider[1], type: 'number', step: 1 }}
                            />
                        </Typography>
                        <Typography sx={{ maxWidth: "50px" }}>
                            <TextField type="number" value={grossWtSlider[1]}
                                sx={{ maxWidth: "50px", width: "50px", minWidth: "50px" }}
                                inputProps={{ min: grossWtSlider[0], max: grossWtLimit?.max, type: 'number', step: 1 }}
                                onChange={handleGrossWtSliderCustom(1)}
                                onBlur={handleBlurGrossWt(1)}
                            />
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", }}>
                    <Typography sx={{ paddingBottom: "3px" }}>Purchase Count</Typography>
                    <Box
                    >
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={purchaseCount}
                            label="Age"
                            onChange={handleChangePurchaseCount}
                        >
                            {purchaseCountList?.map((ele, ind) => {
                                return <MenuItem value={ele?.value}>{ele?.label}</MenuItem>
                            })}
                        </Select>
                    </Box>
                </Box>

                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", }}>
                    <Typography>DesignNo</Typography>
                    <TextField type='text' value={designNo} onChange={eve=> setDesignNo(eve?.target?.value)} className='designNo' placeholder='#DesignNo'/>
                </Box>

                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", }}>
                    <Typography sx={{paddingBottom: "5px"}}>Metal</Typography>
                    <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={metal}
                            label="Age"
                            onChange={handleChangePurchaseCount}
                        >
                            {metalList?.map((ele, ind) => {
                                return <MenuItem value={ele?.value}>{ele?.label}</MenuItem>
                            })}
                        </Select>
                </Box>

            </Box>
        </Box>
    )
}

export default DesignWiseSalesReport

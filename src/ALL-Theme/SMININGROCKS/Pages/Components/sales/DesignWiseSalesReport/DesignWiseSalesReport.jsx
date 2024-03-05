import React, { useState } from 'react';
import "./DesignWiseSalesReport.css";
import { Box, Button, Slider, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DesignWiseSalesReport = () => {

    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [netWtSlider, setNetWtSlider] = React.useState([20, 37]);
    const minDistance = 10;
    const valuetext = (value) => {
        return `${value}°C`;
    }


    const handleNetWtSlider = (event, newValue, activeThumb) => {
        console.log(activeThumb);
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setNetWtSlider([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setNetWtSlider([clamped - minDistance, clamped]);
            }
        } else {
            setNetWtSlider(newValue);
        }
    };

    const handleNetWtSliderCustom = (val) => (event) => {
       if(val === 0){

       }else if(val === 1){
        
       }
        const newValue = [...netWtSlider];
        newValue[val] = event.target.value === '' ? '' : Number(event.target.value);
        setNetWtSlider(newValue);
    }


    const resetAllFilters = () => {

    }


    const handleBlur = (index) => (event) => {
        if (netWtSlider[index] < 0) {
            setNetWtSlider([0, netWtSlider[1]]);
        } else if (netWtSlider[index] > 100) {
            setNetWtSlider([netWtSlider[0], 100]);
        }
    };

    return (
        <Box>
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
                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", }}>
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

                <Box sx={{ paddingRight: "15px", paddingBottom: "20px", width: 300 }}>
                    <Typography sx={{ textAlign: "center" }}>NetWt(gm)</Typography>
                    <Slider
                        className='netWtSecSlider'
                        getAriaLabel={() => 'NetWt(gm)'}
                        value={netWtSlider}
                        onChange={handleNetWtSlider}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                        min={0}
                        max={100}
                    />

                    <Box sx={{ display: "flex", justifyContent: "space-between" }} className="netWtSliderSec">
                        <Typography sx={{ maxWidth: "50px" }}>
                            <TextField type="number" value={netWtSlider[0]} sx={{ maxWidth: "50px", width: "50px", minWidth: "50px" }}
                                onChange={handleNetWtSliderCustom(0)}
                                onBlur={handleBlur(0)}
                                inputProps={{ min: 0, max: netWtSlider[1], type: 'number', step: 1 }}
                            />
                        </Typography>
                        <Typography sx={{ maxWidth: "50px" }}>
                            <TextField type="number" value={netWtSlider[1]}
                                sx={{ maxWidth: "50px", width: "50px", minWidth: "50px" }}
                                inputProps={{ min: netWtSlider[0], max: 100, type: 'number', step: 1 }}
                                onChange={handleNetWtSliderCustom(1)}
                                onBlur={handleBlur(1)}
                            />
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DesignWiseSalesReport

import React, { useState } from 'react';
import "./ManageAddress.css";
import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import StayPrimaryPortraitIcon from '@mui/icons-material/StayPrimaryPortrait';
import { Label } from '@mui/icons-material';
const ManageAddress = () => {

    const [defaultAdd, setDefaultAdd] = useState('female');

    const handleDefault = (event) => {
        setDefaultAdd(event.target.value);
    };

    return (
        <div>
            <p style={{
                textAlign: 'center',
                padding: "15px 15px",
                marginTop: '30px',
                fontSize: '20px',
                background: '#7d7f85',
                color: "#fff",
                fontWeight: "500",
            }}>Saved Addresses</p>
            <Box sx={{ paddingLeft: "15px" }}>
                <Button className='muiSmilingRocksBtnManage' variant="contained" sx={{ background: "#7d7f85", padding: "6px 15px", textAlign: "end", fontSize: "0.9rem", marginBottom: "10px", borderRadius: "0" }} onClick={eve => { }}>ADD NEW ADDRESS</Button></Box>
            {/* <Button className='smilingAcoountAddNewBtn' sx={{marginLeft: "auto"}} >ADD NEW ADDRESS</Button> */}
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={defaultAdd}
                onChange={handleDefault}
            >
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2%" }}>
                    <Box sx={{ width: "31%", padding: "10px" }}>
                        <Box className="manageAddressBlock">
                            <Box sx={{ display: "flex", flexWrap: "wrap", }}>
                                <Box sx={{ paddingRight: "15px", fontweight: "600", paddingBottom: "10px" }}><h6>firstname1</h6></Box><Box sx={{ fontweight: "600" }}><h6>lastname1</h6></Box>
                            </Box>
                            <Box>
                                <Typography sx={{ paddingBottom: "15px" }}>street1,surat-395001,gujarat,india</Typography>
                            </Box>
                            <Box sx={{ display: "flex", paddingBottom: "15px" }}>
                                <StayPrimaryPortraitIcon />
                                <Typography sx={{ paddingLeft: "3px" }}>6352979477</Typography>
                            </Box>

                            <Box sx={{ display: "flex", paddingBottom: "7px", alignItems: 'center' }}>
                                <FormControlLabel value="Default1" control={<Radio />} />
                                <Typography>Default</Typography>
                            </Box>

                            <Box sx={{ borderTop: "1px solid #dee2e6 !important", display: "flex", flexWrap: "wrap", paddingTop: "20px" }}>
                                <Button className='muiSmilingRocksBtnManageEdit' variant="contained" sx={{ background: "#7d7f85", maxHeight: "30px", minWidth: "max-content", maxWidth: "max-content", padding: "6px 10px", fontSize: "0.9rem", marginBottom: "10px", borderRadius: "0", }} onClick={eve => { }}>Edit</Button>
                                <Button className='muiSmilingRocksBtnManageEdit' variant="contained" sx={{ background: "#7d7f85", maxHeight: "30px", minWidth: "max-content", maxWidth: "max-content", marginLeft: "15px", padding: "6px 10px", fontSize: "0.9rem", marginBottom: "10px", borderRadius: "0", }} onClick={eve => { }}>Delete</Button>
                            </Box>

                        </Box>
                    </Box>
                    <Box sx={{ width: "31%", padding: "10px" }}>
                        <Box className="manageAddressBlock">
                            <Box sx={{ display: "flex", flexWrap: "wrap", }}>
                                <Box sx={{ paddingRight: "15px", fontweight: "600", paddingBottom: "10px" }}><h6>firstname1</h6></Box><Box sx={{ fontweight: "600" }}><h6>lastname1</h6></Box>
                            </Box>
                            <Box>
                                <Typography sx={{ paddingBottom: "15px" }}>street1,surat-395001,gujarat,india</Typography>
                            </Box>
                            <Box sx={{ display: "flex", paddingBottom: "15px" }}>
                                <StayPrimaryPortraitIcon />
                                <Typography sx={{ paddingLeft: "3px" }}>6352979477</Typography>
                            </Box>

                            <Box sx={{ display: "flex", paddingBottom: "7px", alignItems: 'center' }}>
                                <FormControlLabel value="Default2" control={<Radio />} />
                                <Typography>Default</Typography>
                            </Box>

                            <Box sx={{ borderTop: "1px solid #dee2e6 !important", display: "flex", flexWrap: "wrap", paddingTop: "20px" }}>
                                <Button className='muiSmilingRocksBtnManageEdit' variant="contained" sx={{ background: "#7d7f85", maxHeight: "30px", minWidth: "max-content", maxWidth: "max-content", padding: "6px 10px", fontSize: "0.9rem", marginBottom: "10px", borderRadius: "0", }} onClick={eve => { }}>Edit</Button>
                                <Button className='muiSmilingRocksBtnManageEdit' variant="contained" sx={{ background: "#7d7f85", maxHeight: "30px", minWidth: "max-content", maxWidth: "max-content", marginLeft: "15px", padding: "6px 10px", fontSize: "0.9rem", marginBottom: "10px", borderRadius: "0", }} onClick={eve => { }}>Delete</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "31%", padding: "10px" }}>
                        <Box className="manageAddressBlock">
                            <Box sx={{ display: "flex", flexWrap: "wrap", }}>
                                <Box sx={{ paddingRight: "15px", fontweight: "600", paddingBottom: "10px" }}><h6>firstname1</h6></Box><Box sx={{ fontweight: "600" }}><h6>lastname1</h6></Box>
                            </Box>
                            <Box>
                                <Typography sx={{ paddingBottom: "15px" }}>street1,surat-395001,gujarat,india</Typography>
                            </Box>
                            <Box sx={{ display: "flex", paddingBottom: "15px" }}>
                                <StayPrimaryPortraitIcon />
                                <Typography sx={{ paddingLeft: "3px" }}>6352979477</Typography>
                            </Box>

                            <Box sx={{ display: "flex", paddingBottom: "7px", alignItems: 'center' }}>
                                <FormControlLabel value="Default3" control={<Radio />} />
                                <Typography>Default</Typography>
                            </Box>

                            <Box sx={{ borderTop: "1px solid #dee2e6 !important", display: "flex", flexWrap: "wrap", paddingTop: "20px" }}>
                                <Button className='muiSmilingRocksBtnManageEdit' variant="contained" sx={{ background: "#7d7f85", maxHeight: "30px", minWidth: "max-content", maxWidth: "max-content", padding: "6px 10px", fontSize: "0.9rem", marginBottom: "10px", borderRadius: "0", }} onClick={eve => { }}>Edit</Button>
                                <Button className='muiSmilingRocksBtnManageEdit' variant="contained" sx={{ background: "#7d7f85", maxHeight: "30px", minWidth: "max-content", maxWidth: "max-content", marginLeft: "15px", padding: "6px 10px", fontSize: "0.9rem", marginBottom: "10px", borderRadius: "0", }} onClick={eve => { }}>Delete</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </RadioGroup>

        </div>
    )
}

export default ManageAddress

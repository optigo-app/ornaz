import React, { useState } from 'react'
import './Contact.css'
import Header from '../../../home/Header/Header'
import Footer from '../..'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

export default function Contact() {

  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [mobileNo, setMobileNo] = useState(undefined);
  const [open, setOpen] = React.useState(false);
  const navigation = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequest = () => {


    if (name === undefined || name === '') {
      toast('name is required')
    } else {
      if (mobileNo === undefined) {
        toast('mobile number is required')
      } else if (mobileNo.length !== 10) {
        toast('enter valid mobile number')
      } else {
        if (email === undefined || email === '') {
          toast('email is required')
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          toast('enter valid email')
        } else {

          if (name && mobileNo && email !== undefined || '') {
            setOpen(true);
          }
        }
      }
    }






  }
  return (
    <div>
      <Header />
      <div className='webContact'>

        <h1>ContactPage</h1>
      </div>

      <div className='mobileContact'>
        <ToastContainer />
        <div className='contactUsTop'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{
              fontSize: '20px',
              fontWeight: 700,
              height: '35px',
              width: '230px',
              textAlign: 'center',
              borderBottom: '1px solid rgb(68, 212, 213)'
            }}>CONTACT US</p>
          </div>

          <div style={{ display: 'flex', margin: '15px' }}>
            <div>
              <CallIcon />
            </div>
            <div style={{ marginLeft: '15px' }}>
              <p style={{ margin: 0 }}>Call Us At<span style={{ color: 'rgb(74, 142, 245)' }}>1800212099</span></p>
              <p style={{ margin: 0 }}>(11:00AM-8:00PM)</p>
            </div>
          </div>

          <div style={{ display: 'flex', margin: '15px' }}>
            <div>
              <LocationOnIcon />
            </div>
            <div style={{ marginLeft: '15px' }}>
              <p style={{ margin: 0 }}>office Address ,<br /><span style={{ color: 'rgb(74, 142, 245)' }}>2nd floor, A-26/5,DFL Phase-1 Near DLF Mega Mall,haryaan</span></p>
            </div>
          </div>

          <div style={{ display: 'flex', paddingBottom: '20px', margin: '15px' }}>
            <EmailIcon />
            <p style={{ margin: 0, marginLeft: '15px' }}>Email us at <span style={{ color: 'rgb(74, 142, 245)' }}>care@ornaz.com</span></p>
          </div>
        </div>

        <div className='needHelpContact'>
          <p style={{ textAlign: 'center', fontSize: '20px' }}>NEED HELP</p>
          <input type='text' onChange={(event) => setName(event.target.value)} placeholder='name*' className='needHelpInput' />
          <input type='text' onChange={(event) => setMobileNo(event.target.value)} placeholder='phone Number*' className='needHelpInput' />
          <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='email*' className='needHelpInput' />
          <textarea type='text' placeholder='comments' className='needHelpTextarea' />

          <button className='needHelpBtn' onClick={handleRequest}>REQUEST GUIDANCE</button>
        </div>

        <Dialog
          open={open}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Thank you for reaching out to as"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              we will get back to you shortly
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {handleClose(); navigation('/');}}>Go Back</Button>
          </DialogActions>
        </Dialog>
      </div>
      <Footer />

    </div>
  )
}

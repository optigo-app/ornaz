import React, { useEffect, useState } from 'react'
import './index.css';
import Video from './topVideo/Video';
import SmilingRock from './smiling_Rock/SmilingRock';
import FestiveFinds from './FestiveFind/FestiveFinds';
import DaimondEveyone from './DaimondsEveryone/DaimondEveyone';
import Header from './Header/Header';
import ShopByCategory from './shopByCategory/ShopByCategory';
import SmilingBrides from './SmilingBrides/SmilingBrides';
import FeaturedCollection from './FeaturedCollection/FeaturedCollection';
import ShopifySection from './shopifySection/ShopifySection';
import SustainAbility from '../sustainAbility/SustainAbility';
import ShopOurInstagram from './shopOurInstagram/ShopOurInstagram';
import Footer from './Footer/Footer';
import axios from 'axios';
import { Button, Dialog } from '@mui/material';
import { IoMdMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      // const APIURL = 'http://zen/api/';
      const APIURL = 'https://api.optigoapps.com/test/store.aspx';
      const header = {
        Authorization: 'Bearer optigo_json_api',
        domain: 'gstore.orail.co.in',
        version: 'V4',
        // domain: 'zen',
      };

      try {
        const body = {
          "con": "{\"id\":\"\",\"mode\":\"store_init\"}",
          "p": "",
          "f": "formname (init)"
        };
        const response = await axios.post(APIURL, body, { headers: header });
        if (response.status === 200) {
          localStorage.setItem('YearCode', response.data.Data.rd[0].YearCode);
          localStorage.setItem('FrontEnd_RegNo', response.data.Data.rd[0].FrontEnd_RegNo);
          localStorage.setItem('domain', response.data.Data.rd[0].domain);
          localStorage.setItem('ukey', response.data.Data.rd[0].ukey);
          localStorage.setItem('version', response.data.Data.rd[0].version);
          localStorage.setItem('token', response.data.Data.rd[0].token);
          localStorage.setItem('UploadLogicalPath', response.data.Data.rd[0].UploadLogicalPath);

          localStorage.setItem('storeInit', JSON.stringify(response.data.Data.rd[0]));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);


  const [openLoginDailog, setOpenLoginDailog] = useState(false);
  const navigation = useNavigate();
  const openLoginDailogBox = () => {
    setOpenLoginDailog(true);
  };
  const closeLoginDailog = () => {
    setOpenLoginDailog(false);
  };


  return (
    <div style={{ backgroundColor: '#c0bbb1' }}>

      <Dialog
        open={openLoginDailog}
        // onClose={closeLoginDailog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className='loginDailog'>
          <IoClose style={{ float: 'right', height: '30px', width: '30px', cursor: 'pointer', backgroundColor: '#e4e6ec' }} onClick={closeLoginDailog} />
          <p className='loginDiTile'>Log in or sign up in seconds</p>
          <p>Use your email or mobile no to continue with the organization.</p>

          <div className='loginMail' onClick={() => navigation('/ContinueWithEmail')}>
            <IoMdMail style={{ height: '25px', width: '25px' }} />
            <p style={{ margin: '0px', fontSize: '20px', fontWeight: 500, paddingLeft: '25px' }}>Continue with email</p>
          </div>
          <div className='loginMobile' onClick={() => navigation('/ContimueWithMobile')}>
            <FaMobileAlt style={{ height: '25px', width: '25px', marginRight: '10px' }} />
            <p style={{ margin: '0px', fontSize: '20px', fontWeight: 500, paddingLeft: '25px' }}>Log in with mobile</p>
          </div>
          <p style={{ marginTop: '20px', fontSize: '14px' }}>By continuing, you agree to our Terms of Use. Read our Privacy Policy.</p>
        </div>
      </Dialog>
      <div className='smining-header'>
        <Header onLoginClick={openLoginDailogBox} />
      </div>
      <div className='homeMain'>
        <Video />
        <SmilingRock />
        <FestiveFinds />
        <DaimondEveyone />
        <ShopByCategory />
        <SmilingBrides />
        <FeaturedCollection />
        <div style={{ marginTop: '60px' }}>
          <SustainAbility />
        </div>
        <ShopifySection />
        <ShopOurInstagram />
        <Footer />
      </div>
      <div>
        <p style={{
          paddingBlock: '30px',
          margin: '0px',
          textAlign: 'center',
          color: 'white',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '1px'
        }}>BACK TO TOP</p>
      </div>
    </div>
  )
}

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
      // const header = {
      //   Authorization: 'Bearer optigo_json_api',
      //   YearCode:'',
      //   version: '',
      //   domain: 'zen',
      //   // domain: 'zen',
      // };

      try {
        const body = {
          "con": "{\"id\":\"\",\"mode\":\"store_init\"}",
          "p": "",
          "f": "formname (init)"
        };
        const response = await axios.post(APIURL, body, { headers: header });
        console.log('ressssssssssssss',response);
        if (response.status === 200) {
          localStorage.setItem('UploadLogicalPath', response.data.Data.rd[0].UploadLogicalPath);
          localStorage.setItem('storeInit', JSON.stringify(response.data.Data.rd[0]));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);




  return (
    <div style={{ backgroundColor: '#c0bbb1' ,paddingTop: '110px' }}>

      {/* <div className='smining-header'>
        <Header onLoginClick={openLoginDailogBox} />
      </div> */}
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

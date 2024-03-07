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
import { CommonAPI } from '../../../Utils/API/CommonAPI';

export default function Home() {


  useEffect(() => {
    const fetchData = async () => {
      // const APIURL = 'http://zen/api/';
      const APIURL = 'https://api.optigoapps.com/test/store.aspx';

      const header = {
        Authorization: 'Bearer optigo_json_api',
        domain: 'gstore.orail.co.in',
        version: 'V4',
        spid: '1'
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
        if (response.status === 200) {
          localStorage.setItem('UploadLogicalPath', response.data.Data.rd[0].UploadLogicalPath);
          localStorage.setItem('storeInit', JSON.stringify(response.data.Data.rd[0]));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }


    const getMetalTypeData = async () => {
      try {
        const storedEmail = localStorage.getItem('registerEmail') || '';
        const storedCustomerId = localStorage.getItem('LogdinCustomerId') || '0';

        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;
        // {"FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${storedCustomerId}`
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"\",\"mode\":\"METALTYPECOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "Account (changePassword)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response.Data?.rd) {
          let data = JSON.stringify(response.Data?.rd)
          localStorage.setItem('MetalTypeData', data)
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        // setIsLoading(false);
      }
    }

    const getQualityColor = async () => {
      try {
        const storedEmail = localStorage.getItem('registerEmail') || '';

        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;

        const storedData = localStorage.getItem('loginUserDetail') || '0';
        const data = JSON.parse(storedData);
        const customerid = data?.id;

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"\",\"mode\":\"DIAQUALITYCOLORCOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "header (getQualityColor)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response.Data?.rd) {
          let data = JSON.stringify(response.Data?.rd)
          localStorage.setItem('QualityColor', data)
        }

      } catch (error) {
        console.error('Error:', error);
      } finally {
        // setIsLoading(false);
      }
    }


    const getColorStoneQualityData = async () => {
      try {
        const storedEmail = localStorage.getItem('registerEmail') || '';
        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;
        // {"FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}

        const storedData = localStorage.getItem('loginUserDetail') || '0';
        const data = JSON.parse(storedData);
        const customerid = data?.id;

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"\",\"mode\":\"CSQUALITYCOLORCOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "indexPage (getColorStoneQualityData)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response.Data?.rd) {
          let data = JSON.stringify(response.Data?.rd)
          localStorage.setItem('ColorStoneQualityColor', data)
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        // setIsLoading(false);
      }
    }

    const getMetalColor = async () => {
      try {
        const storedEmail = localStorage.getItem('registerEmail') || '';

        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;

        const storedData = localStorage.getItem('loginUserDetail') || '0';
        const data = JSON.parse(storedData);
        const customerid = data?.id;

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"\",\"mode\":\"METALCOLORCOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "index (getSizeData)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response.Data?.rd) {
          let data = JSON.stringify(response.Data?.rd)
          localStorage.setItem('MetalColorData', data)
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        // setIsLoading(false);
      }
    }
    fetchData();
    getMetalTypeData();
    getQualityColor();
    getColorStoneQualityData();
    getMetalColor();
  }, []);




  return (
    <div style={{ backgroundColor: '#c0bbb1', paddingTop: '110px' }}>
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

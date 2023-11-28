import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'
// import ring1 from '../../../assets/svg.svg'
import Tooltip from '@mui/material/Tooltip';
import { SwipeableDrawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ContactsIcon from '@mui/icons-material/Contacts';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LockIcon from '@mui/icons-material/Lock';
import i1 from '../../../../lib/consts/Images'
import { PiStarThin } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { ABOUT_US, ACCOUNT, BLOG, CELEBRITY, CUSTERM_SERVICES, ETERNITY_BANDS, FINE_JEWELLERY_GIFTS, FOR_HIM, FREE_INTERNATIONAL_SHIPPING, IMPACT, LAB_GROWN, LIFETIME_WARRANTY, LOGOUT_MESSAGE, LOOK_BOOK, MONEY_BACK_GUARANTEE, PRESS, SHOP } from "../../../../lib/consts/Strings";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiStarFourThin } from "react-icons/pi";

export default function Header({ name }) {
  const navigation = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showLogout, setShowLogout] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isOpenEngagementRing, setIsEngagementRing] = useState(false);
  const [isOpenFineJewellaryGift, setFineJewellaryGift] = useState(false);
  const [isOpenInr, setIsInr] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const togglEngagementRing = () => {
    setIsEngagementRing(!isOpenEngagementRing);
  };
  const toggleFineJewellaryGift = () => {
    setFineJewellaryGift(!isOpenFineJewellaryGift);
  };
  const toggleInr = () => {
    setIsInr(!isOpenInr);
  };


  let hermenuJSON = [{
    menu1: {
      'title': 'SHOP RINGS BY SHAPE',
      'menus': [
        { label: 'Round cut Rings', imgclass: i1[0] },
        { label: 'Princess Cut Rings', imgclass: i1[1] },
        { label: 'Cushion Cut Rings', imgclass: i1[2] },
        { label: 'Oval Cut Rings', imgclass: i1[3] },
        { label: 'Heart Cut Rings', imgclass: i1[4] },
        { label: 'pear Cut Rings', imgclass: i1[5] },
        { label: 'Emerald Cut Rings', imgclass: i1[6] },
      ]
    },
    menu2: {
      'title': 'DESIGN YOUR OWN ENGAGEMENT RING',
      'menus': [
        { label: 'Submit Your Own' },
      ]
    },
    menu3: {
      'title': 'ENGAGEMENT RINGS BY STYLES ',
      'menus': [
        { label: 'Plain Solitaire' },
        { label: 'Vintage' },
        { label: 'Side-Stone' },
        { label: 'Three Stone' },
        { label: 'Cluster' },
        { label: 'Halo' },
        { label: 'Pave' },
      ]
    },
    menu4: {
      'title': 'SHOPE BY METAL',
      'menus': [
        { label: 'White Gold' },
        { label: 'Rose Gold' },

      ]
    },
  }]
  const ForHerMenu = useCallback(
    (data, num) => (
      <>
        <font
          style={{ color: "black", fontSize: "14px" }}
          className="title-container"
        >
          {data[`menu${num}`].title}
        </font>
        <div className={`label-container ${num === 3 ? 'menu-3' : ''}`}>
          {data[`menu${num}`].menus.map((menudata) => (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              {num === 1 && <span>{menudata.imgclass}</span>}
              {num === 2 && <FavoriteBorderIcon />}{num === 2 && '+'}{num === 2 && <FavoriteBorderIcon />}
              <font className="label-font">{menudata.label}</font>
            </div>
          ))}
        </div>
      </>
    ),
    []
  );
  const handleLogOut = () => {
    setIsLogin(false)
    setShowLogout(true)
  }


  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeaderFixed(scrollPosition > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };


  return (
    <>
      <div className="Smining-Top-Header">
        <div style={{
          width: '33.33%',
          display: 'flex'
        }}>
          <ul className="nav-ul-shop">
            <li
              className="nav-li-shop-main"
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}

            >
              <span style={{ display: 'flex', alignItems: 'center', fontWeight: 500 }}>SHOP<RiArrowDropDownLine style={{ width: '20px', height: '20px' }} /></span>

            </li>
            <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{IMPACT}</li>
            <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{LOOK_BOOK}</li>
            <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{PRESS}</li>
            <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{CELEBRITY}</li>
            <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{BLOG}</li>
          </ul>
        </div>
        <div style={{
          width: '33.33%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <a href="/" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="#7d7f85" width="80%" viewBox="0 0 651 138" style={{ height: '60px' }}>
              <g clip-path="url(#a)">
                <path fill="white" d="M15.56 31.43H14.1V29.9h37.09a37.3 37.3 0 0 1 15.16 2.76 25.46 25.46 0 0 1 9.67 7 27.119 27.119 0 0 1 4.94 9 30.64 30.64 0 0 1 1.5 9.34A26.66 26.66 0 0 1 80 69.13a24 24 0 0 1-7.49 9.2 29.09 29.09 0 0 1-12.62 5.23v.29c6.4 3.107 12.317 9.263 17.75 18.47l9.67 16.37c4.36 7.333 7.863 11.96 10.51 13.88a15.851 15.851 0 0 0 7.81 3.28V137H86.16c-.82-1.07-1.6-2.1-2.32-3.09l-2.33-3.16c-.49-.73-1.2-1.83-2.14-3.31a27.079 27.079 0 0 0-1.71-2.51l-12.8-21.16A53.506 53.506 0 0 0 57 93.27a30.11 30.11 0 0 0-7.53-5.78 21.881 21.881 0 0 0-6.29-2.18 43.318 43.318 0 0 0-6.58-.44v39.2c0 7.613 3.88 11.54 11.64 11.78V137H14.1v-1.16a16.31 16.31 0 0 0 5.67-1.2 9.06 9.06 0 0 0 4.11-3.64 12.839 12.839 0 0 0 1.64-6.94v-81c0-4.273-1.043-7.273-3.13-9a10.42 10.42 0 0 0-6.83-2.63ZM36.57 82h6.11c6.4 0 11.647-.923 15.74-2.77a18.08 18.08 0 0 0 8.91-7.89 26.15 26.15 0 0 0 2.76-12.54 31.15 31.15 0 0 0-2.47-12.11 22.48 22.48 0 0 0-8.4-10c-3.947-2.667-9.28-4-16-4a28.121 28.121 0 0 0-6.69.66L36.57 82Z"></path>
                <path fill="white" d="M10 48.26A43.762 43.762 0 0 0 17.2 54c1.73 1.09 4.14 2.49 7.22 4.22v-13l-.18-.12a40 40 0 0 1-6.9-5.32 19.08 19.08 0 0 1-4.42-6.59 22.66 22.66 0 0 1-1.5-8.53 23.44 23.44 0 0 1 2.51-11A19 19 0 0 1 21 6.06a19.88 19.88 0 0 1 10.55-2.79c6 0 10.863 1.87 14.59 5.61a22.32 22.32 0 0 1 6.51 13.06h1.11V0h-1.11c-.56 2.093-1.603 3.137-3.13 3.13a6.78 6.78 0 0 1-3-.55A44.61 44.61 0 0 0 32.66.28a31.67 31.67 0 0 0-15.95 4A28.64 28.64 0 0 0 5.85 14.9 27.3 27.3 0 0 0 2 28.76a27 27 0 0 0 2.18 11.11A26.76 26.76 0 0 0 10 48.26Zm39.12 40.3A22.35 22.35 0 0 1 47.57 94a16 16 0 0 1-6.51 7.1 17.303 17.303 0 0 1-3.39 1.58v3.48a28.004 28.004 0 0 0 7.53-2.9 26.14 26.14 0 0 0 10.18-9.95 28.151 28.151 0 0 0-6.26-4.75Zm9.56-10.63c-.467-5.913-2.523-10.66-6.17-14.24a74.799 74.799 0 0 0-14.84-10.83v13.23a44.623 44.623 0 0 1 6.45 5.4 18.29 18.29 0 0 1 4.74 9.11A30.782 30.782 0 0 0 58 78.27l.68-.34ZM24.42 107v-3.25a26.225 26.225 0 0 1-13.48-5.55c-4.827-3.86-8.08-9.55-9.76-17.07H0v25.7h1.18a30.689 30.689 0 0 1 1.22-4.52 1.86 1.86 0 0 1 1.92-1c.977.105 1.936.34 2.85.7a58.806 58.806 0 0 0 9.89 3.79 38.049 38.049 0 0 0 7.36 1.2Zm106.52-46.38 2.21-3.81a1.414 1.414 0 0 1 .948-.688 1.42 1.42 0 0 1 1.142.258c.3.19 5.28 3.81 9.26 3.81 3.19 0 5.59-2.09 5.59-4.73 0-3.13-2.64-5.28-7.79-7.36-5.77-2.33-11.54-6-11.54-13.25 0-5.46 4.05-11.79 13.81-11.79a21.619 21.619 0 0 1 12.27 4.12 1.513 1.513 0 0 1 .36 2l-2.33 3.5a1.611 1.611 0 0 1-2.15.73c-.48-.3-5.15-3.37-8.52-3.37-3.37 0-5.4 2.33-5.4 4.29 0 2.89 2.27 4.85 7.24 6.88 6 2.39 12.82 6 12.82 13.86 0 6.32-5.46 12.15-14.11 12.15-7.73 0-12.27-3.62-13.5-4.78-.55-.53-.86-.84-.31-1.82ZM176.09 24a.997.997 0 0 1 .712-.885.997.997 0 0 1 .398-.035h1a1.11 1.11 0 0 1 1 .62l13.5 29h.19l13.49-29a1.083 1.083 0 0 1 1-.62h1a1 1 0 0 1 1.1.92l7.24 41.24a1.062 1.062 0 0 1-.163 1.007 1.061 1.061 0 0 1-.937.403h-5.58a1.32 1.32 0 0 1-1.17-.92l-3.57-23.28h-.18l-10.74 24.12a.995.995 0 0 1-1 .67h-1.11a1.092 1.092 0 0 1-1-.67l-10.94-24.12h-.19l-3.55 23.26a1.199 1.199 0 0 1-1.11.92H170a1.134 1.134 0 0 1-1.179-.88 1.127 1.127 0 0 1 .009-.53L176.09 24Zm53.99.84a1.198 1.198 0 0 1 1.16-1.16H237a1.2 1.2 0 0 1 1.16 1.16v40.62a1.2 1.2 0 0 1-1.16 1.17h-5.71a1.202 1.202 0 0 1-1.16-1.17l-.05-40.62Zm24.1 0a1.158 1.158 0 0 1 1.17-1.16H261a1.2 1.2 0 0 1 1.16 1.16v34.43h15.65a1.158 1.158 0 0 1 1.19 1.16v5a1.163 1.163 0 0 1-1.16 1.17h-22.49a1.158 1.158 0 0 1-1.17-1.17V24.84Zm35.89 0a1.201 1.201 0 0 1 1.17-1.16h5.7a1.202 1.202 0 0 1 1.17 1.16v40.62a1.207 1.207 0 0 1-1.17 1.17h-5.7a1.21 1.21 0 0 1-1.17-1.17V24.84Zm24.11-.67a1.161 1.161 0 0 1 1.16-1.11h1.54l25.52 27.12h.06V24.84a1.158 1.158 0 0 1 1.17-1.16h5.64a1.202 1.202 0 0 1 1.17 1.16v41.3a1.152 1.152 0 0 1-1.17 1.1h-1.47l-25.65-28.16h-.06v26.38a1.163 1.163 0 0 1-1.16 1.17h-5.59a1.202 1.202 0 0 1-1.16-1.17V24.17Zm71.28-1.11a23.21 23.21 0 0 1 15 5.71 1.202 1.202 0 0 1 .398.847 1.203 1.203 0 0 1-.338.873l-3.81 4a.999.999 0 0 1-1.59 0 13.919 13.919 0 0 0-9.27-3.56c-7.67 0-13.74 6.56-13.74 14.23a13.998 13.998 0 0 0 13.8 14.05 19.282 19.282 0 0 0 7.31-1.53v-5.22h-4.91a1.122 1.122 0 0 1-1.17-1.11V46.5a1.124 1.124 0 0 1 .334-.833 1.13 1.13 0 0 1 .836-.327h11.78a1.153 1.153 0 0 1 1.1 1.16v15.71a1.164 1.164 0 0 1-.49 1 31 31 0 0 1-15.22 4 22.06 22.06 0 1 1 0-44.12l-.02-.03Zm48.09 1.78a1.158 1.158 0 0 1 1.17-1.16h17.55a13.299 13.299 0 0 1 13.38 13.19c0 5.65-3.75 10.25-9.09 12.4L465 64.85a1.154 1.154 0 0 1 .031 1.188 1.153 1.153 0 0 1-1.031.592h-6.45a1.058 1.058 0 0 1-1-.55l-8.16-16.26h-6.81v15.64a1.207 1.207 0 0 1-1.17 1.17h-5.64a1.158 1.158 0 0 1-1.17-1.17l-.05-40.62Zm18 18.41a6.253 6.253 0 0 0 6.12-6.25 6.112 6.112 0 0 0-6.08-6h-10v12.25h9.96Zm46.73-20.19a22.09 22.09 0 1 1-22 22.16 22.054 22.054 0 0 1 22-22.16Zm0 36.21a14.117 14.117 0 0 0 13.137-8.65 14.12 14.12 0 1 0-27.137-5.4 14.138 14.138 0 0 0 14 14.05Zm54.04-36.21a20.78 20.78 0 0 1 14.85 5.71 1.14 1.14 0 0 1 .06 1.72l-3.74 3.86a1.002 1.002 0 0 1-1.53 0 14.53 14.53 0 0 0-9.45-3.61c-7.86 0-13.69 6.56-13.69 14.29a13.886 13.886 0 0 0 8.412 13.046 13.892 13.892 0 0 0 5.338 1.124 14.769 14.769 0 0 0 9.43-3.49 1.12 1.12 0 0 1 1.53 0l3.8 3.93a1.163 1.163 0 0 1-.06 1.65 21.05 21.05 0 0 1-14.91 5.95 22.096 22.096 0 0 1-15.62-6.47 22.092 22.092 0 0 1 15.62-37.71h-.04Zm27.85 2.09a1.453 1.453 0 0 1 1.47-1.47H587a1.492 1.492 0 0 1 1.47 1.47v16.57L604 24.29a1.472 1.472 0 0 1 1.17-.61h6.13a1.308 1.308 0 0 1 1.341 1.526 1.309 1.309 0 0 1-.341.684l-16 18 17.18 20.55a1.344 1.344 0 0 1 .114 1.415 1.35 1.35 0 0 1-1.214.735h-6.69a1.327 1.327 0 0 1-1.1-.43l-16-19.76v18.76a1.49 1.49 0 0 1-1.59 1.47h-5.4a1.452 1.452 0 0 1-1.47-1.47l.04-40.01Zm42.57 35.47 2.26-3.81a1.414 1.414 0 0 1 .948-.688 1.42 1.42 0 0 1 1.142.258c.3.19 5.27 3.81 9.26 3.81 3.19 0 5.58-2.09 5.58-4.73 0-3.13-2.64-5.28-7.79-7.36-5.77-2.33-11.53-6-11.53-13.25 0-5.46 4-11.79 13.8-11.79a21.562 21.562 0 0 1 12.27 4.12 1.507 1.507 0 0 1 .37 2l-2.33 3.5a1.611 1.611 0 0 1-2.15.73c-.49-.3-5.15-3.37-8.53-3.37-3.38 0-5.4 2.33-5.4 4.29 0 2.89 2.27 4.85 7.24 6.88 6 2.39 12.83 6 12.83 13.86 0 6.32-5.46 12.15-14.11 12.15-7.73 0-12.28-3.62-13.5-4.78-.61-.53-.91-.84-.36-1.82Zm-492.03 52.24L140 92.68a.538.538 0 0 1 .51-.33h.3a.507.507 0 0 1 .51.33l9.24 20.18a.534.534 0 0 1-.023.542.527.527 0 0 1-.487.238h-2.61a.853.853 0 0 1-.87-.59l-1.47-3.24h-9l-1.47 3.24a.902.902 0 0 1-.87.59h-2.61a.537.537 0 0 1-.435-.269.528.528 0 0 1-.005-.511Zm13-6.38-3-6.6h-.09l-2.94 6.6h6.03Zm24.65-13.26a.57.57 0 0 1 .57-.57h8.58a6.499 6.499 0 0 1 6.54 6.45 6.627 6.627 0 0 1-4.44 6.06l4.11 7.61a.575.575 0 0 1 .007.589.565.565 0 0 1-.517.281h-3.15a.529.529 0 0 1-.48-.26l-4-7.95h-3.33v7.64a.579.579 0 0 1-.57.57h-2.76a.555.555 0 0 1-.406-.164.564.564 0 0 1-.164-.406l.01-19.85Zm8.82 9a3.062 3.062 0 0 0 3-3.06 2.999 2.999 0 0 0-3-2.91h-4.89v6l4.89-.03Zm15.36-9a.57.57 0 0 1 .57-.57h12.21a.57.57 0 0 1 .57.57v2.46a.57.57 0 0 1-.57.57h-8.88v4.92h7.41c.15.005.292.067.398.172a.594.594 0 0 1 .172.398v2.49a.57.57 0 0 1-.57.57h-7.41v5.25h8.88a.557.557 0 0 1 .526.343.561.561 0 0 1 .044.217v2.46a.555.555 0 0 1-.164.406.564.564 0 0 1-.406.164h-12.21a.555.555 0 0 1-.406-.164.564.564 0 0 1-.164-.406V93.22Zm19.11 19.64L221 92.68a.538.538 0 0 1 .51-.33h.3a.507.507 0 0 1 .51.33l9.24 20.18a.534.534 0 0 1-.023.542.527.527 0 0 1-.487.238h-2.61a.853.853 0 0 1-.87-.59l-1.47-3.24h-9l-1.47 3.24a.902.902 0 0 1-.87.59h-2.61a.53.53 0 0 1-.5-.78Zm13-6.38-3-6.6h-.09l-2.94 6.6h6.03Zm12.59 4.23 1.08-1.86a.7.7 0 0 1 1-.21c.15.09 2.58 1.86 4.53 1.86a2.501 2.501 0 0 0 2.73-2.31c0-1.53-1.29-2.59-3.81-3.6-2.82-1.14-5.64-3-5.64-6.48 0-2.67 2-5.76 6.75-5.76 2.157.038 4.251.736 6 2a.742.742 0 0 1 .18 1l-1.14 1.71a.793.793 0 0 1-1.05.36c-.24-.15-2.52-1.65-4.17-1.65a2.392 2.392 0 0 0-2.64 2.1c0 1.41 1.11 2.37 3.54 3.36 2.91 1.16 6.27 2.91 6.27 6.78 0 3.09-2.67 5.93-6.9 5.93a9.6 9.6 0 0 1-6.6-2.34c-.25-.26-.37-.41-.13-.89Zm30.96-18.36a10.799 10.799 0 0 1 7.688 18.415 10.802 10.802 0 0 1-11.763 2.374 10.793 10.793 0 0 1-6.695-9.959 10.777 10.777 0 0 1 10.77-10.83Zm0 17.7a6.902 6.902 0 0 0 6.799-8.239 6.897 6.897 0 0 0-5.43-5.43 6.9 6.9 0 0 0-8.239 6.799 6.907 6.907 0 0 0 6.87 6.87Zm18.93-17.16a.558.558 0 0 1 .57-.54h.75l12.48 13.25V93.22a.57.57 0 0 1 .57-.57h2.76a.59.59 0 0 1 .57.57v20.18a.558.558 0 0 1-.57.54h-.72L291 100.18v12.89a.555.555 0 0 1-.164.406.564.564 0 0 1-.406.164h-2.73a.579.579 0 0 1-.57-.57V92.89Zm41.04 3.36h-4.59a.57.57 0 0 1-.57-.57v-2.46a.57.57 0 0 1 .57-.57h13.11a.57.57 0 0 1 .57.57v2.46a.57.57 0 0 1-.57.57h-4.59v16.82a.579.579 0 0 1-.57.57h-2.79a.579.579 0 0 1-.57-.57V96.25Zm25.47-3.9a10.799 10.799 0 0 1 7.688 18.415 10.802 10.802 0 0 1-11.763 2.374 10.793 10.793 0 0 1-6.695-9.959 10.777 10.777 0 0 1 10.77-10.83Zm0 17.7a6.902 6.902 0 0 0 6.799-8.239 6.897 6.897 0 0 0-5.43-5.43 6.9 6.9 0 0 0-8.239 6.799 6.907 6.907 0 0 0 6.87 6.87Zm28.53.66 1.08-1.86a.7.7 0 0 1 1-.21c.15.09 2.58 1.86 4.53 1.86a2.501 2.501 0 0 0 2.73-2.31c0-1.53-1.29-2.59-3.81-3.6-2.82-1.14-5.64-3-5.64-6.48 0-2.67 2-5.76 6.75-5.76 2.157.038 4.251.736 6 2a.742.742 0 0 1 .18 1l-1.14 1.71a.793.793 0 0 1-1.05.36c-.24-.15-2.52-1.65-4.17-1.65a2.392 2.392 0 0 0-2.64 2.1c0 1.41 1.11 2.37 3.54 3.36 2.91 1.16 6.27 2.91 6.27 6.78 0 3.09-2.67 5.93-6.9 5.93a9.6 9.6 0 0 1-6.6-2.34c-.25-.26-.4-.41-.13-.89Zm23.88-17.91a.512.512 0 0 1 .54-.45h.48a.551.551 0 0 1 .51.3l6.6 14.16h.09l6.6-14.16a.518.518 0 0 1 .51-.3h.48a.51.51 0 0 1 .54.45l3.54 20.2a.517.517 0 0 1-.54.69h-2.73a.655.655 0 0 1-.57-.45l-1.77-11.36h-.09L415 113.61a.499.499 0 0 1-.51.33h-.54a.523.523 0 0 1-.51-.33l-5.31-11.78H408l-1.74 11.36a.579.579 0 0 1-.54.45h-2.7a.557.557 0 0 1-.463-.198.569.569 0 0 1-.113-.233.567.567 0 0 1 .006-.259l3.6-20.15Zm28.2.42a.593.593 0 0 1 .57-.57h2.79a.59.59 0 0 1 .57.57v19.85a.579.579 0 0 1-.57.57h-2.79a.579.579 0 0 1-.57-.57V93.22Zm13.59 0a.57.57 0 0 1 .57-.57h2.76a.59.59 0 0 1 .57.57v16.83h7.65a.557.557 0 0 1 .526.343.561.561 0 0 1 .044.217v2.46a.555.555 0 0 1-.164.406.564.564 0 0 1-.406.164h-11a.555.555 0 0 1-.406-.164.564.564 0 0 1-.164-.406l.02-19.85Zm19.35 0a.57.57 0 0 1 .57-.57H480a.57.57 0 0 1 .57.57v2.46a.57.57 0 0 1-.57.57h-8.88v4.92h7.41c.15.005.292.067.398.172a.594.594 0 0 1 .172.398v2.49a.57.57 0 0 1-.57.57h-7.41v5.25H480a.557.557 0 0 1 .526.343.561.561 0 0 1 .044.217v2.46a.555.555 0 0 1-.164.406.564.564 0 0 1-.406.164h-12.24a.555.555 0 0 1-.406-.164.564.564 0 0 1-.164-.406V93.22Z">
                </path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="currentColor" d="M0 0h650.66v137.01H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div style={{
          width: '33.33%',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <ul className="nav-ul-shop">
            <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{ABOUT_US}</li>
            <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{LAB_GROWN}</li>
            <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{ACCOUNT}</li>
            <li className="nav-li-smining" ><PiStarThin style={{ height: '15px', width: '15px' }} /></li>
            <li className="nav-li-smining" style={{}}><IoSearchOutline style={{ height: '15px', width: '15px' }} /></li>
            <li className="nav-li-smining" style={{ marginLeft: '-10px' }}><PiStarFourThin style={{ height: '35px', width: '35px' }} /></li>
          </ul>
        </div>
      </div >

      <div
        onMouseEnter={handleDropdownOpen}
        onMouseLeave={handleDropdownClose}
        className={`shop-dropdown ${isDropdownOpen ? 'open' : ''}`}
      >
        <div style={{ display: 'flex', padding: '50px', color: 'black' }}
          onMouseEnter={handleDropdownOpen}
          onMouseLeave={handleDropdownClose}>
          <div>
            <ul>
              <li>FINE JEWELLERY</li>
              <li>Ring</li>
              <li>Ring</li>
              <li>Ring</li>
              <li>Ring</li>
              <li>Ring</li>
            </ul>
          </div>
          <div>
            <ul>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>
              <li style={{ height: '19px' }}>COLLECTION</li>

            </ul>
          </div>
          <div>
            <ul>
              <li>BOUTIQUE</li>
              <li>Haute Couture</li>
              <li>Haute Couture</li>
              <li>Haute Couture</li>
            </ul>
          </div>
        </div>
      </div>



      <div className={`Smining-Top-Header-fixed-main ${isHeaderFixed ? 'fixed' : ''}`}>
        <div className="Smining-Top-Header-fixed">
          <div style={{
            width: '30.33%',
            display: 'flex'
          }}>
            <ul className="nav-ul-fixed">
              <li
                className="nav-li-shop-main"
                onMouseEnter={handleDropdownOpen}
                onMouseLeave={handleDropdownClose}
              >
                <span style={{ display: 'flex', alignItems: 'center', fontWeight: 500 }}>SHOP<RiArrowDropDownLine style={{ width: '20px', height: '20px' }} /></span>
              </li>
              <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{IMPACT}</li>
              <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{LOOK_BOOK}</li>
              <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{PRESS}</li>
              <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{CELEBRITY}</li>
              <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{BLOG}</li>
            </ul>
          </div>
          <div style={{
            width: '65%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <a href="/" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#7d7f85" width="80%" viewBox="0 0 651 138" style={{ height: '45px' }}>
                <g clip-path="url(#a)">
                  <path fill="#7d7f85" d="M15.56 31.43H14.1V29.9h37.09a37.3 37.3 0 0 1 15.16 2.76 25.46 25.46 0 0 1 9.67 7 27.119 27.119 0 0 1 4.94 9 30.64 30.64 0 0 1 1.5 9.34A26.66 26.66 0 0 1 80 69.13a24 24 0 0 1-7.49 9.2 29.09 29.09 0 0 1-12.62 5.23v.29c6.4 3.107 12.317 9.263 17.75 18.47l9.67 16.37c4.36 7.333 7.863 11.96 10.51 13.88a15.851 15.851 0 0 0 7.81 3.28V137H86.16c-.82-1.07-1.6-2.1-2.32-3.09l-2.33-3.16c-.49-.73-1.2-1.83-2.14-3.31a27.079 27.079 0 0 0-1.71-2.51l-12.8-21.16A53.506 53.506 0 0 0 57 93.27a30.11 30.11 0 0 0-7.53-5.78 21.881 21.881 0 0 0-6.29-2.18 43.318 43.318 0 0 0-6.58-.44v39.2c0 7.613 3.88 11.54 11.64 11.78V137H14.1v-1.16a16.31 16.31 0 0 0 5.67-1.2 9.06 9.06 0 0 0 4.11-3.64 12.839 12.839 0 0 0 1.64-6.94v-81c0-4.273-1.043-7.273-3.13-9a10.42 10.42 0 0 0-6.83-2.63ZM36.57 82h6.11c6.4 0 11.647-.923 15.74-2.77a18.08 18.08 0 0 0 8.91-7.89 26.15 26.15 0 0 0 2.76-12.54 31.15 31.15 0 0 0-2.47-12.11 22.48 22.48 0 0 0-8.4-10c-3.947-2.667-9.28-4-16-4a28.121 28.121 0 0 0-6.69.66L36.57 82Z"></path>
                  <path fill="#7d7f85" d="M10 48.26A43.762 43.762 0 0 0 17.2 54c1.73 1.09 4.14 2.49 7.22 4.22v-13l-.18-.12a40 40 0 0 1-6.9-5.32 19.08 19.08 0 0 1-4.42-6.59 22.66 22.66 0 0 1-1.5-8.53 23.44 23.44 0 0 1 2.51-11A19 19 0 0 1 21 6.06a19.88 19.88 0 0 1 10.55-2.79c6 0 10.863 1.87 14.59 5.61a22.32 22.32 0 0 1 6.51 13.06h1.11V0h-1.11c-.56 2.093-1.603 3.137-3.13 3.13a6.78 6.78 0 0 1-3-.55A44.61 44.61 0 0 0 32.66.28a31.67 31.67 0 0 0-15.95 4A28.64 28.64 0 0 0 5.85 14.9 27.3 27.3 0 0 0 2 28.76a27 27 0 0 0 2.18 11.11A26.76 26.76 0 0 0 10 48.26Zm39.12 40.3A22.35 22.35 0 0 1 47.57 94a16 16 0 0 1-6.51 7.1 17.303 17.303 0 0 1-3.39 1.58v3.48a28.004 28.004 0 0 0 7.53-2.9 26.14 26.14 0 0 0 10.18-9.95 28.151 28.151 0 0 0-6.26-4.75Zm9.56-10.63c-.467-5.913-2.523-10.66-6.17-14.24a74.799 74.799 0 0 0-14.84-10.83v13.23a44.623 44.623 0 0 1 6.45 5.4 18.29 18.29 0 0 1 4.74 9.11A30.782 30.782 0 0 0 58 78.27l.68-.34ZM24.42 107v-3.25a26.225 26.225 0 0 1-13.48-5.55c-4.827-3.86-8.08-9.55-9.76-17.07H0v25.7h1.18a30.689 30.689 0 0 1 1.22-4.52 1.86 1.86 0 0 1 1.92-1c.977.105 1.936.34 2.85.7a58.806 58.806 0 0 0 9.89 3.79 38.049 38.049 0 0 0 7.36 1.2Zm106.52-46.38 2.21-3.81a1.414 1.414 0 0 1 .948-.688 1.42 1.42 0 0 1 1.142.258c.3.19 5.28 3.81 9.26 3.81 3.19 0 5.59-2.09 5.59-4.73 0-3.13-2.64-5.28-7.79-7.36-5.77-2.33-11.54-6-11.54-13.25 0-5.46 4.05-11.79 13.81-11.79a21.619 21.619 0 0 1 12.27 4.12 1.513 1.513 0 0 1 .36 2l-2.33 3.5a1.611 1.611 0 0 1-2.15.73c-.48-.3-5.15-3.37-8.52-3.37-3.37 0-5.4 2.33-5.4 4.29 0 2.89 2.27 4.85 7.24 6.88 6 2.39 12.82 6 12.82 13.86 0 6.32-5.46 12.15-14.11 12.15-7.73 0-12.27-3.62-13.5-4.78-.55-.53-.86-.84-.31-1.82ZM176.09 24a.997.997 0 0 1 .712-.885.997.997 0 0 1 .398-.035h1a1.11 1.11 0 0 1 1 .62l13.5 29h.19l13.49-29a1.083 1.083 0 0 1 1-.62h1a1 1 0 0 1 1.1.92l7.24 41.24a1.062 1.062 0 0 1-.163 1.007 1.061 1.061 0 0 1-.937.403h-5.58a1.32 1.32 0 0 1-1.17-.92l-3.57-23.28h-.18l-10.74 24.12a.995.995 0 0 1-1 .67h-1.11a1.092 1.092 0 0 1-1-.67l-10.94-24.12h-.19l-3.55 23.26a1.199 1.199 0 0 1-1.11.92H170a1.134 1.134 0 0 1-1.179-.88 1.127 1.127 0 0 1 .009-.53L176.09 24Zm53.99.84a1.198 1.198 0 0 1 1.16-1.16H237a1.2 1.2 0 0 1 1.16 1.16v40.62a1.2 1.2 0 0 1-1.16 1.17h-5.71a1.202 1.202 0 0 1-1.16-1.17l-.05-40.62Zm24.1 0a1.158 1.158 0 0 1 1.17-1.16H261a1.2 1.2 0 0 1 1.16 1.16v34.43h15.65a1.158 1.158 0 0 1 1.19 1.16v5a1.163 1.163 0 0 1-1.16 1.17h-22.49a1.158 1.158 0 0 1-1.17-1.17V24.84Zm35.89 0a1.201 1.201 0 0 1 1.17-1.16h5.7a1.202 1.202 0 0 1 1.17 1.16v40.62a1.207 1.207 0 0 1-1.17 1.17h-5.7a1.21 1.21 0 0 1-1.17-1.17V24.84Zm24.11-.67a1.161 1.161 0 0 1 1.16-1.11h1.54l25.52 27.12h.06V24.84a1.158 1.158 0 0 1 1.17-1.16h5.64a1.202 1.202 0 0 1 1.17 1.16v41.3a1.152 1.152 0 0 1-1.17 1.1h-1.47l-25.65-28.16h-.06v26.38a1.163 1.163 0 0 1-1.16 1.17h-5.59a1.202 1.202 0 0 1-1.16-1.17V24.17Zm71.28-1.11a23.21 23.21 0 0 1 15 5.71 1.202 1.202 0 0 1 .398.847 1.203 1.203 0 0 1-.338.873l-3.81 4a.999.999 0 0 1-1.59 0 13.919 13.919 0 0 0-9.27-3.56c-7.67 0-13.74 6.56-13.74 14.23a13.998 13.998 0 0 0 13.8 14.05 19.282 19.282 0 0 0 7.31-1.53v-5.22h-4.91a1.122 1.122 0 0 1-1.17-1.11V46.5a1.124 1.124 0 0 1 .334-.833 1.13 1.13 0 0 1 .836-.327h11.78a1.153 1.153 0 0 1 1.1 1.16v15.71a1.164 1.164 0 0 1-.49 1 31 31 0 0 1-15.22 4 22.06 22.06 0 1 1 0-44.12l-.02-.03Zm48.09 1.78a1.158 1.158 0 0 1 1.17-1.16h17.55a13.299 13.299 0 0 1 13.38 13.19c0 5.65-3.75 10.25-9.09 12.4L465 64.85a1.154 1.154 0 0 1 .031 1.188 1.153 1.153 0 0 1-1.031.592h-6.45a1.058 1.058 0 0 1-1-.55l-8.16-16.26h-6.81v15.64a1.207 1.207 0 0 1-1.17 1.17h-5.64a1.158 1.158 0 0 1-1.17-1.17l-.05-40.62Zm18 18.41a6.253 6.253 0 0 0 6.12-6.25 6.112 6.112 0 0 0-6.08-6h-10v12.25h9.96Zm46.73-20.19a22.09 22.09 0 1 1-22 22.16 22.054 22.054 0 0 1 22-22.16Zm0 36.21a14.117 14.117 0 0 0 13.137-8.65 14.12 14.12 0 1 0-27.137-5.4 14.138 14.138 0 0 0 14 14.05Zm54.04-36.21a20.78 20.78 0 0 1 14.85 5.71 1.14 1.14 0 0 1 .06 1.72l-3.74 3.86a1.002 1.002 0 0 1-1.53 0 14.53 14.53 0 0 0-9.45-3.61c-7.86 0-13.69 6.56-13.69 14.29a13.886 13.886 0 0 0 8.412 13.046 13.892 13.892 0 0 0 5.338 1.124 14.769 14.769 0 0 0 9.43-3.49 1.12 1.12 0 0 1 1.53 0l3.8 3.93a1.163 1.163 0 0 1-.06 1.65 21.05 21.05 0 0 1-14.91 5.95 22.096 22.096 0 0 1-15.62-6.47 22.092 22.092 0 0 1 15.62-37.71h-.04Zm27.85 2.09a1.453 1.453 0 0 1 1.47-1.47H587a1.492 1.492 0 0 1 1.47 1.47v16.57L604 24.29a1.472 1.472 0 0 1 1.17-.61h6.13a1.308 1.308 0 0 1 1.341 1.526 1.309 1.309 0 0 1-.341.684l-16 18 17.18 20.55a1.344 1.344 0 0 1 .114 1.415 1.35 1.35 0 0 1-1.214.735h-6.69a1.327 1.327 0 0 1-1.1-.43l-16-19.76v18.76a1.49 1.49 0 0 1-1.59 1.47h-5.4a1.452 1.452 0 0 1-1.47-1.47l.04-40.01Zm42.57 35.47 2.26-3.81a1.414 1.414 0 0 1 .948-.688 1.42 1.42 0 0 1 1.142.258c.3.19 5.27 3.81 9.26 3.81 3.19 0 5.58-2.09 5.58-4.73 0-3.13-2.64-5.28-7.79-7.36-5.77-2.33-11.53-6-11.53-13.25 0-5.46 4-11.79 13.8-11.79a21.562 21.562 0 0 1 12.27 4.12 1.507 1.507 0 0 1 .37 2l-2.33 3.5a1.611 1.611 0 0 1-2.15.73c-.49-.3-5.15-3.37-8.53-3.37-3.38 0-5.4 2.33-5.4 4.29 0 2.89 2.27 4.85 7.24 6.88 6 2.39 12.83 6 12.83 13.86 0 6.32-5.46 12.15-14.11 12.15-7.73 0-12.28-3.62-13.5-4.78-.61-.53-.91-.84-.36-1.82Zm-492.03 52.24L140 92.68a.538.538 0 0 1 .51-.33h.3a.507.507 0 0 1 .51.33l9.24 20.18a.534.534 0 0 1-.023.542.527.527 0 0 1-.487.238h-2.61a.853.853 0 0 1-.87-.59l-1.47-3.24h-9l-1.47 3.24a.902.902 0 0 1-.87.59h-2.61a.537.537 0 0 1-.435-.269.528.528 0 0 1-.005-.511Zm13-6.38-3-6.6h-.09l-2.94 6.6h6.03Zm24.65-13.26a.57.57 0 0 1 .57-.57h8.58a6.499 6.499 0 0 1 6.54 6.45 6.627 6.627 0 0 1-4.44 6.06l4.11 7.61a.575.575 0 0 1 .007.589.565.565 0 0 1-.517.281h-3.15a.529.529 0 0 1-.48-.26l-4-7.95h-3.33v7.64a.579.579 0 0 1-.57.57h-2.76a.555.555 0 0 1-.406-.164.564.564 0 0 1-.164-.406l.01-19.85Zm8.82 9a3.062 3.062 0 0 0 3-3.06 2.999 2.999 0 0 0-3-2.91h-4.89v6l4.89-.03Zm15.36-9a.57.57 0 0 1 .57-.57h12.21a.57.57 0 0 1 .57.57v2.46a.57.57 0 0 1-.57.57h-8.88v4.92h7.41c.15.005.292.067.398.172a.594.594 0 0 1 .172.398v2.49a.57.57 0 0 1-.57.57h-7.41v5.25h8.88a.557.557 0 0 1 .526.343.561.561 0 0 1 .044.217v2.46a.555.555 0 0 1-.164.406.564.564 0 0 1-.406.164h-12.21a.555.555 0 0 1-.406-.164.564.564 0 0 1-.164-.406V93.22Zm19.11 19.64L221 92.68a.538.538 0 0 1 .51-.33h.3a.507.507 0 0 1 .51.33l9.24 20.18a.534.534 0 0 1-.023.542.527.527 0 0 1-.487.238h-2.61a.853.853 0 0 1-.87-.59l-1.47-3.24h-9l-1.47 3.24a.902.902 0 0 1-.87.59h-2.61a.53.53 0 0 1-.5-.78Zm13-6.38-3-6.6h-.09l-2.94 6.6h6.03Zm12.59 4.23 1.08-1.86a.7.7 0 0 1 1-.21c.15.09 2.58 1.86 4.53 1.86a2.501 2.501 0 0 0 2.73-2.31c0-1.53-1.29-2.59-3.81-3.6-2.82-1.14-5.64-3-5.64-6.48 0-2.67 2-5.76 6.75-5.76 2.157.038 4.251.736 6 2a.742.742 0 0 1 .18 1l-1.14 1.71a.793.793 0 0 1-1.05.36c-.24-.15-2.52-1.65-4.17-1.65a2.392 2.392 0 0 0-2.64 2.1c0 1.41 1.11 2.37 3.54 3.36 2.91 1.16 6.27 2.91 6.27 6.78 0 3.09-2.67 5.93-6.9 5.93a9.6 9.6 0 0 1-6.6-2.34c-.25-.26-.37-.41-.13-.89Zm30.96-18.36a10.799 10.799 0 0 1 7.688 18.415 10.802 10.802 0 0 1-11.763 2.374 10.793 10.793 0 0 1-6.695-9.959 10.777 10.777 0 0 1 10.77-10.83Zm0 17.7a6.902 6.902 0 0 0 6.799-8.239 6.897 6.897 0 0 0-5.43-5.43 6.9 6.9 0 0 0-8.239 6.799 6.907 6.907 0 0 0 6.87 6.87Zm18.93-17.16a.558.558 0 0 1 .57-.54h.75l12.48 13.25V93.22a.57.57 0 0 1 .57-.57h2.76a.59.59 0 0 1 .57.57v20.18a.558.558 0 0 1-.57.54h-.72L291 100.18v12.89a.555.555 0 0 1-.164.406.564.564 0 0 1-.406.164h-2.73a.579.579 0 0 1-.57-.57V92.89Zm41.04 3.36h-4.59a.57.57 0 0 1-.57-.57v-2.46a.57.57 0 0 1 .57-.57h13.11a.57.57 0 0 1 .57.57v2.46a.57.57 0 0 1-.57.57h-4.59v16.82a.579.579 0 0 1-.57.57h-2.79a.579.579 0 0 1-.57-.57V96.25Zm25.47-3.9a10.799 10.799 0 0 1 7.688 18.415 10.802 10.802 0 0 1-11.763 2.374 10.793 10.793 0 0 1-6.695-9.959 10.777 10.777 0 0 1 10.77-10.83Zm0 17.7a6.902 6.902 0 0 0 6.799-8.239 6.897 6.897 0 0 0-5.43-5.43 6.9 6.9 0 0 0-8.239 6.799 6.907 6.907 0 0 0 6.87 6.87Zm28.53.66 1.08-1.86a.7.7 0 0 1 1-.21c.15.09 2.58 1.86 4.53 1.86a2.501 2.501 0 0 0 2.73-2.31c0-1.53-1.29-2.59-3.81-3.6-2.82-1.14-5.64-3-5.64-6.48 0-2.67 2-5.76 6.75-5.76 2.157.038 4.251.736 6 2a.742.742 0 0 1 .18 1l-1.14 1.71a.793.793 0 0 1-1.05.36c-.24-.15-2.52-1.65-4.17-1.65a2.392 2.392 0 0 0-2.64 2.1c0 1.41 1.11 2.37 3.54 3.36 2.91 1.16 6.27 2.91 6.27 6.78 0 3.09-2.67 5.93-6.9 5.93a9.6 9.6 0 0 1-6.6-2.34c-.25-.26-.4-.41-.13-.89Zm23.88-17.91a.512.512 0 0 1 .54-.45h.48a.551.551 0 0 1 .51.3l6.6 14.16h.09l6.6-14.16a.518.518 0 0 1 .51-.3h.48a.51.51 0 0 1 .54.45l3.54 20.2a.517.517 0 0 1-.54.69h-2.73a.655.655 0 0 1-.57-.45l-1.77-11.36h-.09L415 113.61a.499.499 0 0 1-.51.33h-.54a.523.523 0 0 1-.51-.33l-5.31-11.78H408l-1.74 11.36a.579.579 0 0 1-.54.45h-2.7a.557.557 0 0 1-.463-.198.569.569 0 0 1-.113-.233.567.567 0 0 1 .006-.259l3.6-20.15Zm28.2.42a.593.593 0 0 1 .57-.57h2.79a.59.59 0 0 1 .57.57v19.85a.579.579 0 0 1-.57.57h-2.79a.579.579 0 0 1-.57-.57V93.22Zm13.59 0a.57.57 0 0 1 .57-.57h2.76a.59.59 0 0 1 .57.57v16.83h7.65a.557.557 0 0 1 .526.343.561.561 0 0 1 .044.217v2.46a.555.555 0 0 1-.164.406.564.564 0 0 1-.406.164h-11a.555.555 0 0 1-.406-.164.564.564 0 0 1-.164-.406l.02-19.85Zm19.35 0a.57.57 0 0 1 .57-.57H480a.57.57 0 0 1 .57.57v2.46a.57.57 0 0 1-.57.57h-8.88v4.92h7.41c.15.005.292.067.398.172a.594.594 0 0 1 .172.398v2.49a.57.57 0 0 1-.57.57h-7.41v5.25H480a.557.557 0 0 1 .526.343.561.561 0 0 1 .044.217v2.46a.555.555 0 0 1-.164.406.564.564 0 0 1-.406.164h-12.24a.555.555 0 0 1-.406-.164.564.564 0 0 1-.164-.406V93.22Z">
                  </path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="currentColor" d="M0 0h650.66v137.01H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div style={{
            width: '43.33%',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <ul className="nav-ul-fixed">
              <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{ABOUT_US}</li>
              <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{LAB_GROWN}</li>
              <li className="nav-li-smining" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{ACCOUNT}</li>
              <li className="nav-li-smining" ><PiStarThin style={{ height: '15px', width: '15px' }} /></li>
              <li className="nav-li-smining" style={{}}><IoSearchOutline style={{ height: '15px', width: '15px' }} /></li>
              <li className="nav-li-smining" style={{ marginLeft: '-10px' }}><PiStarFourThin style={{ height: '30px', width: '30px' }} /></li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: '100'
      }} className="mobileHeader">
        {/* <button onClick={openDrawer}>Open Drawer</button> */}
        <div style={{ display: 'flex', margin: '5px', alignItems: 'center' }}>
          <MenuIcon
            style={{ fontSize: '40px' }}
            onClick={openDrawer}
          />
          {name ?
            <p style={{ fontSize: '20px', fontWeight: 500 }}>{name}</p> :
            <img alt="ORNAZ" src="https://d1idqhwk00c3jv.cloudfront.net/v55/assets/icons/new_logo.png" style={{ width: '120px', height: '30px' }} onClick={() => navigation('/')} />
          }
        </div>


        <div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
          <div style={{
            width: '40px',
          }} onClick={() => navigation('/MobileSearch')}>
            <SearchIcon style={{ fontSize: '30px' }} />
          </div>
          <div style={{
            width: '40px'
          }} onClick={() => navigation('/WatchList')}>
            <FavoriteBorderIcon style={{ fontSize: '26px' }} />
          </div>
          <div style={{
            width: '40px'
          }} onClick={() => navigation('/MobileCart')}>
            <LockIcon style={{ fontSize: '25px' }} />
          </div>
        </div>

      </div>

      <div>
        <SwipeableDrawer
          anchor="left"
          open={isDrawerOpen}
          onClose={closeDrawer}
          onOpen={() => { }}
        >
          <div className="drawer-content">
            {/* <button onClick={closeDrawer}>Close Drawer</button> */}
            <div style={{ width: '250px', display: 'flex', justifyContent: 'space-between', margin: '15px', alignItems: 'center' }}>
              <img alt="ORNAZ" src="https://d1idqhwk00c3jv.cloudfront.net/v55/assets/icons/new_logo.png" style={{ width: '120px', height: '30px' }}
                onClick={() => { navigation('/'); closeDrawer(); }}
              />
              <div onClick={() => navigation('/Profile')}>
                <ContactsIcon />
              </div>
            </div>

            <div className='headerDrawerTitle' onClick={togglEngagementRing}>
              <p>Engagement Ring</p>
              <p style={{ marginRight: '20px' }}>{isOpenEngagementRing ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</p>
            </div>
            <ul className={`my-HeaderDrawer ${isOpenEngagementRing ? 'open' : ''}`} style={{ borderBottom: !isOpenEngagementRing ? '0.1px solid lightgray' : ' ' }}>
              <li onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
                <p className='sub-listt-title'>For Her</p>
              </li>
              <li onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
                <p className='sub-listt-title'>For Him</p>
              </li>
              <li onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
                <p className='sub-listt-title'>View All</p>
              </li>
            </ul>




            <div className='headerDrawerTitle' onClick={toggleFineJewellaryGift}>
              <p>Fine Jewellery Gifts</p>
              <p style={{ marginRight: '20px' }}>{isOpenFineJewellaryGift ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</p>
            </div>
            <ul className={`my-HeaderDrawer ${isOpenFineJewellaryGift ? 'open' : ''}`} style={{ borderBottom: !isOpenFineJewellaryGift ? '0.1px solid lightgray' : ' ' }}>
              <li onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
                <p className='sub-listt-title'>Earrings</p>
              </li>
              <li onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
                <p className='sub-listt-title'>Necklaces</p>
              </li>
              <li onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
                <p className='sub-listt-title'>Stackble Bands</p>
              </li>
            </ul>

            <div className='headerDrawerTitle' style={{ borderBottom: '1px solid lightgray' }} onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
              <p>Enternity Bands</p>
            </div>

            <div className='headerDrawerTitle' style={{ borderBottom: '1px solid lightgray' }}>
              <p>Try At Home For Free</p>
            </div>

            <div className='headerDrawerTitle' onClick={toggleInr}>
              <p>INR</p>
              <p style={{ marginRight: '20px' }}>{isOpenInr ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</p>
            </div>
            <ul className={`my-HeaderDrawer ${isOpenInr ? 'open' : ''}`} style={{ borderBottom: !isOpenInr ? '0.1px solid lightgray' : ' ', overflow: 'scroll' }}>
              <div style={{ display: 'flex', width: '240px', flexWrap: 'wrap' }}>
                <div className="INRitems">
                  <p className="INRname">AUD</p>
                </div>
                <div className="INRitems">
                  <p className="INRname">AUD</p>
                </div>
                <div className="INRitems">
                  <p className="INRname">AUD</p>
                </div>
                <div className="INRitems">
                  <p className="INRname">AUD</p>
                </div>
                <div className="INRitems">
                  <p className="INRname">AUD</p>
                </div>
              </div>
            </ul>

            <div className='headerDrawerTitle' style={{ borderBottom: '1px solid lightgray' }}>
              <p>Blog</p>
            </div>

            <div className='headerDrawerTitle' style={{ borderBottom: '1px solid lightgray' }}>
              <p>Your Orders</p>
            </div>

            <div className='headerDrawerTitle' style={{ borderBottom: '1px solid lightgray' }} onClick={() => { navigation('/Contact'); closeDrawer(); }}>
              <p>Contact Us</p>
            </div>

            <div style={{ display: 'flex', marginTop: '50px' }}>
              <button style={{
                border: '1px solid #45d4d5',
                height: '50px',
                backgroundColor: 'white',
                fontSize: '22px',
                fontWeight: 500,
                marginInline: '20px'

              }} onClick={() => navigation('/LoginPage')}>SIGN IN</button>
              <button style={{
                border: '0px',
                height: '50px',
                backgroundColor: '#45d4d5',
                fontSize: '22px',
                fontWeight: 500
              }} onClick={() => navigation('/RegisterPage')}>SIGN UP</button>
            </div>

          </div>
        </SwipeableDrawer>
      </div>
    </>
  );
}
import React,{ useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'
import cartImg from '../../../assets/cart.png'
import logo from '../../../assets/logo.png'
import searchlogo from '../../../assets/search.svg'
import ring from '../../../assets/ring.png'
// import ring1 from '../../../assets/svg.svg'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { CUSTERM_SERVICES, ETERNITY_BANDS, FINE_JEWELLERY_GIFTS, FOR_HER, FOR_HIM, FREE_INTERNATIONAL_SHIPPING, LIFETIME_WARRANTY, LOGOUT, LOGOUT_MESSAGE, MONEY_BACK_GUARANTEE, YOUR_ACCOUNT } from "../../../Constants";






export default function Header() {
  const navigation = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showLogout, setShowLogout] = useState(false);

  let demoJSON = [
    { currency: "$ AUD", title: 'Australian Dollar' },
    { currency: "৳ BDT", title: 'Bangladeshi Taka' },
    { currency: "£ GBP", title: 'British Pound Sterling' },
    { currency: "C$ CAD", title: 'Canadian Dollar' },
    { currency: "€ EUR", title: 'Euro' },
    { currency: "FJ$ FJD", title: 'Fijian dollar' },
    { currency: "HK$ HKD", title: 'Hong Kong dollar' },
    { currency: "₹ INR", title: 'Indian Rupee' },
    { currency: "KSh KES", title: 'Kenyan shilling' },
    { currency: "RM MYR", title: 'Malaysian ringgit' },
    { currency: ".ރ MVR", title: 'Maldivian rufiyaa' },
    { currency: "Rs MUR", title: 'Mauritian rupee' },
    { currency: "₦ NGN", title: 'Naira' },
    { currency: "N$ NAD", title: 'Namibian dollar' },
    { currency: "रू NPR", title: 'Nepalese rupee' },
    { currency: "$ NZD", title: 'New Zealand Dollar' },
    { currency: "ر.ع OMR", title: 'Omani rial' },
    { currency: "Rs PKR", title: 'Pakistani rupee' },
    { currency: "₱ PHP", title: 'Philippine Peso' },
    { currency: "ر.ق QR", title: 'Qatari Riyal' },
    { currency: "SR SAR", title: 'Saudi Riyal' },
    { currency: "$ SGD", title: 'Singapore dollar' },
    { currency: "R ZAR", title: 'South African Rand' },
    { currency: "Rs LKR", title: 'Sri Lankan rupee' },
    { currency: "kr SEK", title: 'Swedish krona' },
    { currency: "Fr. CHF", title: 'Swiss Franc' },
    { currency: "฿ THB", title: 'Thai baht' },
    { currency: "AED AED", title: 'United Arab Emirates dirham' },
    { currency: "$ USD", title: 'United States Dollar' },
    { currency: "¥ JPY", title: 'Yen' },
    { currency: "ZK ZMK", title: 'Zambian Kwacha' },
  ]

  let hermenuJSON =[{
    menu1:{
      'title':'SHOP RINGS BY SHAPE',
      'menus':[
        {label:'Round cut Rings'},
        {label:'Princess Cut Rings'},
        {label:'Cushion Cut Rings'},
        {label:'Oval Cut Rings'},
        {label:'Heart Cut Rings'},
        {label:'pear Cut Rings'},
        {label:'Emerald Cut Rings'},
      ]
    },
    menu2:{
      'title':'DESIGN YOUR OWN ENGAGEMENT RING',
      'menus':[
        {label:'Submit Your Own'},
      ]
    },
    menu3:{
      'title':'ENGAGEMENT RINGS BY STYLES ',
      'menus':[
        {label:'Plain Solitaire'},
        {label:'Vintage'},
        {label:'Side-Stone'},
        {label:'Three Stone'},
        {label:'Cluster'},
        {label:'Halo'},
        {label:'Pave'},
      ]
    },
    menu4:{
      'title':'SHOPE BY METAL',
      'menus':[
        {label:'White Gold'},
        {label:'Rose Gold'},
       
      ]
    },
  }]

  console.log("hermenuJSON",hermenuJSON);

  const ForHerMenu = useCallback(
    (data,num) => (
      <>
        <font
          style={{ color: "black", fontSize: "14px" }}
          className="title-container"
        >
          {data[`menu${num}`].title}
        </font>
        <div className={`label-container ${num===3? 'menu-3':''}`}>
          {data[`menu${num}`].menus.map((menudata) => (
            <font className="label-font">{menudata.label}</font>
          ))}
        </div>
      </>
    ),
    []
  );

  let hermenuJSON =[{
    menu1:{
      'title':'SHOP RINGS BY SHAPE',
      'menus':[
        {label:'Round cut Rings'},
        {label:'Princess Cut Rings'},
        {label:'Cushion Cut Rings'},
        {label:'Oval Cut Rings'},
        {label:'Heart Cut Rings'},
        {label:'pear Cut Rings'},
        {label:'Emerald Cut Rings'},
      ]
    },
    menu2:{
      'title':'DESIGN YOUR OWN ENGAGEMENT RING',
      'menus':[
        {label:'Submit Your Own'},
      ]
    },
    menu3:{
      'title':'ENGAGEMENT RINGS BY STYLES ',
      'menus':[
        {label:'Plain Solitaire'},
        {label:'Vintage'},
        {label:'Side-Stone'},
        {label:'Three Stone'},
        {label:'Cluster'},
        {label:'Halo'},
        {label:'Pave'},
      ]
    },
    menu4:{
      'title':'SHOPE BY METAL',
      'menus':[
        {label:'White Gold'},
        {label:'Rose Gold'},
       
      ]
    },
  }]

  console.log("hermenuJSON",hermenuJSON);

  const ForHerMenu = useCallback(
    (data,num) => (
      <>
        <font
          style={{ color: "black", fontSize: "14px" }}
          className="title-container"
        >
          {data[`menu${num}`].title}
        </font>
        <div className={`label-container ${num===3? 'menu-3':''}`}>
          {data[`menu${num}`].menus.map((menudata) => (
            <font className="label-font">{menudata.label}</font>
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
  return (
    <>
      {/* top-header */}
      <header
        className="top_header"
        role="navigation"
        style={{ margin: 0, padding: 0 }}
      >
        <div
          className="navbar__login container-fluid"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div className="header-container" style={{ margin: 0 }}>
            <div className="header-container_level1">
              <span
                className="text-lef"
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <font size="2">{CUSTERM_SERVICES}</font>
              </span>
              <span
                className="text-lef"
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <font size="2"> {LIFETIME_WARRANTY}</font>
              </span>
              <span
                className="text-lef"
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <font size="2">{FREE_INTERNATIONAL_SHIPPING}</font>
              </span>
              <span
                className="text-lef"
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <font size="2">{MONEY_BACK_GUARANTEE}</font>
              </span>
            </div>
            <div className="currency-dropDown">
              <div className="currency-drop-btn">
                <span>INR</span>
                <span className="currency-dropdown-arrow">&#11206;</span>
                <div className="currency-option">
                  <table className="drop-table">
                    {demoJSON.map((data) => (
                      <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip id="tooltip">{data.title}</Tooltip>}
                      >
                        <tr>
                          <td>{data.currency}</td>
                        </tr>
                      </OverlayTrigger>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* middel header */}

      <header className="middel-header-container">
        <div className="middel-header">
          <div className="middel-header-level-1">
            <p style={{ marginTop: "10px" }}>
              18002120299 | Call or Text 24/7{" "}
            </p>
          </div>
          <div className="middel-header-level-2">
            <span onClick={() => navigation("/RegisterPage")}>register</span>
            <span onClick={() => navigation("/LoginPage")}>login</span>
            <span
              style={{ display: "flex", cursor: "pointer" }}
              onClick={() => navigation("/CartDetail")}
            >
              <img
                src={cartImg}
                alt="..."
                style={{ height: "20px", width: "20px" }}
              />
              <span style={{ fontSize: "18px" }}>{"(1)"}</span>
            </span>
          </div>
        </div>
      </header>
      {/* bottom header */}
      <nav className="nav-bottom-header">
        <div className="nav-container">
          <ul className="nav-ul">
            <li className="nav-li">
              <img
                src={logo}
                alt={"..."}
                style={{ width: "12vw", cursor: "pointer" }}
                onClick={() => navigation("/")}
              />
            </li>
            <li className="nav-li-for-her">
              <span className="for-her">FOR HER</span>
              <span className="for-her-dropdown">
                <div className="for-her-container">
                  <div className="forher-inner-container">
                    {hermenuJSON.map((data) => (
                      <div style={{display:'flex',flexDirection:'column',gap:'30px'}}>
                        <span className="drop-container">
                          {ForHerMenu(data, 1)}
                        </span>
                        <span className="drop-container">
                          {ForHerMenu(data, 2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="vertical-forher-line"></div>
                  <div className="forher-inner-container support" style={{paddingLeft:'26px'}}>
                    {hermenuJSON.map((data) => (
                      <>
                      <span className="drop-container">
                        {ForHerMenu(data, 3)}
                      </span>
                      <span className="drop-container" style={{marginTop:'20px'}}>
                        {ForHerMenu(data, 4)}
                      </span>
                      </>
                    ))}
                  </div>
                  <div className="vertical-forher-line" style={{}}></div>
                  <div className="forher-inner-container" >
                    <img src={ring} style={{width:'198px',height:'200px'}}/>
                  </div>
                </div>
              </span>
            </li>
            <li className="nav-li" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{FOR_HIM}</li>
            <li className="nav-li" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{ETERNITY_BANDS}</li>
            <li className="nav-li" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{FINE_JEWELLERY_GIFTS}</li>
            <li
              className="nav-li"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                className="search-input"
                placeholder="Search.."
              />
              <button className="search-button">
                <img src={searchlogo} alt={"..."} style={{ height: "25px" }} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {showLogout && <div className="alert alert-success">
        <button type="button" className="close" data-dismiss="alert" aria-hidden="true" onClick={() => setShowLogout(false)}>×</button>
        {LOGOUT_MESSAGE}
      </div>}
    </>
  );
}

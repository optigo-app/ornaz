import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'
import cartImg from '../../../assets/cart.png'
import logo from '../../../assets/logo.png'
import searchlogo from '../../../assets/search.svg'
// import ring1 from '../../../assets/svg.svg'
import {Tooltip,OverlayTrigger} from 'react-bootstrap'

export default function Header() {
  const navigation = useNavigate();
    
  let demoJSON = [
    {currency:"$ AUD",title:'Australian Dollar'},
    {currency:"৳ BDT",title:'Bangladeshi Taka'},
    {currency:"£ GBP",title:'British Pound Sterling'},
    {currency:"C$ CAD",title:'Canadian Dollar'},
    {currency:"€ EUR",title:'Euro'},
    {currency:"FJ$ FJD",title:'Fijian dollar'},
    {currency:"HK$ HKD",title:'Hong Kong dollar'},
    {currency:"₹ INR",title:'Indian Rupee'},
    {currency:"KSh KES",title:'Kenyan shilling'},
    {currency:"RM MYR",title:'Malaysian ringgit'},
    {currency:".ރ MVR",title:'Maldivian rufiyaa'},
    {currency:"Rs MUR",title:'Mauritian rupee'},
    {currency:"₦ NGN",title:'Naira'},
    {currency:"N$ NAD",title:'Namibian dollar'},
    {currency:"रू NPR",title:'Nepalese rupee'},
    {currency:"$ NZD",title:'New Zealand Dollar'},
    {currency:"ر.ع OMR",title:'Omani rial'},
    {currency:"Rs PKR",title:'Pakistani rupee'},
    {currency:"₱ PHP",title:'Philippine Peso'},
    {currency:"ر.ق QR",title:'Qatari Riyal'},
    {currency:"SR SAR",title:'Saudi Riyal'},
    {currency:"$ SGD",title:'Singapore dollar'},
    {currency:"R ZAR",title:'South African Rand'},
    {currency:"Rs LKR",title:'Sri Lankan rupee'},
    {currency:"kr SEK",title:'Swedish krona'},
    {currency:"Fr. CHF",title:'Swiss Franc'},
    {currency:"฿ THB",title:'Thai baht'},
    {currency:"AED AED",title:'United Arab Emirates dirham'},
    {currency:"$ USD",title:'United States Dollar'},
    {currency:"¥ JPY",title:'Yen'},
    {currency:"ZK ZMK",title:'Zambian Kwacha'},
  ]

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
                  maxWidth: "15vw",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <font size="2">24/7 CUSTOMER SERVICE</font>
              </span>
              <span
                className="text-lef"
                style={{
                  maxWidth: "15vw",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <font size="2"> LIFETIME WARRANTY</font>
              </span>
              <span
                className="text-lef"
                style={{
                  maxWidth: "15vw",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <font size="2">FREE INTERNATIONAL SHIPPING*</font>
              </span>
              <span
                className="text-lef"
                style={{
                  maxWidth: "15vw",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <font size="2">100% MONEY BACK GUARANTEE</font>
              </span>
            </div>
            <div className="currency-dropDown">
              <div className="currency-drop-btn">
                <span>INR</span>
                <span className="currency-dropdown-arrow">&#11206;</span>
                <div className="currency-option">
                  <table className="drop-table">
                    {demoJSON.map((data) => (
                      <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">{data.title}</Tooltip>}>
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

      <header>
        <div className="middel-header">
          <div className="middel-header-level-1">
            <p style={{ marginTop: "10px" }}>
              18002120299 | Call or Text 24/7{" "}
            </p>
          </div>
          <div className="middel-header-level-2">
            <span>register</span>
            <span>login</span>
            <span style={{ display: "flex" }}>
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
              {" "}
              <img src={logo} alt={"..."} style={{ width: "12vw" }} />
            </li>
            <li className="nav-li-for-her">
              <span className="for-her">FOR HER</span>
              <span className="for-her-dropdown"></span>
            </li>
            <li className="nav-li"> FOR HIM</li>
            <li className="nav-li"> Eternity Bands</li>
            <li className="nav-li">FINE JEWELLERY GIFTS</li>
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
    </>
  );
}

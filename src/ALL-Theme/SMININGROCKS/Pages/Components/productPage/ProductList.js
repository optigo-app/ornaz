import React, { useState } from "react";
import Header from "../home/Header/Header";
import Footer from "../home/Footer/Footer";
import SmilingRock from "../home/smiling_Rock/SmilingRock";
import "./product.css";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const ProductList = () => {

  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [drawerShowOverlay, setDrawerShowOverlay] = useState(false);
  const navigation = useNavigate();

  const toggleDeatilList = () => {
    setIsOpenDetail(!isOpenDetail);
  };


  const toggleDrawerOverlay = () => {
    setDrawerShowOverlay(!drawerShowOverlay);
  };

  return (
    <div>
      {drawerShowOverlay && (
        <>
          <div className="mobileSmlingProductFilterOverly">
            <div style={{
              display: 'flex',
              margin: '20px',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IoClose style={{ height: '30px', width: '30px', color: 'white', cursor: 'pointer' }} onClick={toggleDrawerOverlay} />
              </div>
              <p style={{
                fontSize: '14px',
                color: 'white',
                fontWeight: 500
              }}>Clear Filter</p>
            </div>
            <div>
              {/* content....... */}
            </div>
            <div style={{
              backgroundColor: '#7d7f85',
              position: 'fixed',
              bottom: '0px',
              width: '100%',

            }}>
              <p style={{ color: 'white', textAlign: 'center', paddingTop: '15px' }}>APPLY FILTERS</p>
            </div>
          </div>
        </>
      )
      }
      <div
        style={{
          backgroundColor: "#c0bbb1",
          height: "100%",
          width: "100%",
          paddingBottom: "100px",
        }}
      >
        {!drawerShowOverlay && <Header />}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            gap: "12px",
            padding: "40px 20px 70px",
          }}
        >
          <h1 style={{ fontFamily: "FreightDisp Pro Medium", color: "white" }}>
            Rings
          </h1>

          <p
            style={{
              width: "346px",
              fontSize: "14px",
              color: "#fff",
              fontWeight: "500",
            }}
          >
            From uncompromising minimalism to ultra-femme, these are lab grown
            diamond rings are to revel in.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="smilingProductMain">
            <div className="smilingProductSubMain" style={{ width: "100%", display: "flex" }}>

              <div
                style={{
                  width: "20%",
                  margin: "0px 100px 0px 0px",
                  padding: "100px 0px 40px 50px",
                }}
                className="smilingWebProductListSideBar"
              >
                <ul>
                  <li className="finejwelery">fine Jewelry</li>
                  <li className="finejli">Rings</li>
                  <li className="finejli">Necklaces</li>
                  <li className="finejli">Earrings</li>
                  <li className="finejli">Bracelets</li>
                  <li className="finejli">All</li>
                </ul>
                <hr
                  style={{
                    width: "239px",
                    marginTop: "30px",
                    marginLeft: "30px",
                  }}
                />
              </div>
              <div className="smilingMobileProductListSideBar" >
                <div onClick={toggleDeatilList} style={{ padding: '15px' }}>
                  <p style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#7d7f85',
                    fontSize: '13px',
                    fontWeight: 500
                  }}>CATEGORY<span>{isOpenDetail ? '-' : '+'}</span></p>

                  <ul className={`smilingProductCategory ${isOpenDetail ? 'open' : ''}`}>
                    <li className="finejwelery">fine Jewelry</li>
                    <li className="finejli">Rings</li>
                    <li className="finejli">Necklaces</li>
                    <li className="finejli">Earrings</li>
                    <li className="finejli">Bracelets</li>
                    <li className="finejli">All</li>
                  </ul>
                </div>
                <hr style={{ marginTop: "-25px" }} />
                <div style={{ display: 'flex', marginInline: '15px' }}>
                  <div style={{ width: '49%' }} onClick={toggleDrawerOverlay}>
                    <p style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      color: '#7d7f85',
                      fontSize: '13px',
                      fontWeight: 500,
                      margin: '0px'
                    }}>FILTER<span>{isOpenDetail ? '-' : '+'}</span></p>
                  </div>
                  <hr style={{ border: 'none', marginBottom: '0px', marginInline: '5px', borderLeft: '1px solid black', height: '50px', marginTop: '-16px' }} />
                  <div style={{ width: '49%', display: 'flex', marginTop: '-15px', alignItems: 'center' }}>
                    <select style={{
                      width: '100%',
                      border: 'none',
                      outline: 'none',
                      fontSize: '13px '
                    }}>
                      <option>RECOMMENDED</option>
                      <option>PRICE HIGH TO LOW</option>
                      <option>PRICE LOW TO HIGH</option>
                    </select>
                    <p style={{ margin: '0px' }}>+</p>
                  </div>
                </div>

              </div>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "40px 50px 0px 0px",
                }}
                className="smilingProductImageMain"
              >
                <div
                  style={{
                    width: "100%",
                    border: "1px solid #e1e1e1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: 'wrap'
                  }}

                >
                  <div
                    style={{
                      width: "33.33%",
                      border: "1px solid #e1e1e1",
                      textAlign: "center",
                      color: '#7d7f85'
                    }}
                    className="smilingProductImageBox"

                  >
                    <div>
                      <div className="prod_img">
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: "13px", textTransform: "uppercase", fontWeight: '500' }}>
                        Drizzle 0.51ct Lab Grown Diamond Ring
                        <br />
                        R-00363WHT
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px' }}>White Gold / $1125.00</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#c8c8c8",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#ffcfbc",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#e0be77",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "33.33%",
                      border: "1px solid #e1e1e1",
                      textAlign: "center",
                      color: '#7d7f85'
                    }}
                    className="smilingProductImageBox"

                  >
                    <div className="prod_img"></div>
                    <div>
                      <p style={{ fontSize: "13px", textTransform: "uppercase", fontWeight: '500' }}>
                        Drizzle 0.51ct Lab Grown Diamond Ring
                        <br />
                        R-00363WHT
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px' }}>White Gold / $1125.00</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#c8c8c8",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#ffcfbc",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#e0be77",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "33.33%",
                      border: "1px solid #e1e1e1",
                      textAlign: "center",
                      color: '#7d7f85'
                    }}
                    className="smilingProductImageBox"
                  >
                    <div className="prod_img"></div>
                    <div>
                      <p style={{ fontSize: "13px", textTransform: "uppercase", fontWeight: '500' }}>
                        Drizzle 0.51ct Lab Grown Diamond Ring
                        <br />
                        R-00363WHT
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px' }}>White Gold / $1125.00</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#c8c8c8",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#ffcfbc",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "9px",
                          height: "9px",
                          backgroundColor: "#e0be77",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <SmilingRock />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

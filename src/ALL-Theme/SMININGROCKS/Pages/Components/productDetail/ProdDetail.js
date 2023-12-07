import React from 'react'
import './proddetail.css'
import Header from '../home/Header/Header'
import Footer from '../home/Footer/Footer'
import SmilingRock from '../home/smiling_Rock/SmilingRock'

const ProdDetail = () => {
  return (
    <div
      style={{
        backgroundColor: "#c0bbb1",
        height: "100%",
        width: "100%",
        paddingBottom: "100px",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1674px",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <div
            style={{
              padding: "0px 85px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

              <img
                src={
                  "https://cdn.accentuate.io/3245609615460/4121939443812/99-v1581576944425.jpg?2048x1950"
                }
                alt={""}
                style={{ objectFit: "cover", width: "63%",marginTop:'12px',marginBottom:'-100px'}}
              />
        
            <div
              style={{
                zIndex: 1,
                position: "relative",
                marginLeft: "-140px",
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                
              }}
            >
              <p style={{fontFamily: 'FreightDisp Pro Medium', color: '#7d7f85',fontSize:'30px',marginLeft:'-87px'}}>Complete The Look</p>
                
              <div style={{padding:'5px',border:'1px solid #e1e1e1',backgroundColor:'#fff',}}>
                <div style={{display:'flex',gap:'60px'}}>
                <div style={{marginLeft:'12px'}}>
                    <img src={'https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-white-gold-earrings-sre00362wht_medium.jpg?v=1590473229'}
                    style={{width:'110px',height:'110px',objectFit:'cover'}}
                    />
                </div>
                <div style={{display:'flex',alignItems:'center',borderBottom:'1px solid #e1e1e1',gap:'158px',marginRight:'30px'}}>
                    <div style={{fontSize:'12.5px',color:'#7d7f85',textTransform:'uppercase'}}>
                        <p>
                        Drizzle 0.78ct Lab Grown Diamond Earrings 
                        <br/>
                        E-00362WHT
                        <br/>
                        $2,075.00
                        </p>
                    </div>
                    <div >
                        <span style={{fontSize:'30px',color:'#7d7f85'}}>&#8250;</span>
                    </div>
                </div>
                </div>
                <div style={{display:'flex',gap:'60px'}}>
                <div style={{marginLeft:'12px'}}>
                    <img src={'https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-white-gold-necklace-srnl00367wht_medium.jpg?v=1613626874'}
                    style={{width:'110px',height:'110px',objectFit:'cover'}}
                    />
                </div>
                <div style={{display:'flex',alignItems:'center',borderBottom:'1px solid #e1e1e1',gap:'158px',marginRight:'30px'}}>
                    <div style={{fontSize:'12.5px',color:'#7d7f85',textTransform:'uppercase'}}>
                        <p>
                        Drizzle 0.78ct Lab Grown Diamond Earrings 
                        <br/>
                        E-00362WHT
                        <br/>
                        $2,075.00
                        </p>
                    </div>
                    <div >
                        <span style={{fontSize:'30px',color:'#7d7f85'}}>&#8250;</span>
                    </div>
                </div>
                </div>
                <div style={{display:'flex',gap:'60px'}}>
                <div style={{marginLeft:'12px'}}>
                    <img src={'https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-white-gold-bracelet-srbl00236wht_medium.jpg?v=1590473675'}
                    style={{width:'110px',height:'110px',objectFit:'cover'}}
                    />
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'158px',marginRight:'30px'}}>
                    <div style={{fontSize:'12.5px',color:'#7d7f85',textTransform:'uppercase'}}>
                        <p>
                        Drizzle 0.78ct Lab Grown Diamond Earrings 
                        <br/>
                        E-00362WHT
                        <br/>
                        $2,075.00
                        </p>
                    </div>
                    <div >
                        <span style={{fontSize:'30px',color:'#7d7f85'}}>&#8250;</span>
                    </div>
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
  );
}

export default ProdDetail
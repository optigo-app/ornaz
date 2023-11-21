import React from 'react'
import bg2 from '../../../../../assets/blog-banner/blog-slider-small-2.jpeg'

export default function ArticalCards() {
  return (
    <div style={{height:'484px',marginBottom:'60px'}}>
      <img
        src={bg2}
        style={{
          width: "374px",
          height: "380px",
          objectFit: "cover",
          zIndex: -1,
          position:'relative'
        }}
      />
      <div
        style={{
          width: "332.29px",
          height: "189px",
          backgroundColor: "#ffffff",
          boxShadow: "0 0 60px rgba(0,0,0,.11)",
          margin:'-85px 20px 0',
          zIndex:1,
          position:'absolute',
          padding: '35px 20px',
          textAlign:'center',
        }}
      >
        <p style={{fontSize:'12px', fontFamily:'Montserrat,sans-serif',letterSpacing:'2px',color:'#bd9b84',textTransform:'uppercase'}}>Engagement Ring</p>
        <p style={{fontSize:'20px',fontFamily:'Playfair Display, serif'}}>Upgrade your Ring Game This Diwali Sale!</p>
        <p style={{ fontSize:'11px', fontFamily:'Montserrat,sans-serif',letterSpacing:'2px',color:'#999999',textTransform:'uppercase'}}>NOVEMBER 3, 2023</p>
      </div>
    </div>
  );
}

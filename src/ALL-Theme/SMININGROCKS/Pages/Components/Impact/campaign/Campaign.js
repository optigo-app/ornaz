import React from "react";
import ImpCards from "../impact-cards/ImpCards";
import SustainAbility from "../../sustainAbility/SustainAbility";
import jointlogo from '../../../assets/Impact/campaign/jointlogo.avif'
import united from '../../../assets/Impact/campaign/united.jpg'

const Campaign = () => {
  return (
    <div style={{ backgroundColor: "#fff", width: "100%",height:'auto' }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#7d7f85",
          marginTop:'80px'
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontFamily: "TT Commons, sans-serif",
            letterSpacing: "1px",
          }}
        >
          A REASON TO SMILE
        </p>
        <p
          style={{
            width: "620px",
            textAlign: "center",
            fontSize: "26px",
            fontFamily: "FreightDisp Pro Medium",
            lineHeight: "28px",
          }}
        >
          For every purchase you make, Smiling Rocks Foundation will donate 3%
          to your choice of the following charity categories. Smiling Rocks
          Foundation is an organization qualified by the Internal Revenue
          Service as a tax exempt charitable foundation under 501(c)(3) of the
          Internal Revenue Code.
        </p>
      </div>

      <ImpCards/>
      <div style={{padding: "0px 85px 0px",marginTop:'55px'}}  >
      <SustainAbility/>
      </div>
      <div style={{padding: "0px 85px 0px",marginTop:'45px'}}>
          <img src={united} alt={''}/>
      </div>
      <div style={{padding: "0px 85px 0px",marginTop:'45px'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img src={jointlogo} alt={''}/>
        </div>
        <div style={{textAlign:'center',display:'flex',flexDirection:'row',justifyContent:'center',paddingBottom:'30px'}}>
          <div style={{width:'568px',marginTop:'25px',color:'#7d7f85'}}>
          <p style={{fontFamily:'FreightDisp Pro Medium',fontSize:'26px'}}>Keeping The Promise</p>
          <p style={{fontFamily:'TT Commons, sans-serif',fontSize:'13px'}}>
            Together, we will create an unstoppable force in achieving the <space/>
             <b>Sustainable Development Goals</b>. With just nine years left the 
            time has come to deliver on our 2030 promise.
          </p>
          <p style={{fontFamily:'TT Commons, sans-serif',fontSize:'13px'}}>
            Together, we can deliver the extraordinary and we must keep 
            our promise for the Global Goals and create the world we 
            want to see today and for our future.
          </p>
          <p style={{fontFamily:'TT Commons, sans-serif',fontSize:'13px'}}> <u style={{cursor:'pointer'}}>Donate Now</u> Directly to UNSDG fund!</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Campaign;

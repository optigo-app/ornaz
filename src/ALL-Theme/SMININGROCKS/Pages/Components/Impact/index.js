import React from "react";
import "./index.css";
import i1 from "../../assets/Impact/banner.webp";
import  Campaign  from "./campaign/Campaign";

const index = () => {
  return (
    <>
      {/* <div className='impact-container'>
         <div className='impact-container2'>
         <div className='impact-img-container'>
           <img src={i1} alt={'img'} style={{zIndex:999}}/>
          </div>
        </div>
     </div> */}

      <div>
        <div className="back-img-container">
          <img
            src={
              "https://cdn.accentuate.io/19336265828/3641674891364/Stocksy_txp824d1dddS9J200_Medium_2036581.jpg"
            }
            alt="..."
            className="impact-container"
          />
          <div className="impact-container2"></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
            flexDirection: "column",
            maxWidth:'1680px',
            marginRight:'auto',
            marginLeft:'auto'
          }}
          className="main-front-container"
        >
          <img src={i1} alt="..." className="impact-banner" />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "white",
              padding: "110px 0 105px",
            }}
            className="quotes-div1"
          >
            <p
              style={{
                fontSize: "42px",
                fontFamily: "FreightDisp Pro Medium",
                textTransform: "capitalize",
                paddingBottom: "15px",
              }}
              className="quotes-div1 title"
            >
              Together We Can Make An Impact
            </p>

            <p
              style={{
                width: "619px",
                textAlign: "center",
                fontSize: "22px",
                fontFamily: "FreightDisp Pro Medium",
              }}
              className="quotes-div1 descript"
            >
              Our purpose is to building a chain of smile through innovative lab
              grown diamonds, sustainable luxury and giving back to the
              community. We aim to spread smiles around the world with your
              contribution. Here's how we're working to make the world a better
              place.
            </p>
          </div>
  
          <Campaign/>
       
        </div>
      </div>
    </>
  );
};

export default index;

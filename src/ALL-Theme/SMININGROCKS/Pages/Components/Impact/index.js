import React from "react";
import "./index.css";
import i1 from "../../assets/Impact/campaign/banner.webp";
import Campaign from "./campaign/Campaign";
import Header from "../home/Header/Header";
import Explore from "./Explore/Explore";

const index = () => {
  return (
    <>
      <Header />
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
            // marginTop: "-55px",
            flexDirection: "column",
            maxWidth: "1680px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          className="main-front-container"
        >
          <img src={i1} alt="..."  />

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

          <Campaign />

          <div
            style={{
              textAlign: "center",
              width: "620px",
              height: "441px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: "26px",
                fontFamily: "FreightDisp Pro Medium",
                color: "white",
                lineHeight: "25px",
              }}
              className="quotes-div2 descript"
            >
              “Creating Smiling Rocks has been our dream and life mission as our
              way of spreading smiles around the world and to help make our
              world a better place.”
            </p>
            <p style={{ color: "white" }}>
              <small>
                <i>-Smiling Rocks Founders</i>
              </small>
            </p>
          </div>
          <Explore/>
          
        </div>
      </div>
    </>
  );
};

export default index;

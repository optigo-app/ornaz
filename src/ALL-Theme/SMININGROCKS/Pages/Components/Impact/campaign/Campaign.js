import React from "react";
import ImpCards from "../impact-cards/ImpCards";

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
      
    </div>
  );
};

export default Campaign;

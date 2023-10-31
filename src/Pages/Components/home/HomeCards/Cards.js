import React, { useRef } from "react";
import "./Cards.css";
import { useDraggable } from "react-use-draggable-scroll";

export const Cards = ({ sallerCardImg, cardTitle, type }) => {
  console.log("sallerCardImg", sallerCardImg);

  const ref = useRef();
  const { events } = useDraggable(ref);

  const CardData = () => {
    if (sallerCardImg) {
      return sallerCardImg;
    } else {
      return [];
    }
  };

  const imgClassName = () => {
    if (type === 'celebs') {
      return 'celebsImg';
    }
    else if (type === 'category') {
      return '';
    }
    else if(type === 'banner'){
      return '';
    }
    else {
      return "cards-img"
    }
  }

  return (
    <div
      style={{ height: "auto", marginTop: type==='banner'?null:(type === 'celebs' ? '65px' : '80px') }}
    >
      <div className="card-outer-container" style={{paddingLeft:type==="banner"?'0%':null}}>
        <div className="card-header">
          <span className="card-title-text">{cardTitle}</span>
          {(type !== 'celebs'&& type!=='banner') && <span className="card-shopall" style={{ marginRight: type === 'category' ? '10px' : '' }}>Shop All</span>}
        </div>
        <div className="cards-img-text-container" style={{width:(type==='banner'&& '1903px'),marginTop:(type==='banner' && '0px')}} id='scrollable' {...events} ref={ref}>
          {CardData()?.map((data) => (
            <div className={type === 'category' ? 'card-inner-container-cate' :(type==='banner'?'banner-flex':"card-inner-container")} style={{width:type==='banner' && '2348px'}}>
              <div style={{ height: type === 'celebs' ? '557.95px' : (type === 'category' ? '380.61px' :(type==='banner'? 'auto':'371.61px')), width: type === 'celebs' ? '371.97px' : (type === 'category' ? '380.61px' : (type==='banner'? '1902.61px':'371.61px')), overflow: "hidden",display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img
                  src={data.prodImg}
                  alt="..."
                  className={imgClassName()}
                  style={{ height: type === 'celebs' ? '557.95px' : (type === 'category' ? '380.61px' :(type==='banner'? '':'371.61px')), width: type === 'celebs' ? '371.97px' : (type === 'category' ? '380.61px' : (type==='banner'? '':'371.61px')), position: 'relative', zIndex:type==='banner'?-1:1,objectFit:'cover' }}
                />
              </div>

              <div className="card-footer" style={{ marginTop: '10px', fontWeight: '500', fontSize: '14.3px', position: 'relative', zIndex: 1 }}>
                <font>{data.prodtitle}</font>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

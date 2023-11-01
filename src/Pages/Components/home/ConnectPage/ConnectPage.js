import React from 'react'
import { useNavigate } from 'react-router-dom';
import './connect.css';

export default function ConnectPage() {

  const navigation = useNavigate();


  return (
    <div onClick={() => navigation("/jewelleryPage")}>
      <div
        class="slick-main-container"
      >
        <img
          class="lazy ls-is-cached lazyloaded"
          src="https://d3rodw1h7g0i9b.cloudfront.net/images/desktop_home/connect_now_desktop_2.webp"
          data-src="https://d3rodw1h7g0i9b.cloudfront.net/images/desktop_home/connect_now_desktop_2.webp"
          alt="Solitaires and perfect engagement rings"
          style={{ height: "585.17px", width: "1560.47px", marginTop: "90px" }}
        />
      </div>
    </div>
  );
}

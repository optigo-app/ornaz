import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ConnectPage() {

  const navigation = useNavigate();


  return (
    <div style={{ border: '1px solid black' }} onClick={() => navigation('/jewelleryPage')}>
      <div class="slick-main-container" style={{ padding: "0 9%" }}>
        <img class="lazy ls-is-cached lazyloaded" src="https://d3rodw1h7g0i9b.cloudfront.net/images/desktop_home/connect_now_desktop_2.webp" data-src="https://d3rodw1h7g0i9b.cloudfront.net/images/desktop_home/connect_now_desktop_2.webp" alt="Solitaires and perfect engagement rings" height="990" width="2480" style={{ height: 'auto', maxWidth: "100%" }} />
      </div>
    </div>
  )
}

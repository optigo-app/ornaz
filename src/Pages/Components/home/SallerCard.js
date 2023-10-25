import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SallerCard() {

  const navigation = useNavigate();

  return (
    <div style={{ height: '400px', border: '1px solid black' }} onClick={() => navigation('/productDetails')}>

    
      {/* <div class="slick-main-container slick-padding">

        <div class="slick-title-container" style={{ paddingRight: '10px'}}>
          <h1 class="slick-title">Shop Our Best Sellers</h1>
          <a class="avernir-small no-decoration shop-btn-small" href="/jewellery/" style={{ color: '#45d4d5 !important'}}>
            Shop All
          </a>
        </div>

        <div class="glider-second inner-slick-container glider draggable" style={{ height: 'auto'}}>
          <div style={{ display : 'flex'}}>
            <div class="slider-margin-div glider-slide active left-2 visible" style={{ marginLeft: '15px', height: '10px', width: '388px' }} data-gslide="0">
              <a href="/rings/ara1183-women-brenda-solitare-engagement-rings/" class="zoomable custom-link">
                <img class="zoomable-img lazy lazyloaded" src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/best_sellers/ara1183.webp" data-src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/best_sellers/ara1183.webp" alt="Cushion cut Diamond engagement ring" style = {{ height : '300px' , width : '300px' }}/>
              </a>
              <h2 class="slider-margin-title slick-caption">Brenda</h2>
            </div>
            <div class="slider-margin-div glider-slide visible left-1" data-gslide="1" style={{ marginLeft: '15px', height: 'auto', width: '388px' }} >
              <a href="/rings/ara1378-women-beryl-solitare-engagement-rings/" class="zoomable custom-link">
                <img class="zoomable-img lazy lazyloaded" src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/best_sellers/ara1378.webp" data-src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/best_sellers/ara1378.webp" alt="Single halo oval cut diamond engagement ring" style = {{ height : '300px' , width : '300px' }}/>
              </a>
              <h2 class="slider-margin-title slick-caption">Beryl</h2>
            </div><div class="slider-margin-div glider-slide visible center" data-gslide="2" style={{ marginLeft: '15px', height: 'auto', width: '388px' }}>
              <a href="/rings/ara1450-women-selvin-solitare-engagement-rings/" class="zoomable custom-link">
                <img class="zoomable-img lazy lazyloaded" src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/best_sellers/ara1450.webp" data-src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/best_sellers/ara1450.webp" alt="Princess cut diamond engagement ring with studded band" style = {{ height : '300px' , width : '300px' }}/>
              </a>
              <h2 class="slider-margin-title slick-caption">Selvin</h2>
            </div><div class="slider-margin-div glider-slide center visible" data-gslide="3" style={{ marginLeft: '15px', height: 'auto', width: '388px' }}>
              <a href="/rings/ara3520-women-mira-solitare-casual-rings/" class="zoomable custom-link">
                <img class="zoomable-img lazy lazyloaded" src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/best_sellers/ara3520.webp" data-src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/best_sellers/ara3520.webp" alt="Princess cut diamond engagement ring with studded band" style = {{ height : '300px' , width : '300px' }}/>
              </a>
              <h2 class="slider-margin-title slick-caption">Mira</h2>
            </div><div class="slider-margin-div glider-slide right-1" data-gslide="4" style={{ marginLeft: '15px', height: 'auto', width: '388px' }}>
              <a href="/rings/sra1194-women-serena-solitare-engagement-rings/" class="zoomable custom-link">
                <img class="zoomable-img lazy lazyloaded" src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/best_sellers/sra1194.webp" data-src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/best_sellers/sra1194.webp" alt="Round cut diamond engagement ring" style = {{ height : '300px' , width : '300px' }}/>
              </a>
              <h2 class="slider-margin-title slick-caption">Serena</h2>
            </div>
            <div class="slider-margin-div glider-slide right-2" data-gslide="5" style={{ marginLeft: '15px', height: '10px', width: '388px' }}>
              <a href="/rings/sra1293-women-gloriole-solitare-engagement-rings/" class="zoomable custom-link">
                <img class="zoomable-img lazy lazyloaded" src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/best_sellers/sra1293.webp" data-src="https://d3rodw1h7g0i9b.cloudfront.net/assets/frontend/temp_home/best_sellers/sra1293.webp" alt="Three stone radiant cut diamond engagement ring with pear set diamonds" style = {{ height : '300px' , width : '400px' }}/>
              </a>
              <h2 class="slider-margin-title slick-caption">Gloriole</h2>
            </div>
            </div>
            </div>

        <div class="scrollbar-hide"></div>
        <div class="scrollbar-hide" style={{ right: 0 }}></div>
      </div>
 */}




    </div>
  )
}

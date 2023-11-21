import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg1 from '../../../../../assets/blog-banner/blog-slider-big-1.jpg'
import bg2 from '../../../../../assets/blog-banner/blog-slider-big-2.jpeg'
import bg3 from '../../../../../assets/blog-banner/blog-slider-big-3.jpg'
import './blog.css'
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import ArticalCards from '../articalCards/ArticalCards';
import { Divider } from '@mui/material'
import BlogSearch from '../BlogSearch/BlogSearch';
import { useNavigate } from 'react-router-dom';


export default function Blog() {

  const [divFlag, setDivFlag] = useState(false);
  const navigation = useNavigate();


  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{ marginTop: "60px", height: "600px", width: "1140px", cursor: 'pointer' }}
        id="carousels-div"
        onMouseEnter={() => setDivFlag(true)}
        onMouseLeave={() => setDivFlag(false)}
        onClick={() => navigation('/ArticleDetailPage')}
      >
        <Carousel
          fade
          indicators={false}
          prevIcon={
            divFlag ? (
              <TfiArrowCircleLeft
                style={{ color: "#ffffff", fontSize: "30px" }}
              />
            ) : (
              ""
            )
          }
          nextIcon={
            divFlag ? (
              <TfiArrowCircleRight
                style={{ color: "#ffffff", fontSize: "30px" }}
              />
            ) : (
              ""
            )
          }
        >
          <Carousel.Item>
            <img src={bg1} alt="First slide" className="slick-img" />
            <Carousel.Caption className="slick-caption">
              <div className="slick-cap-div">
                <div style={{ width: "800px" }}>
                  <p className="post-cats">
                    DIAMOND EDUCATION / ENGAGEMENT RINGS / GUIDE
                  </p>
                  <p className="entry-title">
                    How To Protect Your Engagement Ring During Winters
                  </p>
                  <p className="date-wrap">OCTOBER 13, 2023</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={bg2} alt="First slide" className="slick-img" />
            <Carousel.Caption className="slick-caption">
              <div className="slick-cap-div" style={{ marginTop: "200px" }}>
                <div style={{ width: "800px" }}>
                  <p className="post-cats">ENGAGEMENT RINGS</p>
                  <p className="entry-title">
                    Upgrade Your Ring Game This Diwali Sale!
                  </p>
                  <p className="date-wrap">NOVEMBER 3, 2023</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={bg3} alt="First slide" className="slick-img" />
            <Carousel.Caption className="slick-caption">
              <div className="slick-cap-div">
                <div style={{ width: "800px" }}>
                  <p className="post-cats">Engagement Rings</p>
                  <p className="entry-title">
                    The Perfect Engagement Ring For Your Zodiac Sign
                  </p>
                  <p className="date-wrap">October 9, 2023</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ width: '1140px' }}>
        <div style={{ display: 'flex', width: '100%', gap: '43px' }}>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "31px 0px",
                gap: '40px'

              }}
            >
              <Divider orientation="horizontal" style={{ background: "gray", width: '250px' }} />
              <p style={{ fontSize: '20px', fontFamily: 'Montserrat,sans-serif', fontWeight: 500, marginTop: '12px', letterSpacing: '2px' }}>LATEST ARTICLES</p>
              <Divider orientation="horizontal" style={{ background: "gray", width: '250px' }} />
            </div>
            <div style={{ width: '800px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
            </div>
          </div>
          <div >
            <BlogSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

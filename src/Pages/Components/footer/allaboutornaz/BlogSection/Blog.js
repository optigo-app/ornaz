import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg1 from '../../../../assets/blog-banner/blog-slider-big-1.jpg'
import bg2 from '../../../../assets/blog-banner/blog-slider-big-2.jpeg'
import bg3 from '../../../../assets/blog-banner/blog-slider-big-3.jpg'
import { useNavigate } from 'react-router-dom';

export default function Blog() {

  const navigation = useNavigate();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ marginTop: '60px', height: '600px', width: '1140px', cursor: 'pointer' }} onClick={() => navigation('/ArticleDetailPage')}>
        <Carousel fade indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bg1}
              alt="First slide"
              style={{ height: '600px', width: '1140px', objectFit: 'cover' }}
            />
            <Carousel.Caption style={{ top: '240px' }}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bg2}
              alt="Second slide"
              style={{ height: '600px', width: '1140px', objectFit: 'cover' }}
            />
            <Carousel.Caption style={{ top: '240px' }}>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bg3}
              alt="Third slide"
              style={{ height: '600px', width: '1140px', objectFit: 'cover' }}
            />
            <Carousel.Caption style={{ top: '240px' }}>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

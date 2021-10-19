import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstbanner from '../../../Images/Banner/banner1.jpg'
import secondbanner from '../../../Images/Banner/banner2.jpg'
import thirdbanner from '../../../Images/Banner/banner3 (1).jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img style={{width:'100%'}}
      className="d-block w-100"
      src={firstbanner}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secondbanner}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thirdbanner}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;
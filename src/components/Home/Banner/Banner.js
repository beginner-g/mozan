import React, { Component } from 'react';
import './banner.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import img from '../../../images/img1_03.png'
import img2 from '../../../images/img2_03.png'
import img3 from '../../../images/img3_03.png'
class Banner extends Component{
  render() {
    const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay:true,
     autoplaySpeed:1000
   }
   const slides =[
     <div className="dish-card-wrap" key='1'>
      <div className="dish-card">
        <img src={img} alt=""/>
      </div>
    </div>,
     <div className="dish-card-wrap" key='2'>
      <div className="dish-card">
        <img src={img2} alt=""/>
      </div>
    </div>,
     <div className="dish-card-wrap" key='3'>
      <div className="dish-card">
        <img src={img3} alt=""/>
      </div>
    </div>,

   ]
   const slider=(
     <Slider {...settings}>
        {slides}
     </Slider>
   )
    return (
      <div className="banner">
        {slider}
      </div>
    );
  }
}

export default Banner;

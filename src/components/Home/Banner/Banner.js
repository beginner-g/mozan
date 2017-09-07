import React, { Component } from 'react';
import './banner.css';
class banner extends Component{
  render() {
    return (
      <div className="banner">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="images/img1_03.png" alt="" /></div>
              <div class="swiper-slide"><img src="images/img2_03.png" alt="" /></div>
              <div class="swiper-slide"><img src="images/img3_03.png" alt="" /></div>
              <div class="swiper-slide"><img src="images/img1_03.png" alt="" /></div>
              <div class="swiper-slide"><img src="images/img2_03.png" alt="" /></div>
              <div class="swiper-slide"><img src="images/img3_03.png" alt="" /></div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
      </div>
    );
  }
}

export default banner;

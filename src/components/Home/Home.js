import React, { Component } from 'react';
import Header from '../Header/Header'
import Banner from '../Home/Banner/Banner'
import Count_down from './Count_down/Count_down'
import Choose from './Choose/Choose'
import './home.css';
class Home extends Component{
  render() {
    return (
      <div className="home1">
        <div className="main">
        <Banner/>
        <div className="main_m">
          <div className="main_con">
          <Count_down/>
          <Choose/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;

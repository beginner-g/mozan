import React, { Component } from 'react';
import './header.css'
import Home from '../Logo/Home'
import Search from '../Logo/Search'
import Shop from '../Logo/Shop'
import logo from '../../images/logo2_03.png'
class Header extends Component{
  render(){
    return(
      <div className="header">
        <div className="top">
          <a className='home' href="#"><Home color='#ccc' width='44px' height='25px'/></a>
          <a href="#"><img className='logo' src={logo} alt="" /></a>
          <a className='search' href="#"><Search color='#ccc' width='28px' height='36px'/></a>
        <a className='shop' href="#"><Shop color='#ccc' width='28px' height='36px'/></a>
          <a className='login' href="#">登录/注册</a>
        </div>
      </div>
    )
  }
}
export default Header

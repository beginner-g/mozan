import React, { Component } from 'react';
import './value.css'
import img from '../../../images/img_03.png'
import img1 from '../../../images/img_04_03.png'
class Value extends Component{
  render(){
    return(
      <div className="value">
        <p>
          <span>使用优惠券<i className="sanjiao">&#xe617;</i></span>
          <input type="text" placeholder="请输入优惠码" />
          <input type="text" placeholder="请输入优惠券密码" />
          <a href="#">绑定</a>
        </p>
        <div className="img">
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
        </div>
      </div>
    )
  }
}
export default Value

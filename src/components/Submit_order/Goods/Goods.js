import React, { Component } from 'react';
import './goods.css'
import img from '../../../images/img1_03.png'
class Goods extends Component{
  render(){
    return(
      <div className="good">
        <h3>商品信息<a href="#">返回购物车修改</a></h3>
        <ul>
          <li>
            <img src={img} alt="" />
            <span>龙之谷六周年限定礼包大Boss冰龙款男士T恤</span>
            <span>款式:iphone 5</span>
            <span>尺码:XL</span>
            <span>￥79:00</span>
            <span>X 1</span>
          </li>
          <li>
            <img src={img} alt="" />
            <span>龙之谷六周年限定礼包大Boss冰龙款男士T恤</span>
            <span>款式:iphone 5</span>
            <span>尺码:XL</span>
            <span>￥79:00</span>
            <span>X 1</span>
          </li>
        </ul>
      </div>
    )
  }
}
export default Goods

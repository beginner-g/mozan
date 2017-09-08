import React, { Component } from 'react';
import './control.css'
class Control extends Component{
  render(){
    return(
      <div className="control">
        <ul>
            <li>
              <input type="checkbox" className="all" />
              <a href="#">全选</a>
              <a href="#" className="remo">删除</a>
            </li>
            <li>
                共<span className="order">4</span>件商品，已选择<span className="order1">1</span>件
            </li>
        </ul>
        <a href="#" className="close">结算</a>
        <span>￥<b className="total">0.00</b></span>
        <p>
            合计：<br />[不含运费]
        </p>
      </div>
    )
  }
}
export default Control

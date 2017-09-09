import React, { Component } from 'react';
import './remark.css'
class Remark extends Component{
  render(){
    return(
      <div className="remark">
        <div className="beizhu"><span>备注</span>
        <textarea></textarea>
        </div>
        <div className="number">
          <ul className='number1'>
            <li>数量</li>
            <li>单价</li>
            <li>小计</li>
            <li>优惠</li>
            <li>运费</li>
            <li>实际应付</li>
          </ul>
          <ul className='number2'>
            <li>2</li>
            <li>X</li>
            <li>￥79.00</li>
            <li>=</li>
            <li>￥158.00</li>
            <li>-</li>
            <li>￥0.00</li>
            <li>+</li>
            <li>￥10.00</li>
            <li>=</li>
            <li>￥168.00</li>
          </ul>
          <a className='submit' href="#">提交订单 </a>
        </div>
      </div>
    )
  }
}
export default Remark

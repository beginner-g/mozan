import React, { Component } from 'react';
import './wechat_pay.css'
import Wechat from './Wechat/Wechat'
class Wechat_pay extends Component{
  render(){
    return(
      <div className="wechat-pay">
        <div className="m_up">
          <div className="up_con1">
            <p className="up_left">收银台</p>
            <p className='up_right'>
              <span>购物车</span>
              <span>填写订单</span>
              <span>付款,购买成功</span>
            </p>
          </div>
        </div>
        <Wechat/>
      </div>
    )
  }
}
export default Wechat_pay

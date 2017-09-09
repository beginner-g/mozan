import React, { Component } from 'react';
import './pay_success.css'
import Success from './Success/Success'
class Pay_success extends Component{
  render(){
    return(
      <div className="pay-success">
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
        <Success/>
      </div>
    )
  }
}
export default Pay_success

import React, { Component } from 'react';
import './cashier_desk.css'
import Pay from './Pay/Pay'
class Cashier_desk extends Component{
  render(){
    return(
      <div className="cashier-desk">
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
        <Pay/>
      </div>
    )
  }
}
export default Cashier_desk

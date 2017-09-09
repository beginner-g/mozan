import React, { Component } from 'react';
import './bomb_box.css'
import Submit from './Submit/Submit'
class Bomb_box extends Component{
  render(){
    return(
      <div className="bomb-box">
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
        <Submit/>
      </div>
    )
  }
}
export default Bomb_box

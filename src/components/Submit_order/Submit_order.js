import React, { Component } from 'react';
import './submit_order.css'
import Address from './Address/Address'
import Goods from './Goods/Goods'
import Serve from './Serve/Serve'
import Value from './Value/Value'
import Remark from './Remark/Remark'
class Submit_order extends Component{
  render(){
    return(
      <div className="submit-order">
        <div className="m_up">
          <div className="up_con1">
              <p className="up_left">填写订单</p>
            <p className='up_right'>
                <span>购物车</span>
                <span>填写订单</span>
                <span>付款,购买成功</span>
              </p>
            </div>
        </div>
        <Address/>
        <Goods/>
        <Serve/>
        <Value/>
        <Remark/>
      </div>
    )
  }
}
export default Submit_order

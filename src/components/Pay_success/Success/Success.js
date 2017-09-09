import React, { Component } from 'react';
import './success.css'
import img from '../../../images/success_03.png'
class Success extends Component{
  render(){
    return(
      <div className="success">
        <div className="m_down">
          <div className="suc_le">
              <img src={img} alt="" />
          </div>
          <div className="suc_ri">
              <div className="pay">支付成功！</div>
            <div className="other1">
                  <span>订单号：12345678912345<br />成功支付:￥168.00</span>
                  <span>
                      <a href="#">继续逛逛</a>
                      <a className='look' href="#">查看订单</a>
                  </span>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Success

import React, { Component } from 'react';
import './qr_code.css'
import zfb from '../../../images/zhifubao.jpg'
import img from '../../../images/1_03.png'
import xk from '../../../images/xuankuang.png'
import wechat from '../../../images/2123_03.png'
import iphone from '../../../images/iphone_03.png'
class QR_Code extends Component{
  render(){
    return(
      <div className="qr-code">
        <div className="chooses">
          <p>
            <span>选择支付方式</span>
            <a href="#"><img src={zfb} alt="" /></a>
            <a href="#"><img src={img} alt="" /></a>
          </p>
          <div className="active all">
            <a href="#"><img src={xk} alt="" /></a>
          </div>
          <div className="active1 all">
            <a href="#"><img src={xk} alt="" /></a>
          </div>
        </div>
        <div className="payment">
          <p>微信支付</p>
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;距离二维码过期还剩<em>42</em>秒<br />过期后请刷新页面重新获取二维码</span>
            <img src={wechat} alt="" />
            <span>请使用微信扫一扫<br />扫描二维码支付！</span>
          </p>
          <p>
            <img src={iphone} alt="" />
          </p>
        </div>
      </div>
    )
  }
}
export default QR_Code

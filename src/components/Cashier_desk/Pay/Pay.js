import React, { Component } from 'react';
import './pay.css'
import Pay_for from '../Pay_for/Pay_for'
class Pay extends Component{
  render(){
    return(
      <div className="pay">
        <div className="down_con1">
          <p>
            <span>订单提交成功,请您尽快付款！</span><br />
            <span>请您在提交订单后<em>24小时</em>内完成支付,否则订单会自动取消。</span>
          </p>
          <p>应付金额：<span>￥168.00</span></p>
        </div>
        <div className="down_con2 ">
          <p>订单号:12345678912345</p>
        <p className='clearfix'>
            <span><i className="name">&#xe6ee;</i>迪里木拉提<i className="iphone">&#xe6b9;</i>186****0734</span><br />
          <span><i className="address">&#xe618;</i>新疆维吾尔自治区伊犁哈萨克自治县奎屯市乌鲁木齐西路56园72幢1单元1103号</span>
          </p>
        </div>
        <Pay_for/>
      </div>
    )
  }
}
export default Pay

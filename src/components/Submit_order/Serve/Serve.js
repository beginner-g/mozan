import React, { Component } from 'react';
import './serve.css'
import img from '../../../images/a_03.png'
import img1 from '../../../images/b_03.png'
class Serve extends Component{
  render(){
    return(
      <div className="way">
        <div className='way1'>
          <h3>支付方式</h3>
          <img src={img} alt="" />
        </div>
        <div className='logistics'>
          <h3>物流方式</h3>
          <img src={img1} alt="" />
        </div>
        <div className='bill'>
          <h3>发票信息</h3>
        <a className='no_fapiao' href="#">不开发票</a>
      <a className='fapiao' href="#">开发票</a>
        </div>
        <div className='conserve'>
        <input type="text" placeholder="请输入个人/单位名称" />
        <a href="#">保存</a>
        </div>
      </div>
    )
  }
}
export default Serve

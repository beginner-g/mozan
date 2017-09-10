import React, { Component } from 'react'
import erweima from '../../images/erweima_07.png'
import taobao from '../../images/taobao_07.png'
import weixin from '../../images/weixn_07.png'
import logo from '../../images/logo2_03.png'
import './footer.css'
class Footer extends Component{
  render(){
    return(
      <div ClassName='footer'>
        <div className="f_up">
          <div className="up_con">
            <div className="help">
              <h3>帮助信息</h3><br />
              <p>
                <i className="iconfont">&#xe65d;</i><a href="#">购物指南</a>
              <i className="iconfont">&#xe6b9;</i><a href="#">服务中心</a><br />
            <i className="iconfont">&#xe611;</i><a href="#">支付方式</a>
          <i className="iconfont">&#xe640;</i><a href="#">关于我们</a><br />
        <i className="iconfont">&#xe63b;</i><a href="#">配送方式</a>
      <i className="iconfont">&#xe6c9;</i><a href="#">免责条款</a><br />
    <i className="iconfont">&#xe501;;</i><a href="#">售后服务</a>
  <i className="iconfont">&#xe636;</i><a href="#">友情链接</a>
              </p>
            </div>
            <div className="about">
              <h3>关于我们</h3>
            <div className="about1">
              <p className='taobao'>
                  <img src={erweima} alt="" /><br />
                  <img src={taobao} alt="" />
                </p>
                <p className='weixin1'>
                  <img src={erweima} alt="" /><br />
                  <img src={weixin} alt="" />
                </p>
            </div>

            </div>
            <div className="people">
              <h3>客服热线</h3>
            <div className="people1">
              <p>
                  <i className="iconfont phone1">&#xe6b9;</i>
                  <span>400 113 5353 <br />[周一至周五 9:00-18:00]</span>
                </p>
            </div>
            </div>
          </div>
        </div>
        <div className="f_down">
          <div className="f_con">
            <div className="down_le">
              <img src={logo} alt="" />
            </div>
            <div className="down_ri">
              <p>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved<br />地址：北京市朝阳区建国路93号院4号楼4层505</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer

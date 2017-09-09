import React, { Component } from 'react';
import './box.css'
class Box extends Component{
  state={
    hide:'block'
  }
  handleclick(e){
    e.preventDefault()
    this.setState({
      hide:'none'
    })
  }
  handlebigbox(){
    this.setState({
      hide:'none'
    })
  }
  handlesmartbox(e){
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }
  render(){
    return(
      <div className="box" style={{display:`${this.state.hide}`}} onClick={this.handlebigbox.bind(this)}>
        <div className="wrap" onClick={this.state.handlesmartbox}>
          <div className="box_up">
            <span>收银台</span>
          <a href='#' onClick={this.handleclick.bind(this)}>X</a>
          </div>
          <div className="box_m">
            <p>请您在新打开的网上银行页面进行支付<br />支付完成前请不要关闭该窗口!</p>
            <p>
              <a href="./pay_success.html">已完成支付</a>
              <a href="#">支付遇到问题</a>
            </p>
          </div>
          <div className="other">
            <a href="./cashier_desk.html">选择其他支付方式</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Box

import React, { Component } from 'react';
import './pay_for.css'
import zfb from '../../../images/zhifubao.jpg'
import img from '../../../images/1_03.png'
class Pay_for extends Component{
  state={
    checked:false
  }
  handleClick(e){
    e.preventDefault()
    this.setState({
      checked:!this.state.checked
    })
  }
  render(){
    return(
      <div className="pay-for">
        <div className="chooses">
          <p>
            <span>选择支付方式</span>
          <a onClick={this.handleClick.bind(this)} className={this.state.checked&&'active'}><img src={zfb} alt="" /></a>
            <a><img src={img} alt="" /></a>
          </p>
        </div>
        <div className="payment">
          <a href="./Bomb_box.html">付款</a>
        </div>
      </div>
    )
  }
}
export default Pay_for

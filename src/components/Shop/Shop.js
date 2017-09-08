import React, { Component } from 'react';
import './shop.css';
import img from '../../images/shop_07.jpg'
import Control from './Control/Control'
class Shop extends Component {
  state={
    images:[
      {image:img},
      {image:img},
      {image:img},
      {image:img}
    ],
    num:1
  }
  handlesub(e){
    e.preventDefault()
    if(this.state.num<1){
      return
    }
    this.setState({
      num:this.state.num-1
    })
  }
  handleadd(e){
    e.preventDefault()
    this.setState({
      num:this.state.num+1
    })
  }
  render() {
    const list=this.state.images.map((item,i)=>(
      <div key={i} className="goods">
        <input type="checkbox"  className="item"/>
        <a href="#"><img src={item.image} alt=""/></a>
        <p>
           <a href="#">龙之谷六周年限定礼包大Boss 冰龙款男士T恤</a>
           <span>款式：iphone 5</span>
           <span>尺码：XL</span>
        </p>
        <div className="money clearfix">
         <p>￥<span className="price">79.00</span></p>
         <a href="#" className="sub" onClick={this.handlesub.bind(this)}>-</a>
         <span className="qty">{this.state.num}</span>
         <a href="#" className="add" onClick={this.handleadd.bind(this)}>+</a>
       <p>￥<span className="tt">79.00</span></p>
         <a href="#" className="del">x</a>
        </div>
     </div>
    ))
    return (
      <div className="shop-car">
        <div className="main_cn">
          <div className="nav">
            <p>
                购物车<span>[<span className="sum">4</span>件]</span>
            </p>
            <ul>
                <li>购物车</li>
                <li>填写订单</li>
                <li>付款，购买成功</li>
            </ul>
          </div>

          <div className="title">
            <input type="checkbox" id="all" className="all"/>
            <label for="all">全选</label>
            <span>商品</span>
            <span>单价</span>
            <span>数量</span>
            <span>小计</span>
            <span>操作</span>
          </div>
          {list}
        </div>
        <Control/>
      </div>
    )
  }
}
export default Shop;

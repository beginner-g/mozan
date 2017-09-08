import React, { Component } from 'react';
import './join_cart.css';
import shop from '../../images/shop_07.jpg'
import goods from '../../images/88_03.jpg'
class Join_cart extends Component {
  render() {
    return (
      <div className="main">
        <div className="main_co">
            <p>已成功加入购物车!</p>
          <div className="comment clearfix">
                <p>
                    <img src={shop} alt="" />
                    <span>龙之谷六周年限定礼包大Boss<br />冰龙款男士T恤</span>
                    <span>款式：iphone5 <br />尺码：XL <br />数量：X1</span>
                </p>
                <p>
                  <a href="../index.html" className="return">返回</a>
                  <a href="./shop.html" className="account">去购物车结算</a>
                </p>
            </div>
            <div className="tip">
                <span>你可能还需要</span>
                <div></div>
            </div>
            <div className="shop">
                <div>
                    <img src={goods} alt="" />
                  <p>
                    <strong>龙之谷六周年限定礼包<br />大Boss冰龙款男士T恤</strong>
                  <span>￥<b className="pic">88.00</b></span>
                <a href="javascript:;" className="shop"><i className="iconfont">&#xe7a8;</i></a>
                    </p>
                </div>
                <div>
                    <img src={goods} alt="" />
                  <p>
                    <strong>龙之谷六周年限定礼包<br />大Boss冰龙款男士T恤</strong>
                  <span>￥<b className="pic">88.00</b></span>
                <a href="javascript:;" className="shop"><i className="iconfont">&#xe7a8;</i></a>
                    </p>
                </div>
                <div>
                    <img src={goods} alt="" />
                  <p>
                    <strong>龙之谷六周年限定礼包<br />大Boss冰龙款男士T恤</strong>
                  <span>￥<b className="pic">88.00</b></span>
                <a href="javascript:;" className="shop"><i className="iconfont">&#xe7a8;</i></a>
                    </p>
                </div>
                <div>
                    <img src={goods} alt="" />
                  <p>
                    <strong>龙之谷六周年限定礼包<br />大Boss冰龙款男士T恤</strong>
                  <span>￥<b className="pic">88.00</b></span>
                <a href="javascript:;" className="shop"><i className="iconfont">&#xe7a8;</i></a>
                    </p>
                </div>
                <div>
                    <img src={goods} alt="" />
                  <p>
                    <strong>龙之谷六周年限定礼包<br />大Boss冰龙款男士T恤</strong>
                  <span>￥<b className="pic">88.00</b></span>
                <a href="javascript:;" className="shop"><i className="iconfont">&#xe7a8;</i></a>
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Join_cart;

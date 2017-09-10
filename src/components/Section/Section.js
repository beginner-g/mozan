import React, { Component } from 'react';
import Home from '../Home/Home'
import Join_cart from '../Join_cart/Join_cart'
import Shop from '../Shop/Shop'
import Cashier_desk from '../Cashier_desk/Cashier_desk'
import Bomb_box from '../Bomb_box/Bomb_box'
import Wechat_pay from '../Wechat_pay/Wechat_pay'
import Pay_success from '../Pay_success/Pay_success'
import Submit_order from '../Submit_order/Submit_order'

class Section extends Component{
  render(){
    return(
      <div>
        {/* <Home/> */}
        <Join_cart/>
        {/* <Shop/> */}
        {/* <Cashier_desk/> */}
        {/* <Bomb_box/> */}
        {/* <Wechat_pay/> */}
        {/* <Pay_success/> */}
        {/* <Submit_order/> */}

      </div>
    )
  }
}
export default Section

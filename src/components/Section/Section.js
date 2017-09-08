import React, { Component } from 'react';
import Home from '../Home/Home'
import Join_cart from '../Join_cart/Join_cart'
import Shop from '../Shop/Shop'
import Cashier_desk from '../Cashier_desk/Cashier_desk'
class Section extends Component{
  render(){
    return(
      <div>
        {/* <Home/> */}
        {/* <Join_cart/> */}
        {/* <Shop/> */}
        <Cashier_desk/>
      </div>
    )
  }
}
export default Section

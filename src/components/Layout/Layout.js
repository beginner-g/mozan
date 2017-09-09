import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
class Layout extends Component{
  state={
    showform:false,
    currentPhone:''
  }
  showlogin=()=>{
    this.setState({
      showform:true
    })
  }
  hidelogin=()=>{
    this.setState({
      showform:false
    })
  }
  login=(userphone)=>{
    this.setState({
      currentPhone:userphone,
      showform:false
    })
  }
  logOut=()=>{
    this.setState({
      showform:false,
      currentPhone:''
    })
  }
  render(){
    const { showform , currentPhone }=this.state
    return(
      <div>
        <Header
          showlogin={this.showlogin}
          currentPhone={currentPhone}
          logOut={this.logOut}
        />
        {this.props.children}
        {showform&&<Login
          hidelogin={this.hidelogin}
          login={this.login}
        />}
        <Footer/>
      </div>
    )
  }
}
export default Layout

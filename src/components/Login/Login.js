import React, { Component } from 'react';
import './login.css'
import img from '../../images/999_03.jpg'
import img1 from '../../images/code_07.jpg'
class Login extends Component{
  state={
    userphone:'',
    password:''
  }
  handlechange=e=>{
    this.setState({
      userphone:e.target.value
    })
  }
  handlechange1=e=>{
    this.setState({
      password:e.target.value
    })
  }
  handclick=(login)=>{
    login(this.state.userphone)
  }
  render(){
    const {hidelogin,login}=this.props
    const {userphone,password}=this.state
    return(
      <div className="modal">
        <div className="card">
            <h3><a href="javascript:;" className="clear1"  onClick={hidelogin}>X</a></h3>
            <img src={img} alt="" />
          <div className="login">
            <input type="text" className="username" placeholder="请输入手机号" value={userphone} onChange={this.handlechange}/>
          <input type="password" className="password" placeholder="请输入银行卡密码" value={password} onChange={this.handlechange1}/>
            <input type="text" className="code" placeholder="请输入验证码" />
            <img src={img1} alt="" />
            <a href="javascript:;" className="phone"><i className="iconfont">&#xe606;</i></a>
            <a href="javascript:;" className="pass"><i className="iconfont">&#xe60a;</i></a>
          <a href="javascript:; " className="log" onClick={()=>this.handclick(login)}>登录</a>
            <a href="javascript:;" className="forget">忘记密码？</a>
            <a href="javascript:;" className="sign">注册</a>
          </div>
          <div className="connect">
              <a href="javascript:;" className="qq"><i className="iconfont">&#xe62d;</i></a>
              <a href="javascript:;" className="weixin"><i className="iconfont">&#xe659;</i></a>
              <a href="javascript:;" className="weibo"><i className="iconfont">&#xe629;</i></a>
          </div>
        </div>
      </div>
    )
  }
}
export default Login

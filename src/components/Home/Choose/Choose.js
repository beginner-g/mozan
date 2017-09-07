import React, { Component } from 'react';
import './choose.css'
class Choose extends Component{
  state={
    styles:[
      {style:'iphone 5'},
      {style:'iphone 6'},
      {style:'iphone 6+'}
    ],
    sizes:[
      {size:'XXS'},
      {size:'XS'},
      {size:'S'},
      {size:'M'},
      {size:'L'},
      {size:'XL'},
      {size:'XXL'}
    ],
    stylesIndex:0,
    num:1

  }
  handleClick=(i)=>{
    this.setState({
      stylesIndex:i
    })
  }
  handleClick1=(i)=>{
    this.setState({
      sizesIndex:i
    })
  }
  handleAdd(){
    console.log(1)
    this.setState({
      num:this.state.num+1
    })
  }
  handleSub(){
    if(this.state.num<1){
      return
    }
    this.setState({
      num:this.state.num-1
    })
  }
  render(){
    const style =this.state.styles.map((item,i)=>(
      <a className={this.state.stylesIndex===i&&'active'}key={i} onClick={()=>this.handleClick(i)}>{item.style}</a>
    ))
    const size =this.state.sizes.map((item,i)=>(
      <a className={this.state.sizesIndex===i&&'active'} key={i} onClick={()=>this.handleClick1(i)}>{item.size}</a>
    ))
    return(
      <div className="choose">
        <div className="price">
        <span>预售价</span>
        <span><b>￥700.00</b>
        <br />
        <b>正价:￥960.00</b></span>
        </div>
        <div className="style"><span>款式</span>
        <span>
          {style}
        </span>
        </div>
        <div className="size">
        <span>尺码</span>
        <span>
          {size}
        </span>
        </div>
        <div className="
        number">
          <span>数量</span>
          <span>
            <a className='sub' onClick={this.handleSub.bind(this)}>-</a>
          <b>{this.state.num}</b>
          <a className='add' onClick={this.handleAdd.bind(this)}>+</a>
          </span>
        </div>
      </div>
    )
  }
}
export default Choose

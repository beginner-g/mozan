import React, { Component } from 'react';
import './address.css'
class Address extends Component{
  state={
    address:[
        {name1:'阿不来提·阿不杜热西提',
        area:'新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村',
        phone:'186***5194'
      },
        {name1:'买买提·艾力',
        area:'新疆维吾尔自治区伊犁州新源县那拉提镇农场科乐二组布拉克村',
        phone:'159***1136'
      },
        {name1:'迪里木拉提',
        area:'新疆维吾尔自治区伊犁哈萨克自治州奎屯市乌鲁木齐西路56园72幢1单元1103号',
        phone:'186***0734'
      },
        {name1:'阿不来提·阿不杜热西提',
        area:'新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村',
        phone:'186***5194'
      },
        {name1:'买买提·艾力',
        area:'新疆维吾尔自治区伊犁州新源县那拉提镇农场科乐二组布拉克村',
        phone:'159***1136'
      },
        {name1:'迪里木拉提',
        area:'新疆维吾尔自治区伊犁哈萨克自治州奎屯市乌鲁木齐西路56园72幢1单元1103号',
        phone:'186***0734'
      }
    ],
    chooseInd:0
  }
  handleclick=(i)=>{
    this.setState({
      chooseInd:i
    })
  }
  render(){
    const add =this.state.address.map((item,i)=>(
      <li key={i} className={this.state.chooseInd===i&&'pic'} onClick={()=>this.handleclick(i)}>
        <p>
          <i className="news1">&#xe6ee;</i>{item.name1}<br />
        <i className="news1">&#xe618;</i>{item.area}<br />
      <i className="news1">&#xe6b9;</i>{item.phone}
        </p>
        <p>
          <a href="#">设为默认</a>
          <a href="#"> <i className="news1">&#xe69d;</i>编辑</a>
          <a className='clear' href="#"><i className="news1">&#xe608;</i>删除</a>
          <a className='mo_ren' href="#">默认</a>
        </p>
        <p className="box_s">
          <a href="#">确定删除</a>
          <a href="#">不删除</a>
        </p>
      </li>
    ))
    return(
      <div className="address">
        <div className="addresses">
            <p>
              <span>收货地址</span>
              <span><a href="#"><i className="address1">&#xe82c;</i></a>新增地址
              </span>
            </p>
        </div>
        <div className="news">
          <ul>{add}</ul>
        <a className='more' href="#">显示更多</a>
        </div>
      </div>
    )
  }
}
export default Address

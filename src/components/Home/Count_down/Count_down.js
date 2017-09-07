import React, { Component } from 'react';
import './count_down.css';
import img from '../../../images/yugou_03.png'
class Count_down extends Component{
  state = {
    date: '0',
    hour: '0',
    min: '0',
    sec: '0'
  }
  tick = () => {
    var taagetDate=30,targetHours=0,targetMinutes=0,targetSeconds=0;
        var date=new Date()
        var nowDate=date.getDate()
        var nowHours=date.getHours()
        var nowminutes=date.getMinutes()
        var nowSeconds=date.getSeconds()
        var showDate=taagetDate-nowDate
        var showSecond=targetSeconds-nowSeconds
        var showMinute=targetMinutes-nowminutes
        var showHour=targetHours-nowHours
        if(targetSeconds < nowSeconds){
            showSecond=showSecond+60
            showMinute=showMinute-1
        }
        if(targetMinutes<nowminutes){
            showMinute=showMinute+60
            showHour=showHour-1
          }
        if(targetHours<nowHours){
          showHour=showHour+24
          // taagetDate=nowDate-24
        }
        if(showDate<10){
            showDate='0'+showDate
          }
        if(showHour<10){
            showHour='0'+showHour
          }
        if(showMinute<10){
          showMinute='0'+showMinute
        }
        if(showSecond<10){
          showSecond='0'+showSecond
        }
        this.setState({
          date: showDate,
          hour: showHour,
          min: showMinute,
          sec: showSecond
        })
  }
  componentDidMount = () => {
   window.setInterval(this.tick, 1000)
 }
  render() {
    const { date, hour, min, sec } = this.state
    return (
      <div className="count_down">
        <div className="le_up">
          <img src={img} alt="" />
          <p>龙之谷六周年限定礼包大Boss冰龙款男士T恤</p>
        </div>
        <div className="le_down">
          <p>距预售结束</p>
        <div className="over">
            <span className="day">
            <em>{date}</em>
            <b>:</b>
            <br />
            <b>天</b>
            </span>
            <span className="hour">
            <em>{hour}</em>
            <b>:</b>
            <br />
            <b>时</b>
            </span>
            <span className="minute">
            <em>{min}</em>
            <b>:</b>
            <br />
            <b>分</b>
            </span>
            <span className="second">
            <em>{sec}</em>
            <br />
            <b></b>
            <b>秒</b>
            </span>
          </div>
          <p>
            <span>注:</span>商品将于<span>2017/9/30</span>统一发货！
          </p>
        </div>
      </div>
    )
  }
}

export default Count_down;

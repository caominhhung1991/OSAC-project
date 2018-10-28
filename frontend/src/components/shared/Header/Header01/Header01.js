import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header01.scss'
import PropTypes from 'prop-types'
import OSAC_Logo from './../../../../static/img/logo_finish.gif';
import flag_english from '../../../../static/img/flag_english.png';
import flag_vietnam from '../../../../static/img/flag_vietnam.png';

import MenuIcon01 from './MenuIcon01/MenuIcon01';
import Sidebar01 from './Sidebar/Sidebar01/Sidebar01';
// import OSAC_Logo from './../../../../static/img/logo_finish_jpeg.jpg';

const propsStyle = {
  page: PropTypes.string,
}

export class Header01 extends Component {
  state = {
    isClicked: false,
    isChoosedFlagVN: true
  }

  clickMenuIconHandle = () => {
    let newValue = !this.state.isClicked;
    console.log("hung")
    this.setState({
      isClicked: newValue
    })
  }

  chooseFlagHandle = (flag) => {
    this.setState({
      isChoosedFlagVN: flag === "english" ? false : true
    })
  }

  render() {
    let flagVNClass = this.state.isChoosedFlagVN === true ? "Header__Flag__Choosed" : "";
    let flagENClass = this.state.isChoosedFlagVN === false ? "Header__Flag__Choosed" : "";
    
    let trangChuClass = this.props.page === "trangChu" ?  "Header__Nav__Item Active" : "Header__Nav__Item";
    let gioiThieuClass = this.props.page === "gioiThieu" ?  "Header__Nav__Item Active" : "Header__Nav__Item";
    let dichVuClass = this.props.page === "dichVu" ?  "Header__Nav__Item Active" : "Header__Nav__Item";
    let tinTucClass = this.props.page === "tinTuc" ?  "Header__Nav__Item Active" : "Header__Nav__Item";
    let tuyenDungClass = this.props.page === "tuyenDung" ?  "Header__Nav__Item Active" : "Header__Nav__Item";
    let lienHeClass = this.props.page === "lienHe" ?  "Header__Nav__Item Active" : "Header__Nav__Item";


    return (
      <div className="Header">
        <div className="Header__Contact">
          <i className="fa fa-facebook-official" /> <span className="Header__Contact__Content">osac.vn</span> 
          <span>|</span>
          <i className="fa fa-phone" /> <span className="Header__Contact__Content">079.881.5991</span> 
          <span>|</span>
          <i className="fa fa-envelope" /> <span className="Header__Contact__Content">hotro@osac.vn</span>
        </div>
        <div className="Header__Navigation">
          <Link to={"/"}><img className="Header__Logo" src={OSAC_Logo} alt="OSAC LOGO" /></Link>
          <div className="Header__Nav">
            <div className={trangChuClass}>Trang Chủ</div>
            <div className={gioiThieuClass}>Giới thiệu</div>
            <div className={dichVuClass}>Dịch vụ</div>
            <div className={tinTucClass}>Tin Tức</div>
            <div className={tuyenDungClass}>Tuyển dụng</div>
            <div className={lienHeClass}>Liên hệ</div>
          </div>

          <div className="Header__Flag" >
            <img
              className={["Header__Flag__Item", flagVNClass].join(" ")}
              src={flag_english} alt="OSAC Service"
              onClick={() => this.chooseFlagHandle("english")}
            />
            <img
              className={["Header__Flag__Item", flagENClass].join(" ")}
              src={flag_vietnam} alt="OSAC Service"
              onClick={() => this.chooseFlagHandle("vietnam")}
            />
          </div>

          <MenuIcon01 isClicked={this.state.isClicked} clickHandle={this.clickMenuIconHandle} />
          <Sidebar01 isClicked={this.state.isClicked} clickHandle={this.clickMenuIconHandle} />
        </div>
      </div>
    )
  }
}

Header01.propsStyle = propsStyle

export default Header01

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Sidebar01.scss';
import Aux from '../../../../../../hoc/_Aux';
import logo_finish from '../../../../../../static/img/logo_finish.gif';

const propsTypes = {
  isClicked: PropTypes.bool,
  clickHandle: PropTypes.func,
}

let sidebar;
let overlay;

export class Sidebar01 extends Component {
  
  openSidebar = () => {
    sidebar.style.transform = "translateX(0px)";
    // sidebar.style.opacity = "1";
    overlay.style.display = "block";
  }

  closeSidebar = () => {
    sidebar.style.transform = "translateX(-280px)";
    // sidebar.style.opacity = "0";
    overlay.style.display = "none";
  }

  render() {

    return (
      <Aux>
        <div id="sidebar01" className="SideNav">
          <div className="SideNav__Menu__Header">
          <img className="Header__Logo mr-2" src={logo_finish} alt="OSAC LOGO" />
            Osac Service
          </div>
          <hr />
          <a onClick={() => {this.closeSidebar(); this.props.clickHandle();}} className="SideNav__Link" href="/">Trang Chủ</a>
          <hr />
          <a onClick={() => {this.closeSidebar(); this.props.clickHandle();}} className="SideNav__Link" href="/">Giới thiệu</a>
          <hr />
          <a onClick={() => {this.closeSidebar(); this.props.clickHandle();}} className="SideNav__Link" href="/">Dịch vụ</a>
          <hr />
          <a onClick={() => {this.closeSidebar(); this.props.clickHandle();}} className="SideNav__Link" href="/">Tin Tức</a>
          <hr />
          <a onClick={() => {this.closeSidebar(); this.props.clickHandle();}} className="SideNav__Link" href="/">Tuyển dụng</a>
          <hr />
          <a onClick={() => {this.closeSidebar(); this.props.clickHandle();}} className="SideNav__Link" href="/">Liên hệ</a>
          <hr />
        </div>
        <div id="sidebar_overlay" onClick={this.props.clickHandle}>
        </div>
      </Aux>
    )
  }

  componentDidMount = () => {
    sidebar = document.getElementById("sidebar01");
    overlay = document.getElementById("sidebar_overlay");
    // let sidebar = document.getElementById("sidebar01");
    // sidebar.addEventListener('touchmove', (e) => {
    //   e.preventDefault();
    // }, false)

    // let overlay = document.getElementById("sidebar_overlay");
    // overlay.addEventListener('touchmove', (e) => {
    //   e.preventDefault();
    // }, false)
  }

  componentWillUpdate = (nextProps, nextState) => {
    if (nextProps.isClicked === true) {
      this.openSidebar();
    } else {
      this.closeSidebar();
    }
  }
}

Sidebar01.propsTypes = propsTypes;

export default Sidebar01

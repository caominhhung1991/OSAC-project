import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Sidebar01.scss';
import Aux from '../../../../../../hoc/_Aux';


const propsTypes = {
  isClicked: PropTypes.bool,
  clickHandle: PropTypes.func,
}

export class Sidebar01 extends Component {

  render() {

    return (
      <Aux>
        <div id="sidebar01" className="SideNav">
          <a href="/">Trang Chủ</a>
          <a href="/">Giới thiệu</a>
          <a href="/">Dịch vụ</a>
          <a href="/">Tin Tức</a>
          <a href="/">Tuyển dụng</a>
          <a href="/">Liên hệ</a>
        </div>
        <div id="sidebar_overlay" onClick={this.props.clickHandle}>
        </div>
      </Aux>
    )
  }

  componentDidMount = () => {
    let sidebar = document.getElementById("sidebar01");
    sidebar.addEventListener('touchmove', (e) => {
      e.preventDefault();
    }, false)

    let overlay = document.getElementById("sidebar_overlay");
    overlay.addEventListener('touchmove', (e) => {
      e.preventDefault();
    }, false)
  }

  componentWillUpdate = (nextProps, nextState) => {
    let sidebar = document.getElementById("sidebar01");
    let overlay = document.getElementById("sidebar_overlay");
    if (nextProps.isClicked === true) {
      sidebar.style.width = "75%";
      overlay.style.display = "block";
    } else {
      sidebar.style.width = "0px";
      overlay.style.display = "none";
    }
  }
}

Sidebar01.propsTypes = propsTypes;

export default Sidebar01

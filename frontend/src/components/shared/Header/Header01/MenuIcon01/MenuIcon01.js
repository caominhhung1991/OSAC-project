import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MenuIcon01.scss'

const propsTypes = {
  isClicked: PropTypes.bool,
  clickHandle: PropTypes.func,
}

export class MenuIcon01 extends Component {
  render() {
    let menuIconClass = this.props.isClicked === true ? "MenuIcon Open": "MenuIcon";
    return (
      <div className={menuIconClass} onClick={this.props.clickHandle}>
        <span className="MenuIcon__Span"></span>
        <span className="MenuIcon__Span"></span>
        <span className="MenuIcon__Span"></span>
      </div>
    )
  }
}

MenuIcon01.propsTypes = propsTypes;

export default MenuIcon01

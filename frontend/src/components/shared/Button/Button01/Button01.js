import React, { Component } from 'react'
import './Button01.scss'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string,
}


export class Button01 extends Component {
  render() {
    return (
      <button className="Btn">
        {this.props.text}
      </button>
    )
  }
}

Button01.propTypes = propTypes;

export default Button01

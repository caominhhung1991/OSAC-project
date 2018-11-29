import React, { Component } from 'react'
import './ReasonItem.scss'
import reasonImage from './../../../static/img/reason_1.jpg'
import PropTypes from 'prop-types'
import Button01 from '../../shared/Button/Button01/Button01';

const propTypes = {
  title: PropTypes.string,
}

export class ReasonItem extends Component {
  render() {
    return (
      <div 
        className="ReasonItem"
        data-aos="fade-up"
        data-aos-duration="1400"
      >
        <div 
          className="ReasonItem__Image"
          style={{backgroundImage: `url(${reasonImage})`}}>
        </div>

        <div className="ReasonItem__Title">
          {this.props.title}
        </div>

        <div className="ReasonItem__Content">
          {this.props.content}
        </div>

        <Button01 text={"XEM THÊM"} />
      </div>
    )
  }
}

ReasonItem.propTypes = propTypes

export default ReasonItem

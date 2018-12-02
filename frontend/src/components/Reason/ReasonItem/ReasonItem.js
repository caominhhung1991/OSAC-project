import React, { Component } from 'react'
import './ReasonItem.scss'
import reasonImage from './../../../static/img/reason_1.jpg'
import PropTypes from 'prop-types'
import Button01 from '../../shared/Button/Button01/Button01';

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string.isRequired,
}

const imageMap = {
  "chat_luong_tieu_chuan": reasonImage,
  "nguon_thuc_pham_an_toan": 'https://thecaterers.vn/wp-content/uploads/2016/07/Certified-Resources_220x220.jpg',
  "dich_vu_linh_hoat": 'https://thecaterers.vn/wp-content/uploads/2016/07/Flexibility_220x220.jpg',
  "kinh_nghiem_va_uy_tinh": 'https://thecaterers.vn/wp-content/uploads/2016/07/Partnership_220x220.jpg',
  "khach_hang_la_trong_tam": 'https://thecaterers.vn/wp-content/uploads/2016/07/Innovating_220x220.jpg',
  "luon_luon_cai_tien": 'https://thecaterers.vn/wp-content/uploads/2016/07/Prestige-Achievement_220x220.jpg',
}

// 

export class ReasonItem extends Component {
  render() {
    console.log(this.props.image)
    return (
      <div 
        className="ReasonItem"
        data-aos="fade-up"
        data-aos-duration="1400"
      >
        <div 
          className="ReasonItem__Image"
          style={{backgroundImage: `url(${imageMap[this.props.image]})`}}>
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

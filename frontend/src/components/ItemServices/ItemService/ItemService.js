import React, { Component } from 'react'
import './ItemService.scss'

import PropTypes from 'prop-types'
// import canTinTruongHoc from './../static/img/can_tin_truong_hoc.jpg';
// import canTinTruongHoc from './../../../static/img/can_tin_truong_hoc.jpg';

const imageMap = {
  "can_tin": 'http://inoxhimalaya.com.vn/wp-content/uploads/2017/06/Bep-truong-hoc.jpg',
  "bep_an_cong_nghiep": "https://monclas.com/wp-content/uploads/2015/09/business-lunch.jpg",
  "to_chuc_tiec": "https://caisag.ts.it/wp-content/uploads/2017/10/02-pranzo-sociale.jpg",
  "dich_vu_khac": "https://primecatering.by/wp-content/uploads/2018/01/catering.jpg",
}

const propTypes = {
  imageURL: PropTypes.string,
}

export class ItemService extends Component {
  
  render() {
    // console.log(imageMap[this.props.image])
    return (
      <div 
        className="ItemService" 
        data-aos="flip-left"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >
        <div 
          className="ItemService__Img"
          style={{backgroundImage: `url(${imageMap[this.props.image]})`}}
          alt="suất ăn công nghiệp" 
        />
        <div className="ItemService__Title">
          {this.props.title}
        </div>
      </div>
    )
  }
}

ItemService.propTypes = propTypes;

export default ItemService
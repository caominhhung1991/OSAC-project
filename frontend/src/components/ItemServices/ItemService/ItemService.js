import React, { Component } from 'react'
import './ItemService.scss'

import PropTypes from 'prop-types'
// import canTinTruongHoc from './../static/img/can_tin_truong_hoc.jpg';
import canTinTruongHoc from './../../../static/img/can_tin_truong_hoc.jpg';

const imageMap = {
  "can_tin": canTinTruongHoc
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
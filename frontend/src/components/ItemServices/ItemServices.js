import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './ItemServices.scss'
import { ItemService } from './ItemService/ItemService';
import { Title01 } from '../shared/Title/Title01/Title01';
import Aux from '../../hoc/_Aux';

export class ItemServices extends Component {
  render() {
    return (
      <Aux>
        <Title01 title={"Sản Phẩm - Dịch vụ"} />
        <div className="ItemServices">
          <ItemService image={"can_tin"} title={"bếp ăn công nghiệp"} />
          <ItemService image={"can_tin"} title={"bếp ăn trường học"} />
          <ItemService image={"can_tin"} title={"tổ chức tiệc"} />
          <ItemService image={"can_tin"} title={"dịch vụ khác"} />
        </div>
      </Aux>

    )
  }
}

export default ItemServices

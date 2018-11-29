import React, { Component } from 'react'
import './Reason.scss';
// import PropTypes from 'prop-types'
import { Title01 } from '../shared/Title/Title01/Title01';
import ReasonItem from './ReasonItem/ReasonItem';

export class Reason extends Component {
  render() {
    return (
      <div className="Reason">
        <Title01 title={"Lý do chọn OSAC"} />
        <div className="Reason__Content">
          <ReasonItem 
            title={"Chất lượng tiêu chuẩn"}
            content={"Ưu tiên hàng đầu của chúng tôi là mang đến bữa ăn chất lượng và đảm bảo an toàn vệ sinh thực ..."}
          />
          <ReasonItem 
            title={"Chất lượng tiêu chuẩn"}
            content={"Ưu tiên hàng đầu của chúng tôi là mang đến bữa ăn chất lượng và đảm bảo an toàn vệ sinh thực ..."}
          />
          <ReasonItem 
            title={"Chất lượng tiêu chuẩn"}
            content={"Ưu tiên hàng đầu của chúng tôi là mang đến bữa ăn chất lượng và đảm bảo an toàn vệ sinh thực ..."}
          />
          <ReasonItem 
            title={"Chất lượng tiêu chuẩn"}
            content={"Ưu tiên hàng đầu của chúng tôi là mang đến bữa ăn chất lượng và đảm bảo an toàn vệ sinh thực ..."}
          />
          <ReasonItem 
            title={"Chất lượng tiêu chuẩn"}
            content={"Ưu tiên hàng đầu của chúng tôi là mang đến bữa ăn chất lượng và đảm bảo an toàn vệ sinh thực ..."}
          />
          <ReasonItem 
            title={"Chất lượng tiêu chuẩn"}
            content={"Ưu tiên hàng đầu của chúng tôi là mang đến bữa ăn chất lượng và đảm bảo an toàn vệ sinh thực ..."}
          />
          
        </div>
      </div>
    )
  }
}

export default Reason

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Aux from '../../hoc/_Aux';
import { Header01 } from '../shared/Header/Header01/Header01';
import Slider01 from '../shared/Slider/Slider01/Slider01';

export class HomePage extends Component {
  render() {
    return (
      <Aux>
        <Header01 page="trangChu"></Header01>
        <Slider01 />
      </Aux>
    )
  }
}

export default HomePage

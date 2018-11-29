import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Aux from '../../hoc/_Aux';

import * as AOS from 'aos'

import { Header01 } from '../shared/Header/Header01/Header01';
import { ItemServices } from '../ItemServices/ItemServices';
import { Story } from '../Story/Story';
import Reason from '../Reason/Reason';

// import { Partners } from '../Partners/Partners';
// import { News } from '../News/News';
import { Footer } from '../Footer/Footer';
import Introduce01 from '../shared/Introduce/Introduce01/Introduce01';
// import Sticky2 from '../shared/scrollmagic/sticky2/sticky2';
// import { Slider01 } from '../shared/Slider/Slider01/Slider01';
import { Slider02 } from '../shared/Slider/Slider02/Slider02';
import { MenuIntroduce } from '../Menu/MenuIntroduce/MenuIntroduce';

export class HomePage extends Component {
  render() {
    return (
      <Aux>
        <Header01 page="trangChu"></Header01>
        {/* <Slider01 /> */}
      <Slider02 />
        <Introduce01 />

        <Story />

        <ItemServices />
        {/* <Sticky2 /> */}
        <Reason />
        {/* <Partners /> */}

        {/* <News /> */}

        <MenuIntroduce />
        <Footer />
      </Aux>
    )
  }

  componentDidMount = () => {
    AOS.init({
      easing: 'ease-out-in-sine',
      duration: '1200'
    });
  }
}

export default HomePage

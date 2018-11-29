import React, { Component } from 'react'
import './Slider01.scss'
import Swiper from 'swiper'
// import PropTypes from 'prop-types'
// import background_slider from '../../../../static/img/background_slider.jpeg';
// import catering_background_1 from '../../../../static/img/catering_background_1.jpg';
import banner1 from './../../../../static/img/banner1.jpg'
let mySwiper;

export class Slider01 extends Component {
  state = {
    swipers: []
  }

  render() {
    return (
      <div className="swiper-container">
        <div
          className="parallax-bg"
          style={{ backgroundImage: `url(${banner1})` }}
          data-swiper-parallax="-23%"
        ></div>
        <div className="swiper-wrapper">
          <div className="swiper-slide PaddingTam">
            <div className="title" data-swiper-parallax="-700">OSAC SERVICES</div>
            <div className="subtitle" data-swiper-parallax="-500">Bếp ăn công nghiệp</div>
            <div className="text" data-swiper-parallax="-300">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
            </div>
          </div>
          <div className="swiper-slide PaddingTam">
            <div className="title" data-swiper-parallax="-700">OSAC SERVICES</div>
            <div className="subtitle" data-swiper-parallax="-500">Cung cấp rau củ quả</div>
            <div className="text" data-swiper-parallax="-300">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
            </div>
          </div>
          <div className="swiper-slide PaddingTam">
            <div className="title" data-swiper-parallax="-700">OSAC SERVICES</div>
            <div className="subtitle" data-swiper-parallax="-500">Thiết kế và tư vấn bếp ăn công nghiệp</div>
            <div className="text" data-swiper-parallax="-300">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-white"></div>
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </div>
    )
  }
  // <div key={res.data[i].url} className="swiper-slide PaddingTam">
  //   <img className="Slider__Image" src={res.data[i].url} alt="swiperImgURL" />
  // </div>

  componentDidMount = () => {

    mySwiper = new Swiper('.swiper-container', {
      speed: 600,
      parallax: true,

      spaceBetween: 30,
      // centeredSlides: true,
      // autoplay: {
      //   delay: 3500,
      //   disableOnInteraction: false,
      // },

      // Optional parameters
      // direction: 'horizontal',
      loop: true,
      // loop: false,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // mouse wheel
      // mousewheel: true,

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },

    })

    mySwiper.on('slideChange', function () {
      console.log('slide changed');
    });

  }
}

export default Slider01

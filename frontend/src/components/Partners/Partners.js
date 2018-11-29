import React, { Component } from 'react'
import './Partners.scss'
import { Title01 } from '../shared/Title/Title01/Title01';
import Swiper from 'swiper';
import flag_english from '../../static/img/flag_english.png';
import flag_vietnam from '../../static/img/flag_vietnam.png';

export class Partners extends Component {
  render() {
    return (
      <div className="Partners">
        <Title01 title={"nhà cung cấp của chúng tôi"} />
        <div className="swiper-container2">
          <div className="swiper-wrapper SwiperWrapper">
            <div className="swiper-slide">
              <img src={flag_english} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_vietnam} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_english} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_vietnam} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_english} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_vietnam} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_english} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_vietnam} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_english} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_vietnam} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_english} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_vietnam} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_english} alt="partner" />
            </div>
            <div className="swiper-slide">
              <img src={flag_vietnam} alt="partner" />
            </div>
            
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }

  componentDidMount = () => {
    let swiper2 = new Swiper('.swiper-container2', {
      slidesPerView: 15,
      // centeredSlides: true,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      freeMode: true,
      speed: 4000,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
    });

    swiper2.on('slideChange', function () {
      // console.log('slide changed');
    });
  }
}

export default Partners

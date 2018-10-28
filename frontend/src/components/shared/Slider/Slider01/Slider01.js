import React, { Component } from 'react'
import './Slider01.scss'
import Swiper from 'swiper';
import axios from 'axios';

// import PropTypes from 'prop-types'

const API_GET_IMAGE = "https://jsonplaceholder.typicode.com/photos";
const SWIPERS = [];
let DATA = [];
let count = 3;
let mySwiper;

export class Slider01 extends Component {
  state = {
    swipers: []
  }

  addSlideHandle = () => {
    axios.get(API_GET_IMAGE).then(res => {
      DATA = res.data;

      let slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      let image = document.createElement("img");
      image.src = DATA[count].url;
      image.alt = DATA[count].url;

      slide.appendChild(image);

      mySwiper.appendSlide(slide)
    })

    count++;
  }

  render() {
    return (
      <div key="2" className="swiper-container">
        <div className="swiper-wrapper">
          {this.state.swipers}
        </div>
        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-scrollbar"></div>
      </div>
    )
  }

  componentDidMount = () => {
    axios.get(API_GET_IMAGE).then(res => {
      DATA = res.data;
      for (let i = 1; i <= 1; i++) {
        SWIPERS.push(
          <div key={res.data[i].url} className="swiper-slide">
            <img src={res.data[i].url} alt="swiperImgURL" />
          </div>
        )
      }

      this.setState({
        swipers: SWIPERS
      })

      mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })

      mySwiper.on('slideChange', function () {
        console.log('slide changed');
      });
    })

  }
}

export default Slider01

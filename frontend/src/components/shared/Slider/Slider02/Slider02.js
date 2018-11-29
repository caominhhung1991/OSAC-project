import React, { Component } from 'react'
import './Slider02.scss'
import Swiper from 'swiper'
// import PropTypes from 'prop-types'

export class Slider02 extends Component {
  render() {
    return (
      // < !--Swiper -- >
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{ "backgroundImage": "url(https://tuvanmoitruong.com.vn/wp-content/uploads/2017/11/X%E1%BB%AD-l%C3%BD-n%C6%B0%E1%BB%9Bc-th%E1%BA%A3i-b%E1%BA%BFp-%C4%83n-c%C3%B4ng-nghi%E1%BB%87p.jpg)" }}>
            <div className="SwiperSlide__Content">
              <div className="title OsacColor" data-swiper-parallax="-700">Bếp ăn công nghiệp</div>
              <div className="text" data-swiper-parallax="-300">
                <p>Là nhà cung cấp thực phẩm chuyên nghiệp, chúng tôi có trách nhiệm bảo vệ sức khỏe
và sự an toàn cho khách hàng thông qua các tiêu chuẩn VSATTP. Nguồn thực phẩm an toàn: Chúng tôi lựa chọn các nhà cung cấp thực phẩm chất lượng cao, uy tín, đảm bảo đúng các tiêu chuẩn VSATTP</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide" style={{ "backgroundImage": "url(http://thucphamdongnai.com/files/upload/DICH-VU/cung-cap-thuc-pham.jpg)" }}>
            <div className="SwiperSlide__Content">
              <div className="title OsacColor" data-swiper-parallax="-700">Cung thấp thực phẩm</div>
              <div className="text" data-swiper-parallax="-300">
                <p>Là nhà cung cấp thực phẩm chuyên nghiệp, chúng tôi có trách nhiệm bảo vệ sức khỏe
và sự an toàn cho khách hàng thông qua các tiêu chuẩn VSATTP. Nguồn thực phẩm an toàn: Chúng tôi lựa chọn các nhà cung cấp thực phẩm chất lượng cao, uy tín, đảm bảo đúng các tiêu chuẩn VSATTP</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide" style={{ "backgroundImage": "url(https://nhathaubep.vn/wp-content/uploads/2018/05/1511861332_he-thong-bep-cong-nghiep-1400x585.jpg)" }}>
            <div className="SwiperSlide__Content">
              <div className="title OsacColor" data-swiper-parallax="-700">Tư vấn thiết kế nhà bếp</div>
              <div className="text" data-swiper-parallax="-300">
                <p>Là nhà cung cấp thực phẩm chuyên nghiệp, chúng tôi có trách nhiệm bảo vệ sức khỏe
và sự an toàn cho khách hàng thông qua các tiêu chuẩn VSATTP. Nguồn thực phẩm an toàn: Chúng tôi lựa chọn các nhà cung cấp thực phẩm chất lượng cao, uy tín, đảm bảo đúng các tiêu chuẩn VSATTP</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide" style={{ "backgroundImage": "url(https://s3-us-west-2.amazonaws.com/chotroi/osac/quaydichvutienich.jpg)" }}>
            <div className="SwiperSlide__Content">
              <div className="title OsacColor" data-swiper-parallax="-700">Quầy dịch vụ tiện ích</div>
              <div className="text" data-swiper-parallax="-300">
                <p>Là nhà cung cấp thực phẩm chuyên nghiệp, chúng tôi có trách nhiệm bảo vệ sức khỏe
và sự an toàn cho khách hàng thông qua các tiêu chuẩn VSATTP. Nguồn thực phẩm an toàn: Chúng tôi lựa chọn các nhà cung cấp thực phẩm chất lượng cao, uy tín, đảm bảo đúng các tiêu chuẩn VSATTP</p>
              </div>
            </div>
          </div>
          {/* <div className="swiper-slide" style={{ "backgroundImage": "url(https://s3-us-west-2.amazonaws.com/chotroi/osac/slider05.jpeg)" }}></div> */}
        </div>
        <div className="swiper-pagination swiper-pagination-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
        <div className="swiper-button-prev swiper-button-white"></div>
      </div >
    )
  }

  componentDidMount = () => {
    new Swiper('.swiper-container', {
      spaceBetween: 0,
      speed: 1000,
      // effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

export default Slider02

// goco 
// giấy chứng nhận - jjmmm 
// phong bì A4 

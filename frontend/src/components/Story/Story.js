import React, { Component } from 'react'
import './Story.scss'
// import cateringBG from './../../static/img/catering_background_1.jpg'
import banner_web from './../../static/img/banner-web.jpg'
// import PropTypes from 'prop-types'
import { Title01 } from '../shared/Title/Title01/Title01';
import Button01 from '../shared/Button/Button01/Button01';

export class Story extends Component {
  render() {
    return (
      <div className="Story mt-4">
        <Title01 title={"Câu chuyện của chúng tôi"} dataAOS={"fade-up"}/>
        <div className="Story__Content">
          <div
            className="Story__Image"
            data-aos="fade-up-left"
            data-aos-offset="100"
            data-aos-anchor-placement="top-bottom"
            style={{ backgroundImage: `url(${banner_web})` }}
            // style={{ backgroundImage: `url('https://s3-us-west-2.amazonaws.com/chotroi/osac/banner-web1.jpg')` }}
          >
          </div>
          <div 
            className="Story__Text"
            data-aos="fade-up-right"
            data-aos-offset="100"
          >
            <h2>OSAC Service</h2>
            <p>OSAC Service là Công ty chuyên cung cấp suất ăn công nghiệp, suất ăn trường học, dịch vụ ẩm thực, cung cấp thực phẩm, xin gửi lời chào đến Quý công ty!</p>

            <p>Với sứ mệnh mang đến cộng đồng những suất ăn công nghiệp chất lượng và an toàn, chúng tôi luôn tổ chức quy trình làm việc - nghiên cứu cải tiến định lượng suất ăn - đào tạo - phát triển đội ngũ nhân viên chuyên nghiệp.</p>

            <p>Trên tinh thần mong muốn được đồng hành và góp phần vào sự phát triển của công ty, thực phẩm OSAC hân hạnh được hợp tác cùng Quý công ty. Chúng tôi tin rằng sự quan tâm của quý vị và kinh nghiệm tổ chức phục vụ của chúng tôi, cùng nhau chúng ta sẽ có giải pháp cho mọi vấn đề.</p>
            <Button01 text={"About us"}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Story

import React, { Component } from 'react'
import './News.scss'
import Title01 from '../shared/Title/Title01/Title01';
// import PropTypes from 'prop-types'
import { NewsItem } from './NewsItem/NewsItem';
import { Button01 } from '../shared/Button/Button01/Button01';
import news_2 from '../../static/img/news_2.jpg';
import news_3 from '../../static/img/news_3.jpg';

export class News extends Component {

  render() {
    return (
      <div className="News">
        <Title01 title={"Tin nổi bật"} />
        <div className="News__Content">
          <NewsItem
            title={"Canape là gì? Những thông tin thú vị về Canape"}
            brief={""}
            image={"https://img.taste.com.au/8MQ39R4L/taste/2016/11/classic-canape-trio-90416-1.jpeg"}
          />
          <NewsItem 
            // title={"CHƯƠNG TRÌNH KHUYẾN MÃI TASTE OF AUSTRALIA 2018"}
            title={"Chương trình Taste Of Australia 2018"}
            brief={""}
            image={news_2}
            // image={'https://nws-vimg-prod.akamaized.net/5348771529001/201705/5348771529001_5419917415001_5419910931001-vs.jpg?pubId=5348771529001'}
          />
          <NewsItem 
            title={"Connect - Employee Newsletter 1"}
            brief={""}
            image={news_3}
          />
        </div>
        <div className="text-center mt-4">
          <Button01
            text={"Xem tất cả"}
          />
        </div>

      </div>

    )
  }
}

export default News

import React, { Component } from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import MyGoogleMap from '../shared/MyGoogleMap/MyGoogleMap';
// import PropTypes from 'prop-types'
// import logo_finish from '../../static/img/logo_finish.gif';

export class Footer extends Component {
  state = {
    isMarkerShown: false,
    isMarkerClicked: true
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({
        isMarkerShown: true
      })
    }, 1400)
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  handleMarkerClick = () => {
    let newClickedState = this.state.isMarkerClicked;
    this.setState({ 
      isMarkerClicked: !newClickedState
    })
  }

  render() {
    return (
      <div className="Footer">
        <div className="Footer__Website">
          <h2 className="Footer__Website__Company">OSAC Service</h2>
          <h4 className="Footer__Website__Address">www.osac.vn</h4>
        </div>
        <div className="Footer__Content">
          <div className="Footer__Content__Left">
            <div className="Footer__Column Footer__Column1">
              {/* < */}
              {/* <Link to={"/"}><img className="Header__Logo" src={logo_finish} alt="OSAC LOGO" /></Link> */}

              <div className="Footer__Title">Liên hệ</div>
              <a className="Footer__Info" href="tel:0363575468">
                <span className="Footer__Info__Icon"><i className="fa fa-phone"></i></span>
                <span className="Footer__Info__Text" >(+84) 363.575.468</span>
              </a>
              <a className="Footer__Info" href="tel:0363575468">
                <span className="Footer__Info__Icon"><i className="fa fa-fax"></i></span>
                <span className="Footer__Info__Text">(+84) 363.575.468</span>
              </a>
              <a className="Footer__Info" href="http://www.osac.vn">
                <span className="Footer__Info__Icon"><i className="fa fa-desktop"></i></span>
                <span className="Footer__Info__Text">www.osac.vn</span>
              </a>
              <a className="Footer__Info" href="mailto:hoangviet@osac.vn?subject=Subject Using Mailto.co.uk&body=Email Using Body">
                <span className="Footer__Info__Icon"><i className="fa fa-envelope"></i></span>
                <span className="Footer__Info__Text">hoangviet@osac.vn</span>
              </a>
              <div className="Footer__Info">
                <span className="Footer__Info__Icon"><i className="fa fa-address-book"></i></span>
                <span className="Footer__Info__Text Footer__Address">
                  <span className="Footer__Address__Title">VĂN PHÒNG OSAC</span>
                  <span className="Footer__Address__Content">124 Đường Võ Văn Hát, Phường Long Trường, Quận 9, Thành phố Hồ Chí Minh</span>
                </span>
              </div>
            </div>
            <div className="Footer__Column Footer__Column2">
              <div className="Footer__Title">Menu</div>
              <div className="Footer__Menu">
                <span className="Footer__Info__Text">
                  <Link className="Footer__Menu__Link" to={"/"}>Trang chủ</Link>
                </span>
              </div>

              <div className="Footer__Menu">
                <span className="Footer__Info__Text">
                  <Link className="Footer__Menu__Link" to={"gioi-thieu"}>Giới thiệu</Link>
                </span>
              </div>

              <div className="Footer__Menu">
                <span className="Footer__Info__Text">
                  <Link className="Footer__Menu__Link" to={"gioi-thieu"}>Dịch vụ</Link>
                </span>
              </div>

              <div className="Footer__Menu">
                <span className="Footer__Info__Text">
                  <Link className="Footer__Menu__Link" to={"gioi-thieu"}>Tin tức</Link>
                </span>
              </div>

              <div className="Footer__Menu">
                <span className="Footer__Info__Text">
                  <Link className="Footer__Menu__Link" to={"gioi-thieu"}>Tuyển dụng</Link>
                </span>
              </div>
            </div>
            <div className="Footer__Column Footer__Column3">
              <div className="Footer__Title">Mạng xã hội</div>
              <div className="Footer__Menu">
                <div className="Footer__Info">
                  <span className="Footer__Info__Icon"><i className="fa fa-facebook-official"></i></span>
                  <span className="Footer__Info__Text"><a className="Footer__Menu__Link" href={"http://facebook.com"} target="_blank" rel="noopener noreferrer">Facebook</a></span>
                </div>
              </div>

              <div className="Footer__Menu">
                <div className="Footer__Info">
                  <span className="Footer__Info__Icon"><i className="fa fa-linux"></i></span>
                  <span className="Footer__Info__Text"><a className="Footer__Menu__Link" href={"http://chat.zalo.com"} target="_blank" rel="noopener noreferrer">Zalo</a></span>
                </div>
              </div>

              <div className="Footer__Menu">
                <div className="Footer__Info">
                  <span className="Footer__Info__Icon"><i className="fa fa-instagram"></i></span>
                  <span className="Footer__Info__Text"><a className="Footer__Menu__Link" href={"http://instagram.com"} target="_blank" rel="noopener noreferrer">Instagram</a></span>
                </div>
              </div>
            </div>

          </div>
          {/*  */}
          <div className="Footer__Content__Right">
            <MyGoogleMap 
              isMarkerShown={this.state.isMarkerShown}
              isMarkerClicked={this.state.isMarkerClicked}
              onMarkerClick={this.handleMarkerClick}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

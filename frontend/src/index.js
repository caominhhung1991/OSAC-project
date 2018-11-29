import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/font-awesome/css/font-awesome.css';
import './../node_modules/swiper/dist/css/swiper.css';
// import './../node_modules/animate.css/animate.css'; // animate css
import './../node_modules/aos/dist/aos.css';

import './../node_modules/jquery/dist/jquery';
import './../node_modules/swiper/dist/js/swiper';
import './../node_modules/aos/dist/aos'

// import 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDEXtZ0qkEhNULdRqyGaWHNDAhZ39VnfoY&v=3.exp&libraries=geometry,drawing,places'


// router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

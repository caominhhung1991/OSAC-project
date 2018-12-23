import React from 'react'
import './Introduce01.scss'

// import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
// import nature from '../../../../static/img/nature.jpeg';
// indicators={true} 
/* <div className="section" /> */ 

const Introduce01 = () => (
  <Controller>
    <Scene duration="300%" triggerHook="onEnter">
      <Timeline wrapper={<div className="parallax" />}>
        <Tween position="0"
          from={{ yPercent: -50, }}
          to={{ yPercent: 0, }}
        >
          <img src={"https://s3-us-west-2.amazonaws.com/chotroi/osac/background_introduce.jpg"} alt="osac service" />
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
);

export default Introduce01

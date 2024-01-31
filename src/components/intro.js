import React, { useState, useEffect } from 'react'
import '../App.scss'
import videoDesktop from '../assets/intro_desktop.mp4';
import videoMobile from '../assets/intro_mobile.mp4';


const Intro = () => {
  return(
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', maxWidth:'100vw',height:'auto'}}>
        <video id='displayVideo' autoPlay  muted> add loop
          <source src={videoDesktop} type="video/mp4"/>
        </video>
        <video id='displayVideoMobile' autoPlay loop muted>
          <source src={videoMobile} type="video/mp4"/>
        </video>
    </div>
   )
  }
export default Intro;


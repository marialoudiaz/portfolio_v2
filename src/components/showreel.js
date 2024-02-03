import React, { useState, useEffect } from 'react'
import '../App.scss'
import videoDesktop from '../assets/showreel_ordi.mp4';
import videoMobile from '../assets/showreel_tel.mp4';


const Showreel = () => {
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
export default Showreel;
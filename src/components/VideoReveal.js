import React, { useState, useEffect} from 'react'
import '../App.scss';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

import videoDesktop from '../assets/projets/intro_ordi.mp4';
import videoMobile from '../assets/projets/intro_tel.mp4';import logo from '../assets/logo-iris.png';
import { HiMiniPlay } from "react-icons/hi2";

const VideoReveal = () => {
  useEffect(() => {
    gsap.to(".clipper-left", {
      duration: 2,
      delay: 2,
      clipPath: 'inset(0 100% 0 0)',
      ease: "power4.inOut"
    });
    gsap.to(".clipper-right", {
      duration: 2,
      delay: 2,
      clipPath: 'inset(0 0 0 100%)',
      ease: "power4.inOut",
    });
    gsap.from(".loader-wrapper", {
      duration: 2,
      scale: 0.9,
      ease: 'power1.inOut',
    });
    gsap.from(".loader", {
      duration: 2.5,
      top: '100%',
      ease: "power1.inOut",
    });
    gsap.to([".loader-wrapper", ".pre-loader"], {
      duration: 0.2,
      opacity: 0.5,
      display: "none",
      ease: "power3.inOut",
      delay: 2.1,
    });
    gsap.to(".site-content", {
      duration: 1,
      height: '100%', // Animation de la hauteur vers 100vh
      ease: "power4.inOut",
      delay: 3 // Mettez un délai supplémentaire si nécessaire
    });
    // gsap.to(".logo-sidebar", {
    //   opacity:1,
    //   duration: 1, // Durée de l'animation en secondes
    //   ease: "power4.inOut", // Facilité de l'animation
    //   delay: 3 
    // });
    // gsap.from(".play", {
    //   duration: 2,
    //   delay: 3,
    //   scale: 0,
    //   ease: "power4.inOut",
    // });
    // gsap.from([".sidebar-nav > *", ".site-nav > *"], {
    //   duration: 1,
    //   opacity: 0,
    //   delay: 3,
    //   x: 40,
    //   ease: 'power4.inOut',
    //   stagger: {
    //   amount: 0.5,
    //   },
    // });
  }, []);


return (
<div>
  <div className='container-home'>

    <div className='pre-loader block'>
      <div className='loader-wrapper'>
        <div className='loader'></div>
      </div>
    </div>

    {/* <div className='sidebar-nav'>
      <p>maria lou diaz</p>
    </div> */}
    
    <div className='clipper-left'>
      <div className='loader-text'><img src={logo} style={{width:'3rem'}}/></div>
    </div>
    <div className='clipper-right'>
      <div className='loader-text'>maria lou diaz</div>
    </div>


    <div className='site-content'>

      {/* <div className='site-nav'>
        <div className='site-logo'><a href='#'>maria lou diaz</a></div>
      </div> */}
      
      <div className='video-hp' id='video-hp'>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', maxWidth:'100vw',height:'auto'}}>
        <video id='displayVideo' autoPlay  muted loop>
          <source src={videoDesktop} type="video/mp4"/>
        </video>
        <video id='displayVideoMobile' autoPlay loop muted>
          <source src={videoMobile} type="video/mp4"/>
        </video>
    </div>
      </div>
{/* 
      <div className='play'>
        <div className='play-icon'>
        < HiMiniPlay />
        </div>
      </div> */}

    </div>
  </div>
</div>
    
  );
};

export default VideoReveal;
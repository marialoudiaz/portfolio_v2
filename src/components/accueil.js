import React, { useState, useEffect, useRef } from 'react'
import '../App.scss';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
import videoDesktop from '../assets/projets/showreel_ordi.mp4';
import VideoReveal from '../components/VideoReveal';


const Accueil = () => {
return (
< div id='Home'>
    < VideoReveal />
    {/* <div className="title" style={{padding:'2rem'}}>

      <div style={{display:'flex', alignItems:'center'}}>
        <h1 id='cocreer' style={{width:'100%', border:'5px solid #2B388D', borderRadius:'90rem', padding:'.5rem 2rem .5rem 2rem'}}>concevons</h1>
        <h1 style={{marginLeft:'2rem'}}>votre</h1>
        <h1 id='singularite' ref={textRef}>singularité</h1>
      </div>
       
    </div> */}


</div>
    
  );
};

export default Accueil;
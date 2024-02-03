import React, { useState, useEffect, useRef } from 'react'
import '../App.scss';
import Typewriter from 'typewriter-effect';
import TextTransition, { presets } from 'react-text-transition';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
import fleur1 from '../assets/iris-bg.png';
import videoDesktop from '../assets/showreel_ordi.mp4';


const Intro = () => {
  const greetings = ['Bonjour', 'Hello', 'Hola','Bonjour', 'Hello', 'Hola','Bonjour', 'Hello', 'Hola','Bonjour', 'Hello', 'Hola','Bonjour', 'Hello', 'Hola'];
  const words=['identité','site internet','marque','vidéo','application','singularité'];
  const typewriterStrings = ['identité', 'singularité'];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [index, setIndex] = React.useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null); // Ajout de la référence pour l'élément texte



  // defilement de la banniere salutations
  useEffect(()=>{
    const el =containerRef.current;
    gsap.fromTo(el, {translateX: 0}, {translateX: -900, duration:30})
  },[])

  //

  //   React.useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index+1),
  //     3000, // every 3 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);


  //make singularité multicolor

  const COLORS_ARRAY=[
    "#f25b40",
    '#2c3d71',
    '#e92d65',
    '#f7b1cf',
    '#86c1f7',
    '#ffd570',
    '#0e0e0e',
  ]
  const STEP_DURATION=0.1;

  useEffect(() => {
    const text = textRef.current;
    const splitText = new SplitType(text, { types: "chars" });
    gsap.set(splitText.chars, { color: COLORS_ARRAY[0] });

    gsap.registerEffect({
      name: "changeColor",
      effect: (targets, config) => {
        return gsap.set(targets, { delay: config.duration, color: config.color });
      },
      defaults: { duration: STEP_DURATION },
      extendTimeline: true,
    });

    gsap.from(splitText.chars, {
      scale: 0,
      stagger: STEP_DURATION,
      ease: 'back.out',
      color: (index, target) => {
        const tlColors = gsap.timeline();
        COLORS_ARRAY.forEach((color) => {
          tlColors.changeColor(target, { duration: STEP_DURATION, color });
        });
      },
    });
  }, []);

  


  return (
<div className='bg-hp'>
    <div className="title" style={{padding:'5rem'}}>
      <div style={{display:'flex', alignItems:'center'}}>
        <h1 style={{ marginLeft:'5rem'}}>nous</h1>
        <div style={{position:'relative'}}>
        <h1 id='cocreer' style={{border:'5px solid #2B388D', borderRadius:'90rem', padding:'.5rem 2rem .5rem 2rem'}}>co-créons</h1> {/*on hover div video*/}
        <video id='hovervideo' autoPlay  muted loop>
          <source src={videoDesktop} type="video/mp4"/>
        </video>
        </div>
        
        <h1 style={{marginLeft:'2rem'}}>votre</h1>
      </div>
        <h1 id='singularite' ref={textRef}>singularité</h1>
    </div>

    <div className="container">
        <div ref={containerRef} className="scroll-text" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {/* Contenu qui défile horizontalement */}
          {greetings.map((word, index) => (
            <div className="text" key={index}>{word}</div>
          ))}
        </div>
      </div>
      <img className='fleur' src={fleur1}/>

    </div>
    
  );
};

export default Intro;

 // useEffect(() => {
  //   // récupération largeur banniere defilante et du texte
  //     const containerWidth = document.querySelector('.scrolling-banner').offsetWidth;
  //     const textContainer = document.querySelector('.text-container');
  //     const textWidth = textContainer.offsetWidth;
  //  // definir une intervalle de défilement continu
  //   const scrollInterval = setInterval(() => {
  //     setScrollPosition((prevPosition) =>{
  //       const newPosition = prevPosition -1;
  //       if (newPosition <= -textWidth){return 0;}
  //       return newPosition;
  //   });}, 10);
  // return ()=> clearInterval(scrollInterval);}, []);


  // let tl = gsap.timeline({
  //   // yes, we can add it to an entire timeline!
  //   scrollTrigger: {
  //     trigger: ".container",
  //     pin: true, // pin the trigger element while active
  //     start: "top top", // when the top of the trigger hits the top of the viewport
  //     end: "+=500", // end after scrolling 500px beyond the start
  //     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //     snap: {
  //       snapTo: "labels", // snap to the closest label in the timeline
  //       duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
  //       delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
  //       ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
  //     },
  //   },
  // });

import React, { useState, useEffect } from 'react'
import '../App.scss';
import Typewriter from 'typewriter-effect';
import TextTransition, { presets } from 'react-text-transition';


const Intro = () => {
  const greetings = ['Bonjour', 'Hello', 'Hola'];
  const words=['identité','site internet','marque','vidéo','application','singularité'];
  const typewriterStrings = ['identité', 'singularité'];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [index, setIndex] = React.useState(0);


  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  
  useEffect(() => {
    // récupération largeur banniere defilante et du texte
      const containerWidth = document.querySelector('.scrolling-banner').offsetWidth;
      const textContainer = document.querySelector('.text-container');
      const textWidth = textContainer.offsetWidth;
   // definir une intervalle de défilement continu
    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) =>{
        const newPosition = prevPosition -1;
        if (newPosition <= -textWidth){return 0;}
        return newPosition;
    });}, 10);
  return ()=> clearInterval(scrollInterval);}, []);

  return (
  
<div className='bg-hp'>
    <div className='title' style={{padding:'2rem'}}>
      <div style={{display:'flex', alignItems:'center'}}>
        <h1 style={{ marginLeft:'5rem'}}>nous</h1>
        <h1 style={{border:'5px solid #2B388D', borderRadius:'90rem', padding:'.5rem 2rem .5rem 2rem'}}>co-créons</h1> {/*on hover div video*/}
      </div>
      <div>
        <h1 id='votre'>votre</h1>
        <h1><TextTransition springConfig={presets.gentle}>{words[index % words.length]}</TextTransition></h1>
      </div>
    </div>


    <div className="scrolling-banner">
      <div className="text-container" style={{ transform: `translateX(${scrollPosition}px)` }}> {/*Change le défilement horizontal en fonction de la position actuelle*/}
        {greetings.map((word, index) => (
          <div className="text" key={index}>
            {greetings}
          </div>
        ))}
      </div>
    </div>
</div>
  );
};
export default Intro;

//   // Répéter l'ensemble des salutations
//   const repeatedGreetings = Array.from({ length: 3 }).map((_, index) => (
//     <span key={index % greetings.length}>{greetings[index % greetings.length]}</span>
//   ));

//   return (
//     <div style={{ border: '1px solid black' }}>
//       <div className="greetings-container">
//         {repeatedGreetings}
//       </div>
//     </div>
//   );
// }

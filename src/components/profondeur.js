import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import fusain1 from '../assets/projets/fusains/fusain2.png';
import fusain2 from '../assets/projets/fusains/fusain1.png';
import fusain3 from '../assets/projets/fusains/fusain3.png';

const Profondeur = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const fusainGauche = document.getElementById('fusain-gauche');
  //   const fusainDroite = document.getElementById('fusain-droite');
  //   const fusainMilieu = document.getElementById('fusain-milieu');

  //   gsap.to(fusainGauche, {
  //     scrollTrigger: {
  //       trigger: fusainGauche,
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       markers: true,
  //       scrub: true, // Smooth scrolling effect
  //       pinspacing:false
  //     },
  //     x: '-1000px', // Move to the left by 2000px
  //     y: '-100px',
  //     scale: 2,
  //     ease: "power2.inOut",

  //   });

  //   gsap.to(fusainDroite, {
  //     scrollTrigger: {
  //       trigger: fusainDroite,
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       markers: true,
  //       scrub: true, // Smooth scrolling effect
  //       pinspacing:false
  //     },
  //     x: '500px', // Move to the right by 2000px
  //     z: '1200px',
  //     scale: 2,
  //     ease: "power2.inOut",
  //   });

  //   gsap.to(fusainMilieu, {
  //     scrollTrigger: {
  //       trigger: fusainMilieu,
  //       start: 'top top ',
  //       end: 'bottom bottom',
  //       markers: true,
  //       scrub: true, // Smooth scrolling effect
  //       pinspacing:false
  //     },
  //     y: '100px', // Move downward by 2000px,
  //     scale: 2,
  //     ease: "power2.inOut",

  //   });
  // }, []);

  return (
    <>
      <section>
      
        <div className='flexCenter'>
          <div className='flexwrapCenter' id='fusain-haut'>
            <div className='containerparallax' id='fusain-gauche'>
              <img src={fusain2} alt='Fusain' />
            </div>
            <div className='containerparallax' id='fusain-droite'>
              <img src={fusain3} alt='Fusain' />
            </div>
          </div>

          <div className='containerparallax' id='fusain-milieu'>
            <img src={fusain1} alt='Fusain' />
          </div>
        </div>

       < div style={{ position: 'absolute', top:'15%'}}>
            <h1>avec de la </h1>
            <h1 className='roseType' style={{ marginTop: '-1rem' }}>
              profondeur
            </h1>
          </div>

      </section>
    </>
  );
};

export default Profondeur;

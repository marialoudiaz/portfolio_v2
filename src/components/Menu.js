import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // Importer gsap depuis la bibliothèque gsap
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'; // Importer CSSRulePlugin depuis la bibliothèque gsap
import '../App.scss';
import logomedaillon from '../assets/logo-iris.png'; // À changer

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeItemIndicatorRef = useRef(null);
  const toggleButtonRef = useRef(null);

  

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });
    gsap.registerPlugin(CSSRulePlugin);
    // const activeItemIndicator = CSSRulePlugin.getRule('.menu-item p#active::after');
   
    const rule = CSSRulePlugin.getRule("::after");
    gsap.to(rule, { duration: 1, cssRule: { transform:'translateY(0) rotate(-45deg)' } });
    
    gsap.set('.menu-item p', { y: 225 });

    timeline.to('.overlay', {
      duration: 1.5,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'power4.inOut',
    });
    timeline.to(
      '.menu-item p',
      {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: 'power4.out',
      },
      '-=1'
    );
    timeline.to(
      rule,
      {
        width: '100%',
        duration: 1,
        ease: 'power4.out',
        delay: 0.5,
      },
      '<'
    );
    timeline.to(
      '.sub-nav',
      {
        bottom: '10%',
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      },
      '<'
    );

    const handleClick = () => {
      if (isOpen) {
        timeline.reverse();
      } else {
        timeline.play();
      }
      setIsOpen(prevState => !prevState);
    };

    toggleButtonRef.current.addEventListener('click', handleClick);

    return () => {
      toggleButtonRef.current.removeEventListener('click', handleClick);
    };
  }, [isOpen]);




  return (
    <div className='navigation'>
      <nav>
        <div className='info'>
          <p>maria lou diaz</p>
        </div>
        <div className='logo'>
            <a href='#'>
              <img src={logomedaillon} alt='logo' style={{width:'50px'}}/>
            </a>
        </div>
        <div className='toggle-btn'>
          <button 
          className='burger' 
          ref={toggleButtonRef}
          // onClick={this.classList.toggle('active')}
          ></button>
        </div>
      </nav>


      {/*PAGE DU MENU AU SURVOL*/}
      <div className='overlay'>
        <div className='overlay-menu'>
          <div className='menu-item'>
            <p>
              <a href='#home'>Intro</a>
            </p>
          </div>
          <div className='menu-item'>
            <p>
              <a href='#projets'>Projets</a>
            </p>
          </div>
          <div className='menu-item'>
            <p>
              <a href='#contact'>Contacter</a>
            </p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Menu;

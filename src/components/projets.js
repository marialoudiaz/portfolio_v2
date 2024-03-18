import React from 'react';
import {useRef, useState, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'

import '../App.scss';
import image1 from '../assets/projets/mj.png';
import video2 from '../assets/projets/video-onsight.mp4';
import video3 from '../assets/projets/video_type.mp4';
import image4 from '../assets/projets/cdv_cards.jpg';
import image5 from '../assets/projets/topos.jpg';
import image6 from '../assets/projets/persona_poster.jpg';
// VIDEOS
import video1 from '../assets/projets/video-onsight.mp4';
// import video2 from '../assets/projets/persona_poster.jpg';
// import video3 from '../assets/projets/persona_poster.jpg';
import video4 from '../assets/projets/video-onsight.mp4';
import video5 from '../assets/projets/video-onsight.mp4';
import video6 from '../assets/projets/video-onsight.mp4';
// CAROUSEL
import prev from '../assets/icons/icon-eye-1.png';
import next from '../assets/icons/icon-eye-2.png';
import arrow from '../assets/icons/icon-arrow.png';




function Projets() {
  const gridContainerRef = useRef(null);
  const descriptionRef = useRef(null);
  const imgContainerRef = useRef([]);
  const textRef = useRef(null); // Ajout de la référence pour l'élément texte
  
  const [isHovered, setIsHovered] = useState(false);
  const [imageSource, setImageSource] = useState(prev);
  const [videoSource, setVideoSource] = useState(null);
  const handleHover = () => {setImageSource(next);};
  const handleHoverOut = () => {setImageSource(prev);};


// Navigation du carousel
  const [currentIndex, setCurrentIndex] = useState(0);
// Utilise l'index pour cibler la section (objet rendu)
  const handleNext = (index) => {
// Scroll to the corresponding project description based on the index
    const descriptionElements = document.querySelectorAll('.project-description');
    const descriptionElement = descriptionElements[index];
    if (descriptionElement) {
      descriptionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handlePrev = (index) => {
// Scroll to the corresponding project description based on the index
    const descriptionElements = document.querySelectorAll('.projectImgContainer');
    const descriptionElement = descriptionElements[index];
    if (descriptionElement) {
      descriptionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const customStyles = {
    fontSize:'1.5rem',
    padding: '1em',  
    textAlign:'left',
  } 
  const imgStyle={
    display: 'flex',
    fleWrap: 'nowrap',
    margin: '.2rem 0rem 0rem .3rem', 
    width: '50px',
    transition: 'transform 2s ease', // Adjust the duration and easing as needed
  }
  const projectsArr = [
    {
      id: 1,
      image: video2,
      video: video1,
      title: 'Onsight',
      baseline: 'Une application mobile pour garder un oeil sur tes films',
      text:'OnSight est une application qui te permet de chercher n\'importe quel film ou série et de l\'ajouter à une liste que tu peux régulièrement venir mettre à jour selon les nouvelles sorties ou envies.',
      text2:'Tout cela avec un design retro pour mes ami.es cinéphiles.Disponible sur iOS',
      link: 'découvrir',
      onClick: () => window.open('https://apps.apple.com/fr/app/movies-on-sight/id6450311314', '_blank')
    },
    {
      id: 2,
      image: image1,
      video: video2,
      title: 'Matchjobs',
      baseline: 'Une nouvelle ère de recruitement',
      text:'MatchJobs c\'est une plateforme de recrutement basé sur les compétences, l\'expertise et le potentiel, sans aucun préjugé.',
      text2:'Ce concept révolutionnaire offre la possibilité de trouver le travail parfait ou le candidat idéal, en mettant l\'accent sur ce qui compte vraiment : les compétences professionnelles.',
      link: 'découvrir',
      onClick: () => window.open('https://apps.apple.com/fr/app/movies-on-sight/id6450311314', '_blank')
    },
    {
      id: 3,
      image: video3,
      video: video3,
      title: 'Pile-Poële',
      baseline: 'Une fonte culinario-inclusive',
      text:' Promouvoir un humanisme inclusif axé sur la cuisine. C\'est ce qui résumerait en une phrase le projet Pile-Poële. Pile-Poële est une fonte à vocation inclusive dont la palette de caractères autant qu’elle permet la parité des genres propose une universalité du langage',
      text2:'en remplaçant les mots associés aux ustensiles et aliments par leurs signifiés.La cuisine, terrain d’expérimentations culturelles et identitaires, devient propice à une réflexion autour de sa transmission écrite.',
      link: 'découvrir',
      onClick: () => window.open('https://apps.apple.com/fr/app/movies-on-sight/id6450311314', '_blank')
    },

    {
      id: 4,
      image: image4,
      video: video4,
      title: 'Identité visuelle',
      baseline: 'Une création à notre image',
      text:'Logotypes, monogrammes, carte de visite et autres supports imprimés ou animés sont autant de manières de donner un accent unique à votre marque ou entreprise.',
      text2:'',
      
    },
    {
      id: 5,
      image: image5,
      video: video5,
      title: 'Topographies',
      baseline: 'Une sélection de fusains',
      text:'Topographies est une série de fusains & charbons retraçant un arpentage de la ville de Nîmes. Cette collection de croquis a pour but d\'archiver et de raconter la ville par ses ornements.',
      text2:'La carte de Nîmes devient vivante : topographique.',
    },
    {
      id: 6,
      image: image6,
      video : video6,
      title: 'Posters',
      baseline: 'Une sélection de mes amours ciné',
      text:'Je vous partage ici un projet passion, où je me suis amusée à créer des posters des films que j\'ai le plus apprécié.',
      text2:'',
    }
  ];
  
  const [scrollPosition, setScrollPosition]= useState(0);
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const fusainGauche = document.getElementById('fusain-gauche');
      const fusainDroite = document.getElementById('fusain-droite');
      const fusainMilieu = document.getElementById('fusain-milieu');

      gsap.to(fusainGauche, {
        scrollTrigger: {
          trigger: fusainGauche,
          start: 'top top',
          end: 'bottom bottom',
          markers: true,
          scrub: true, // Smooth scrolling effect
          pinspacing:false
        },
        x: '-1000px', // Move to the left by 2000px
        y: '-100px',
        scale: 2,
        ease: "power2.inOut",
      });
  
      gsap.to(fusainDroite, {
        scrollTrigger: {
          trigger: fusainDroite,
          start: 'top top',
          end: 'bottom bottom',
          markers: true,
          scrub: true, // Smooth scrolling effect
          pinspacing:false
        },
        x: '500px', // Move to the right by 2000px
        z: '1200px',
        scale: 2,
        ease: "power2.inOut",
      });
  
      gsap.to(fusainMilieu, {
        scrollTrigger: {
          trigger: fusainMilieu,
          start: 'top top ',
          end: 'bottom bottom',
          markers: true,
          scrub: true, // Smooth scrolling effect
          pinspacing:false
        },
        y: '100px', // Move downward by 2000px,
        scale: 2,
        ease: "power2.inOut",
  
      });
    }, []);


//Étendre chaque caractère au depart 
    // Au scroll ramener à un écart normal
    // Déplacer sous sections projets
    const phrase = "en 2024"; // chaine de caractères a animer
    let refs = useRef([]); // Références aux élèments (lettres séparés)
    const body = useRef(null); // hook useRef permet de créer référence (DOM)

    useEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      createAnimation();
    }, [])

  //l'animation
    const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: body.current, // conteneur déclencheur
          scrub: true,
          start: 'top',
          end: 'end',
        },
        marginRight: -10,
      });
    };


    const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach( (word, i) => { // divise en mots
    const letters = splitLetters(word); // pour chaque mot appelle fonction splitLetters => obtenir tableau de lettres
    body.push(<p key={word + "_" + i}>{letters}</p>)
    })
      return body // renvoie tableau
    }
    const splitLetters = (word) => {
      let letters = []
      word.split("").forEach( (letter, i) => { // mot reçu divisé en chars
      letters.push(<span key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>) 
    })
    return letters;
    }



return (
    <div>
      <section id='projets'>
        <h1 ref={body} className='body-type'>{splitWords(phrase)}</h1>

{/* // La grille avec tous les projets selectionnés */}
       <div className='grid-container-projets' ref={gridContainerRef}>
        {projectsArr.map((project, index) => (

// Le projet 
        <div className='project-wrapper' key={index} style={{marginBottom:'2rem'}}>

          {/* //Div 1 avec l'image */}
          <div className='projectImgContainer' ref={imgContainerRef}>
          

          {/* /VIDEO ON HOVER*/}
          <video className='projectHoverVideo' autoPlay loop muted>
            <source src={projectsArr[index].video} type='video/mp4' />
          </video>
          
          {/* /si source est video ou img*/}
          {projectsArr[index].image.includes('.mp4') ? 
          (
            <video className='projectImg' style={{height:'100vh'}}autoPlay loop muted>
              <source src={projectsArr[index].image} type='video/mp4' />
            </video>
          ) 
          : 
          (
            <div className='projectImg' style={{backgroundImage: `url(${projectsArr[index].image})`, backgroundSize: 'cover'}}></div>
          )}              
          </div>

          {/* //Div 2 avec le texte */}
            <div className='project-description' ref={descriptionRef}>
              <h2 className='project-title' >{projectsArr[index].baseline}</h2>
              <p className='project-txt' style={{paddingLeft:'3rem', paddingRight:'2rem'}} >{projectsArr[index].text}</p>
              <p className='project-txt'style={{paddingRight:'3rem'}}>{projectsArr[index].text2}</p>
              
              {projectsArr[index].onClick ? (
               <div className='project-link'onClick={projectsArr[index].onClick}>{projectsArr[index].link}</div>
              ) : (
              <div></div>
              )}
                <div className='carousel-btn' style={{marginLeft:'1rem',marginBottom:'.2rem'}} 
                  onClick={() => {setCurrentIndex(index);handlePrev(index);}}>
                    <img src={arrow} alt='an icon of an arrow to go back to previous image' />
                    <p>précédent</p>
                  </div>

            </div>  

            <div className='project-details'>
                <p style={{fontSize:'1.5rem'}}>{projectsArr[index].title}</p>
                  <div className='carousel-btn' style={{marginLeft:'1rem',marginBottom:'.2rem'}} 
                    onClick={() => {setCurrentIndex(index);handleNext(index);}}>
                    <img src={imageSource} alt='an icon of an eye to see the project description when clicked' onMouseOver={handleHover} onMouseOut={handleHoverOut} style={imgStyle}/>
                  </div>
            </div>
        </div>
  ))}
  </div>
  </section>

  <section style={{marginTop:'9rem'}}>
      <div className='behance'>
        <h4><a target="_blank" rel='noreferrer' href='https://www.behance.net/gallery/161736831/Portfolio-2023-Maria-Lou-Diaz'>+ sur behance</a></h4>
      </div>
  </section>
    </div>
  )
}

export default Projets
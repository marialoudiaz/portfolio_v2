import React, { useState, useEffect, useRef} from 'react'
import '../App.scss';
import TextTransition, { presets } from 'react-text-transition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importez les icônes individuellement
import ContactForm from './contactForm';
import muguet from '../assets/projets/muguet.mp4'


const Formulaire = () => {
  const words = ['auto-entrepreneur.se','petite entreprise','start-up','porteur.se de projet','idéaliste','rêveur.se']; 
  const [index, setIndex] = React.useState(0);


  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return(
    <>
       <section id='contact' style={{marginBottom:'.5rem'}}>
        <div className='flex-form-container'>
          
          {/* PARTIE GAUCHE */}
          <div  classname='flex-form-container-item' style={{margin: '0rem 0.5rem 10rem 0.5rem', position:'relative'}}>
            <h1>racontons </h1>
            <h1>votre</h1>
            <h1 className='roseType' style={{ marginTop: '-1rem' }}>histoire</h1>
            {/* Partie textuelle */}
            <div style={{ borderTop: 'black 1px solid', paddingTop: '1rem' }}>
              <TextTransition className='textTransition' springConfig={presets.gentle}>{words[index % words.length]}</TextTransition>
              <p style={{ width: '30vw'}}>
                Collaborons, pour emmener votre business à l’étape supérieure & le faire décoller. Des idées, des questions, une terrible envie de me contacter ? <b>Je vous écoute.</b>
              </p>
              <div className='social'>
                <button className='buttonIn'><a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/maria-lou-diaz-1b7ba8143/'><FontAwesomeIcon className='svgIcon' icon={faLinkedinIn} style={{ color: "white" }} /></a></button>
                <button className='buttonGh'><a target="_blank" rel='noreferrer' href='https://github.com/marialoudiaz'><FontAwesomeIcon className='svgIcon' icon={faGithub} style={{ color: "white" }} /></a></button>
                <button className='buttonIs'><a target="_blank" rel='noreferrer' href='https://www.instagram.com/studio_mld/'><FontAwesomeIcon className='svgIcon' icon={faInstagram} style={{ color: "white" }} /></a></button>
              </div>
            </div>
          </div>

          {/* PARTIE DROITE */}
          <div className='formulaire'>
            <ContactForm />
          </div>
          <div id='muguet'>
            <video id='muguetvideo' style={{ width: '30vw' }} autoPlay loop muted playsInline>
              <source src={muguet} type="video/mp4"/>
            </video>
          </div>
        </div>
      </section>
  </>
)
}

export default Formulaire

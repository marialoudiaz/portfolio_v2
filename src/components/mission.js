import React from 'react'
import '../App.scss';

const Mission = () => (
  <>
  <section id='services'>
  <div className='flex-wrap'>
    <div>
    <h1>ma mission</h1>
    <h1 style={{marginTop:'-1rem'}}>à vos côtés,</h1>
    </div>
    
    <p>J’ai à coeur d’entretenir une <b> relation basée sur la confiance</b> ainsi je vous accompagne tout le long de votre parcours en prenant soin de rendre le processus <b>simple, claire et attrayant</b>.
Je vous propose une offre de service et des solutions créatives complètes afin de <b>donner vie à votre projet</b> de la meilleure des manières. Nous définissons, ensemble, la formule qui vous convient le plus pour un <b>projet sur-mesure </b>répondant à vos attentes.</p>
    <div className='flex-wrap' style={{margin:'0'}} >
    <div className='pill'><p>une palette de services complète</p></div>
    <div className='pill'><p>une offre sur-mesure</p></div>
    <div className='pill'><p>un projet qui vous ressemble</p></div>
    <div className='pill'><p>simplifier votre parcours</p></div>
    <div className='pill'><p>communiquer simplement</p></div>
    <div className='pill'><p>pas de jargon</p></div>
    </div>
  </div>
  </section>
  </>
  )

export default Mission

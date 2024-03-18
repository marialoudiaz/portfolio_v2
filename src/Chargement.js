import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import video from './assets/projets/artisan-codeur.mp4'
import './App.scss';


const Chargement = () =>{
  const navigate = useNavigate();

  useEffect(() => {
    // Redirection vers la page suivante après 3 secondes
    const redirectTimer = setTimeout(() => {
     navigate('/onepage');
    }, 3000);

    // Nettoyage du timer lorsque le composant est démonté
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div>
      <video className='video' autoPlay muted>
        <source src={video} type='video/mp4'/>
      </video> 
    </div>
  );
};
export default Chargement;


  

  
import React from 'react';
import './App.scss';


import Header from './components/header.js'
import Accueil from './components/accueil';
import Intro from './components/intro.js';
import Competences from './components/competences';
import Mission from './components/mission';
import Projets from './components/projets.js';
import Showreel from './components/showreel';
import Profondeur from './components/profondeur';
import Magie from './components/magie';
import Formulaire from './components/formulaire';
import Footer from './components/footer';
import Monogramme from './components/monogramme.js';


const Onepage = () => (
  <>
    <div className="scrollable-container">
      <Header />
      <Accueil />
      <Intro />
      <Competences />
      <Mission />
      <Projets />
      <Showreel />
      <Profondeur />
      <Magie />
      <Formulaire />
      <Footer />
      <Monogramme />
    </div>
  </>
);
export default Onepage;

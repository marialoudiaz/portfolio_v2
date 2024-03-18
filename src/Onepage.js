import React from 'react';
import {useRef, useState, useEffect, useContext} from 'react';
import DotRing from "./components/DotRing.js";
import { MouseContext } from "./context/mouse-context.js";
import './App.scss';


import Header from './components/header.js'
import VideoReveal from './components/VideoReveal.js';
import Intro from './components/intro.js';
import Competences from './components/competences';
import Mission from './components/mission';
import Projets from './components/projets.js';
// import Profondeur from './components/profondeur';
import Formulaire from './components/formulaire';
import Footer from './components/footer';
import Monogramme from './components/monogramme.js';
import Menu from './components/Menu.js';

function Onepage() {

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

return (
  <>

   <DotRing />

    <div className="scrollable-container">
      <div style={{zIndex:'1001'}}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}></div>

      <Menu />
      <VideoReveal />
      <Mission />
      <Competences />
      <Projets />
      {/* <Profondeur /> */}
      {/* <Magie /> */}
      <Formulaire />
      <Footer />
      <Monogramme />
    </div>
  </>
)
}

export default Onepage;
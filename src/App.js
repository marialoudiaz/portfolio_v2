// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chargement from './Chargement';
import Onepage from './Onepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chargement />} />
        <Route path="/onepage" element={<Onepage />} />
      </Routes>
    </Router>
        
  );
};

export default App;

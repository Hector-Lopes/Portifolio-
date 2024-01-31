import React from 'react';


import Upmenu from './components/Upmenu';
import Profile from './components/Profile';


import './App.css';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
    <Upmenu></Upmenu>
    <Profile></Profile>
    <AboutMe></AboutMe>
    <Skills></Skills>
    </div>
  );
}

export default App;

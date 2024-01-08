import React from 'react';

import MyFoto from './components/MyImage';
import Button from './components/Button';

import './App.css';

function App() {
  return (
    <div className="App">
<div id="container-upmenu">
      <div id="container-upmenu-buttons">
      <Button>ABOUT ME</Button>
      </div>
    </div>
    <div id="container-profile">
      <div id="container-profile-img">
        <MyFoto></MyFoto>
      </div>
      <div id="container-profile-text">
        <div id="container-profile-text-texts">
          <span className="text1">HECTOR LOPES</span>
          <span className="text2">FULL STACK DEVELOPER </span>
          <span className="text3"> SEJA BEM VINDO (A) A O MEU PORTIFÓLIO </span>
          <span className="text4">
            “ACREDITE QUE VOCÊ PODE E VOCÊ ESTÁ NO MEIO DO CAMINHO."— THEODORE
            ROOSEVELT
          </span>
        </div>
      </div>
    </div>
    <div id="container-aboutme"></div>
    </div>
  );
}

export default App;

import React from 'react';

import MyFoto from './components/MyImage';
import Upmenu from './components/Upmenu';

import './App.css';

function App() {
  return (
    <div className="App">
    <Upmenu></Upmenu>
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
    <div id="container-aboutme">
    <span className="text1">ABOUT ME</span>
    <div id="container-aboutme-text">Olá, meu nome é Hector Lopes, tenho 20 anos. Como quase todo desenvolvedor, me interessei por tecnologia logo cedo, especialmente pelos famosos jogos e computadores. Iniciei minha carreira na área cursando o ensino médio integrado ao técnico de informática, e posteriormente, ingressei na faculdade de Ciências da Computação. Consegui meu estágio e hoje sou desenvolvedor full stack de softwares.

    </div>
    </div>
    </div>
  );
}

export default App;

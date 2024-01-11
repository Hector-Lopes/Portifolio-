import React from 'react';


import Upmenu from './components/Upmenu';
import Profile from './components/Profile';

import './App.css';

function App() {
  return (
    <div className="App">
    <Upmenu></Upmenu>
    <Profile></Profile>
    <div id="container-aboutme">
    <span className="text1">ABOUT ME</span>
    <div id="container-aboutme-text">Olá, meu nome é Hector Lopes, tenho 20 anos. Como quase todo desenvolvedor, me interessei por tecnologia logo cedo, especialmente pelos famosos jogos e computadores. Iniciei minha carreira na área cursando o ensino médio integrado ao técnico de informática, e posteriormente, ingressei na faculdade de Ciências da Computação. Consegui meu estágio e hoje sou desenvolvedor full stack de softwares.

    </div>
    </div>
    </div>
  );
}

export default App;

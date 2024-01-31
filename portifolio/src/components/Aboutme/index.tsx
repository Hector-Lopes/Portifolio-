import React, { ReactNode } from 'react';
import styles from './Aboutme.module.css';

import ContainerBlue from '../ContainerBlue';


const AboutMe = () => {
    return ( 
      <ContainerBlue  title='ABOUT ME'>
        <div id={styles['container-aboutme-text']}>
          <div id={styles['container-blue-text']}>
            <span>Olá, meu nome é Hector Lopes, tenho 20 anos. Como quase todo desenvolvedor, me interessei por tecnologia logo cedo, especialmente pelos famosos jogos e computadores. Iniciei minha carreira na área cursando o ensino médio integrado ao técnico de informática, e posteriormente, ingressei na faculdade de Ciências da Computação. Consegui meu estágio e hoje sou desenvolvedor full stack de softwares.</span>
          </div>
        </div>
      </ContainerBlue>
    );
  };
  
  
  
  export default AboutMe


import React, { ReactNode } from 'react';
import styles from './ContainerBlue.module.css';



type Props = {
  children: ReactNode;
  title:String;
};



const ContainerBlue = ({children,title}:Props) => {
  return <div id= {styles['container-blue']}>
   <span className={styles['container-blue-title']}>{title}</span>
<div id={styles['container-blue-text']}>
{children}
</div>
  </div>
  
};



export default ContainerBlue

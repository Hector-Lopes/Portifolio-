import React, { ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
    children: ReactNode;
};
const Button = ({ children }:Props) => {
  return <button className={styles['upmnenu-buttons']}><span>{children}</span></button>
};



export default Button
import React from "react";
import styles from './Profile.module.css'


import myImage from '../../images/hector_foto_2.png'


const Profile=()=>{
    return (
    <div id={styles['container-profile']}>
<div id={styles['container-profile-img']}>
<img className={styles['img_foto']} src={myImage} alt="" />
</div>
<div id={styles['container-profile-text']}> 
  <div id={styles['container-profile-text-texts']}> 
    <span className={styles['text1']}>HECTOR LOPES</span> 
    <span className={styles['text2']}>FULL STACK DEVELOPER </span>
    <span className={styles['text3']}> SEJA BEM VINDO (A) A O MEU PORTIFÓLIO </span>
    <span className={styles['text4']}>
      “ACREDITE QUE VOCÊ PODE E VOCÊ ESTÁ NO MEIO DO CAMINHO."— THEODORE
      ROOSEVELT
    </span>
  </div>
</div>
</div>
    )
}

export default Profile


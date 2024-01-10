import React from "react";
import styles from './Upmenu.module.css'



import Button from "../Button";

const Upmenu  =()=>{

return <div id= {styles['container-upmenu']}>     
<div id= {styles['container-upmenu-buttons']}>   
<Button>ABOUT ME</Button>
<Button>SKILLS</Button>
<Button>PROJETOS</Button>
<Button>CONTACTS</Button>
</div>
</div>

}

export default Upmenu
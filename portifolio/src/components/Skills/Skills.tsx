import React from "react";
import styles from'./Skills.module.css'

import ContainerBlue from "../ContainerBlue";

import REACT_ICON from '../../images/logo-react.svg'
import NODEJS_ICON from '../../images/logo-nodejs.svg'
import JAVA_SCRIPT from '../../images/logo-javascript.svg'
import JWT_ICON from '../../images/jwt-logo.png'
import GIT_ICON from '../../images/logo-github.svg'
import CSS_ICON from '../../images/logo-css3.svg'
import SQL_ICON from '../../images/servidor-sql.png'
import MYSQL_ICON from '../../images/mysql.png'
import PHP_ICON from '../../images/php.png'
import JQUERY_ICON from '../../images/jquery_logo_icon_181281.svg'
import EXPRESS_ICON from '../../images/express_original_logo_icon_146527.svg'
import TYPE_SCRIPT from '../../images/typescript_original_logo_icon_146317.png'

type SKILL ={
    NOME: string;
    ICON: string;
}

let SKILLS: SKILL[] =[
{NOME:'JavaScript',
ICON:JAVA_SCRIPT},
{NOME:'CSS',
ICON:CSS_ICON},
{NOME:'SQL',
ICON:SQL_ICON},
{NOME:'MySQL',
ICON:MYSQL_ICON},
{NOME:'PHP',
ICON:PHP_ICON},
{NOME:'NodeJs',
ICON:NODEJS_ICON},
{NOME:'Git',
ICON:GIT_ICON},
{NOME:'React',
ICON:REACT_ICON},
{NOME:'Jquery',
ICON:JQUERY_ICON},
{NOME:'JWT',
ICON:JWT_ICON},
{NOME:'TypeScript',
ICON:TYPE_SCRIPT},
{NOME:'Express',
ICON:EXPRESS_ICON,
},

]

const Skills = () => {
    const Skill = SKILLS.map((skill, index) => {
        return (
            <span key={index} className={styles['card_skill']}>
                {skill.NOME}
                <span className={styles['icon_skill']}>
                    <img className={styles['icon_skill_img']} src={skill.ICON} alt="" />
                </span>
            </span>
        );
    });

    return (
        <ContainerBlue title='SKILLS'>
            <div id={styles['card_skills']}>
                {Skill}
            </div>
        </ContainerBlue>
    );
};

export default Skills
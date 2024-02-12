import React from "react";
import styles from'./Skills.module.css'

import ContainerBlue from "../ContainerBlue";

type SKILL ={
    NOME: string;

}

let SKILLS: SKILL[] =[
{NOME:'JavaScript'},
{NOME:'CSS'},
{NOME:'SQL'},
{NOME:'MySQL'},
{NOME:'PHP'},
{NOME:'NodeJs'},
{NOME:'Git'},
{NOME:'React'},
{NOME:'Jquery'},
{NOME:'JWT'},
{NOME:'Bootstrap'},


]

const Skills = () => {
    const Skill = SKILLS.map((skill, index) => {
        return (
            <span key={index} className={styles['card_skill']}>{skill.NOME}</span>
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
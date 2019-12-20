import { Icon, InlineIcon } from '@iconify/react';
import reactIcon from '@iconify/icons-simple-icons/react';
import React from 'react';
import './About.scss';

let icons =[
    "logo:angular-icon",
    "logo:nodejs",
    "logo:typescript-icon",
    "logo:firebase",
    "logo:aws",
    "logo:mongodb",
    "logo:mysql",
    "logo:postgresql",
    "logo:c-plusplus",
    "logo:c",
    "logo:qt",
    "logo:java",
    "logo:python",
    "logo:php",
    "logo:linux-tux",
    "logo:figma"
  ];

  function About(){
    return(
        <div className="about">
            <div className="about_skills">
                <h1>Habilidades</h1>
                <h3>Conjunto de tecnologias que he utilizado para desarrollar soluciones:</h3>
                <Icon icon={reactIcon}/>
            </div>
            <div className="about_title">

            </div>
        </div>
    );
}

export default About;


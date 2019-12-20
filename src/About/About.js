import React from 'react';
import {FaAngular,FaReact,FaNodeJs, FaPython, FaPhp, FaJava,  } from 'react-icons/fa';
import { DiMongodb, DiAws, DiGit, DiFirebase, DiMysql, DiPostgresql, DiMsqlServer, DiCss3 } from "react-icons/di";
import './About.scss';
let size = window.innerWidth >= 768 ? 96 :48 ;

  function About(){
    return(
        <div className="about fadeIn">
            <div className="about_skills">
                <h1>Habilidades</h1>
                <h3>Conjunto de tecnologias que he utilizado para desarrollar soluciones:</h3>
                <div className="about_skills_icons">
                <div className="icon">
                    <FaAngular size={size}/>
                </div>
                <div className="icon">
                    <FaReact size={size}/>
                </div>
                <div className="icon">
                    <FaNodeJs size={size}/>
                </div>
                <div className="icon">
                    <FaPython size={size}/>
                </div>
                <div className="icon">
                    <FaPhp size={size}/>
                </div>
                <div className="icon">
                    <DiMongodb size={size}/>
                </div>
                <div className="icon">
                    <DiMsqlServer size={size}/>
                </div>
                <div className="icon">
                    <DiPostgresql size={size}/>
                </div>
                <div className="icon">
                    <DiMysql size={size}/>
                </div>
                <div className="icon">
                    <FaJava size={size}/>
                </div>
                <div className="icon">
                    <DiGit size={size}/>
                </div>
                <div className="icon">
                    <DiAws size={size}/>
                </div>
                <div className="icon">
                    <DiFirebase size={size}/>
                </div>
                <div className="icon">
                    <small>
                    Qt 5
                    </small>
                </div>
                <div className="icon">
                    <small >Firebase</small> 
                </div>
                <div className="icon">
                    <small ></small> 
                </div>
                </div>
            </div>
            <div className="about_description">
                <h1>Sobre mi</h1>
                <h2>Estudiante de Ingeniería en IT y desarrollador web.</h2>
                <h4>
                Bienvenido! Soy un estudiante de Ingeniería en TI por la 
                Facultad de Ciencias de la Computación de Benémerita Universidad Autónoma de Puebla que cursa su sexto semestre.
                </h4>
                <h4>
                Mis intereses principales son el desarrollo web, UI/UX, IoT, cómputo en la nube, ciencia de datos e inteligencia artificial. También estudié Economía un par de años por lo que encuentro interés en banca e inversión, análisis de riesgo y politicas públicas.
                </h4>
                    <ul>
                        <li >
                        Desarrollo front end con Angular 8 y React Js.
                        </li>
                        <li>
                        Desarrollo de aplicaciones de escritorio con Qt 5.
                        </li>
                        <li>
                        Cómputo en la nube. (Amazon Web Services, Google Cloud Platform and Firebase).
                        </li>
                        <li>
                        Desarrollo de back end con NodeJs, PHP, Java Servlet, JSP y Python.
                        </li>
                        <li>
                        Manejo de bases de datos SQL y NoSQL: RDS, MySQL, MSSQL, PostgreSQL, MongoDB, Cloud SQL and Cloud Firestore.
                        </li>
                        <li>
                        Soluciones IoT con Raspberry Pi.
                        </li>
                        <li>
                        Arquitectura de sistemas.
                        </li>
                    </ul>
            </div>
        </div>
    );
}

export default About;


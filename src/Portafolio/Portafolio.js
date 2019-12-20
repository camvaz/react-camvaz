import React from 'react';
import './Portafolio.scss';
import {FaGithub} from 'react-icons/fa';
function Portafolio(){
    return(
        <div className="portafolio fadeIn">
            <div className="portafolio_proyecto">
            <img alt="mac" src={require('../assets/img/parking.jpeg')}/>
            <h1>Car Park</h1>
            <p>Aplicacion web que reserva espacios de estacionamiento. Angular 8 y Firebase.
            </p>
            <div className="buttons">
                <a href="https://hellofirebase-f0dc5.firebaseapp.com/">
                    Ir a proyecto
                </a>
                 <div className="icon">
                 <a href="https://github.com/AngelGenis/CarPark">
                 <FaGithub/> 
                 </a>
                 </div>
            </div>
            </div>
        </div>
    );
}

export default Portafolio;


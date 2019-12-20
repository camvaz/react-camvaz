import React from 'react';
import './Portafolio.scss';

function Portafolio(){
    return(
        <div class="portafolio fadeIn">
            <div class="portafolio_proyecto">
            <img alt="mac" src={require('../assets/img/parking.jpeg')}/>
            <h1>Car Park</h1>
            <p>Aplicacion web que reserva espacios de estacionamiento. Angular 8 y Firebase.</p>
            <a>
            Ir a proyecto
            </a>
            </div>
        </div>
    );
}

export default Portafolio;


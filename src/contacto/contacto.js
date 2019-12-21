import React from 'react';
import './contacto.scss';

function Contacto(){
    return( 
        <div className="contacto fadeIn">
          <div className="contacto_form">
            <h1>Sigamos en contacto.</h1>
            <h4>Ingresa los siguientes datos para contactarte</h4>
            <div className="contacto_form_inputs">
            <input type={'text'} className="input_inline" placeholder="Nombre"></input>
            <input type={'text'} className="input_inline" placeholder="Email"></input>
            <textarea type={'text'} className="input_block" placeholder="Mensaje..."></textarea>
            <button type='button'>Enviar</button>
            </div>
          </div>
            <div className="contacto_img">
              <img src={require('../assets/img/contacto.jpg')} alt="contacto"></img>
            </div>
        </div>
      );
}

export default Contacto;

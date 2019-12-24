import React from 'react';
import axios from 'axios';
import './contacto.scss';

// let req = async () => {
//   const res = await fetch('https://us-central1-camvazweb.cloudfunctions.net/widgets/lang/es/navbar', {
//     mode:'no-cors',
//     method: 'GET',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//   }) 
//   console.log(res);
// }

// req();
axios({
  method:'get',
  url:'https://us-central1-camvazweb.cloudfunctions.net/widgets/lang/es/navbar',
  responseType: 'json',
  headers: {'Access-Control-Allow-Origin': '*'},

}).then(res => {
  console.log(res);
}).catch(err=>{
  console.log(err)
})

function Contacto(){
    return( 
        <div className="contacto fadeIn">
          <div className="contacto_form">
            <h1>Sigamos en contacto.</h1>
            <h4>Ingresa los siguientes datos para contactarte.</h4>
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

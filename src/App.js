import React from 'react';
import Navbar from './navbar/navbar';
import Intro from './intro/intro';
import About from './About/About';
import Portafolio from './Portafolio/Portafolio';
import Contacto from './contacto/contacto';
// import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.scss';
// import * as $ from 'jquery';
// import mac from './assets/mac.jpg';
// addEvent(window,'load', inicializarEventos, true);

// function inicializarEventos()
// {
//   document.getElementById("id").addEventListener('click',jugar,true);
// }
// let conexion1;

// function jugar(e){
//   e.preventDefault();
//   e.stopPropagation();

//   conexion1=crearXMLHttpRequest();
//   conexion1.onreadystatechange = actualizarPagina;
//   conexion1.withCredentials = "true";

//   conexion1.open('post','https://us-central1-camvazweb.cloudfunctions.net/widgets/lang', true);
//   conexion1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   conexion1.send({object:{lang:'es',component:'navbar'}}); 
// }
 
// function actualizarPagina() {
//   let nuevaGanancia = conexion1.responseText;
//   if (conexion1.readyState == 4) {
//     if (conexion1.status == 200)
//       console.log(nuevaGanancia)
//     else
//       console.log(conexion1.statusText);
//   } else {
//   }
// }


// function addEvent(elemento,nomevento,funcion,captura)
// {
//   if (elemento.attachEvent)
//   {
//     elemento.attachEvent('on'+nomevento,funcion);
//     return true;
//   }
//   else  
//     if (elemento.addEventListener)
//     {
//       elemento.addEventListener(nomevento,funcion,captura);
//       return true;
//     }
//     else
//       return false;
// }

// function crearXMLHttpRequest() 
// {
//   var xmlHttp=null;
//   xmlHttp = new XMLHttpRequest();
//   return xmlHttp;
// }

// const response = fetch('https://us-central1-camvazweb.cloudfunctions.net/widgets/lang', {
//   mode:'no-cors',
//   method: 'POST',
//   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//   body: {object:{lang:'es',component:'navbar'}},
// }).then(e =>{
//   console.log('noerrror'+e);
// }).catch(err =>{
//   console.log('error'+err);
// })
// req();

 function App() {
  return (
    <Router>
      <div className="rootdiv">
        <div className="container">
          <Navbar />
          <Route path="/" exact component={Intro}/>
          <Route path="/contacto" exact component={Contacto}/>
          <Route path='/about' component={About}/>
          <Route path="/portafolio" component={Portafolio}/>
        </div>
        <div className="container2">
          <div className="footer">
            <div className="footer_content">
              <p>Victor Campos | 2019.</p>
            </div>
          </div>
        </div>
      </div>
    </Router> 
  );
}

export default App;

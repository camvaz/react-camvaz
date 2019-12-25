import React from 'react';
import axios from 'axios';
import * as $ from 'jquery';
import './contacto.scss';
import { toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 2000,
  draggable: false,
  //etc you get the idea
});
// let req = async () => {
//   const res = await fetch('https://us-central1-camvazweb.cloudfunctions.net/widgets/lang/es/navbar', {
//     mode:'no-cors',
//     method: 'GET',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//   }) 
//   console.log(res);
// }

// req();


class Contacto extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nombre:  "",
      email:  "",
      descripcion:  "",
      isLoading: false
    }
    
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event){
    this.setState({nombre: event.target.value})
  }

  handleEmailChange(event){
    this.setState({email:event.target.value})
  }

  handleDescriptionChange(event){
    this.setState({descripcion:event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({isLoading:true});
    $('.inputbtn').attr('disabled',true);
      axios({
        method:'post',
        url:'/contacto',
        data: {object:this.state},
        headers: {'Access-Control-Allow-Origin': '*'},
        responseType: 'json'
      }).then(res =>{
        $('.inputbtn').attr('disabled',false);
        console.log(res)
        this.setState({isLoading:false});
        toast.success('👍\t\tInformacion enviada con exito.')
      })
  }


  
  render() {
      return( 
        <div className="contacto fadeIn">
          <div className="contacto_form">
            <h1>Sigamos en contacto.</h1>
            <h4>Ingresa los siguientes datos para contactarte.</h4>
            <div className="contacto_form_inputs">
            <form onSubmit={this.handleSubmit}>
              <input 
              value={this.state.nombre} onChange={this.handleNameChange} 
              type={'text'} className="input_inline" placeholder="Nombre"></input>
              <input  
              value={this.state.email} onChange={this.handleEmailChange} 
              type={'text'} className="input_inline" placeholder="Email"></input>
              <textarea  
              value={this.state.descripcion} onChange={this.handleDescriptionChange} 
              type={'text'} className="input_block" placeholder="Mensaje..."></textarea>
              <input type='submit'className="inputbtn" value="Enviar"/>
                {
                  this.state.isLoading ?
                  <div className="loadingsvg">
                  <svg viewBox="-2 -2 64 64" width="60" height="60" >
                  <path d="M30 0A30 30 0 0 1 60 30M30 60A30 30 0 0 1 0 30" fill="none" stroke="#6cf" stroke-width="2">
                  <animateTransform attributeName="transform" type="rotate" repeatCount=    "indefinite" dur="0.5s" keyTimes="0;1" values="0 30 30;180 30 30" keySplines="0.5 0 0.5 1" calcMode="spline">
                  </animateTransform>
                  </path>
                  </svg>
                  </div> 
                  : null
                }
            </form>
            </div>
          </div>
            <div className="contacto_img">
              <img src={require('../assets/img/contacto.jpg')} alt="contacto"></img>
            </div>
        </div>
      );
    }
}

export default Contacto;

import React from 'react';
import Navbar from './navbar/navbar';
import Intro from './intro/intro';
import About from './About/About';
import Portafolio from './Portafolio/Portafolio';
import Contacto from './contacto/contacto';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.scss';
// import mac from './assets/mac.jpg';

const response = fetch('https://us-central1-camvazweb.cloudfunctions.net/widgets/lang', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: {lang:'es',component:'navbar'},
}).then(e =>{
  console.log(e);
}).catch(err =>{
  console.log(err);
})

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

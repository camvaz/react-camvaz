import React from 'react';
import Navbar from './navbar/navbar';
import Intro from './intro/intro';
import About from './About/About';
import Portafolio from './Portafolio/Portafolio';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.scss';
// import mac from './assets/mac.jpg';
function App() {
  return (
    <Router>
      <div className="rootdiv">
        <div className="container">
          <Navbar />
          <Route path="/" exact component={Intro}/>
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

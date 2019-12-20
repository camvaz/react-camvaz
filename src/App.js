import React from 'react';
import Navbar from './navbar/navbar';
import Intro from './intro/intro';
import About from './About/About';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import mac from './assets/mac.jpg';
function App() {
  return (
    <Router>
      <div className="rootdiv">
        <div className="container">
          <Navbar />
          <Route path='/about' component={About}/>
          <Route path="/intro" component={Intro}/>
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

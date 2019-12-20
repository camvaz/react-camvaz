import React from 'react';
import Navbar from './navbar/navbar';
import Intro from './intro/intro';
import './App.scss';
// import mac from './assets/mac.jpg';
function App() {
  return (
    
    <div className="rootdiv">
      <div className="container">
        <Navbar />
        <Intro />
      </div>
      <div className="container2">
        <div className="footer">
          <div class="footer_content">
            <p>Victor Campos | 2019.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

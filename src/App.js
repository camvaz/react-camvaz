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
      </div>
    </div>
  );
}

export default App;

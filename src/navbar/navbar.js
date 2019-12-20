import React from 'react';
import './navbar.scss';
import {Link} from 'react-router-dom';

// function test(){
//   return 'Testing';
// }

// function testparam(test){
//   return test;
// }

function Navbar(){
    return( 
      <div className="navbar">
        <div className="navbar_brand">
          <h1>Portafolio</h1>
        </div>
        <div className="navbar_spacer">
        </div>
        <div className="navbar_links">
      <Link to='/intro'>
        <a href="a.com">Inicio</a>
      </Link>
      <Link to="/about">
        <a href="javascript:void(0)">About</a>
      </Link>
          <a href="javascript:void(0)">Portafolio</a>
          <button className="navbar_button">
            Contacto
            </button>
        </div>
      </div>);
}

export default Navbar;

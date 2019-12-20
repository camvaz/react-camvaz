import React from 'react';
import './navbar.scss';

function Navbar(){
    return( 
      <div className="navbar">
        <div className="navbar_brand">
         <h1>Portafolio</h1>
        </div>
        <div className="navbar_spacer">
        </div>
        <div className="navbar_links">
            <a href="a.com">Inicio</a>
            <a href="a.com">About</a>
            <a href="a.com">Portafolio</a>
            <button className="navbar_button">
            Contacto    
            </button>
        </div>
      </div>);
}

export default Navbar;

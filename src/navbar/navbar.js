import React from 'react';
import './navbar.scss';
import {FaGithub, FaTwitter} from 'react-icons/fa';
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
        <div className="navbar_links">
      <Link to='/'>
        Inicio
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/portafolio">
      Portafolio
      </Link>
      <Link to="/contacto">
          <button className="navbar_button">
            Contacto
            </button>
      </Link>
            <div className="icon">
            <a target="_blank" rel="noopener" href="https://github.com/camvaz">
            <FaGithub size={20}/>
            </a>

            </div>

            <div className="icon">
            <a target="_blank" rel="noopener" href="https://twitter.com/camvazz">
            <FaTwitter size={20}/>
            </a>
            </div>
        </div>
      </div>);
}

export default Navbar;

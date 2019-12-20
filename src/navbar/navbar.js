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
        <div className="navbar_spacer">
        </div>
        <div className="navbar_links">
      <Link to='/intro'>
        <a href="javascript:void(0)">Inicio</a>
      </Link>
      <Link to="/about">
        <a href="javascript:void(0)">About</a>
      </Link>
      <Link to="/portafolio">
      <a href="javascript:void(0)">Portafolio</a>
      </Link>
          <button className="navbar_button">
            Contacto
            </button>
            <div className="icon">
            <a href="https://github.com/camvaz">
            <FaGithub size={20}/>
            </a>

            </div>

            <div className="icon">
            <a href="https://twitter.com/camvazz">
            <FaTwitter size={20}/>
            </a>
            </div>
        </div>
      </div>);
}

export default Navbar;

import React, { useState } from 'react';
import './hero.css';
import img from "../images/home.jpg"
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="Hero"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <nav className="navbar">
        <div className="navbar-content">
          <a href="/" className="navbar-logo">
            <img src={logo} alt="The Relax Beach Logo" className="logo" />
          </a>
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar-item"><a href="/ ">Home</a></li>
            <li className="navbar-item"><Link to='/#about'>About</Link></li>
            <li className="navbar-item"><a href="#gallery">Gallery</a></li>
            <li className="navbar-item"><a href="#footer">Contacts</a></li>
          </ul>
        </div>
      </nav>
      <header id="home" className="hero">
        <div class="overlay1"></div>
        <div className="hero-content">
          <h1><span style={{fontSize:'20px'}}>Welcome to,</span> <br/><span style={{fontSize:'60px'}}>Stay At Forest</span></h1>
          <p>
          Breathe in the fresh air, listen to the symphony of nature, and lose yourself in the tranquility of lush greenery. Whether it's peaceful relaxation or forest adventures, let your stay be a celebration of simplicity, harmony, and pure joy.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;

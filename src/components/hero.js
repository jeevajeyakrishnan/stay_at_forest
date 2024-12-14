import React, { useState } from 'react';
import './hero.css';
import img from "../images/home.jpg"
import logo from "../images/logo.png"

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
          <a href="#home" className="navbar-logo">
            <img src={logo} alt="The Relax Beach Logo" className="logo" />
          </a>
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar-item"><a href="#home">Home</a></li>
            <li className="navbar-item"><a href="#services">About</a></li>
            <li className="navbar-item"><a href="#rooms">Gallery</a></li>
            <li className="navbar-item"><a href="#contact">Contacts</a></li>
          </ul>
        </div>
      </nav>
      <header id="home" className="hero">
        <div class="overlay"></div>
        <div className="hero-content">
          <h1><span style={{fontSize:'20px'}}>Welcome to,</span> <br/><span style={{fontSize:'60px'}}>Stay At Forest</span></h1>
          <p>
            The Relax Beach Hotel & Leisure Resort is the first beach resort on the shores of the
            city. For over a decade, we have dedicated ourselves to creating an isolated haven in
            the city.
          </p>
          <button className="btn-read-more">Read More</button>
        </div>
      </header>
    </div>
  );
}

export default App;

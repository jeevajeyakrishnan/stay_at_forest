import React, { useState } from 'react';
import './hero.css';
import img from "../images/home.jpg"
import Navbar from './navbar';

function App() {
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
      <Navbar/>
      <header id="home" className="hero">
        <div class="overlay1"></div>
        <div className="hero-content">
          <h1><span style={{fontSize:'20px'}}>Welcome to,</span> <br/><span className='head-name'>𝔰𝔱𝔞𝔶 𝔞𝔱 𝔣𝔬𝔯𝔢𝔰𝔱</span></h1>
          <p>
                Breathe in the fresh air, listen to the symphony of nature, and lose yourself in the tranquility of lush greenery. Whether it's peaceful relaxation or forest adventures, let your stay be a celebration of simplicity, harmony, and pure joy.
          </p>
          <div className="ico animated">
            <div className="circle circle-top"></div>
            <div className="circle circle-main"></div>
            <div className="circle circle-bottom"></div>
            
            <svg
              className="svg"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 612 612"
              style={{ enableBackground: "new 0 0 612 612" }}
              xmlSpace="preserve"
            >
            <defs>
              <clipPath id="cut-off-arrow">
                <circle cx="306" cy="306" r="287" />
              </clipPath>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
            <path
              className="st-arrow"
              d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
                l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
                c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
                c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z"
            />
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

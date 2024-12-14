import React, { useEffect } from "react";
import "./gallery.css";
import "aos/dist/aos.css"
import Aos from "aos"
import img from "../images/outer4.jpg"

export default function Gallery () {
   useEffect(()=>{
          Aos.init({disable:'mobile'})
    },[]);
  return (
    <div className="container" id="gallery">
      <header className="header">
        <h1>Explore The Most Beautiful <span style={{marginLeft:'80px'}}>Places In The World</span> <span className='abt-subheadline'></span></h1>
        <p>
          Whether you're exploring your own city or an unfamiliar destination in
          any of the four corners of the globe, our list of the best places to
          explore will ignite a fire of curiosity, inspiration, and motivation
          in your belly.
        </p>
        <button className="explore-button">Explore</button>
      </header>
      <div className="image-grid" >
  <div className="img-container" id="image-container-1" >
    <div className="image-wrapper" >
      <img
        src={img}
        alt="Place 1"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div className="overlay">
        <div className="overlay-content">Overlay 1</div>
      </div>
    </div>
  </div>
  <div className="img-container" id="image-container-2">
    <div className="image-wrapper">
      <img
        src={img}
        alt="Place 2"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div className="overlay">
        <div className="overlay-content">Overlay 2</div>
      </div>
    </div>
    <div className="image-wrapper">
      <img
        src={img}
        alt="Place 3"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div className="overlay">
        <div className="overlay-content">Overlay 3</div>
      </div>
    </div>
  </div>
  <div className="img-container" id="image-container-3">
    <div className="image-wrapper">
      <img
        src={img}
        alt="Place 4"
        data-aos="fade-up"
        data-aos-duration="500"
      />
      <div className="overlay">
        <div className="overlay-content">Overlay 4</div>
      </div>
    </div>
    <div className="image-wrapper">
      <img
        src={img}
        alt="Place 5"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div className="overlay">
        <div className="overlay-content">Overlay 5</div>
      </div>
    </div>
  </div>
  <div className="img-container" id="image-container-4">
    <div className="image-wrapper">
      <img
        src={img}
        alt="Place 6"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div className="overlay">
        <div className="overlay-content">Overlay 6</div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};


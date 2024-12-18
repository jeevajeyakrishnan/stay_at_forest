import React, { useEffect } from "react";
import "./gallery.css";
import "aos/dist/aos.css"
import Aos from "aos"
import img1 from "../images/outer1.jpg"
import img2 from "../images/outer2.jpg"
import img3 from "../images/outer3.jpg"
import img4 from "../images/outer4.jpg"
import img5 from "../images/outer5 .jpg"
import img6 from "../images/outer6.jpg"
import { Link } from "react-router-dom";


export default function Gallery () {
   useEffect(()=>{
          Aos.init({disable:'mobile'})
    },[]);
  return (
    <div className="container" id="gallery">
      <header className="header">
        <h1>Explore The Most Beautiful <span style={{marginLeft:'80px'}}>Places In The World</span> <span className='abt-subheadline'></span></h1>
        <p>
           Every moment is an opportunity to explore,
           from forest explorations to restful waterfalls 
        </p>
        <button className="explore-button"><Link to='/views'>Explore</Link></button>
      </header>
      <div className="image-grid" >
  <div className="img-container" id="image-container-1" >
    <div className="image-wrapper" >
      <img
        src={img6}
        alt="Place 1"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div className="overlay">
        <div className="overlay-content">Enjoy a refreshing walk through emerald-green grasslands that lead you to this breathtaking treetop viewpoint</div>
      </div>
    </div>
  </div>
  <div className="img-container" id="image-container-2">
    <div className="image-wrapper">
      <img
        src={img2}
        alt="Place 2"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div className="overlay">
        <div className="overlay-content">Famous view point, feels like heaven</div>
      </div>
    </div>
    <div className="image-wrapper">
      <img
        src={img1}
        alt="Place 3"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div className="overlay">
        <div className="overlay-content">An Experience Beyond Sight, Feel the crunch of fresh apples straight from the trees, taste the unmatched flavor of nature’s goodness</div>
      </div>
    </div>
  </div>
  <div className="img-container" id="image-container-3">
    <div className="image-wrapper">
      <img
        src={img5}
        alt="Place 4"
        data-aos="fade-up"
        data-aos-duration="500"
      />
      <div className="overlay">
        <div className="overlay-content">Aquatic Paradise – Where water and rocks create a heavenly escape </div>
      </div>
    </div>
    <div className="image-wrapper">
      <img
        src={img4}
        alt="Place 5"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div className="overlay">
        <div className="overlay-content">To explorating and experiencing the view of the wild animals</div>
      </div>
    </div>
  </div>
  <div className="img-container" id="image-container-4">
    <div className="image-wrapper">
      <img
        src={img3}
        alt="Place 6"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div className="overlay">
        <div className="overlay-content">The Sweet Cauldron of Kerala – A hub of traditional taste and craftsmanship</div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};
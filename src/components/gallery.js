import React from "react";
import "./gallery.css";
import { Link } from "react-router-dom";

export default function Gallery () {
  return (
    <div className="container">
      <header className="header">
        <h1>Explore The Most Beautiful Places In The World</h1>
        <p>
          Whether you're exploring your own city or an unfamiliar destination in
          any of the four corners of the globe, our list of the best places to
          explore will ignite a fire of curiosity, inspiration, and motivation
          in your belly.
        </p>
        <button className="explore-button"><Link to='/views'>Explore</Link></button>
      </header>
      <div className="image-grid">
        <img
          src="https://via.placeholder.com/300x400.png?text=Image+1"
          alt="Place 1"
        />
        <img
          src="https://via.placeholder.com/300x400.png?text=Image+2"
          alt="Place 2"
        />
        <img
          src="https://via.placeholder.com/300x400.png?text=Image+3"
          alt="Place 3"
        />
        <img
          src="https://via.placeholder.com/300x400.png?text=Image+4"
          alt="Place 4"
        />
        <img
          src="https://via.placeholder.com/300x400.png?text=Image+5"
          alt="Place 5"
        />
        <img
          src="https://via.placeholder.com/300x400.png?text=Image+6"
          alt="Place 6"
        />
      </div>
    </div>
  );
};


import React from "react";
import MainVideo from "../../assets/myCssVideo.mp4";
import "./Hero.css";

//  background video component
const Hero = () => {
  return (
    <div className="hero">
      <video loop autoPlay muted id="video">
        <source src={MainVideo} type="video/mp4" />
      </video>

      <div className="hero-text">
        <h1>Decentralized</h1>
        <h1 span className="blue">
          Trading <span />
        </h1>
        <p>Guaranteed top blabla</p>
        <div className="btn-group">
          <button className="btn">Use Defi</button>
          <button className="btn btn-outline">Outline</button>
          <button className="btn btn-outline">FAQ</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

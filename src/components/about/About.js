import React from "react";
import "./About.css";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si"; //icons path has to be /prefix in the import
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>Growing protocol ecosystem</h2>
        <p>The DeFi protocol system empowersThe DeFi protocol system empowersThe DeFi protocol system empowersThe DeFi protocol system empowers</p>
        <div className="card-container">
          <div className="card">
            {/* passing props for specific "About" text/title. classname in props for css */}
            <AboutCard icon={<SiHiveBlockchain className="icon" />} heading="headingTitle1" para="some kind of looong text some kind of looong text some kind of looong text some kind of looong text" />
          </div>
          <div className="card">
            <AboutCard icon={<SiStrapi className="icon" />} heading="HeadingTitle2" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a ipsum sapien. Praesent sed urna ipsum. Curabitur a rutrum sapien, " />
          </div>
          <div className="card">
            <AboutCard icon={<SiFsecure className="icon" />} heading="Title3" para="sit amet pulvinar erat. Nulla dapibus, risus sed mollis ullamcorper, ex sapien dignissim mi, et porta ipsum justo non nunc. Aliquam ac " />
          </div>
          <div className="card">
            <AboutCard icon={<VscServerProcess className="icon" />} heading="title4" para="consequat urna. Nullam porttitor arcu risus, vitae euismod odio eleifend id. Integer maximus vestibulum augue vitae sodales. Donec " />
          </div>
        </div>
        <a href="/" className="btn">
          Use DeFi
        </a>
      </div>
    </div>
  );
};

export default About;

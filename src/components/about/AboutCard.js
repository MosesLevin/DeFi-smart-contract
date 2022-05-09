import React from "react";

const AboutCard = (props) => {
  return (
    <>
      <div className="icon-container">{props.icon}</div>;<h3>{props.heading}</h3>
      <p>{props.para}</p>
    </>
  );
};

export default AboutCard;

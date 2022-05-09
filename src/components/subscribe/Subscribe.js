import "./Subscribe.css";
import React from "react";

const Subscribe = () => {
  // const enableTick = () => {
  //   let checkBox = document.getElementById("checkbox");
  //   let submitButton = document.getElementById("submitButton");
  //   if (checkBox.checked === true) {
  //     console.log("changed");
  //     submitButton.disabled = false;
  //     submitButton.classList.add("btn");
  //     submitButton.classList.remove("btn-disabled");
  //   }

  // };
  const toggleEmail = () => {
    let mailCheckbox = document.getElementById("checkbox");
    let signUpButton = document.getElementById("submitButton");

    if (mailCheckbox.checked === true) {
      signUpButton.classList.remove("btn-disabled");
    } else {
      signUpButton.classList.add("btn-disabled");
    }
  };

  return (
    <div className="subscribe">
      <div className="content">
        <h2>
          Join our <span className="blue">DeFi</span> community
        </h2>
        <form action="https://getform.io/f/582c6653-8438-4199-9d39-afd362484ae2" method="POST">
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="Enter your Email" /> {/*name will display category on our gitform io */}
            <button type="submit" className="btn btn-disabled" id="submitButton" onSubmit={console.log("teads")}>
              Sign up
            </button>
          </div>
          <div className="form-container">
            <input id="checkbox" type="checkbox" onClick={toggleEmail} /> <p>I agree to recieve email communications from Defi</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;

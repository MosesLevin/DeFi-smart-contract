import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// if not with same "ai" prefix, would need to add another import with matching
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); //onclick toggle between two hamburger icons

  return (
    <div className="navbar">
      <div className="container">
        <h1 style={{ marginLeft: "1rem", color: "#00d8ff" }}>Defi</h1> {/* inline css for single h1 */}
        <ul className={click ? "nav active" : "nav"}>
          {" "}
          {/* change class name and also css according to state */}
          <li className="nav-item">
            <a href="/">Platform</a>
          </li>
          <li className="nav-item">
            <a href="/">Developers</a>
          </li>
          <li className="nav-item">
            <a href="/">Community</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="btn" href="/">
              Home
            </a>
          </li>
        </ul>
        <div onClick={handleClick} className="hamburger">
          {" "}
          {/*   Handleclick toggle state to !state and with it class and icon to X if hamburger is open*/}
          {click ? <AiOutlineClose className="icon" /> : <AiOutlineMenu className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

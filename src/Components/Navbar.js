import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
  
<div class="bg-img">
  <div class="container">
    <div class="topnav">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>

      <p className="logo">Find Critters</p>
    </div>
  );
}

export default Navbar;

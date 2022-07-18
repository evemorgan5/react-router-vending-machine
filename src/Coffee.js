import React from "react";
import { Link } from "react-router-dom";


function Coffee() {
  return (
  <div>
    <h2>Coffee</h2>
    <img src="https://i.pinimg.com/originals/a3/17/08/a317085b479e7cdff35a3c69f0d57b02.jpg"
    alt="coffee-cup" />
    <Link to="/">Return to Vending Machine</Link>
  </div>
  );
}

export default Coffee;


import React from "react";
import { Link } from "react-router-dom";


function Chocolate() {
  return (
  <div>
    <h2>Chocolate</h2>
    <img src="http://clipart-library.com/new_gallery/chocolate-clipart-2.jpg"
    alt="chocolate-bar" />
    <Link to="/">Return to Vending Machine</Link>
  </div>
  );
}

export default Chocolate;


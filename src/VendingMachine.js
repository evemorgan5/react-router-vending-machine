import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
  <div className="vending-machine">
    <h2>
      Welcome to Alex and Eve's Vending Machine!
    </h2>
    <img src="https://thumbs.dreamstime.com/b/vending-machine-simple-icon-vending-machine-filled-outl[…]on-vending-clipart-isolated-white-background-124194022.jpg"
    alt="vending machine image"/>
    <div className="machine-snacks">
    <ul>
      <li><Link to="/coffee">Coffee</Link></li>
      <li><Link to="/chocolate">Chocolate</Link></li>
      <li><Link to="/water">Water</Link></li>
    </ul>
    </div>
  </div>
  );
}

export default VendingMachine;
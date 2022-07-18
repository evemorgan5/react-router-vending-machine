import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
  <div className="VendingMachine">
    <h2>
      Welcome to Alex and Eve's Vending Machine!
    </h2>
    <img src="https://thumbs.dreamstime.com/b/vending-machine-simple-icon-vending-machine-filled-outl[…]on-vending-clipart-isolated-white-background-124194022.jpg"
    alt="vending machine image"/>
    <div className="MachineSnacks">
      <h2><Link to="/coffee">Coffee</Link></h2>
      <h2><Link to="/chocolate">Chocolate</Link></h2>
      <h2><Link to="/water">Water</Link></h2>
    </div>
  </div>
  );
}

export default VendingMachine;
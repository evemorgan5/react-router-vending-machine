import React from "react";
import { Link } from "react-router-dom";


function Water() {
  return (
  <div>
    <h2>Water bottle</h2>
    <img src="https://media.istockphoto.com/vectors/happy-water-bottle-giving-a-thumb-up-vector-id540752950?k=20&m=540752950&s=170667a&w=0&h=e2bVIaUkUNlcY8UAVcWbjjMtqUZJo9Ugvb_eYOJRY9U="
    alt="water-bottle" />
    <Link to="/">Return to Vending Machine</Link>
  </div>
  );
}

export default Water;


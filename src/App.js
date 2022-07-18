import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Coffee from "./Coffee";
import Chocolate from "./Chocolate";
import Water from "./Water";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/coffee" element={<Coffee/>} />
          <Route path="/chocolate" element={<Chocolate/>} />
          <Route path="/water" element={<Water/>} />
          <Route path="/" element={<VendingMachine/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

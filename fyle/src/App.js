import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ContactUsModal from "./Components/ContctUsModel";
import WhatWeDo from "./Components/whatwedo";
import Best from "./Components/best";
import Ourproject from "./Components/Ourproject";
import Client from "./Components/clients";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/contact-us" element={<ContactUsModal />} />
      </Routes>
      <WhatWeDo />
      <Best/>
      <Ourproject/>
      <Client />
    </Router>
  );
}

export default App;

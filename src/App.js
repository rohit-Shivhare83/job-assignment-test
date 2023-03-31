import "./App.css";
// import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useState, useEffect } from "react";
// import AddProduct from "./components/AddProduct/AddProduct";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/checkout" element={<AddProduct />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

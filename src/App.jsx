import React from "react";
import './output.css'
import Header from './components/header.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";



const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/login" element={<Loginpage />} />
    </Routes>
  </Router>
  );
   
};

export default App;


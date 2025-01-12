import React from "react";
import './output.css'
import Header from './components/header.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import PhotographerSignupForm from "./components/Photographersignupform.jsx";
import UploadForm from "./components/Upload.jsx";



const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/login" element={<Loginpage />} />
      {/* <Route path="/photographerlogin" element={<PhotographerSignupForm />} /> */}
      <Route path="/upload" element={<UploadForm />} />
    </Routes>
  </Router>
  );
   
};

export default App;


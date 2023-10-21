// import logo from './logo.svg';
import "./App.css";
import About from "./component/about/About";
import Home from "./component/Home";
// import Logomain from './component/Logomain';
import Footer from './component/Footer';
// import Navbar from './component/Navbar';
import NavNew from "./component/NavNew";
// import MainLogo from './component/MainLogo';
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Tours from "./Tours";
import Contact from "./component/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';




function App() {


  return (
    <Router>
      {/* <Navbar /> */}
      {/* <MainLogo/> */}
      {/* <Logomain/> */}
      <NavNew />

      <Routes>
        <Route exect path="/about" element={<About />} />
        <Route exect path="/tours" element={<Tours />} />
        {/* <Route exect path="/hotels" element={<List />} /> */}
        {/* <Route exect path="/hotels/:id" element={<Hotel />} /> */}
        {/* <Route exect path="/index" element={<Home />}/> */}
        <Route exect path="/" element={ <Home/>}/>
        <Route exect path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>        
    </Router>
  );
}

export default App;

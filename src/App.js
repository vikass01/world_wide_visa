// import logo from './logo.svg';
import "./App.css";
import About from "./component/about/About";
import Home from "./component/Home";
// import Logomain from './component/Logomain';
import Footer from './component/footer/Footer';
// import Navbar from './component/Navbar';
import NavNew from "./component/NavNew";
// import MainLogo from './component/MainLogo';
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Tours from "./Tours";
import Contact from "./component/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Russia from "./component/universities/Russia";
import Geogria from "./component/universities/Georgia";
import Serbia from "./component/universities/Serbia";
import Germany from "./component/universities/Germany";
import Poland from "./component/universities/Poland";
import Nepal from "./component/universities/Nepal";
import Kazakhstan from "./component/universities/Kazakhstan";
import Moldova from "./component/universities/Moldova";
import Italy from "./component/universities/Italy";
import Kyrgyzstan from "./component/universities/Kyrgyzstan";
import Bangladesh from "./component/universities/Bangladesh";
import Uzbekistan from "./component/universities/Uzbekistan";
import Armenia from "./component/universities/Armenia";
import Gallery from "./component/Gallery";




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
        <Route exect path="/hotels" element={<List />} />
        <Route exect path="/hotelsid" element={<Hotel />} />
        <Route exect path="/mbbsinrussia" element={<Russia />} />
        <Route exect path="/mbbsingeorgia" element={<Geogria />} />
        <Route exect path="/mbbsinserbia" element={<Serbia />} />
        <Route exect path="/mbbsingermany" element={<Germany />} />
        <Route exect path="/mbbsinpoland" element={<Poland />} />
        <Route exect path="/mbbsinnepal" element={<Nepal />} />
        <Route exect path="/mbbsinkazakhstan" element={<Kazakhstan />} />
        <Route exect path="/mbbsinmoldova" element={<Moldova />} />
        <Route exect path="/mbbsinitaly" element={<Italy />} />
        <Route exect path="/mbbsinkyrgyzstan" element={<Kyrgyzstan />} />
        <Route exect path="/mbbsinbangladesh" element={<Bangladesh />} />
        <Route exect path="/mbbsinuzbekistan" element={<Uzbekistan />} />
        <Route exect path="/mbbsinarmenia" element={<Armenia />} />
        <Route exect path="/gallery" element={<Gallery />} />
        {/* <Route exect path="/index" element={<Home />}/> */}
        <Route exect path="/" element={ <Home/>}/>
        <Route exect path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>        
    </Router>
  );
}

export default App;

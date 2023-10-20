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
import { useState } from "react";

function App() {
  const [hRot, sethRot] = useState();
  const [mRot, setmRot] = useState();
  const [sRot, setsRot] = useState();
  const [usahour, setusahour] = useState();
  const [usaminute, setusaminute] = useState();
  const [usasecond, setusasecond] = useState();
  const [ukhour, setukhour] = useState();
  const [ukminute, setukminute] = useState();
  const [uksecond, setuksecond] = useState();
  const [japanhour, setjapanhour] = useState();
  const [japanminute, setjapanminute] = useState();
  const [japansecond, setjapansecond] = useState();
  const [india, setindia] = useState();
  const [usa, setusa] = useState();
  const [uk, setuk] = useState();
  const [japan, setjapan] = useState();

  // india = timeZone: "Asia/Kolkata",
  // usa = timeZone: "America/New_York",
  // Uk = timeZone: "Europe/London",
  // japan = timeZone: "Asia/Tokyo",

  const xyz = () => {
    var date = new Date();

    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    sethRot(hh * 30);
    setmRot(mm * 6);
    setsRot(ss * 6);

    const usahour = date.toLocaleString("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
    });
    const usaminute = date.toLocaleString("en-US", {
      timeZone: "America/New_York",
      minute: "numeric",
    });
    const usasecond = date.toLocaleString("en-US", {
      timeZone: "America/New_York",
      second: "numeric",
    });

    
    setusahour(usahour.charAt(0) * 30);
    setusaminute(usaminute * 6);
    setusasecond(usasecond * 6);

    const ukhour = date.toLocaleString("en-GB", {
      timeZone: "Europe/London",
      hour: "numeric",
    });
    const ukminute = date.toLocaleString("en-GB", {
      timeZone: "Europe/London",
      minute: "numeric",
    });
    const uksecond = date.toLocaleString("en-GB", {
      timeZone: "Europe/London",
      second: "numeric",
    });
    setukhour(ukhour * 30);
    setukminute(ukminute * 6);
    setuksecond(uksecond * 6);

    const japanhour = date.toLocaleString("en-JP", {
      timeZone: "Asia/Tokyo",
      hour: "numeric",
    });
    const japanminute = date.toLocaleString("en-JP", {
      timeZone: "Asia/Tokyo",
      minute: "numeric",
    });
    const japansecond = date.toLocaleString("en-JP", {
      timeZone: "Asia/Tokyo",
      second: "numeric"
    });

    setjapanhour(japanhour.charAt(0) * 30);
    setjapanminute(japanminute * 6);
    setjapansecond(japansecond * 6);

    const india = date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      month: "short",
      year: "numeric",
    });
    const usa = date.toLocaleString("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      month: "short",
      year: "numeric",
    });
    const uk = date.toLocaleString("en-GB", {
      timeZone: "Europe/London",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      month: "short",
      year: "numeric",
    });
    const japan = date.toLocaleString("en-JP", {
      timeZone: "Asia/Tokyo",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      month: "short",
      year: "numeric",
    });
    setindia(india);
    setusa(usa);
    setuk(uk);
    setjapan(japan);
    // minute: "numeric",
    // second: "numeric",
    // day: "numeric",
    // weekday: "short",
    // month: "short",
    // year: "numeric"
  };

  setInterval(xyz, 1000);

  // let hRot = 30 * hh;
  // let mRot = 6 * mm;
  // let sRot = 6*ss;

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
        <Route exect path="/hotels/:id" element={<Hotel />} />
        {/* <Route exect path="/index" element={<Home hRot = {hRot} mRot = {mRot} sRot = {sRot}/>} /> */}
        <Route
          exect
          path="/"
          element={
            <Home
              hRot={hRot}
              mRot={mRot}
              sRot={sRot}
              usahour={usahour}
              usaminute={usaminute}
              usasecond={usasecond}
              ukhour={ukhour}
              ukminute={ukminute}
              uksecond={uksecond}
              japanhour={japanhour}
              japanminute={japanminute}
              japansecond={japansecond}
              india = {india}
              usa = {usa}
              uk = {uk}
              japan = {japan}
            />
          }
        />
          <Route exect path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>        
    </Router>
  );
}

export default App;

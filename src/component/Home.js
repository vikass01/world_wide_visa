import React from 'react'
import './Nav.css';
import fingerprint from './images/fingerprint.png';
import './clock/newdelhi/clock.css';
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Link } from "react-router-dom";
// import Typewriter from 'typewriter-effect/dist/core';
import { Typewriter } from 'react-simple-typewriter'
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../component/images/study/20-MBA-Programs-in-Denmark-for-Bangladeshi-Students.jpg'
import image2 from '../component/images/study/22-MBA-in-Russia-for-Bangladeshi-Students.jpg'
import image3 from '../component/images//study/Australia-student-visa.jpg'
import image4 from '../component/images/study/20-MBA-Programs-in-Denmark-for-Bangladeshi-Students.jpg'
import image5 from '../component/images/study/22-MBA-in-Russia-for-Bangladeshi-Students.jpg'
import image6 from '../component/images//study/Australia-student-visa.jpg'
import "swiper/css";

const images = [image1, image2, image3, image4, image5, image6];




// Import Swiper styles





export default function Home() {

  const [req, setreq] = useState("");
  const navigate = useNavigate();







  useEffect(() => {
    const interval = setInterval(() => {

      const date = new Date();
      const india = date.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        month: "short",
        year: "numeric",
      });
      const inhour = date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour: "numeric" });
      const inminute = date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", minute: "numeric" });
      const insecond = date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", second: "numeric" });

      document.querySelectorAll(".hand1")[0].style.rotate = inhour.split(" ")[0] * 30 + inminute / 2 + "deg";
      document.querySelectorAll(".hand2")[0].style.rotate = inminute * 6 + "deg";
      document.querySelectorAll(".hand3")[0].style.rotate = insecond * 6 + "deg";
      document.querySelectorAll('.countrydesp')[0].innerHTML = india;







      const usa = date.toLocaleString("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        month: "short",
        year: "numeric",
      });
      const usanhour = date.toLocaleString("en-US", { timeZone: "America/New_York", hour: "numeric", });
      const usanminute = date.toLocaleString("en-US", { timeZone: "America/New_York", minute: "numeric", });
      const usansecond = date.toLocaleString("en-US", { timeZone: "America/New_York", second: "numeric", });
      document.querySelectorAll(".hand1")[1].style.rotate = usanhour.split(" ")[0] * 30 + inminute / 2 + "deg";
      document.querySelectorAll(".hand2")[1].style.rotate = usanminute * 6 + "deg";
      document.querySelectorAll(".hand3")[1].style.rotate = usansecond * 6 + "deg";
      document.querySelectorAll('.countrydesp')[1].innerHTML = usa;





      const uk = date.toLocaleString("en-GB", {
        timeZone: "Europe/London",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        month: "short",
        year: "numeric",
      });
      const ukhour = date.toLocaleString("en-GB", { timeZone: "Europe/London", hour: "numeric", });
      const ukminute = date.toLocaleString("en-GB", { timeZone: "Europe/London", minute: "numeric", });
      const uksecond = date.toLocaleString("en-GB", { timeZone: "Europe/London", second: "numeric", });
      document.querySelectorAll(".hand1")[2].style.rotate = ukhour * 30 + inminute / 2 + "deg";
      document.querySelectorAll(".hand2")[2].style.rotate = ukminute * 6 + "deg";
      document.querySelectorAll(".hand3")[2].style.rotate = uksecond * 6 + "deg";
      document.querySelectorAll('.countrydesp')[2].innerHTML = uk;



      const japan = date.toLocaleString("en-JP", {
        timeZone: "Asia/Tokyo",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        month: "short",
        year: "numeric",
      });
      const japanhour = date.toLocaleString("en-JP", { timeZone: "Asia/Tokyo", hour: "numeric", });
      const japanminute = date.toLocaleString("en-JP", { timeZone: "Asia/Tokyo", minute: "numeric", });
      const japansecond = date.toLocaleString("en-JP", { timeZone: "Asia/Tokyo", second: "numeric", });
      document.querySelectorAll(".hand1")[3].style.rotate = japanhour.split(" ")[0] * 30 + inminute / 2 + "deg";
      document.querySelectorAll(".hand2")[3].style.rotate = japanminute * 6 + "deg";
      document.querySelectorAll(".hand3")[3].style.rotate = japansecond * 6 + "deg";
      document.querySelectorAll('.countrydesp')[3].innerHTML = japan;

    }, 1000);
    return () => clearInterval(interval);
  }, [])


  const forms = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setreq("Query Sent Successfully...")
    setTimeout(() => {
      setreq("")
      document.querySelectorAll(".cucclX")[0].value = "";
      document.querySelectorAll(".cucclX")[1].value = "";
      document.querySelectorAll(".cucclX")[2].value = "";
    }, 1000);
    emailjs.sendForm('service_p73cw28', 'template_l8h877l', forms.current, 'D5-RldC84sFFtvfSt')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };





  //   var app = document.getElementById('app');

  // var typewriter = new Typewriter(app, {
  //   autoStart: true,
  //   loop: Infinity,

  //   delay: 75
  // });

  // typewriter
  //   // .pauseFor(500)
  //   .typeString('Get fast Visas to any country!')
  //   .pauseFor(300)
  //   .deleteChars(26)
  //   .typeString('upto<strong> 50% </strong> attractive dicounts')
  //   .deleteAll()
  //   .typeString('Get complete support for abroad study')
  //   // .typeString('dgsdfgdfgdf ds sdg sdgdgg')
  //   .pauseFor(1000)
  //   .start();






  return (
    <div>

      {/* 0000000000000000000000000000000 */}
      <div className="ehlOuW">
        <div className="ryIus">



          <h1 size={30} className="jBPgjx" id='app'>
            <Typewriter
              words={['Visas and tours to any country!', 'Upto 50% dicounts on tour', 'Make career with abroad study', 'Immigration facility']}
              loop={Infinity}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}

            />






            {/* Visas and tours to any country! */}




          </h1>

          <form autoComplete="off" ref={forms} onSubmit={sendEmail}>

            <input autoComplete="off" spellCheck="false" type="tel" name="user_name" required placeholder="Enter Your Name" className="cucclX" />
            <br />
            <input autoComplete="off" spellCheck="false" type='text' name='user_mobile' placeholder='Mobile Number' className='cucclX'></input>

            <br />
            <textarea autoComplete="off" spellCheck="false" type='text' name='user_msg' rows={3} placeholder='Your Query about' className='cucclX'></textarea>
            <br />

            <button type='submit' defaultValue="Send" className="caLgOF">Get Call Back</button>
            <br />
            <span className='req'> {req}</span>

          </form>
        </div>
      </div>



      <div className="ghjjk">

        <div className="main">
          <div className="extramain">
            <div className="bg-image img1"></div>
            <div className="bg-image img2"></div>
            <div className="bg-image img3"></div>
            <div className="bg-image img4"></div>
            <div className="bg-image img5"></div>
            <div className="bg-image img6"></div>
            <div className="bg-image img7"></div>
            <div className="bg-image img8"></div>
          </div>
        </div>

      </div>







      {/* 00000000000000000000000000000000000 */}
      <div height="auto" id="continents" className="kELZqj">
        <div className="bQcjpC" onClick={() => { navigate('/contact') }}>
          <h2 className="kYBuig">
            Where will we go?
          </h2>
          <br />
          <div className="dgFnke">
            <a className="jeUIoc" to='/'><p>Europe</p>
              <div className="cpzfEQ" /></a><a className="jeUIoc"><p>Asia</p>
              <div className="cgDwQz" /></a><a className="jeUIoc"><p>Australia</p>
              <div className="fjUZAo" /></a>
          </div>
          <p>Select continent for more details</p>
        </div>
      </div>

      {/* 000000000000000000000000000000000000000000000000000000000000000 */}




      {/* 000000000000000000000000000000000000000000000000000000000000000000000 */}



      {/* <div height="auto" className="kELZq dess">
        <h3>
          Apply Visa for anywhere in the world
        </h3>
        <div className="djklds" onClick={() => { navigate('/contact') }}>
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="newSwiper">
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

      </div> */}

      <div className="visa-container">
        <h3 className="visa-heading">Apply Visa for anywhere in the world</h3>
        <Swiper
          watchSlidesProgress={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="visa-swiper"
        >
           {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={img} alt={`Visa Slide ${index + 1}`} className="slide-image" />
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>

      {/* 0000000000000000000000000000000000000000000000000000 */}
      


      <div height="auto" id="advantages" className="styled__Section-sc-1ji51nh-0 dRCKEU">
        <div className="styled__Container-sc-1ji51nh-1 bQcjpC">
          <h2 className="styled__Title-sc-1ji51nh-2 advantages__Title-sc-1rvjoc-0 iTdKte">
            Apply from any location in the world ?
          </h2>
          <h3 className="advantages__SubTitle-sc-1rvjoc-1 kussSZ">
            All time zone — Support
          </h3>

        </div>
        <div className="clockbox">


          <div className='bhyuio'>
            <div className="clock clock1">
              <div id="clock" >
                <div className="arrows">
                  <div className="hand hand1" />
                  <div className="hand hand2" />
                  <div className="hand hand3 gghh" />
                </div>
              </div>
            </div>
            <div className="country-time">
              <h2 style={{ display: "inline-block", marginRight: "5px", fontSize: "18px" }}> New Delhi</h2><img alt="India" style={{ width: "30px" }} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg" />
              <h3 className='countrydesp'></h3>
            </div>
          </div>


          <div className='bhyuio'>
            <div className="clock clock2">
              <div id="clock" >
                <div className="arrows">
                  <div className="hand hand1" />
                  <div className="hand hand2" />
                  <div className="hand hand3" />
                </div>
              </div>
            </div>
            <div className='country-time'>
              <h2 style={{ display: "inline-block", marginRight: "5px", fontSize: "18px" }}> New York</h2><img alt="United States" style={{ width: "30px" }} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" />
              <h3 className='countrydesp'></h3>
            </div>
          </div>

          <div className='bhyuio'>
            <div className="clock clock3">
              <div id="clock" >
                <div className="arrows">
                  <div className="hand hand1" />
                  <div className="hand hand2" />
                  <div className="hand hand3" />
                </div>
              </div>
            </div>
            <div className="country-time">
              <h2 style={{ display: "inline-block", marginRight: "5px", fontSize: "18px" }}> London</h2><img alt="United Kingdom" style={{ width: "30px" }} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" />
              <h3 className='countrydesp'></h3>
            </div>
          </div>

          <div className='bhyuio'>
            <div className="clock clock4">
              <div id="clock"  >
                <div className="arrows">
                  <div className="hand hand1" />
                  <div className="hand hand2" />
                  <div className="hand hand3" />
                </div>
              </div>
            </div>
            <div className="country-time">
              <h2 style={{ display: "inline-block", marginRight: "5px", fontSize: "18px" }}> Tokyo</h2><img alt="Japan" style={{ width: "30px" }} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg" />
              <h3 className='countrydesp'></h3>
            </div>
          </div>
        </div>
      </div>

      {/* 0000000000000000000000000000000000000000000 */}






      {/* 00000000000000000000000000000000000000000000000 */}

      <div id="tours" className="styled__Section-sc-1ji51nh-0 tours__Section-bhr5fb-0 hxJnWr">
        <h2 className="styled__Title-sc-1ji51nh-2 tours__Title-bhr5fb-2 bUWTBM">
          International Holidays
        </h2>
        <button className="kYYayU"><Link to='/tours' style={{ textDecoration: "none", color: "white" }}>
          Choose a tour</Link>
        </button>
        <div className="tours__Overlay-bhr5fb-1 jzexuY" />
      </div>
      <div height="auto" id="services" className="styled__Section-sc-1ji51nh-0 dRCKEU">
        <div className="styled__Container-sc-1ji51nh-1 bQcjpC">
          <h2 className="styled__Title-sc-1ji51nh-2 services__Title-ddmf7w-0 eXcXBg">
            Our services
          </h2>
          <ul className="services__List-ddmf7w-1 grYKsD">
            <li className="services__Item-ddmf7w-2 hTXiu" onClick={() => { navigate('/contact') }}>
              <div className="services__Img-ddmf7w-3 fwtetB" />
              <p style={{ fontSize: "16px" }}>Visa processing</p>
            </li>
            <li className="services__Item-ddmf7w-2 hTXiu" onClick={() => { navigate('/contact') }}>
              <div className="services__Img-ddmf7w-3 gdDHuq" />
              <p style={{ fontSize: "16px" }}>Registration of tours</p>
            </li>
            <li className="services__Item-ddmf7w-2 hTXiu" onClick={() => { navigate('/contact') }}>
              <div className="services__Img-ddmf7w-3 cGheSV" />
              <p style={{ fontSize: "16px" }}>Air Ticketing</p>
            </li>
            <li className="services__Item-ddmf7w-2 hTXiu" onClick={() => { navigate('/contact') }}>
              <div className="lcrnjC" />
              <p style={{ fontSize: "16px" }}>Abroad Study</p>
            </li>
            <li className="services__Item-ddmf7w-2 hTXiu" onClick={() => { navigate('/contact') }}>
              <div className="services__Img-ddmf7w-3 kQpRaS" />
              <p style={{ fontSize: "16px" }} >Immigration</p>
            </li>
          </ul>
        </div>
      </div>
    </div>



  )
}

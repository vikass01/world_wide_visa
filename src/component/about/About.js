import React, { useRef, useState } from "react";
import "./AboutUs.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function About() {
  return (
    <div>
      <header id="home">
        <div className="qqcontainer text-center vertical-align">
          <h1 className="logo">
            {" "}
            Mangalam Migration <strong>Services</strong>
          </h1>
          <br />
          <div className="aboutlogo" />
          <span>
            We designed one solution for your multi requiements Like Visa Tours
            Immigration Study
          </span>
          <br />
          <a href="#about" className="learn-more">
            <i className="fa fa-angle-down third-arrow" />
            <i className="fa fa-angle-down  second-arrow" />
            <i className="fa fa-angle-down first-arrow" />
          </a>
        </div>
      </header>
      {/* 000000000000000000000000000000000000000000 */}

      <div>
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>
          Mangalam Migration Services here We are a leading study abroad consultancy in
            India and abroad. We are a comprehensive solution for students,
            specializing in overseas MBBS education consultancy, documentation
            support and admissions consultancy. We help students find various
            educational opportunities abroad. “Mangalam Migration Services” helps ambitious
            Indian students gain admission to top universities around the world.
            We help students choose the best option for their dream course and
            get admission in a top university abroad and in India. Our expert
            advisors guide students through every step of admission. We always
            strive to provide the best services and quality counseling to our
            students. At the beginning we will have a counseling session to
            understand your needs and then you just have to complete some
            formalities like submitting documents required for admission to your
            chosen university, documents required for passport, visa etc. We are
            building a career, come and join us for a great future!
          </p>
        </div>
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div className="row">
          <div className="abcolumn">
            <div className="card">
              <img
                src="https://som.iitkgp.ac.in/images/director_off.jpg"
                alt="Jane"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="abcolumn">
            <div className="card">
              <img
                src="https://som.iitkgp.ac.in/images/director_off.jpg"
                alt="Mike"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="abcolumn">
            <div className="card">
              <img
                src="https://som.iitkgp.ac.in/images/director_off.jpg"
                alt="John"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 00000000000000000000000000000000000000000000000000 */}

      {/* <div id="about">
      <div className="container text-center vertical-align">
        <h3 className="text-uppercase"> A little <strong>about</strong> us</h3>
        <hr style={{borderColor: '#d3d3d3'}} />
        <h4><p>Cyber security seems to be a hot issue these days with all the recent news about online hackings and whatnots. However, todays functioning society revolves around the online infrastructure that is the world wide web.</p></h4> 
      </div>
    </div> */}
      <div id="services">
        <div className="div-heading text-center">
          <h3 className="text-uppercase">
            {" "}
            Our <strong>Services Promises</strong>
          </h3>
          <hr className="icon" />
        </div>
        <div className="container ghsdf">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12 service-item">
              <header>
                <i className="fa fa-desktop" />
                <div className="service-title">
                  <h3>Expertise</h3>
                  <h4>Mangalam Migration Services</h4>
                </div>
              </header>
              <p>
              Mangalam Migration Services has over 10 years of experience in the study
                abroad industry. Our team of experienced counselors are experts
                in helping students choose the right course and institution,
                prepare for the application process, and get a visa.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 service-item">
              <header>
                <i className="fa fa-desktop" />
                <div className="service-title">
                  <h3>Personalized attention</h3>
                  <h4>Mangalam Migration Services</h4>
                </div>
              </header>
              <p>
                We understand that every student is different and has their own
                unique needs. We offer personalized attention to each student,
                ensuring that they get the support they need to succeed..
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 service-item">
              <header>
                <i className="fa fa-desktop" />
                <div className="service-title">
                  <h3>Wide network of partners</h3>
                  <h4>Mangalam Migration Services</h4>
                </div>
              </header>
              <p>
                We have a wide network of partner universities around the world,
                so we can help you find the right fit for you. We also have
                relationships with visa and immigration experts, so we can help
                you navigate the visa application process.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 service-item">
              <header>
                <i className="fa fa-desktop" />
                <div className="service-title">
                  <h3> Affordability</h3>
                  <h4>Mangalam Migration Services</h4>
                </div>
              </header>
              <p>
                We offer our services at an affordable price, so you can focus
                on your studies without having to worry about the cost.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 service-item">
              <header>
                <i className="fa fa-desktop" />
                <div className="service-title">
                  <h3>Guarantee</h3>
                  <h4>Mangalam Migration Services</h4>
                </div>
              </header>
              <p>
                We are so confident in our services that we offer a satisfaction
                guarantee. If you are not happy with our services, you can get a
                full refund.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 service-item">
              <header>
                <i className="fa fa-desktop" />
                <div className="service-title">
                  <h3>Trust Build</h3>
                  <h4>Mangalam Migration Services</h4>
                </div>
              </header>
              <p>
                Our moto is only customer satisfaction, we tries to solve your complaints and queries reqests on very fast basis, we want our customer back next time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 000000000000000000000000000000000000000000000 */}

      <div id="skills">
        <div className="container">
          {/* -------------------------------------------------------------------------------- */}

          {/* <div className="slideshow-container">

              
                <div className="mySlides">
                  <div className="authordiv" ><div className='author1'></div> </div>
                      <q className='statement'>1 I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
                      <p className="author">- John Keats</p>
                  </div>
               
                <a className="prev" onClick={previousbtn}>&#10094;</a>
                <a className="next" onClick={nextbtn}>&#10095;</a>
              </div>

             
              <div className="dot-container">
                <span className="dot" ></span>
                <span className="dot" ></span>
                <span className="dot" ></span>
              </div> */}

          <>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="mySlides">
                  <div className="authordiv">
                    <div className="profile author1"></div>{" "}
                  </div>
                  <q className="statement">
                    1 I love you the more in that I believe you had liked me for
                    my own sake and for nothing else
                  </q>
                  <p className="author">- John Keats</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mySlides">
                  <div className="authordiv">
                    <div className="profile author2"></div>{" "}
                  </div>
                  <q className="statement">
                    Certainly, travel is more than the seeing of sights; it is a
                    change that goes on, deep and permanent, in the ideas of
                    living.
                  </q>
                  <p className="author">- Mary Ritter Beard</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mySlides">
                  <div className="authordiv">
                    <div className="profile author3"></div>{" "}
                  </div>
                  <q className="statement">
                    The man who goes alone can start today; but he who travels
                    with another must wait till that other is ready.
                  </q>
                  <p className="author">- Henry David Thoreau</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mySlides">
                  <div className="authordiv">
                    <div className="profile author4"></div>{" "}
                  </div>
                  <q className="statement">
                    Travel makes one modest. You see what a tiny place you
                    occupy in the world.
                  </q>
                  <p className="author">- Gustave Flaubert</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mySlides">
                  <div className="authordiv">
                    <div className="profile author5"></div>{" "}
                  </div>
                  <q className="statement">
                    Robert Frost was right. To take the 'road less traveled by'
                    does make all the difference.
                  </q>
                  <p className="author">- Samantha Brown</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mySlides">
                  <div className="authordiv">
                    <div className="profile author6"></div>{" "}
                  </div>
                  <q className="statement">
                    Just to travel is rather boring, but to travel with a
                    purpose is educational and exciting
                  </q>
                  <p className="author">- Sargent Shriver</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </>

          {/* ------------------------------------------------------------------------------- */}
          {/* <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <h1><strong>Our Skills</strong></h1>
            <h3> It's what we do best</h3>
            <p>
              Cyber security seems to be a hot issue these days with all the recent news about online hackings and whatnots. However, todays functioning society revolves around the online infrastructure that is the world wide web.
            </p>
            <a href="#about" className=" button btn btn-info"> Read More</a>
            <a href="#contact" className=" button btn btn-success"> Get in touch</a>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 progress-bars">
            <div>
              <h5>HTML5</h5>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
            </div>
            <div>
              <h5>HTML5</h5>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
            </div>
            <div>
              <h5>HTML5</h5>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
            </div>
            <div>
              <h5>HTML5</h5>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>

      {/* 0000000000000000000000000000000000000000000000000000000000 */}
    </div>
  );
}

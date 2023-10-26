import React, { useRef, useState } from 'react'
import './AboutUs.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function About() {


  return (
    
    <div>
    <header id="home">
      <div className="qqcontainer text-center vertical-align">
        <h1 className="logo"> World Wide <strong>Visa</strong></h1>
        <br/>
        <div className='aboutlogo' />
        <span>We designed one solution for your multi requiements Like Visa Tours Immigration Study</span>
        <br/>
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
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>
        <h2 style={{textAlign: 'center'}}>Our Team</h2>
        <div className="row">
          <div className="abcolumn">
            <div className="card">
              <img src="https://som.iitkgp.ac.in/images/director_off.jpg" alt="Jane" style={{width: '100%'}} />
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div className="abcolumn">
            <div className="card">
              <img src="https://som.iitkgp.ac.in/images/director_off.jpg" alt="Mike" style={{width: '100%'}} />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div className="abcolumn">
            <div className="card">
              <img src="https://som.iitkgp.ac.in/images/director_off.jpg" alt="John" style={{width: '100%'}} />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button className="button">Contact</button></p>
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
        <h3 className="text-uppercase"> Our <strong>Services</strong></h3>
        <hr className="icon" />
      </div>
      <div className="container ghsdf">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12 service-item">
            <header>
              <i className="fa fa-desktop" />
              <div className="service-title">
                <h3> Web Design</h3>
                <h4>Lorem ipsum dolor sit.</h4>
              </div>
            </header>
            <p>Cyber security seems to be a hot issue these days with all the recent news about online hackings and whatnots. </p>
          </div>  
          <div className="col-md-4 col-sm-6 col-xs-12 service-item">
            <header>
              <i className="fa fa-desktop" />
              <div className="service-title">
                <h3> Web Design</h3>
                <h4>Lorem ipsum dolor sit.</h4>
              </div>
            </header>
            <p>Cyber security seems to be a hot issue these days with all the recent news about online hackings and whatnots.</p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 service-item">
            <header>
              <i className="fa fa-desktop" />
              <div className="service-title">
                <h3> Web Design</h3>
                <h4>Lorem ipsum dolor sit.</h4>
              </div>
            </header>
            <p>Cyber security seems to be a hot issue these days with all the recent news about online hackings and whatnots. </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 service-item">
            <header>
              <i className="fa fa-desktop" />
              <div className="service-title">
                <h3> Web Design</h3>
                <h4>Lorem ipsum dolor sit.</h4>
              </div>
            </header>
            <p>Cyber security seems to be a hot issue these days with all the recent news about online hackings and whatnots. </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 service-item">
            <header>
              <i className="fa fa-desktop" />
              <div className="service-title">
                <h3> Web Design</h3>
                <h4>Lorem ipsum dolor sit.</h4>
              </div>
            </header>
            <p>Cyber security seems to be a hot issue these days with all the recent news about online hackings and whatnots.</p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 service-item">
            <header>
              <i className="fa fa-desktop" />
              <div className="service-title">
                <h3> Web Design</h3>
                <h4>Lorem ipsum dolor sit.</h4>
              </div>
            </header>
            <p>Cyber security seems to be a hot issue these days with all the recent news about online hackings and whatnots. </p>
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
                      <div className="authordiv" ><div className='profile author1'></div> </div>
                          <q className='statement'>1 I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
                          <p className="author">- John Keats</p>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                        <div className="mySlides">
                        <div className="authordiv" ><div className='profile author2'></div> </div>
                            <q className='statement'>Certainly, travel is more than the seeing of sights; it is a change that goes on, deep and permanent, in the ideas of living.</q>
                            <p className="author">- Mary Ritter Beard</p>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide>
                        <div className="mySlides">
                        <div className="authordiv" ><div className='profile author3'></div> </div>
                            <q className='statement'>The man who goes alone can start today; but he who travels with another must wait till that other is ready.</q>
                            <p className="author">- Henry David Thoreau</p>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide>
                        <div className="mySlides">
                        <div className="authordiv" ><div className='profile author4'></div> </div>
                            <q className='statement'>Travel makes one modest. You see what a tiny place you occupy in the world.</q>
                            <p className="author">- Gustave Flaubert</p>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide>
                        <div className="mySlides">
                        <div className="authordiv" ><div className='profile author5'></div> </div>
                            <q className='statement'>Robert Frost was right. To take the 'road less traveled by' does make all the difference.</q>
                            <p className="author">- Samantha Brown</p>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide>
                        <div className="mySlides">
                        <div className="authordiv" ><div className='profile author6'></div> </div>
                            <q className='statement'>Just to travel is rather boring, but to travel with a purpose is educational and exciting</q>
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
      
      
    
  )
}

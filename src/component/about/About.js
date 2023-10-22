import React from 'react'
import './AboutUs.css';


export default function About() {

  return (
    
    <div>
    <header id="home">
      <div className="container text-center vertical-align">
        <h1 className="logo"> World Wide <strong>Visa</strong></h1>
        <div className='aboutlogo' />
        <h3>A responsive, one page, HTML5 Bootstrap theme.<br /> Created by <strong>Vikas Dhara</strong> </h3>
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
          <div className="column">
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
          <div className="column">
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
          <div className="column">
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
      <div className="container">
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
    <div id="skills">
      <div className="container">
        <div className="row">
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
        </div>
      </div>
    </div>
  </div>
      
      
    
  )
}

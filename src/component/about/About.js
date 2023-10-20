import React from 'react'
import './AboutUs.css';


export default function About() {

  console.log("hello")
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
    <div id="about">
      <div className="container text-center vertical-align">
        <h3 className="text-uppercase"> A little <strong>about</strong> us</h3>
        <hr style={{borderColor: '#d3d3d3'}} />
        <h4><p>Cyber security seems to be a hot issue these days with all the recent news about online hackings and whatnots. However, todays functioning society revolves around the online infrastructure that is the world wide web.</p></h4> 
      </div>
    </div>
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
            <a href className=" button btn btn-info"> Read More</a>
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

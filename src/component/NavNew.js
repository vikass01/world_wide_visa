import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import './navnew.css'


  


export default function NavNew() {

  const [progress, setProgress] = useState(0);
  
  return (
    <>
    <div>
        <LoadingBar
          color="#ff9818"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        {/* <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
        <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
        <button onClick={() => setProgress(100)}>Complete</button>
        <br /> */}
      </div>




    {/* Desktop navigation menu 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 */}    
    <div className="navdesktopcontact">
            <div className="xcvty">
                      <a href="#">Fast Visa Services</a>
                      <a href="#" className="bsH">Mon - Fri: 10:00 - 18:00, Sat: 11:00 - 15:00</a>
                      <a href="tel:+919891012345">
                              <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 384 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z" />
                              </svg>+91 (838) <b>385-66-28</b>
                      </a>
                      <a href="tel:+919891012345">
                              <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 384 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z" />
                              </svg> +91 (11) <b>214-569</b>
                      </a>
                      <a>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 448 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z" />
                            </svg>
                            <span href="#">Request a call</span>
                      </a>
            
            </div>
    <div className="navdesktop">
    <Link className="navlogodesktop" to="/" onClick={() => setProgress(100)} />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div className="adropdown">
          <button className="adropbtn"><a>Visa<i className="fa-solid fa-angle-down"></i></a></button>
          <div className="adropdown-content">
                <div className="aheader">
                  <h2>Visa Menu</h2>
                </div>
              <div className="arow">
              <div className="rowbox2">
                          <div className="scroll-container">
                          <img src="https://voxcel.in/wp-content/uploads/2020/08/Add-a-heading-6.jpg" alt="Cinque Terre"/>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7Rt7Ar8UFcw-as4HSpFzljZ5DhwVT_LBlA&usqp=CAU" alt="Forest"/>
                          <img src="https://www.hiesglobal.com/upload/student_visa/slider-1.jpg" alt="Northern Lights"/>
                          <img src="https://www.manglishworld.com/_next/image?url=%2FM1.jpg&w=3840&q=75" alt="Mountains"/>
                          </div>
                          <div className="scroll-container-text">
                              <h3>Visa</h3>
                              <p>View all</p>
                          </div>
                      
                  </div>
                  <div className="rowbox1">
                      <div className="acolumn">
                        <h5>Category 1</h5>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                      <div className="acolumn">
                        <h5>Category 2</h5>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                      <div className="acolumn">
                        <h5>Category 3</h5>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                  </div>
                  
            </div>
          </div>
        </div>
        {/* 00000000000000000000000000000000000000 */}
        <div className="adropdown">
          <button className="adropbtn"><a>Study<i className="fa-solid fa-angle-down"></i></a></button>
          <div className="adropdown-content">
                <div className="aheader">
                  <h2>WELCOME TO BRIGHT FUTURE ABROAD STUDIES</h2>
                </div>
              <div className="arow">
                  <div className="rowbox1">
                      <div className="acolumn">
                        <h5>Category 1</h5>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                      <div className="acolumn">
                        <h5>Category 2</h5>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                      <div className="acolumn">
                        <h5>Category 3</h5>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                  </div>
                  <div className="rowbox2">
                          <div className="scroll-container">
                          <img src="https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1668670929290.jpg-org" alt="Cinque Terre"/>
                          <img src="https://admission.buddy4study.com/study-abroad/wp-content/uploads/2019/08/mbbs-abroad.jpg" alt="Forest"/>
                          <img src="https://www.neweraeducation.in/assets/images007/blog/how-to-select-your-university-for-mbbs-abroad.webp" alt="Northern Lights"/>
                          <img src="https://media.istockphoto.com/id/1185326263/photo/happy-student-in-london.jpg?s=612x612&w=0&k=20&c=SQHdU5QJpdgZ65uYc-LkYIC1F-vgfEk5ID3kN3o8L-0=" alt="Mountains"/>
                          </div>
                          <div className="scroll-container-text">
                              <h3>Study</h3>
                              <p>View all</p>
                          </div>
                      
                  </div>
            </div>
          </div>
        </div>
        <Link to="/tours">Tour</Link>
        <Link to="/contact">Contact</Link>
        <a className= "cgtpn" href="#news"><i className="fa-regular fa-user"></i></a>
        
    </div>
    </div>

    


    {/* mobile navigation menu 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000 */}
    <div className="navmobile">
        <Link className="navlogomobile" to="/" onClick={() => setProgress(100)} />
        <Link onClick={() => setProgress(100)} to="/"><i className="fa-regular fa-user"></i></Link>
        {/* <Link onClick={() => setProgress(100)} to="/" ><i className="fa-solid fa-bars"></i></Link> */}
        <div className="subnav">
          <button className="subnavbtn"><i className="fa-solid fa-bars"/></button>
          <div className="subnav-content">
            <Link to="/about">About</Link>
            <Link to="/tours">Tours</Link>
            <Link to="/hotels">Package</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      </>
  )
}

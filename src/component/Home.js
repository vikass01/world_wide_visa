import React from 'react'
import './Nav.css';
import fingerprint from './images/fingerprint.png';
import './clock/newdelhi/clock.css';
import { useEffect } from 'react';




export default function Home() {


  


    

    useEffect(()=>{
    const interval = setInterval(()=>{

    const date =  new Date();
    const india = date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      month: "short",
      year: "numeric",
    });
    const inhour = date.toLocaleString("en-IN", {timeZone: "Asia/Kolkata",hour: "numeric"});
    const inminute = date.toLocaleString("en-IN", {timeZone: "Asia/Kolkata",minute: "numeric"});
    const insecond = date.toLocaleString("en-IN", {timeZone: "Asia/Kolkata",second: "numeric"});

    document.querySelectorAll(".hand1")[0].style.rotate = inhour.split(" ")[0]*30+inminute/2+"deg";
    document.querySelectorAll(".hand2")[0].style.rotate = inminute*6+"deg";
    document.querySelectorAll(".hand3")[0].style.rotate = insecond*6+"deg";
    document.querySelectorAll('.countrydesp')[0].innerHTML = india;

    





    const usa = date.toLocaleString("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      month: "short",
      year: "numeric",
    });
    const usanhour = date.toLocaleString("en-US", {timeZone: "America/New_York",hour: "numeric",});
    const usanminute = date.toLocaleString("en-US", {timeZone: "America/New_York",minute: "numeric",});
    const usansecond = date.toLocaleString("en-US", {timeZone: "America/New_York",second: "numeric",});
    document.querySelectorAll(".hand1")[1].style.rotate = usanhour.split(" ")[0]*30+inminute/2+"deg";
    document.querySelectorAll(".hand2")[1].style.rotate = usanminute*6+"deg";
    document.querySelectorAll(".hand3")[1].style.rotate = usansecond*6+"deg";
    document.querySelectorAll('.countrydesp')[1].innerHTML = usa;





    const uk = date.toLocaleString("en-GB", {
      timeZone: "Europe/London",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      month: "short",
      year: "numeric",
    });
    const ukhour = date.toLocaleString("en-GB", {timeZone: "Europe/London",hour: "numeric",});
    const ukminute = date.toLocaleString("en-GB", {timeZone: "Europe/London",minute: "numeric",});
    const uksecond = date.toLocaleString("en-GB", {timeZone: "Europe/London",second: "numeric",});
    document.querySelectorAll(".hand1")[2].style.rotate = ukhour*30+inminute/2+"deg";
    document.querySelectorAll(".hand2")[2].style.rotate = ukminute*6+"deg";
    document.querySelectorAll(".hand3")[2].style.rotate = uksecond*6+"deg";
    document.querySelectorAll('.countrydesp')[2].innerHTML = uk;



    const japan = date.toLocaleString("en-JP", {
      timeZone: "Asia/Tokyo",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      month: "short",
      year: "numeric",
    });
    const japanhour = date.toLocaleString("en-JP", {timeZone: "Asia/Tokyo",hour: "numeric",});
    const japanminute = date.toLocaleString("en-JP", {timeZone: "Asia/Tokyo",minute: "numeric",});
    const japansecond = date.toLocaleString("en-JP", {timeZone: "Asia/Tokyo",second: "numeric",});
    document.querySelectorAll(".hand1")[3].style.rotate = japanhour.split(" ")[0]*30+inminute/2+"deg";
    document.querySelectorAll(".hand2")[3].style.rotate = japanminute*6+"deg";
    document.querySelectorAll(".hand3")[3].style.rotate = japansecond*6+"deg";
    document.querySelectorAll('.countrydesp')[3].innerHTML = japan;

      }, 1000);
      return () => clearInterval(interval);
    },[])

  return (
    <div>
        <div className="ehlOuW">
          <div className="ryIus">
            <h1 size={30} className="jBPgjx">
              Visas and tours to any country!
            </h1>
            <form autoComplete="false">
              <p>
                <input type="tel" name="tel" required autoComplete="tel" placeholder="Phone number" className="cucclX" />
              </p>
              <br/>
              <p>
                <button className="caLgOF">
                  To get a consultation
                </button>
              </p>
            </form>
          </div>
        </div>
        <div height="auto" id="continents" className="styled__Section-sc-1ji51nh-0 continents__Section-mu4rdf-0 kELZqj">
          <div className="styled__Container-sc-1ji51nh-1 bQcjpC">
            <h2 className="styled__Title-sc-1ji51nh-2 continents__Title-mu4rdf-1 kYBuig">
              Where will we go?
            </h2>
            <br/>
            <div className="continents__Wrapper-mu4rdf-2 dgFnke">
              <a className="continents__Continent-mu4rdf-3 jeUIoc" to='/'><p>Europe</p>
                <div className="continents__Img-mu4rdf-4 continents__EuropeImg-mu4rdf-5 cpzfEQ" /></a><a className="continents__Continent-mu4rdf-3 jeUIoc"><p>Asia</p>
                <div className="continents__Img-mu4rdf-4 continents__AsiaImg-mu4rdf-6 cgDwQz" /></a><a className="continents__Continent-mu4rdf-3 jeUIoc"><p>Australia</p>
                <div className="continents__Img-mu4rdf-4 continents__AustraliaImg-mu4rdf-7 fjUZAo" /></a>
            </div>
            <p>Select continent for more details</p>
          </div>
        </div>
        <div id="biometrics" className="biometrics__Section-sc-1qjc3xo-0 iwBKEP">
          <div className="biometrics__TextSection-sc-1qjc3xo-1 eFpeKG">
            <img src= {fingerprint} className="biometrics__FingerPrintImg-sc-1qjc3xo-5 ebVVUT" /><svg x="0px" y="0px" width="300px" height="500px" viewBox="0 5 130 220" preserveAspectRatio="none" fill="#fff" className="biometrics__WaveStyled-sc-1qjc3xo-2 eoBsPU">
              <path d="M144.61,227.27V0.5H99.89c0,0-57.79,36.01-44.2,119.49S2.88,227.27,2.88,227.27H144.61z" />
            </svg>
            <div className="biometrics__TextWrapper-sc-1qjc3xo-3 dkhatj">
              <h2 className="biometrics__Title-sc-1qjc3xo-4 dynRLe">
                Mobile biometrics in application 
              </h2>
              <ul className="biometrics__List-sc-1qjc3xo-6 iOzoBu">
                <li className="biometrics__ListItem-sc-1qjc3xo-7 bSoyTd">
                  <b>Finland, Austria, Czech Republic, Lithuania, Slovenia, Denmark, Iceland {/* */}:</b><br />February 26, March 24
                </li>
                <li className="biometrics__ListItem-sc-1qjc3xo-7 bSoyTd">
                  <b>Spain {/* */}:</b><br />March 17, April 6
                </li>
                <li className="biometrics__ListItem-sc-1qjc3xo-7 bSoyTd">
                  <b>Latvia, Hungary{/* */}:</b><br />any weekday!
                </li>
              </ul>
              <button className="styled__PulseBtn-sc-1ji51nh-3 caLgOF">
                Submit your application
              </button>
            </div>
          </div>
        </div>
        <div height="auto" id="advantages" className="styled__Section-sc-1ji51nh-0 dRCKEU">
                <div className="styled__Container-sc-1ji51nh-1 bQcjpC">
                      <h2 className="styled__Title-sc-1ji51nh-2 advantages__Title-sc-1rvjoc-0 iTdKte">
                        Are you looking for a reliable visa application center ?
                      </h2>
                      <h3 className="advantages__SubTitle-sc-1rvjoc-1 kussSZ">
                      The World Clock — Worldwide
                      </h3>          
                  
                </div>
          <div className="clockbox">


              <div>
                  <div className="clock clock1">
                          <div id="clock" >                          
                               <div className="arrows">
                                  <div className="hand hand1"/>
                                 <div className="hand hand2"/>
                                  <div className="hand hand3 gghh" />
                               </div>
                          </div>   
                  </div>
                    <div className="country-time">
                      <h2 style={{display:"inline-block", marginRight: "5px", fontSize:"18px"}}> New Delhi</h2><img alt="India" style={{width:  "30px"}} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg"/>
                      <h3 style={{fontSize:"18px"}} className='countrydesp'></h3>
                    </div>
                </div>


                <div>
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
                        <h2 style={{display:"inline-block", marginRight: "5px", fontSize:"18px"}}> New York</h2><img alt="United States" style={{width:  "30px"}} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>
                        <h3 style={{fontSize:"18px"}} className='countrydesp'></h3>
                      </div>
                  </div>    

              <div>
                  <div className="clock clock3">
                    <div id="clock" >
                      <div className="arrows">
                          <div className="hand hand1"/>
                          <div className="hand hand2"/>
                          <div className="hand hand3"/>
                      </div>
                    </div>
                  </div>
                    <div className="country-time">
                      <h2 style={{display:"inline-block", marginRight: "5px" , fontSize:"18px"}}> London</h2><img alt="United Kingdom" style={{width:  "30px"}} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"/>
                      <h3 style={{fontSize:"18px"}} className='countrydesp'></h3>
                    </div>
                </div> 

             <div>   
                <div className="clock clock4">
                    <div id="clock"  >
                          <div className="arrows">
                              <div className="hand hand1"/>
                              <div className="hand hand2"/>
                              <div className="hand hand3"/>
                          </div>
                    </div>
                </div> 
                    <div className="country-time">
                      <h2 style={{display:"inline-block", marginRight: "5px", fontSize:"18px"}}> Tokyo</h2><img alt="Japan" style={{width:  "30px"}} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg"/>
                      <h3 style={{fontSize:"18px"}} className='countrydesp'></h3>
                    </div>
              </div>       
        </div>   
      </div>
        
        <div id="tours" className="styled__Section-sc-1ji51nh-0 tours__Section-bhr5fb-0 hxJnWr">
          <h2 className="styled__Title-sc-1ji51nh-2 tours__Title-bhr5fb-2 bUWTBM">
            Bus and air tours
          </h2>
          <button className="styled__PulseBtn-sc-1ji51nh-3 tours__Button-bhr5fb-3 kYYayU">
            Choose a tour
          </button>
          <div className="tours__Overlay-bhr5fb-1 jzexuY" />
        </div>
        <div height="auto" id="services" className="styled__Section-sc-1ji51nh-0 dRCKEU">
          <div className="styled__Container-sc-1ji51nh-1 bQcjpC">
            <h2 className="styled__Title-sc-1ji51nh-2 services__Title-ddmf7w-0 eXcXBg">
              Our services
            </h2>
            <ul className="services__List-ddmf7w-1 grYKsD">
              <li className="services__Item-ddmf7w-2 hTXiu">
                <div className="services__Img-ddmf7w-3 fwtetB" />
                <p>Visa processing</p>
              </li>
              <li className="services__Item-ddmf7w-2 hTXiu">
                <div className="services__Img-ddmf7w-3 gdDHuq" />
                <p>Registration of tours</p>
              </li>
              <li className="services__Item-ddmf7w-2 hTXiu">
                <div className="services__Img-ddmf7w-3 cGheSV" />
                <p>Flights</p>
              </li>
              <li className="services__Item-ddmf7w-2 hTXiu">
                <div className="services__Img-ddmf7w-3 lcrnjC" />
                <p>Hotel reservations</p>
              </li>
              <li className="services__Item-ddmf7w-2 hTXiu">
                <div className="services__Img-ddmf7w-3 kQpRaS" />
                <p>Travel insurance</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
      
      
  )
}

import React, { useState } from 'react'
import './contact.css'

export default function Contact() {

  const [name, setname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [msg, setmsg] = useState("");

  const query1 = document.querySelector('.contactForm1')
  const query2 = document.querySelector('.contactForm2')
  
// const queryhtml = `<div class="accordion-item">
// <h2 class="accordion-header">
// <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//   Accordion Item #2
// </button>
// </h2>
// <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
// <div class="accordion-body">
//   <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
// </div>
// </div>
// </div>`
 

  
    const lsData = [];

  function ghyui(){
    query1.classList.add("hidden");
    query2.classList.remove("hidden")
  }

  function queryclose(){
    query1.classList.remove("hidden");
    query2.classList.add("hidden")

  }

  const querydata = {
    name:name,
    lastName : lname,
    email : email,
    mobile : mobile,
    msg : msg
  }

  function submitquery(){
    let data = localStorage.getItem("queries")
    localStorage.setItem("queries", `${data === null ? "" : data}`  + JSON.stringify(querydata))

  }

  return (
    <div className='contactbox'>
        <div className="containercontact">
          <div className="contactInfo"> 
            <div>
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span className='locationicon'></span>
                  <span>184 Ippokratous Street<br />
                    Athens, Gr<br />
                    11472</span>
                </li>
                <li>
                  <span className='locationmail'></span>
                  <span><a href="mailto: eng.vikas90@gmail.com">eng.vikas90@gmail.com</a></span>
                </li>
                <li>
                  <span className='locationnumber'></span>
                  <span>98910-12345</span>
                </li>
                <li>
                  <span className='queryhistry'></span>
                  <span onClick={ghyui}>My Last Queries</span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li className='one'></li>
              <li className='two'></li>
              <li className='three'></li>
              <li className='five'></li>
            </ul>
          </div>
          <div className="contactForm1">
            <h2>Send a Message</h2>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" value={name} onChange={(event)=>{setname(event.target.value)}} required />
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" value={lname} onChange={(event)=>{setlname(event.target.value)}} required />
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input type="email" value={email} onChange={(event)=>{setemail(event.target.value)}} required />
                <span>Email Address</span>
              </div>
              <div className="inputBox w50">
                <input type="text" value={mobile} onChange={(event)=>{setmobile(event.target.value)}} required />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox w100">
                <textarea required defaultValue={msg} onChange={(event)=>{setmsg(event.target.value)}} />
                <span>Write your message here...</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" defaultValue="Send" onClick={submitquery} />
              </div>
            </div>
            </div>
          


          {/* 00000000000000000000000000000000000000000000000000000000 */}

                      <div className="contactForm2 hidden">
                            <button type="button" className="btn btn-light position-absolute top-0 end-0" onClick={queryclose}>close</button>
                            <div className="accordion dfhty" id="accordionExample">


                                <div className="accordion-item">
                                  <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Accordion Item #1
                                    </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                  </div>
                              </div>



                              {/* <div class="accordion-item">
                                <h2 class="accordion-header">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                  </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                  <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                  </div>
                                </div>
                              </div> */}

                              
                          </div>
                        </div>





          {/* 000000000000000000000000000000000000000000000000000000000000000000 */}
        </div>
        </div>
  )
}

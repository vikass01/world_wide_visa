import React, { useEffect, useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [name, setname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [msg, setmsg] = useState("");
  const [form, setform] = useState("hidden");



  const forms = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_p73cw28', 'template_l8h877l', forms.current, 'D5-RldC84sFFtvfSt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      }
      
     



  



 useEffect(()=>{


  
  
  let queries;
  const huyg = document.querySelector(".bnhui")
  
  const localdata = localStorage.getItem("queries")
  if (localdata===null){
    queries=[]
  }else{
    queries = JSON.parse(localStorage.getItem("queries"))
  }
 

  

  queries.forEach(element => {
    huyg.insertAdjacentHTML("beforeend", `<button class="accordion">Date: ${element.date}</button>
    <div class="panel">
      <span>Name: ${element.name} ${element.lastName}</span>
      <span> Email:${element.email}</span>
      <span> Contact:${element.mobile}</span>
      <p> Your Query:${element.msg}</p>
      
    </div>`)
    
  });


 },[])



//  var acc = document.querySelectorAll(".accordion");
//  var i;

//   for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//       this.classList.add("active");
//       var panel = this.nextElementSibling.style.display = "block"
      
//     });
//   }


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

  
    

  const lastquery = ()=>{
    setform("false")
    
  }

  function queryclose(){
    setform("hidden")
  }

  function clearall(){
    localStorage.clear()
    window.location.reload(false)
  }

  function submitquery(){

    let queries;

    let localS = localStorage.getItem("queries")
    if(localS === null){
      queries = [];
    }else{
      queries = JSON.parse(localStorage.getItem("queries"))
    }

    

    const querydata = {
      name:name,
      lastName : lname,
      email : email,
      mobile : mobile,
      msg : msg,
      date: new Date().toLocaleString()
    }

    queries.push(querydata)

    localStorage.setItem("queries", JSON.stringify(queries))

    // window.location.reload(false)


    

    
      
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
                  <span onClick={lastquery}>My Last Queries</span>
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


          <form ref={forms} onSubmit={sendEmail} id='myForm'>
          <div className={"contactForm1"}>
            <h2>Send a Message</h2>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" value={name} name='user_name' onChange={(event)=>{setname(event.target.value)}} required />
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" value={lname} name='user_lName' onChange={(event)=>{setlname(event.target.value)}} required />
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input type="email" value={email} name='user_email' onChange={(event)=>{setemail(event.target.value)}} required />
                <span>Email Address</span>
              </div>
              <div className="inputBox w50">
                <input type="text" value={mobile} name='user_mobile' onChange={(event)=>{setmobile(event.target.value)}} required />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox w100">
                <textarea required defaultValue={msg} name='user_msg' onChange={(event)=>{setmsg(event.target.value)}} />
                <span>Write your message here...</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" defaultValue="Send" onClick={submitquery} />
              </div>
            </div>
            </div>
            </form>


          {/* 00000000000000000000000000000000000000000000000000000000 */}

                      <div className="contactForm2" id={form}>


                                <div className="ghjg"><button onClick={clearall}>Clear All</button><button onClick={queryclose}>Close</button></div>
                                

                                  <div className='bnhui'> 

                                    {/* <button className="accordion">Date</button>
                                    <div className="panel">
                                      <span>Name:</span>
                                      <span> Email:</span>
                                      <span> Contact:</span>
                                      <p> Your Query:</p>
                                    </div> */}

                                    


                                    


                                    



                           </div>
                     </div>



                              

                              


                              


                              

                        





          {/* 000000000000000000000000000000000000000000000000000000000000000000 */}
        </div>
        </div>
  )
}

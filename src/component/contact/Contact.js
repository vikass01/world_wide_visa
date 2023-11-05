import React, { useEffect, useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [lastqueries, setlastqueries] = useState(false);
  const [requ, setrequ] = useState("");
  const [query, setquery] = useState("");
  const [adress, setadress] = useState("");
  const [msg, setmsg] = useState("");



  const forms = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      setTimeout(() => {
        setname("")
        setadress("")
        setemail("")
        setmobile("")
        setmsg("")
        setrequ("")
        setquery("")
      }, 1000);
  
      emailjs.sendForm('service_p73cw28', 'template_l8h877l', forms.current, 'D5-RldC84sFFtvfSt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      }
      
     


      let queries = localStorage.getItem("queries")
      if (queries===null){
        queries=[]
      }else{
        queries = JSON.parse(localStorage.getItem("queries"))
      }




      var acc = document.querySelectorAll(".accordion");
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



 


  
  
  // let queries;
  // const huyg = document.querySelector(".bnhui")
  
  // const localdata = localStorage.getItem("queries")
  // console.log(localdata)
  // if (localdata===null){
  //   queries=[]
  // }else{
  //   queries = JSON.parse(localStorage.getItem("queries"))
  // }
 

  

  // queries.forEach(element => {

  //   console.log(element)
  //   huyg.insertAdjacentHTML("beforeend", `element.name
  //   <button class="accordion">Date: ${element.date}</button>
  //   <div class="panel">
  //     <span>Name: ${element.name}</span>
  //     <span> Email:${element.email}</span>
  //     <span> Contact:${element.mobile}</span>
  //     <span> Contact:${element.query}</span>
  //     <span> Contact:${element.adress}</span>
  //     <p> Your Query:${element.msg}</p>
      
  //   </div>`)
    
  // });






//  var acc = document.querySelectorAll(".accordion");
//  var i;

//   for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//       this.classList.add("active");
//       var panel = this.nextElementSibling.style.display = "block"
      
//     });
//   }


// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

  
    

  const lastquery = ()=>{
    setlastqueries(true)
    
  }

  function queryclose(){
    setlastqueries(false)

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
      email : email,
      mobile : mobile,
      msg : msg,
      query:query,
      adress: adress,
      date: new Date().toLocaleString()
    }

    queries.push(querydata)

    localStorage.setItem("queries", JSON.stringify(queries))

    
    


    

    
      
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
                  <span><a href="mailto: eng.vikas90@gmail.com">info@worldwide-visa.com</a></span>
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
              <li className='visa'></li>
              <li className='ttour'></li>
              <li className='sstudy'></li>
              <li className='iimmigration'></li>
            </ul>
            <ul className="sci">
              <li className='one'></li>
              <li className='two'></li>
              <li className='three'></li>
              <li className='five'></li>
            </ul>
          </div>

      { !lastqueries && 
          <form ref={forms} onSubmit={sendEmail}>
          <div className={"contactForm1"} >
            <h2>Send a Message | Apply for Visa | Apply for study abroad</h2>
            <span>Contact us | Raise queries | Immigration support</span>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" value={name} name='user_name' onChange={(event)=>{setname(event.target.value)}} required />
                <span>Full Name</span>
              </div>
              
              <div className="inputBox w50">
                <input type="email" value={email} name='user_email' onChange={(event)=>{setemail(event.target.value)}} required />
                <span>Email Address</span>
              </div>
              <div className="inputBox w50">
                <input type="text" value={mobile} name='user_mobile' onChange={(event)=>{setmobile(event.target.value)}} required />
                <span>Mobile Number</span>
              </div>
              
              <div className="inputBox w50">

                    <select name="user_query" id="products" value={query} onChange={(event)=>{setquery(event.target.value)}}>
                      <option value="">Select your query</option>
                      <option value="visa">Visa</option>
                      <option value="study">Study</option>
                      <option value="tour">Tours</option>
                      <option value="immigration">Immigration</option>
                      <option value="immigration">Business Investor Program</option>
                    </select>

               
              </div>
              <div className="inputBox w100">
                <input type="text" value={adress} name='user_address' onChange={(event)=>{setadress(event.target.value)}} required />
                <span>Address</span>
              </div>
              <div className="inputBox w100">
                <textarea required value={msg} name='user_msg' onChange={(event)=>{setmsg(event.target.value)}} />
                <span>Write your message here...</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" defaultValue="Send" onClick={submitquery} />
                <span >{requ}</span>
              </div>
            </div>
            </div>
            </form>
          }


          {/* 00000000000000000000000000000000000000000000000000000000 */}
              {lastqueries && 
                      <div className="contactForm2" >


                                <div className="ghjg"><button onClick={clearall}>Clear All</button><button onClick={queryclose}>Close</button></div>
                                

                                  <div className='bnhui'> 
                                  {lastqueries && queries.map((element, ind)=>{

                                    return <div key={"key"+ind} ><button  className="accordion">{element.date}</button>
                                          <div className="panel">
                                            <span>Name: {element.name}</span><br/>
                                            <span>Email: {element.email}</span><br/>
                                            <span>Contact: {element.mobile}</span><br/>
                                            <span>Your enquiry about: {element.query}</span><br/>
                                            <span>Address: {element.adress}</span><br/>
                                            <p>Query Text: {element.msg}</p><br/>
                                          </div>
                                          </div>

                                  })}

                                         
                                         

                                          

                                    {/* <button className="accordion">Date</button>
                                    <div className="panel">
                                      <span>Name:</span>
                                      <span> Email:</span>
                                      <span> Contact:</span>
                                      <p> Your Query:</p>
                                    </div> */}

                                    


                                    


                                    



                           </div>
                     </div>
                    }



                              

                              


                              


                              

                        





          {/* 000000000000000000000000000000000000000000000000000000000000000000 */}
        </div>
        </div>
  )
}

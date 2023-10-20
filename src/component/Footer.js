import React from 'react'
import './Nav.css';
import FooterA1 from './footer/Footer'
// old footer
export default function Footer() {
  return (
    
    <div>
    <FooterA1/>
    
         {/* <div className="component__Overlay-sc-1jrr6iz-0 eSYVyh">
         
          <div className="component__Wrapper-sc-1jrr6iz-1 hscwIb">
            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="component__CloseBtn-sc-1jrr6iz-4 cLrLNh" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
            <h3>Спасибо за обращение!</h3>
            <p>В ближайшее время мы с Вами свяжемся!</p>
          </div>
        </div> */}
        <div height="auto" id="footer" className="styled__Section-sc-1ji51nh-0 footer__Section-sc-17nhkos-0 cvPivR">
          <div itemScope itemType="https://schema.org/TravelAgency" className="styled__Container-sc-1ji51nh-1 footer__Container-sc-17nhkos-1 kCtrqk">
            <div className="footer__SocialBtns-sc-17nhkos-3 gFHYQN">
              <a href="/"><img className='footLogo'  src="https://cdn-icons-png.flaticon.com/512/1669/1669520.png" itemProp="image" alt="Визовый туристический центр" /></a>
            </div>
            <div className="footer__Contacts-sc-17nhkos-2 cyVaEW">
              <h3>World Wide Visa Pvt. Ltd:</h3>
              <p itemProp="name">Corporate Office:</p>
              <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                Delhi: 123 tower 4, Laxmi Nagar, East Delhi, Delhi- 110091.
                <span itemProp="addressLocality">Near abc </span>,{/* */}
                <span itemProp="streetAddress">Street No. 5</span>
              </p>
              <p>
                Office Timming:<br />Mon - Fri: 10:00 - 18:00<br />Sat: 11:00 - 15:00
              </p>
              <p>
                Contact Number:{/* */}
                <a href="tel:+78212239305" className="footer__ContactLink-sc-17nhkos-5 jCBXRa"><span itemProp="telephone">+7 (8212) 23-93-05</span></a>
              </p>
              <p>
                Электронная почта:{/* */}
                <a href="mailto:info@visatour-komi.ru" className="footer__ContactLink-sc-17nhkos-5 jCBXRa"><span itemProp="email">info@visa_agency.com</span></a>
              </p>
            </div>
<iframe title='ItsMap' width={320} height={300}  src="https://maps.google.com/maps?width=320&height=300&hl=en&q=Laxmi%20Nagar%20Metro%20Station,%20yes,%20India+(Visa%20Agency)&t=&z=14&ie=UTF8&iwloc=B&output=embed" className="footer__Map-sc-17nhkos-4 XpJTU">&lt;a href="https://www.maps.ie/population/"&gt;Population mapping&lt;/a&gt;</iframe>            {/*  */}
          </div>
        </div>
      </div>
  )
}

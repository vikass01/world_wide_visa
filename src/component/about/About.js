import React, { useRef, useState } from "react";
import "./AboutUs.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import mangal from '../images/founders/mangal.jpg'
import notfound from '../images/founders/notfound.jpg'

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

      <div style={{ width: "100%", backgroundColor: "#f5f5f5", padding: "40px 20px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            maxWidth: "1400px",
            margin: "0 auto",
            backgroundColor: "#fff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          {/* Left Column */}
          <div style={{ flex: "1 1 600px", paddingRight: "30px", minWidth: "300px" }}>
            <h1 style={{ fontSize: "36px", marginBottom: "20px", color: "#222" }}>
              About Us
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#555" }}>
              <strong>Mangalam Migration Services</strong> is a leading study abroad consultancy in India and abroad. We specialize in overseas MBBS education consultancy, documentation support, and admissions assistance. Our mission is to help students discover opportunities abroad and secure spots in top universities.
              <br /><br />
              From the first counseling session to visa processing, we ensure a smooth journey for students. Our experienced advisors are dedicated to providing the best guidance and services to build successful futures. Come and join us for a great career journey!
              <br /><br />
              We have partnered with top-ranked universities across countries like Russia, Georgia, Kazakhstan, and the Philippines to provide students with globally recognized degrees. Our expert team offers personalized counseling based on each student’s academic profile, career goals, and financial background.
              <br /><br />
              With a high success rate in student placements and visa approvals, we have become a trusted name among aspiring medical professionals. We believe in complete transparency and keep students informed at every step of the process. Our support continues even after admission, including accommodation guidance, pre-departure briefings, and post-arrival assistance.
              <br /><br />
              At Mangalam Migration Services, your dreams are our priority. Let us help you shape a bright and secure future overseas.
            </p>
          </div>


          {/* Right Column Image */}
          <div
            style={{
            }}
          >
            {/* Founders Section */}
            <h2
              style={{
                textAlign: "center",
                fontSize: "30px",
                color: "#222",
              }}
            >
              Meet Our Founders
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              {/* Founder 1 */}
              <div
                style={{
                  width: "280px",
                  backgroundColor: "#fafafa",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={mangal}
                  alt="Jane Doe"
                  style={{ width: "100%", height: "auto" }}
                />
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h3 style={{ marginBottom: "8px", color: "#333" }}>Mangal Verma</h3>
                  <p style={{ color: "#777", marginBottom: "10px" }}>CEO & Founder</p>
                  <p style={{ fontSize: "14px", color: "#555" }}>
                    A visionary leader empowering students globally.
                  </p>
                  <a
                    href="mailto:mangal.verma@mangalammigrationservices.com"
                    style={{
                      color: "#007bff",
                      marginTop: "10px",
                      display: "inline-block",
                      textDecoration: "none",
                      wordBreak: "break-all", // forces break mid-word if needed
                      whiteSpace: "normal",   // allows wrapping
                      overflowWrap: "break-word", // ensures text wraps properly
                    }}
                  >
                    mangal.verma@mangalammigrationservices.com
                  </a>

                  <a
                    href="mailto:jane@example.com"
                    style={{
                      display: "inline-block",
                      marginTop: "15px",
                      padding: "10px 25px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      borderRadius: "5px",
                      textDecoration: "none",
                    }}
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Founder 2 */}
              <div
                style={{
                  width: "280px",
                  backgroundColor: "#fafafa",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={notfound}
                  alt="Mike Ross"
                  style={{ width: "100%", height: "auto" }}
                />
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h3 style={{ marginBottom: "8px", color: "#333" }}>Mike Ross</h3>
                  <p style={{ color: "#777", marginBottom: "10px" }}>CTO & Founder</p>
                  <p style={{ fontSize: "14px", color: "#555" }}>
                    Creative strategist shaping dreams into designs.
                  </p>
                  <a
                    href="mailto:mike.rose@mangalammigrationservices.com"
                    style={{
                      color: "#007bff",
                      marginTop: "10px",
                      display: "inline-block",
                      textDecoration: "none",
                      wordBreak: "break-all",
                      whiteSpace: "normal",
                      overflowWrap: "break-word",
                    }}
                  >
                    mike.rose@mangalammigrationservices.com
                  </a>

                  <a
                    href="mailto:mike@example.com"
                    style={{
                      display: "inline-block",
                      marginTop: "15px",
                      padding: "10px 25px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      borderRadius: "5px",
                      textDecoration: "none",
                    }}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div id="services" className="py-5 bg-light">
        <div className="text-center mb-5">
          <h3 className="text-uppercase">
            Our <strong>Service Promises</strong>
          </h3>
          <hr className="icon mx-auto" style={{ width: '60px', borderTop: '3px solid #007bff' }} />
        </div>

        <div className="container">
          <div className="row g-4">
            {[
              {
                title: "Expertise",
                icon: "fa-graduation-cap",
                desc:
                  "With over 10 years of experience in the study abroad industry, Mangalam Migration Services guides students in course selection, applications, and visa processes.",
              },
              // {
              //   title: "Personalized Attention",
              //   icon: "fa-user-check",
              //   desc:
              //     "We offer individualized support to meet each student’s unique goals and challenges throughout their educational journey.",
              // },
              {
                title: "Wide Network of Partners",
                icon: "fa-globe",
                desc:
                  "Our global network of partner universities and visa professionals ensures that students find the right fit and receive expert visa assistance.",
              },
              {
                title: "Affordability",
                icon: "fa-money-bill-wave",
                desc:
                  "We provide our services at affordable rates so students can focus on their dreams without financial stress.",
              },
              {
                title: "Guarantee",
                icon: "fa-shield-alt",
                desc:
                  "We offer a satisfaction guarantee. If you're not happy with our services, we offer a full refund—no questions asked.",
              },
              {
                title: "Trust Building",
                icon: "fa-handshake",
                desc:
                  "Customer satisfaction is our top priority. We resolve queries quickly and strive to build long-term relationships with our clients.",
              },
              {
                title: "All Country BBS Study Service",
                icon: "fa-university",
                desc:
                  "We specialize in BBS (Bachelor of Business Studies) admissions for top universities across all major countries. No matter where you dream to go, we can help you get there.",
              },
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 shadow-sm border-0 service-item p-4 text-center">
                  <div className="mb-3">
                    <i className={`fa ${item.icon} fa-3x text-primary`} />
                  </div>
                  <h4 className="mb-2">{item.title}</h4>
                  <h6 className="text-muted mb-3">Mangalam Migration Services</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>




      <div id="skills">
        <div className="container">


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
              effect="fade"
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


        </div>
      </div>

    </div>
  );
}

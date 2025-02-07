"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function ServiceDetails() {
  const faqData = [
    {
      id: 1,
      question: "How long does it take to develop a mobile app? ",
      answer:
        "The timeline depends on complexity. A basic app takes 4-8 weeks, while a feature-rich enterprise app may take 3-6 months.   ",
    },
    {
      id: 2,
      question: " What technologies do you use for app development?",
      answer:
        "We use Swift, Kotlin, Java, React Native, Flutter, Xamarin, and other modern frameworks. ",
    },
    {
      id: 3,
      question: " Can you develop an app for both Android & iOS?",
      answer:
        "Yes! We build native and cross-platform apps to ensure broader reach.   ",
    },
    {
      id: 4,
      question: "How do you ensure app security?",
      answer:
        "We use end-to-end encryption, secure authentication, and compliance protocols to protect user data. ",
    },
    {
      id: 5,
      question: "Do you offer post-launch support?",
      answer:
        "Yes! We provide ongoing maintenance, updates, and troubleshooting services.  ",
    },
    {
      id: 6,
      question: "How do you monetize mobile apps? ",
      answer:
        "We integrate various monetization models like in-app purchases, ads, subscriptions, and freemium models to maximize revenue. ",
    },
    
  ];
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Android & iOS App Development ">
        <section className="service-details-section fix section-padding">
          <div className="container">
            <div className="service-details-wrapper">
              <div className="row g-4">
                {/* <div className="col-12  order-2 order-md-2">
                  <div className="main-sidebar">
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>All Services</h3>
                      </div>
                      <div className="widget-categories">
                        <ul>
                          <li>
                            <Link href="/Webmaster">Webmaster</Link>
                            <Link href="/Webmaster">
                              {" "}
                              <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/SAASDevelopment ">
                              SAAS Development
                            </Link>
                            <Link href="/SAASDevelopment ">
                              {" "}
                              <i className="fa-solid fa-arrow-right-long" />{" "}
                            </Link>
                          </li>
                          <li className="active">
                            <Link href="/DevOps">Dev Ops</Link>
                            <Link href="/DevOps">
                              {" "}
                              <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ERP-CRM">ERP/CRM</Link>
                            <Link href="/ERP-CRM">
                              {" "}
                              <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/OpenSource">Open Source</Link>
                            <Link href="/OpenSource">
                              {" "}
                              <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/Android-IOSApps">
                              Android/IOS Apps
                            </Link>
                            <Link href="/Android-IOSApps">
                              {" "}
                              <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/Designing">Designing</Link>
                            <Link href="/Designing">
                              <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/DigitalMarketing">
                              Digital Marketing
                            </Link>
                            <Link href="/DigitalMarketing">
                              {" "}
                              <i className="fa-solid fa-arrow-right-long" />{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>Opening Hours</h3>
                      </div>
                      <div className="opening-category">
                        <ul>
                          <li>
                            <i className="fa-regular fa-clock" />
                            Mon - Sat: 10.00 AM - 4.00 PM
                          </li>
                          <li>
                            <i className="fa-regular fa-clock" />
                            Sun: 09.00 AM - 4.00 PM
                          </li>
                          <li>
                            <i className="fa-regular fa-clock" />
                            Friday: Closed
                          </li>
                          <li>
                            <i className="fa-regular fa-clock" />
                            Emergency: 24 hours
                          </li>
                        </ul>
                      </div>
                    </div> */}
                {/* <div
                      className="single-sidebar-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/service/post.jpg")',
                      }}
                    >
                      <div className="contact-text">
                        <div className="icon">
                          <i className="fa-solid fa-phone" />
                        </div>
                        <h4>Need Help? Call Here</h4>
                        <h5>
                          <Link href="/tel:+2085550112">+208-555-0112</Link>
                        </h5>
                      </div>
                    </div>  
                  </div>
                </div> */}
                <div className="col-12  order-1 order-md-1">
                  <div className="service-details-items">
                    {/* <div className="details-image">
                      <img src="/assets/img/service/details-1.jpg" alt="img" />
                    </div> */}
                    <div className="details-content">
                      <h3>
                      Android & iOS App Development – Transform Your Business with Cutting-Edge Mobile Solutions 
                      </h3>
                      <p className="mt-3">
                      In the digital age, having a powerful mobile app is essential for business growth. Whether you need a feature-rich Android app or a sleek and high-performing iOS application, VeravalOnline delivers custom, scalable, and user-friendly mobile solutions tailored to your business needs. 
                      </p>

                      <div className="details-video-items">
                        <div className="video-thumb">
                          <img
                            src="/assets/img/service/details-video.jpg"
                            alt="img"
                          />
                          <VideoPopup style={1} />
                        </div>
                        <div className="content">
                          <h4>Why Invest in Mobile App Development?  </h4>
                          <p>
                            {" "}
                            With billions of smartphone users worldwide, mobile apps provide businesses with: 
                          </p>
                          <ul className="list">
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Increased Brand Visibility – Stay connected with your customers 24/7.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Better User Engagement – Provide a seamless and interactive experience.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Higher Revenue Potential – Monetize with ads, subscriptions, or eCommerce.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Competitive Advantage – Offer unique solutions and enhance customer loyalty.
                            </li>
                            <li>
                            Efficient Business Operations – Automate processes, improve productivity, and streamline workflows.
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <p>
                        Consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore of magna aliqua. Ut enim
                        ad minim veniam, made of owl the quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea dolor
                        commodo consequat. Duis aute irure and dolor in
                        reprehenderit.
                      </p> */}

                      <div className="service-wrapper mb-0">
                        <h3>Our Mobile App Development Services  </h3>
                        <div className="row">
                          <div
                            className="col-xl-4 col-lg- col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="service-box-items service-box-items UL-service-box-items box-shadow"  >
                              <div className="content  Box-Heading">
                                <h4>1. Android App Development  </h4>
                                <p>
                                Leverage the power of Google Play Store with high-performance Android apps designed for smartphones, tablets, and wearables.  
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Custom Android App Development – Tailored solutions for businesses of all sizes.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Enterprise & Business Apps – Optimize internal processes and boost productivity.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    E-Commerce & Shopping Apps – Enhance user experience with secure payment integration.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    On-Demand Service Apps – Taxi, food delivery, healthcare, and more.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Gaming & Entertainment Apps – High-performance and engaging gaming experiences.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    AI & IoT-Enabled Apps – Smart automation solutions powered by AI & IoT.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div
                              className="service-box-items box-shadow  "
                              style={{
                                paddingBottom: "82px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>2. iOS App Development </h4>
                                <p>
                                Deliver premium user experiences with iPhone and iPad apps that run smoothly on iOS and iPadOS.  
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Native iOS App Development – Built using Swift & Objective-C for seamless performance. 
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Hybrid & Cross-Platform Apps – Cost-effective solutions with Flutter, React Native, and Xamarin.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    AR & VR App Development – Immersive experiences for education, healthcare, and retail.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Finance & Banking Apps – Secure transactions with advanced encryption.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Social Networking Apps – Connect users with interactive and engaging platforms.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div
                              className="service-box-items box-shadow  "
                              style={{
                                paddingBottom: "400px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>3. App UI/UX Design</h4>
                                <p>
                                A beautiful interface is key to user retention. Our UI/UX experts ensure: 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Intuitive Navigation & Smooth Animations 
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Eye-Catching & Modern Design 
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    User-Centered Experiences
                                  </li>
                                 
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div
                              className="service-box-items box-shadow  "
                              
                            >
                              <div className="content  Box-Heading">
                                <h4>4. Cross-Platform App Development</h4>
                                <p>
                                Build apps that work seamlessly across Android & iOS with frameworks like React Native, Flutter, and Xamarin, reducing development time and cost. 
                                </p>
                                
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div
                              className="service-box-items box-shadow  "
                              style={{
                                paddingBottom: "66px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>5. App Testing & Quality Assurance </h4>
                                <p>
                                We ensure your app is bug-free, secure, and high-performing with rigorous testing across multiple devices and platforms. 
                                </p>
                                
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div
                              className="service-box-items box-shadow  "
                              style={{
                                paddingBottom: "66px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>6. App Maintenance & Support </h4>
                                <p>
                                We offer continuous updates, performance monitoring, and security enhancements to keep your app running smoothly. 
                                </p>
                                
                              </div>
                            </div>
                          </div>
                         
                        </div>
                      </div>
                      <div className="image-area">
                        <div className="row g-4">
                          <div className="col-lg-6 col-md-6">
                            <div className="thumb">
                              <img
                                src="/assets/img/service/details-2.jpg"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="thumb">
                              <img
                                src="/assets/img/service/details-3.jpg"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row pb-5">
                        <div className="col-lg-6 col-md-12   ">
                          <div
                            className="Content-List box-shadow"
                            style={{
                              padding: "40px",
                              
                            }}
                          >
                            <h3 className="pt-4 pb-4">
                            Industries We Serve 
                            </h3>
                            <h6 className="pt-4 pb-4">
                              {" "}
                              Our mobile app development solutions cater to diverse industries, including: 
                            </h6>
                            <ul className="list">
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                E-Commerce & Retail – Seamless shopping and checkout experiences.  
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Healthcare & Telemedicine – Secure patient consultations and health tracking.  
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Education & E-Learning – Interactive learning apps with gamification. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Finance & FinTech – Digital wallets, banking, and investment apps. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Travel & Hospitality – Hotel booking, flight reservations, and travel guides. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                On-Demand Services – Ride-hailing, food delivery, and home services.  
                              </li>
                              
                            </ul>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                          <div
                            className="Content-List   box-shadow "
                            style={{
                              padding: "40px",
                              paddingBottom: "160px",
                            }}
                          >
                            <h3 className="pt-4">Why Choose VeravalOnline for Mobile App Development? </h3>
                            
                            <ul className="list">
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                600+ Clients Served – Proven track record of successful mobile applications.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Agile Development Process – Faster time-to-market with efficient methodologies.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Experienced Developers – Expertise in Swift, Kotlin, React Native, and Flutter.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                End-to-End Support – From concept to launch and beyond.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Scalable & Secure Solutions – Future-ready apps with robust security.
                              </li>
                            </ul>
                          </div>
                        </div>
                         
                      </div>

                      <h3>Most Comment Question?</h3>

                      {/* <p className="mt-3">
                        The is ipsum dolor sit amet consectetur adipiscing elit.
                        Fusce is eleifend porta arcu In hac habitasse the platea
                        thelorem turpoi dictumst. In lacus libero faucibus
                        malesuada.
                      </p> */}
                    </div>
                    <div className="faq-content style-3">
                      <div className="faq-accordion">
                        <div className="accordion" id="accordion">
                          {faqData.map(({ id, question, answer }) => (
                            <div
                              key={id}
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".7s"
                            >
                              <h5
                                className="accordion-header"
                                onClick={() => handleClick(id)}
                              >
                                <button
                                  className={`accordion-button ${
                                    activeItem === id ? "" : "collapsed"
                                  }`}
                                >
                                  {question}
                                </button>
                              </h5>
                              <div
                                id={`faq${id}`}
                                className={`accordion-collapse collapse ${
                                  activeItem === id ? "show" : ""
                                }`}
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">{answer}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

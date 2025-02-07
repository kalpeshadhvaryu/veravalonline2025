"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function ServiceDetails() {
  const faqData = [
    {
      id: 1,
      question: "What is open-source software?",
      answer:
        "Open-source software is software with publicly available code that can be modified, shared, and improved by anyone.  ",
    },
    {
      id: 2,
      question: "How secure are open-source solutions? ",
      answer:
        "Open-source solutions are highly secure due to regular updates, strong community oversight, and transparent security patches.  ",
    },
    {
      id: 3,
      question: "  Can open-source software be customized? ",
      answer:
        "Yes! Open-source software allows full customization to meet specific business requirements.  ",
    },
    {
      id: 4,
      question: "What are the best open-source platforms for businesses?",
      answer:
        "Popular platforms include WordPress (CMS), Magento (E-Commerce), Odoo (ERP), SuiteCRM (CRM), and Linux-based servers.  ",
    },
    {
      id: 5,
      question: "Do you provide support for open-source software?",
      answer:
        "Yes! We offer installation, integration, customization, security updates, and ongoing technical support.  ",
    },
    {
      id: 6,
      question: "How does open-source software compare to proprietary software? ",
      answer:
        "Open-source software is more affordable, flexible, and transparent, while proprietary software may offer exclusive features but comes with licensing fees and limited customization.  ",
    },
    
  ];
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Open Source ">
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
                      Open Source Solutions – Scalable, Flexible, and Cost-Effective 
                      </h3>
                      <p className="mt-3">
                      Open-source technology is transforming businesses by providing customizable, scalable, and cost-efficient solutions. At VeravalOnline, we specialize in open-source software development, integration, and customization, empowering businesses with flexible, transparent, and high-performance digital solutions.  
                      </p>

                      <div className="details-video-items">
                        <div className="video-thumb">
                          <img
                            src="/assets/img/service/open-sorce-ser-1.jpg"
                            alt="img"
                          />
                          {/* <VideoPopup style={1} /> */}
                        </div>
                        <div className="content">
                          <h4>Why Choose Open Source Solutions?  </h4>
                          {/* <p>
                            {" "}
                            With billions of smartphone users worldwide, mobile apps provide businesses with: 
                          </p> */}
                          <ul className="list">
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Cost-Effective – No expensive licensing fees.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Highly Customizable – Modify code to fit your business needs.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Secure & Transparent – Continuous security updates and community-driven improvements.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Scalable & Flexible – Easily adaptable to growing business demands.
                            </li>
                            <li>
                            <i className="fa-regular fa-circle-check" />
                            Community Support – Access to a vast developer community for continuous improvements.
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
                        <h3>Our Open Source Services  </h3>
                        <div className="row">
                          <div
                            className="col-xl-4 col-lg- col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="service-box-items service-box-items UL-service-box-items box-shadow"  >
                              <div className="content  Box-Heading">
                                <h4>1. Open Source Software Development  </h4>
                                <p>
                                We build customized open-source applications tailored to your business goals using technologies like PHP, Python, Node.js, and Ruby on Rails. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Web & Mobile App Development – Scalable open-source applications. 
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    E-Commerce Development – Custom eCommerce platforms with Magento, WooCommerce, OpenCart.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    CMS Development – Websites powered by WordPress, Drupal, Joomla.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Custom API Development – Seamless integration with existing platforms.
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
                                paddingBottom: "140px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>2. Open Source Integration & Customization </h4>
                                <p>
                                We help businesses integrate open-source tools into their ecosystem, ensuring seamless functionality. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    ERP & CRM Integration – Solutions with Odoo, SuiteCRM, Dolibarr. 
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Cloud Solutions – Open-source cloud-based software integration.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Business Workflow Automation – Streamline processes with open-source tools.
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
                                paddingBottom: "196px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>3. Open Source Security & Maintenance</h4>
                                <p>
                                Security and performance are crucial for business continuity. We provide: 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Regular Updates & Patch Management – Keep your software secure and up to date.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Performance Optimization – Ensure smooth functionality and fast load times.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Bug Fixes & Troubleshooting – Quick issue resolution to minimize downtime.
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
                                <h4>4.  Open Source Software Migration</h4>
                                <p>
                                Looking to switch from proprietary software? We make the transition seamless. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Data Migration & Backup – Securely transfer business data.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Platform Upgrades – Move to better, more efficient open-source solutions.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Cloud Migration – Deploy open-source solutions on AWS, Google Cloud, or Azure.
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
                                paddingBottom: "90px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>5. Open Source Consulting & Support</h4>
                                <p>
                                Our expert consultants help businesses leverage open-source software for cost efficiency and operational excellence. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Technology Roadmap Planning
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Architecture & System Design
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Ongoing IT Support & Training
                                  </li>
                                 
                                </ul>
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
                                src="/assets/img/service/ser-2/open-sorce-ser-2.jpg"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="thumb">
                              <img
                                src="/assets/img/service/ser-2/open-sorce-ser-3.jpg"
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
                              Our open-source solutions benefit various industries, including: 
                            </h6>
                            <ul className="list">
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                E-Commerce & Retail – Cost-effective store development and management. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Healthcare & Pharmaceuticals – Secure patient data and workflow automation. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Finance & Banking – Open-source ERP and risk management tools.  
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Education & E-Learning – Learning management systems (LMS) and online portals. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Government & Public Services – Secure and transparent digital platforms. 
                              </li>
                              
                              
                            </ul>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                          <div
                            className="Content-List   box-shadow "
                            style={{
                              padding: "40px",
                              paddingBottom: "107px",
                            }}
                          >
                            <h3 className="pt-4 pb-4">Why Choose VeravalOnline for Open Source Solutions? </h3>
                            
                            <ul className="list">
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                600+ Clients Served – Trusted by businesses worldwide. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                End-to-End Development – From concept to implementation and support.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Experienced Open-Source Developers – Experts in multiple frameworks and technologies.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Scalable & Future-Ready Solutions – Designed for long-term growth.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Community-Backed Innovation – Leverage global development expertise.
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

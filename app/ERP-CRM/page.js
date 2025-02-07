"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function ServiceDetails() {
  const faqData = [
    {
      id: 1,
      question: "What is the difference between ERP and CRM?",
      answer:
        "ERP focuses on managing internal business processes (finance, HR, supply chain), while CRM is designed to enhance customer interactions (sales, support, marketing).   ",
    },
    {
      id: 2,
      question: "  Can I integrate ERP & CRM into my existing system?",
      answer:
        "Yes! We offer custom API integrations to connect ERP & CRM with your current tools.  ",
    },
    {
      id: 3,
      question: "How secure are ERP & CRM systems?",
      answer:
        "We implement data encryption, role-based access, and compliance measures to ensure security.  ",
    },
    {
      id: 4,
      question: "Do you offer cloud-based ERP & CRM solutions? ",
      answer:
        "Yes, we provide both cloud and on-premise solutions based on your business requirements.  ",
    },
    {
      id: 5,
      question: "What industries benefit from ERP & CRM solutions?",
      answer:
        "ERP & CRM solutions benefit retail, manufacturing, healthcare, real estate, finance, education, and more.  ",
    },
    {
      id: 6,
      question: "How long does it take to implement ERP or CRM? ",
      answer:
        "Implementation time depends on the size and complexity of your business. Basic setups take 4-6 weeks, while full-scale deployments may take 3-6 months.  ",
    },
    
  ];
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ERP & CRM ">
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
                        ERP & CRM Solutions – Streamline Operations & Enhance
                        Customer Relationships
                      </h3>
                      <p className="mt-3">
                        In today’s fast-evolving business environment, companies
                        need smart, integrated solutions to manage operations
                        and customer relationships efficiently. Enterprise
                        Resource Planning (ERP) and Customer Relationship
                        Management (CRM) solutions help businesses automate
                        processes, improve productivity, and drive customer
                        engagement. At VeravalOnline, we provide customized ERP
                        and CRM solutions to optimize your workflow, enhance
                        collaboration, and boost profitability.
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
                          <h4>Why Choose ERP & CRM Solutions? </h4>
                          <p>
                            {" "}
                            Managing multiple business functions manually can
                            lead to inefficiencies, errors, <br /> and missed
                            opportunities. Our ERP & CRM solutions provide:
                          </p>
                          <ul className="list">
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              End-to-End Business Automation – Centralized
                              control over finance, HR, inventory, and more.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Improved Customer Relationships – Track
                              interactions, manage leads, and personalize
                              services.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Real-Time Data & Analytics – Gain insights for
                              smarter decision-making.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Increased Efficiency & Productivity – Automate
                              repetitive tasks and streamline workflows.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Scalability & Integration – Expand operations
                              without disruptions.
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
                        <h3>Our Webmaster Services </h3>
                        <div className="row">
                          <div
                            className="col-xl-6 col-lg-5 col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="service-box-items service-box-items UL-service-box-items box-shadow"  style={{
                                paddingBottom: "62px",
                              }}>
                              <div className="content  Box-Heading">
                                <h4>1. ERP Solutions – Manage Business Operations Efficiently  </h4>
                                <p>
                                Our ERP systems integrate all core business processes, including: 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Inventory & Supply Chain Management – Track stock, optimize procurement, and ensure smooth logistics.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Finance & Accounting – Automate invoicing, tax calculations, and expense tracking. 
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    HR & Payroll Management – Simplify employee management, payroll processing, and compliance.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Manufacturing & Production Planning – Monitor production lines, manage work orders, and control quality.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Project & Task Management – Plan, execute, and track projects efficiently.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div
                              className="service-box-items box-shadow  "
                              
                            >
                              <div className="content  Box-Heading">
                                <h4>2. CRM Solutions – Optimize Customer Interactions & Sales </h4>
                                <p>
                                Our CRM platforms help you manage and grow customer relationships effectively: 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Lead & Opportunity Management – Capture leads, nurture prospects, and close deals faster.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Sales Automation – Track sales pipelines, automate follow-ups, and increase conversions.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Customer Support & Ticketing – Improve response times and customer satisfaction.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Marketing Campaign Management – Automate email campaigns, SMS promotions, and social media engagement.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    AI-Powered Insights – Predict customer behavior and personalize marketing strategies.
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
                              Our ERP & CRM solutions cater to businesses across various industries, including: 
                            </h6>
                            <ul className="list">
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Manufacturing – Streamline supply chain, production, and distribution. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Retail & E-commerce – Enhance sales tracking, inventory, and customer management. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Healthcare & Pharmaceuticals – Manage patient records, appointments, and compliance. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Finance & Banking – Automate financial workflows and customer interactions. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Real Estate & Construction – Track leads, manage properties, and handle contracts efficiently. 
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
                            <h3 className="pt-4">Why Choose VeravalOnline for ERP & CRM? </h3>
                            
                            <ul className="list">
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                600+ Clients Served – Extensive expertise in ERP & CRM solutions.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Custom Solutions – Tailored platforms that fit your business needs.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Cloud & On-Premise Deployment – Flexible hosting options.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Seamless Integrations – Compatible with third-party applications like SAP, Salesforce, Zoho, and more.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                24/7 Support & Maintenance – Ongoing updates, security patches, and troubleshooting.
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

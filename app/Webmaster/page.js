"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function ServiceDetails() {
  const faqData = [
    {
      id: 1,
      question: "What does a Webmaster do?",
      answer:
        "A webmaster manages and optimizes your website, SEO, security, hosting, and digital strategy to ensure smooth online operations.",
    },
    {
      id: 2,
      question: "How often should my website be updated?",
      answer:
        "Regular updates (monthly or quarterly) are recommended to maintain security, performance, and user engagement.",
    },
    {
      id: 3,
      question:
        "Can you manage my website even if it was built by another agency?",
      answer:
        "Yes! We provide comprehensive support and optimization for websites built on different platforms.",
    },
    {
      id: 4,
      question: "Do you offer SEO services as part of webmaster management?",
      answer:
        "Absolutely! Our webmaster services include full SEO optimization, content updates, and digital marketing strategies.",
    },
    {
      id: 5,
      question: "How secure is my data with your hosting services?",
      answer:
        "We use AI-driven security protocols, automated backups, and encrypted hosting solutions to keep your data safe.",
    },
    {
      id: 6,
      question:
        "How do I track the performance of my website and marketing efforts?",
      answer:
        "We provide monthly reports with detailed insights on traffic, conversions, rankings, and user behavior.",
    },
  ];
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Webmaster  ">
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
                        Webmaster Services – Complete Digital Management for
                        Your Business{" "}
                      </h3>
                      <p className="mt-3">
                        In the ever-evolving digital landscape, businesses need
                        expert webmasters to maintain, optimize, and grow their
                        online presence. At VeravalOnline, we provide
                        comprehensive digital management services, ensuring your
                        websites, applications, and online marketing strategies
                        work seamlessly to accelerate your business growth.
                      </p>

                      <div className="details-video-items">
                        <div className="video-thumb">
                          <img
                            src="/assets/img/service/ser-1.jpg"
                            alt="img"
                          />
                          {/* <VideoPopup style={1} /> */}
                        </div>
                        <div className="content">
                          <h4>Why Choose Our Webmaster Services? </h4>
                          {/* <p>
                            {" "}
                            Fusce is eleifend porta arcu In hac <br /> habitasse
                            the platea thelorem
                          </p> */}
                          <ul className="list">
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              End-to-End Digital Management – From website
                              development to SEO and security.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Optimized Performance – AI-driven monitoring for
                              maximum uptime and efficiency.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Custom Strategies – Tailored solutions that align
                              with your business objectives.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Continuous Improvement – Regular updates, content
                              refreshes, and performance analysis.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              600+ Clients Served – Trusted by businesses
                              worldwide.
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
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="service-box-items service-box-items UL-service-box-items box-shadow">
                              <div className="content  Box-Heading">
                                <h4>1. Website & Application Development </h4>
                                <p>
                                  A well-designed website or application is the
                                  foundation of your digital success. Our expert
                                  team develops and optimizes user-friendly,
                                  responsive, and high-performing platforms.
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Custom Website Design & Development:
                                    Tailored to your brand identity.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    E-Commerce & CMS Development – Shopify,
                                    WordPress, Magento, and more.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Mobile & Web Applications – Optimized for
                                    seamless user experience.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Performance Optimization – Speed, security,
                                    and user engagement improvements.
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
                                paddingBottom: "118px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>2. Designing & Content Creation </h4>
                                <p>
                                  Your brand’s visual identity and content play
                                  a crucial role in attracting and retaining
                                  customers.
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Website UI/UX Design – Eye-catching,
                                    conversion-friendly interfaces.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Social Media Graphics & Infographics –
                                    Engaging visuals for brand awareness.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    SEO-Optimized Content Writing – Blogs,
                                    landing pages, and ad copy.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Video & Motion Graphics – Enhance engagement
                                    with high-quality media.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".7s"
                          >
                            <div
                              className="service-box-items box-shadow"
                              style={{
                                paddingBottom: "118px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>3. Data & Hosting Management </h4>
                                <p>
                                  We ensure secure, high-performance data
                                  storage and hosting solutions to protect your
                                  digital assets.
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    AI-Driven Security & Monitoring – Proactive
                                    threat detection and mitigation.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Reliable Cloud Hosting – Scalable,
                                    high-speed hosting solutions.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Data Backup & Recovery – Automated backups
                                    for uninterrupted operations.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Website Uptime Management – 24/7 monitoring
                                    and performance optimization.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".9s"
                          >
                            <div
                              className="service-box-items box-shadow"
                              style={{
                                paddingBottom: "62px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>
                                  4. Website & App Development & Updation{" "}
                                </h4>
                                <p>
                                  Keeping your digital platforms up to date
                                  ensures smooth functionality and security.
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Regular Software Updates & Bug Fixes –
                                    Prevent downtime and security risks.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Feature Enhancements & New Functionality –
                                    Continuous improvements for better user
                                    experience.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Mobile & Web Compatibility Upgrades – Ensure
                                    seamless operation across all devices.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Security Patches & Performance Tweaks – Keep
                                    your platforms secure and fast.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div
                              className="service-box-items box-shadow"
                              style={{
                                paddingBottom: "62px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>
                                  5. SEO & Social Media Optimization (SMO){" "}
                                </h4>
                                <p>
                                  Increase your search engine rankings and
                                  social media reach with our proven SEO & SMO
                                  strategies.
                                </p>

                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    On-Page & Off-Page SEO – Keyword research,
                                    meta tags, link building.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Local SEO – Optimize for Google My Business
                                    & location-based searches.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Social Media Strategy – Engaging content and
                                    audience targeting.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Paid Ads & PPC Campaigns – Google Ads,
                                    Facebook Ads, LinkedIn Ads.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div className="service-box-items box-shadow">
                              <div className="content  Box-Heading">
                                <h4>
                                  6. Digital Strategy & Monthly Reporting{" "}
                                </h4>
                                <p>
                                  Our data-driven insights help you make
                                  informed decisions for continuous growth.
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Custom Digital Growth Strategies – Tailored
                                    action plans for your business.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Analytics & Performance Tracking – Monitor
                                    traffic, conversions, and engagement.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Competitor Analysis & Market Trends – Stay
                                    ahead of industry shifts.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Transparent Monthly Reports – Insights into
                                    success metrics and areas for improvement.
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
                                src="/assets/img/service/ser-2/Web-ser-2.jpg"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="thumb">
                              <img
                                src="/assets/img/service/ser-2/Web-ser-3.jpg"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="Content-List">
                            <h3 className="pt-4">
                              Why Choose Our Webmaster Services?{" "}
                            </h3>
                            <h6 className="pt-4 pb-4">
                              {" "}
                              We provide Webmaster Services for diverse
                              industries, including:
                            </h6>
                            <ul className="list">
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                E-Commerce & Retail – Ensuring seamless shopping
                                experiences.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Healthcare & Pharmaceuticals – Secure,
                                patient-centric digital platforms.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Custom Strategies – Tailored solutions that
                                align with your business objectives.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Real Estate & Property – Optimized listings and
                                lead generation.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Finance & Insurance – High-security web
                                solutions for data protection.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Education & E-Learning – Scalable platforms for
                                online courses and training.
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

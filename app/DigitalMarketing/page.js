"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function ServiceDetails() {
  const faqData = [
    {
      id: 1,
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy. Most businesses start seeing significant improvements within 3-6 months.   ",
    },
    {
      id: 2,
      question: "What is the best digital marketing strategy for my business?",
      answer:
        "The best strategy depends on your industry, goals, and target audience. We create customized plans to maximize ROI.  ",
    },
    {
      id: 3,
      question: " How much does digital marketing cost? ",
      answer:
        "Costs vary based on services, competition, and goals. We offer flexible packages to fit different budgets.  ",
    },
    {
      id: 4,
      question: "Do you offer local SEO services?",
      answer:
        "Yes! We optimize your business for local search rankings, Google My Business, and local citations.   ",
    },
    {
      id: 5,
      question: "Can you run ads on multiple platforms?",
      answer:
        "Absolutely! We manage Google Ads, Facebook Ads, LinkedIn Ads, YouTube Ads, and more for cross-platform growth.   ",
    },
    {
      id: 6,
      question: "How do you measure campaign success?",
      answer:
        "We track website traffic, conversion rates, engagement, ROI, and key performance metrics to ensure success.   ",
    },
    
  ];
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Digital Marketing    ">
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
                      Digital Marketing Services – Grow Your Business Online 
                      </h3>
                      <p className="mt-3">
                      In today’s digital era, a strong online presence is essential for business success. At VeravalOnline, we offer result-driven digital marketing solutions that boost brand visibility, attract customers, and drive revenue growth. Our tailored strategies ensure that your business stays ahead of the competition. 
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
                          <h4>Why Choose Digital Marketing? </h4>
                          {/* <p>
                            {" "}
                            With billions of smartphone users worldwide, mobile apps provide businesses with: 
                          </p> */}
                          <ul className="list">
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Increase Brand Awareness – Reach a global audience with online marketing.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Generate Quality Leads – Attract potential customers actively searching for your services.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Boost Website Traffic – Improve search rankings and drive targeted visitors.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Enhance Customer Engagement – Build meaningful relationships with your audience.
                            </li>
                            <li>
                            <i className="fa-regular fa-circle-check" />
                            Measure & Optimize Results – Data-driven insights for continuous improvement.
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
                        <h3>Our Digital Marketing Services   </h3>
                        <div className="row">
                          <div
                            className="col-xl-4 col-lg- col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="service-box-items service-box-items UL-service-box-items box-shadow"  style={{
                                paddingBottom: "90px",
                              }} >
                              <div className="content  Box-Heading">
                                <h4>1. Search Engine Optimization (SEO)  </h4>
                                <p>
                                We improve your website’s visibility on Google, Bing, and Yahoo with proven SEO strategies.  
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    On-Page SEO – Optimize website structure, meta tags, and content.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Off-Page SEO – High-quality backlinks and authority-building strategies.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Technical SEO – Improve site speed, indexing, and mobile-friendliness.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Local SEO – Optimize for local searches and Google My Business.
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
                                <h4>2. Social Media Marketing (SMM) </h4>
                                <p>
                                Engage your audience on platforms like Facebook, Instagram, LinkedIn, Twitter, and YouTube. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Content Creation & Posting – Regular, engaging posts to attract followers. 
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Paid Social Media Advertising – Targeted ads to reach the right audience.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Influencer Marketing – Collaborate with influencers to boost credibility.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Community Engagement – Respond to comments, messages, and build brand loyalty.
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
                                paddingBottom: "176px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>3. Pay-Per-Click (PPC) Advertising</h4>
                                <p>
                                Get instant traffic and conversions with data-driven paid advertising campaigns. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Google Ads (Search, Display, Shopping, YouTube)
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Facebook & Instagram Ads
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    LinkedIn & Twitter Ads
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Retargeting & Remarketing Campaigns
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
                                <h4>4. Content Marketing</h4>
                                <p>
                                Engage and educate your audience with high-quality content that drives traffic and conversions. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Blog Writing & SEO Articles – Informative, keyword-rich content.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Infographics & Visual Content – Shareable, data-driven visuals. 
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Ebooks & Whitepapers – Lead-generating, in-depth guides. 
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Email Marketing Campaigns – Personalized email strategies for customer engagement.
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
                                <h4>5. Conversion Rate Optimization (CRO)</h4>
                                <p>
                                Optimize your website and marketing funnels to turn visitors into paying customers. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Landing Page Optimization – Improve layout, copy, and CTAs.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    A/B Testing & Analytics – Test and refine strategies for higher conversions.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    User Experience (UX) Enhancements – Ensure smooth navigation and engagement.
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
                                <h4>6. Online Reputation Management (ORM)</h4>
                                <p>
                                Maintain a positive brand image and manage customer feedback effectively. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Review Management – Monitor and respond to customer reviews.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Crisis Management – Address negative feedback and brand concerns.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Brand Monitoring – Track online mentions and sentiment.
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
                                <h4>7. Affiliate & Influencer Marketing</h4>
                                <p>
                                Leverage partnerships with influencers and affiliates to expand your reach. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Affiliate Program Setup & Management
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Influencer Outreach & Collaboration
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Performance Tracking & ROI Analysis
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
                              Our digital marketing solutions cater to a wide range of industries, including: 
                            </h6>
                            <ul className="list">
                              <li>
                              <i className="fa-regular fa-circle-check" />
                              E-Commerce & Retail – Drive sales with targeted campaigns.  
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Healthcare & Pharmaceuticals – Build trust with digital patient engagement.  
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Finance & Banking – Establish authority and acquire leads. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Education & E-Learning – Promote courses and online programs. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Real Estate & Construction – Generate high-value property leads. 
                              </li>
                              
                              
                            </ul>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                          <div
                            className="Content-List   box-shadow "
                            style={{
                              padding: "40px",
                              paddingBottom: "96px",
                            }}
                          >
                            <h3 className="pt-4 pb-4">Why Choose VeravalOnline for Digital Marketing?   </h3>
                            
                            <ul className="list">
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                600+ Clients Served – Trusted by businesses worldwide.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Data-Driven Strategies – Every campaign is backed by analytics.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Experienced Digital Marketers – Specialists in SEO, PPC, and social media.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Custom Marketing Plans – Tailored solutions for your industry.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Transparent Reporting – Monthly performance reports and insights.
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

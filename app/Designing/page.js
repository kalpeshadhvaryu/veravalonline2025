"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function ServiceDetails() {
  const faqData = [
    {
      id: 1,
      question: "What is the difference between UI and UX design?",
      answer:
        "UI (User Interface) focuses on the look and feel, while UX (User Experience) ensures usability and customer satisfaction.  ",
    },
    {
      id: 2,
      question: "Can you redesign my existing website or brand?",
      answer:
        "Yes! We offer website redesign and brand revamp services to modernize and enhance your digital presence.  ",
    },
    {
      id: 3,
      question: " What tools do you use for designing? ",
      answer:
        "We use industry-leading tools like Adobe Photoshop, Illustrator, Figma, Sketch, and InDesign for high-quality designs.   ",
    },
    {
      id: 4,
      question: "How long does it take to design a website or app UI?",
      answer:
        "The timeline depends on project complexity. A basic UI/UX design takes 2-4 weeks, while large projects may take 4-8 weeks.  ",
    },
    {
      id: 5,
      question: "Do you provide print-ready designs?",
      answer:
        "Yes! We deliver high-resolution, print-ready files for brochures, business cards, and more.  ",
    },
    {
      id: 6,
      question: "How do you ensure my brand stays consistent across all designs?",
      answer:
        "We create brand guidelines to maintain color schemes, fonts, and design elements across all platforms.   ",
    },
    
  ];
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Designing    ">
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
                      Creative Designing Services – Elevate Your Brand with Stunning Visuals 
                      </h3>
                      <p className="mt-3">
                      Your brand’s design and visual identity play a crucial role in attracting and engaging your audience. At VeravalOnline, we offer innovative, high-quality, and user-centric design solutions to help businesses stand out. Whether it's website design, UI/UX, branding, or marketing materials, we craft designs that leave a lasting impact.  
                      </p>

                      <div className="details-video-items">
                        <div className="video-thumb">
                          <img
                            src="/assets/img/service/designing-ser-1.jpg"
                            alt="img"
                          />
                          {/* <VideoPopup style={1} /> */}
                        </div>
                        <div className="content">
                          <h4>Why Choose Professional Designing Services?  </h4>
                          {/* <p>
                            {" "}
                            With billions of smartphone users worldwide, mobile apps provide businesses with: 
                          </p> */}
                          <ul className="list">
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Strong Brand Identity – Create a unique and memorable brand presence.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              User-Centric UI/UX – Improve engagement and conversion rates.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Visually Appealing Designs – Capture attention with stunning graphics.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Optimized for Web & Mobile – Ensure a seamless experience across all devices. 
                            </li>
                            <li>
                            <i className="fa-regular fa-circle-check" />
                            Consistent Branding – Maintain a cohesive look across all marketing channels. 
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
                        <h3>Our Designing Services  </h3>
                        <div className="row">
                          <div
                            className="col-xl-4 col-lg- col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="service-box-items service-box-items UL-service-box-items box-shadow"  style={{
                                paddingBottom: "166px",
                              }} >
                              <div className="content  Box-Heading">
                                <h4>1. Branding & Identity Design  </h4>
                                <p>
                                We help businesses establish a strong and cohesive brand identity with:  
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Logo Design – Custom, professional, and unique logos.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Brand Guidelines – Consistent fonts, colors, and visual elements.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Business Cards & Stationery – Personalized branding materials.
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
                                <h4>2. UI/UX Design for Websites & Apps </h4>
                                <p>
                                An exceptional user experience (UX) and user interface (UI) drive engagement and conversions. Our UI/UX design services include: 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Website UI Design – Responsive, intuitive, and visually appealing.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Mobile App UI/UX – Seamless experiences for Android & iOS apps. 
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Wireframing & Prototyping – Interactive design previews before development.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Dashboard & Software UI – Clean and efficient designs for SaaS and enterprise applications.
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
                                <h4>3. Website & Landing Page Design</h4>
                                <p>
                                We create SEO-friendly, high-converting websites and landing pages that captivate users and drive results. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Custom Web Design – Tailored to your brand’s vision.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    E-Commerce Website Design – Engaging layouts optimized for conversions. 
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Landing Page Design – Designed to generate leads and maximize ROI.
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
                                <h4>4. Social Media & Marketing Design </h4>
                                <p>
                                Our designers craft compelling visuals for social media marketing and digital advertising campaigns. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Social Media Posts & Banners – Stunning visuals for Instagram, Facebook, LinkedIn, and more.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Ad Creatives & Banners – Engaging graphics for paid promotions.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Infographics & Illustrations – Eye-catching visuals to simplify complex data. 
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
                                <h4>5. Print & Packaging Design</h4>
                                <p>
                                We design high-quality print materials and packaging that enhance your brand presence. 
                                </p>
                                <ul className="list newlist">
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Brochures & Flyers – Professionally designed marketing materials.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Product Packaging Design – Creative and brand-focused packaging.
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-circle-check" />
                                    Posters & Billboards – Attention-grabbing outdoor advertising.
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
                                src="/assets/img/service/ser-2/designing-ser-3.png"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="thumb">
                              <img
                                src="/assets/img/service/ser-2/designing-ser-2.png"
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
                              Our designing services cater to businesses across industries, including: 
                            </h6>
                            <ul className="list">
                              <li>
                              E-Commerce & Retail – Product branding, website design, and packaging. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Healthcare & Pharma – UI/UX for health apps and professional branding. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Finance & FinTech – Corporate identity and clean UI/UX. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Education & E-Learning – Engaging digital course designs. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Hospitality & Travel – Attractive websites and travel brochures. 
                              </li>
                              
                              
                            </ul>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                          <div
                            className="Content-List   box-shadow "
                            style={{
                              padding: "40px",
                              paddingBottom: "46px",
                            }}
                          >
                            <h3 className="pt-4 pb-4">Why Choose VeravalOnline for Designing Services?  </h3>
                            
                            <ul className="list">
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                600+ Clients Served – Proven expertise in digital design.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Creative & Strategic Approach – Designs that align with business goals.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Experienced UI/UX & Graphic Designers – Experts in Figma, Adobe Suite, and Sketch.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                SEO & Conversion-Focused Designs – Optimized for maximum engagement.
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Fast Turnaround Time – Get stunning designs quickly.
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

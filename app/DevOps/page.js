"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function ServiceDetails() {
  const faqData = [
    {
      id: 1,
      question: "What is DevOps, and how does it benefit my business?",
      answer:
        "DevOps is a collaborative approach that integrates development (Dev) and IT operations (Ops) to automate software delivery and infrastructure management, reducing time-to-market and improving efficiency.  ",
    },
    {
      id: 2,
      question: " What tools do you use for DevOps implementation?",
      answer:
        "We use Jenkins, GitLab CI/CD, Docker, Kubernetes, Terraform, Ansible, AWS DevOps, Prometheus, Grafana, ELK Stack, and more for automation, monitoring, and security. ",
    },
    {
      id: 3,
      question:
        " Can you migrate our existing system to a DevOps environment?",
      answer:
        "Yes, we specialize in DevOps migration by automating workflows, integrating CI/CD pipelines, and optimizing infrastructure.  ",
    },
    {
      id: 4,
      question: "How do you ensure security in DevOps?",
      answer:
        "We follow DevSecOps best practices, including automated security testing, vulnerability assessments, and compliance checks to protect your applications.  ",
    },
    {
      id: 5,
      question: "Do you offer ongoing DevOps support?",
      answer:
        "Yes, we provide 24/7 monitoring, troubleshooting, and optimization services to ensure seamless operations. ",
    },
    {
      id: 6,
      question:
        "How long does it take to implement DevOps?",
      answer:
        "The timeline depends on the complexity of your system. Basic DevOps implementation can take 4-8 weeks, while full-scale enterprise DevOps may take 3-6 months.  ",
    },
    {
      id: 7,
      question:
        "What cloud platforms do you support?",
      answer:
        "We support AWS, Microsoft Azure, Google Cloud, DigitalOcean, and hybrid cloud environments for scalable and reliable DevOps solutions. ",
    },
  ];
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Dev Ops     ">
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
                      DevOps Solutions – Accelerate Your Software Delivery with Automation & CI/CD 
                      </h3>
                      <p className="mt-3">
                      In today’s fast-paced digital world, businesses need rapid, reliable, and scalable software solutions. DevOps bridges the gap between development and operations, enabling seamless collaboration, continuous integration, and faster deployment cycles. At VeravalOnline, we provide cutting-edge DevOps solutions that enhance agility, improve efficiency, and ensure high availability for your applications. 
                      </p>

                      <div className="details-video-items">
                        <div className="video-thumb">
                          <img
                            src="/assets/img/service/devops-ser-1.jpg"
                            alt="img"
                          />
                          {/* <VideoPopup style={1} /> */}
                        </div>
                        <div className="content">
                          <h4>Why DevOps?  </h4>
                          <p>
                            {" "}
                            Traditional software development processes are often slow and prone to errors. <br/> DevOps transforms this by introducing automation, real-time monitoring, and continuous feedback, resulting in: 
                          </p>
                          <ul className="list">
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Faster Development & Deployment – Reduce software release cycles from months to days.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Improved Collaboration – Dev and Ops teams work together seamlessly.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Enhanced Security & Compliance – Proactive monitoring and risk mitigation.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Scalability & Reliability – Infrastructure that grows with your business.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Cost Optimization – Reduce downtime and operational costs with automation.
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
                        <h3>Our DevOps Process   </h3>
                        <div className="row">
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="service-box-items service-box-items UL-service-box-items box-shadow"  style={{
                                paddingBottom: "64px",
                              }}>
                              <div className="content  Box-Heading">
                                <h4>1. Assessment & Strategy </h4>
                                <p>
                                We analyze your current infrastructure and business needs to design a tailored DevOps roadmap. 
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
                             
                            >
                              <div className="content  Box-Heading">
                                <h4>2. Continuous Integration   </h4>
                                <p>
                                Automate code integration using industry-leading tools like Jenkins, GitLab CI, and CircleCI, ensuring that every code update is tested and validated. 
                                </p>
                               
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
                                paddingBottom: "64px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>3. Continuous Deployment  </h4>
                                <p>
                                Deploy applications efficiently with Kubernetes, Docker, and Terraform, enabling fast and error-free releases. 
                                </p>
                                
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
                                paddingBottom: "64px",
                              }}
                            >
                              <div className="content  Box-Heading">
                                <h4>
                                  4. Infrastructure as Code 
                                </h4>
                                <p>
                                We use Terraform, Ansible, and CloudFormation to automate infrastructure provisioning, making your IT environment scalable and resilient.  
                                </p>
                                
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
                                  5. Monitoring & Logging
                                </h4>
                                <p>
                                Track application health and performance using Prometheus, Grafana, ELK Stack, and Datadog for real-time monitoring and proactive issue resolution. 
                                </p>

                                
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div className="service-box-items box-shadow"  style={{
                                paddingBottom: "64px",
                              }}>
                              <div className="content  Box-Heading">
                                <h4>
                                  6. Security & Compliance
                                </h4>
                                <p>
                                We integrate security into every phase with DevSecOps, ensuring automated vulnerability scanning, access control, and compliance with GDPR, HIPAA, and ISO standards.  
                                </p>
                             
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
                               7. Ongoing Optimization & Support
                                </h4>
                                <p>
                                Our team continuously monitors your infrastructure, optimizes resources, and provides 24/7 support to maintain peak performance.  
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
                                src="/assets/img/service/ser-2/devops-ser-2.jpg"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="thumb">
                              <img
                                src="/assets/img/service/ser-2/devops-ser-3.jpg"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12   ">
                          <div className="Content-List box-shadow" style={{
                            padding:"40px",
                            paddingBottom:"80px"
                          }}>
                            <h3 className="pt-4 pb-4">
                            Key DevOps Services We Offer  
                            </h3>
                            {/* <h6 className="pt-4 pb-4">
                              {" "}
                              We provide Webmaster Services for diverse
                              industries, including:
                            </h6> */}
                            <ul className="list">
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                CI/CD Pipeline Setup – Automate software build, testing, and deployment. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Cloud & Infrastructure Automation – AWS, Azure, and Google Cloud solutions. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Containerization & Orchestration – Docker, Kubernetes, and Helm chart implementation. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Monitoring & Performance Optimization – Ensure high uptime and performance. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Security & Compliance – Integrated DevSecOps solutions. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Disaster Recovery & Backup – Minimize downtime with automated recovery solutions.  
                              </li>
                             
                            </ul>
                          </div>
                        </div>
                      
                        <div className="col-lg-6 col-md-12" >
                          <div className="Content-List   box-shadow " style={{
                            padding:"40px",
                             paddingBottom:"118px"
                          }}>
                            <h3 className="pt-4">
                            Industries We Serve  
                            </h3>
                            <h6 className="pt-4 pb-4">
                              {" "}
                              Our DevOps solutions cater to a variety of industries, including: 
                            </h6>
                            <ul className="list">
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                E-Commerce & Retail – Seamless cloud deployments and load balancing. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Finance & FinTech – Secure, compliant, and scalable infrastructures. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Healthcare & Pharma – HIPAA-compliant DevOps solutions for medical applications. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                Telecom & Media – High-performance, cloud-native platforms. 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" />
                                EdTech & SaaS – Continuous delivery of software updates and features. 
                              </li>
                              
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12   pt-4 pb-5">
                          <div className="Content-List  " style={{
                            padding:"40px"
                          }}>
                            <h3 className="pt-4 pb-4">
                            Why Choose VeravalOnline for DevOps? 
                            </h3>
                           
                            <ul className="list">
                              <li className="pt-3">
                                <i className="fa-regular fa-circle-check" />
                                600+ Clients Served – Proven experience in DevOps transformation.
                              </li>
                              <li className="pt-3">
                                <i className="fa-regular fa-circle-check" />
                                Certified DevOps Engineers – Experts in Kubernetes, Docker, and CI/CD.
                              </li>
                              <li className="pt-3">
                                <i className="fa-regular fa-circle-check" />
                                Cloud-Native Approach – Deploy on AWS, Azure, or Google Cloud.
                              </li>
                              <li className="pt-3">
                                <i className="fa-regular fa-circle-check" />
                                End-to-End Automation – Infrastructure as Code (IaC) for seamless scaling.
                              </li>
                              <li className="pt-3">
                                <i className="fa-regular fa-circle-check" />
                                24/7 Monitoring & Support – Ensure high availability and security.
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
                                <div className="accordion-body"  >{answer}</div>
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

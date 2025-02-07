import Accordion1 from "@/components/elements/Accordion1";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Service() {
  const services = [
    {
      id: 1,
      icon: "/assets/img/service/icon/s-icon-1.svg",
      title: "Webmaster  ",
      link: "/Webmaster",
      description: "Turnkey project development and management. ",
    },
    {
      id: 2,
      icon: "/assets/img/service/icon/s-icon-2.svg",
      title: "SAAS Development  ",
      link: "/SAASDevelopment",
      description:
        "Scalable SaaS solutions with cloud security & flexibility. ",
    },
    {
      id: 3,
      icon: "/assets/img/service/icon/s-icon-3.svg",
      title: "Dev Ops  ",
      link: "/DevOps",
      description:
        "Automate deployments for faster, error-free software delivery. ",
    },
    {
      id: 4,
      icon: "/assets/img/service/icon/s-icon-4.svg",
      title: "CRM/ERP  ",
      link: "CRM-ERP",
      description:
        "Enterprise Resource Planning (ERP) software for businesses. ",
    },
    // {
    //   id: 5,
    //   icon: "/assets/img/service/icon/s-icon-4.svg",
    //   title: "Web/Apps ",
    //   link: "/service-details",
    //   description:
    //     " Custom websites and apps with high performance and scalability.",
    // },
    //   {
    //     id: 6,
    //     icon: "/assets/img/service/icon/s-icon-4.svg",
    //     title: "CRM/ERP  ",
    //     link: "/service-details",
    //   },
    // {
    //   id: 6,
    //   icon: "/assets/img/service/icon/s-icon-4.svg",
    //   title: "Software  ",
    //   link: "/service-details",
    //   description:
    //     "Tailor-made software solutions for business automation and growth. ",
    // },
    {
      id: 7,
      icon: "/assets/img/service/icon/s-icon-4.svg",
      title: "Android-IOS Apps ",
      link: "/Android-IOSApps",
      description: "High-performance mobile apps for Android & iOS growth. ",
    },
    {
      id: 8,
      icon: "/assets/img/service/icon/s-icon-4.svg",
      title: "Open Source ",
      link: "/OpenSource",
      description:
        "Custom open-source development for flexible, cost-effective solutions.  ",
    },
    {
      id: 9,
      icon: "/assets/img/service/icon/s-icon-4.svg",
      title: "Designing   ",
      link: "/Designing",
      description: " creative UI/UX designers to enhance user experience",
    },
    {
      id: 10,
      icon: "/assets/img/service/icon/s-icon-4.svg",
      title: "Digital Marketing ",
      link: "/DigitalMarketing",
      description: "Boost your brand's visibility and growth with expert digital marketing services.",
    },
  ];

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services">
        <div>
          <section className="service-section fix section-padding">
            <div className="container">
              <div className="section-title text-center">
                <span className="wow fadeInUp">The Webmaster Company   </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Discover how we help your business <br/> succeed with IT services 
                </h2>
              </div>
              <div className="service-wrapper mb-0">
                <div className="row">
                  {services.map((service, index) => (
                    <div
                      key={service.id}
                      className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay={`${0.3 + index * 0.2}s`}
                     
                    >
                      <div className="service-box-items box-shadow">
                        <div className="icon">
                          <img src={service.icon} alt="icon-img" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href={service.link}>{service.title}</Link>
                          </h4>
                          <p>{service.description}</p>
                          <Link
                            href={service.link}
                            className="theme-btn-2 mt-3"
                          >
                            Read More{" "}
                            <i className="fa-solid fa-arrow-right-long" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/*<< Faq Section Start >>*/}
          {/* <section className="faq-section style-2 fix section-padding">
            <div className="right-shape">
              <img src="/assets/img/faq/right-shape.png" alt="shape-img" />
            </div>
            <div className="faq-shape-box">
              <div className="faq-shape">
                <img src="/assets/img/faq/shape.png" alt="shape-img" />
              </div>
            </div>
            <div className="container">
              <div className="faq-wrapper">
                <div className="row g-4">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="faq-image">
                      <img src="/assets/img/faq/faq.png" alt="faq-img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="faq-content">
                      <div className="section-title">
                        <span className="wow fadeInUp">See Our Faqs</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Keep Your Business Safe &amp; <br /> Ensure High
                          Availability
                        </h2>
                      </div>
                      <div className="faq-accordion mt-4 mt-md-0">
                        <Accordion1 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* Contact Section Start */}
          <section className="contact-section fix section-padding">
            <div className="container">
              <div className="contact-wrapper">
                <div className="arrow-shape">
                  <img src="/assets/img/arrow-shape.png" alt="shape-img" />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="contact-image wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <img src="/assets/img/contact.png" alt="contact-img" />
                      <div className="cricle-shape">
                        <img
                          src="/assets/img/circle-shape.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="small-cricle-shape">
                        <img
                          src="/assets/img/choose/circle.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="frame-shape">
                        <img src="/assets/img/frame.png" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-content">
                      <div className="section-title">
                        <span className="text-white wow fadeInUp">
                        Let’s get growing 
                        </span>
                        <h2
                          className="text-white wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                         Let us help you to grow. 
                        </h2>
                      </div>
                      <form
                        action="#"
                        id="contact-form"
                        method="POST"
                        className="contact-form-items"
                      >
                        <div className="row g-4">
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="form-clt">
                              <span>Your name*</span>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Robot fox"
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div className="form-clt">
                              <span>Your Email*</span>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="info@example.com"
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-12 wow fadeInUp"
                            data-wow-delay=".7s"
                          >
                            <div className="form-clt">
                              <span>Message*</span>
                              <textarea
                                name="message"
                                id="message"
                                placeholder="Write Message"
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-7 wow fadeInUp"
                            data-wow-delay=".9s"
                          >
                            <button
                              type="submit"
                              className="theme-btn bg-white"
                            >
                              Sand Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

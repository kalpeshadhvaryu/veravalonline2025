"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const services = [
  {
    id: 1,
    icon: "/assets/img/service/icon/s-icon-1.svg",
    title: "Webmaster  ",
    link: "/service-details",
    description:"Turnkey project development and management. "
  },
  {
    id: 2,
    icon: "/assets/img/service/icon/s-icon-2.svg",
    title: "SAAS  ",
    link: "/service-details",
    description:"Scalable SaaS solutions with cloud security & flexibility. "
  },
  {
    id: 3,
    icon: "/assets/img/service/icon/s-icon-3.svg",
    title: "Dev Ops  ",
    link: "/service-details",
    description:"Automate deployments for faster, error-free software delivery. "

  },
  {
    id: 4,
    icon: "/assets/img/service/icon/s-icon-4.svg",
    title: "CRM/ERP  ",
    link: "/service-details",
    description:"Enterprise Resource Planning (ERP) software for businesses. "
  },
  {
    id: 5,
    icon: "/assets/img/service/icon/s-icon-4.svg",
    title: "Web/Apps ",
    link: "/service-details",
     description:" Custom websites and apps with high performance and scalability."
  },
//   {
//     id: 6,
//     icon: "/assets/img/service/icon/s-icon-4.svg",
//     title: "CRM/ERP  ",
//     link: "/service-details",
//   },
  {
    id: 6,
    icon: "/assets/img/service/icon/s-icon-4.svg",
    title: "Software  ",
    link: "/service-details",
    description:"Tailor-made software solutions for business automation and growth. "
  },
  {
    id: 7,
    icon: "/assets/img/service/icon/s-icon-4.svg",
    title: "Android/IOS  ",
    link: "/service-details",
    description:"High-performance mobile apps for Android & iOS growth. "
  },
  {
    id: 8,
    icon: "/assets/img/service/icon/s-icon-4.svg",
    title: "Open Source ",
    link: "/service-details",
    description:"Custom open-source development for flexible, cost-effective solutions.  "
  },
  {
    id: 9,
    icon: "/assets/img/service/icon/s-icon-4.svg",
    title: "Hire Developers ",
    link: "/service-details",
    description:"Get expert developers for web, app, and software projects."
  },
  {
    id: 10,
    icon: "/assets/img/service/icon/s-icon-4.svg",
    title: "Hire Designers ",
    link: "/service-details",
    description:"Hire creative UI/UX designers to enhance user experience."
  },
  // {
  //   id: 11,
  //   icon: "/assets/img/service/icon/s-icon-4.svg",
    
  //   title: "Service Industry   ",
  //   link: "/service-details",
  // },
  // {
  //   id: 12,
  //   icon: "/assets/img/service/icon/s-icon-4.svg",
  //   title: "Astra TMS",
  //   link: "/service-details",
  // },
  // {
  //   id: 13,
  //   icon: "/assets/img/service/icon/s-icon-4.svg",
  //   title: "Insurance Management System ",
  //   link: "/service-details",
  // },
  // {
  //   id: 14,
  //   icon: "/assets/img/service/icon/s-icon-4.svg",
  //   title: "POS / KIOSK  ",
  //   link: "/service-details",
  // },
  // {
  //   id: 15,
  //   icon: "/assets/img/service/icon/s-icon-4.svg",
  //   title: "Recruitment Portal",
  //   link: "/service-details",
  // },
  // {
  //   id: 16,
  //   icon: "/assets/img/service/icon/s-icon-4.svg",
  //   title: "Field Worker Tracking",
  //   link: "/service-details",
  // },
  // {
  //   id: 17,
  //   icon: "/assets/img/service/icon/s-icon-4.svg",
  //   title: "Export Document  ",
  //   link: "/service-details",
  // },
  // {
  //   id: 18,
  //   icon: "/assets/img/service/icon/s-icon-4.svg",
  //   title: "Cloud File Storage  ",
  //   link: "/service -details",
  // },
];

const swiperOptions = {
  modules: [  Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".array-prev",
    prevEl: ".array-next",
  },

  breakpoints: {
    1199: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

export default function Service1() {
  return (
    <>
      <section
        className="service-section fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}
        id="service"
      >
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="wow fadeInUp">IT services</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                {/* We Solve IT Problems <br /> With Technology */}
                Since 2008, Trusted Webmaster <br /> Services for Every Industry
              </h2>
            </div>
            <div className="array-button">
              <button className="array-prev">
                <i className="fal fa-arrow-right" />
              </button>
              <button className="array-next">
                <i className="fal fa-arrow-left" />
              </button>
            </div>
          </div>
          <div className="service-wrapper">
            <div className="swiper service-slider">
              <Swiper {...swiperOptions} className="swiper service-slider" >
                {services.map((service) => (
                  <SwiperSlide key={service.id}  className="custom-slide " style={{
                    width:"350px !important"
                  }}>
                    <div className="service-box-items">
                      <div className="icon">
                        <img src={service.icon} alt="service-icon" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href={service.link}>{service.title}</Link>
                        </h4>
                        <p>
                         {service.description}
                        </p>
                        <Link href={service.link} className="theme-btn-2 mt-3">
                          Read More{" "}
                          <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="service-text wow fadeInUp" data-wow-delay=".4s">
              <h6>
              Discover how we can help your business WIN with managed IT services 
                <Link href="/service">View Services </Link>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "lucide-react";

const testimonials = [
  {
    image: "assets/img/testimonial/01.jpg",
    name: "Dr Vikram Patel  ",
    position: "Founder  ",
    text: "“I push them beyond their limit and they have touched it. I believed in them and they got succeed. Our ERP works perfectly fine and covers all the aspects”",
    Linkname: "Rural Risk Management Pvt Ltd",
    link:"https://ruralrisk.in/"
  },
  {
    image: "assets/img/testimonial/01.jpg",
    name: "Jordan Kenn",
    position: "WebMaster  ",
    text: "“They are not our developer or webmaster they are our partner so if we have done something so they are the onces behind the scene.”",
    Linkname: "SoloStream LLC, United States of America.",
    link:"https://www.solostream.com/"
  },
  {
    image: "assets/img/testimonial/01.jpg",
    name: "NR  ",
    position: "C.E.O  ",
    text: "“Our manufacturing process was very outdated and I had something in my mind and now exactlly we have been delivered.”",
    Linkname: "Victoria Regalia. United Kingdom",
    link:"https://www.victoriaregalia.com/"
  },
  {
    image: "assets/img/testimonial/01.jpg",
    name: "R Thummar  ",
    position: "C.E.O  ",
    text: "I always supplied and get notified for new tools on my website. Not only that, we have been ranking well over a year and still growing",
    Linkname: "JRP Impex, India.",
    link:"https://www.jrpimpex.com/"
  },
  {
    image: "assets/img/testimonial/01.jpg",
    name: "Tushhar Nikam    ",
    position: "Manager",
    text: "“The service was quick and fast. Just solved my problem on a click . Recommend”",
    Linkname: "Vishaka Raisins",
    link:"https://www.vishakaraisins.com/"
  },
];

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot-2",
    clickable: true,
  },
};

export default function Testimonial1() {
  return (
    <>
      <section className="testimonial-section section-padding fix">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="swiper testimonial-slider">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-items">
                      <div
                        className="tesimonial-image bg-cover"
                        style={{ backgroundImage: `url(${testimonial.image})` }}
                      >
                        <div className="star">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star" />
                          ))}
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <div className="section-title">
                          <span>Testimonials</span>
                          <h2>What’s Clients Say </h2>
                        </div>
                        <p className="mt-3 mt-md-0">{testimonial.text}</p>
                        <div className="author-details">
                          <h5>{testimonial.name}</h5>
                          <span>
                            {testimonial.position}   -{" "}
                            <a href="">{testimonial.Linkname}</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="swiper-dot-2">
              <div className="dot-2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

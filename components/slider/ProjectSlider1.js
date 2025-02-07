
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [  Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-3",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 2,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}
export default function ProjectSlider1({ showDots }) {
    return (
        <>
            <div className="swiper project-slider pt-5">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="/assets/img/project/TrackSalesTeam.jpg" alt="project-img" />
                                <div className="project-content">
                                    {/* <p>Manufacturing</p> */}
                                    <h4>
                                        <Link href="/TrackSalesTeam">Track Sales Team</Link>
                                    </h4>
                                    <Link href="/TrackSalesTeam" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="/assets/img/project/OrderManagement.jpg" alt="project-img" />
                                <div className="project-content">
                                    {/* <p>Order Management</p> */}
                                    <h4>
                                        <Link href="/OrderManagement">Order Management  </Link>
                                    </h4>
                                    <Link href="/OrderManagement" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="/assets/img/project/LogisticsTransport.jpg" alt="project-img" />
                                <div className="project-content">
                                    {/* <p>Operation Management</p> */}
                                    <h4>
                                        <Link href="/LogisticsTransport">Logistics & Transport  </Link>
                                    </h4>
                                    <Link href="/LogisticsTransport" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="/assets/img/project/RecruitmentHR.jpg" alt="project-img" />
                                <div className="project-content">
                                    {/* <p>Technology</p> */}
                                    <h4>
                                        <Link href="/RecruitmentHR">Recruitment & HR</Link>
                                    </h4>
                                    <Link href="/RecruitmentHR" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="/assets/img/project/InsuranceManagement.jpg" alt="project-img" />
                                <div className="project-content">
                                    {/* <p>Process Management</p> */}
                                    <h4>
                                        <Link href="/InsuranceManagement">Insurance Management</Link>
                                    </h4>
                                    <Link href="/InsuranceManagement" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="/assets/img/project/AppointmentBooking.jpg" alt="project-img" />
                                <div className="project-content">
                                    {/* <p>Legal & Compliance</p> */}
                                    <h4>
                                        <Link href="/AppointmentBooking">Appointment Booking </Link>
                                    </h4>
                                    <Link href="/AppointmentBooking" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                   
                </Swiper>

                {showDots &&
                    <div className="swiper-dot-2">
                        <div className="dot-3" />
                    </div>
                }
            </div>
        </>
    )
}



import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'
import CounterUp from '../elements/CounterUp'

export default function About1() {
    return (
        <>
            <section className="about-section section-padding fix"  id="about">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image-items">
                                    <div className="counter-shape float-bob-y">
                                        <div className="icon">
                                            <img src="/assets/img/about/icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h3><CounterUp count={18}/>+ Years</h3>
                                        </div>
                                    </div>
                                    {/* <VideoPopup style={2} /> */}
                                    <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: 'url("assets/img/about/about-4.png")' }}>
                                        <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                            <img src="/assets/img/about/about-us-3.png" alt="about-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">ABOUT VeravalOnline</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Innovating the Future: <span>Tech Solutions,</span> Branding & Digital Excellence <span>Technology</span>
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    VeravalOnline Private Limited is a diversified group of companies specializing in technology, logistics, e-commerce, AI-driven solutions, and digital transformation. With a strong foundation in web development, enterprise software, and multi-vendor marketplaces, we empower businesses with cutting-edge solutions tailored to their needs.

<br />Our expertise extends to digital marketing, brand strategy, and creative design, helping businesses establish a strong digital presence through performance-driven marketing, UI/UX design, and branding solutions. By integrating technology, automation, and data-driven insights, we deliver comprehensive solutions that drive growth and innovation.
                                    </p>
                                    {/* <div className="about-icon-items"> */}
                                        {/* <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-2.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Development Services   </h4>
                                                <p>
                                                Full-stack solutions for seamless application and web development. 
                                                </p>
                                            </div>
                                        </div>
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-3.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Designing & Branding </h4>
                                                <p>
                                                Creative designs that boost engagement and brand identity. 
                                                </p>
                                            </div>
                                        </div> */}
                                    {/* </div> */}
                                    <div className="about-author">
                                        {/* <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                                            <Link href="/about" className="theme-btn">
                                                Explore More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                        <div className="author-image wow fadeInUp" data-wow-delay=".7s">
                                            <img src="/assets/img/about/author.png" alt="author-img" />
                                            <div className="content">
                                                <h6>Kalpesh Adhvaryu</h6>
                                                <p>CEO & Founder</p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

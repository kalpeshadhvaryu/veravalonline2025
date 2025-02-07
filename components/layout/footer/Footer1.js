import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-widgets-wrapper footer-bg">
          <div className="shape-1">
            <img src="/assets/img/footer-shape-1.png" alt="shape-img" />
          </div>
          <div className="shape-2">
            <img src="/assets/img/footer-shape-2.png" alt="shape-img" />
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link href="/">
                      <img
                        src="/assets/img/logo/VOLOGOWHITE.svg"
                        alt="logo-img"
                        
                      />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      Business Success with Comprehensive Development,
                      Designing, Data Security, and Digital Marketing.
                    </p>
                    <div className="social-icon d-flex align-items-center">
                      <Link href="https://www.facebook.com/veravalonline" target="_blank">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fveravalonline" target="_blank">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="https://www.linkedin.com/company/veravalonlinepvtltd/" target="_blank">
                        <i className="fa-brands fa-linkedin-in" />
                      </Link>
                      <Link href="https://www.youtube.com/user/veravalonline" target="_blank">
                        <i className="fa-brands fa-youtube" />
                      </Link>
                      <Link href="https://www.instagram.com/veravalonline/" target="_blank">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>About Company</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/">
                        <i className="fa-solid fa-chevron-right" />
                        Home  
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <i className="fa-solid fa-chevron-right" />
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/news">
                        <i className="fa-solid fa-chevron-right" />
                        Solutions 
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <i className="fa-solid fa-chevron-right" />
                        Our Works 
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <i className="fa-solid fa-chevron-right" />
                       Blogs
                      </Link>
                    </li>
                    <li>
                    <Link href="https://portfolio.veravalonline.com/" target="_blank">
                        <i className="fa-solid fa-chevron-right" />
                       Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" target="_blank">
                        <i className="fa-solid fa-chevron-right" />
                       Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
           
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Address</h3>
                  </div>
                  <div className="footer-content">
                    <ul className="contact-info">
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        India- 312 Broadway Signature, Sevasi Canal Road,
                        Vadodara – 391101, Gujarat – India. <br /> 
                        <i className="fa-solid fa-phone-volume" /> <Link href="/tel:7863042495">+91-7863042495</Link>
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        USA: 1007 N Orange St. 4th Floor Suite #1246,
                        Wilmington, Delaware 19801, United States.<br /> 
                        <i className="fa-solid fa-phone-volume" /><Link href="/tel:6303490895">+1-6303490895</Link>
                      </li>
                      
                      <li>
                        <i className="fa-regular fa-envelope" />
                        <Link href="mailto:sales@veravalonline.com">
                          {" "}
                          sales@veravalonline.com
                        </Link><br /> 
                        <i className="fa-regular fa-envelope" />
                        <Link href="mailto:support@veravalonline.com">
                          {" "}
                          support@veravalonline.com
                        </Link>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-footer-widget style-margin">
                  <div className="widget-head">
                    <h3> Certifications </h3>
                  </div>
                  <div className="recent-post-area">
                    <div className="recent-post-items">
                      <div className="thumb">
                        <img src="/assets/img/news/duns-registered-solutions-logo.png" alt="post-img" />
                      </div>
                      {/* <div className="content">
                        <ul className="post-date">
                          <li>
                            <i className="fa-solid fa-calendar-days me-2" />
                            20 Feb, 2024
                          </li>
                        </ul>
                        <h6>
                          <Link href="/news-details">
                            Top 5 Most Famous <br />
                            Technology Trend In 2024
                          </Link>
                        </h6>
                      </div> */}
                    </div>
                    {/* <div className="recent-post-items mb-0">
                      <div className="thumb">
                        <img src="/assets/img/news/pp2.jpg" alt="post-img" />
                      </div>
                      <div className="content">
                        <ul className="post-date">
                          <li>
                            <i className="fa-solid fa-calendar-days me-2" />
                            15 Dec, 2024
                          </li>
                        </ul>
                        <h6>
                          <Link href="/news-details">
                            The Surfing Man Will Blow <br />
                            Your Mind
                          </Link>
                        </h6>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                © All Copyright {new Date().getFullYear()} by{" "}
                <Link href="/"> VeravalOnline Pvt Ltd. </Link>
                | Hosted by Vogue Hosting LLC
              </p>
              <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                <li>
                  <Link href="/contact">Terms &amp; Condition</Link>
                </li>
                <li>
                  <Link href="/contact">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <Link href="#" id="scrollUp" className="scroll-icon">
            <i className="far fa-arrow-up" />
          </Link>
        </div>
      </footer>
    </>
  );
}

"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Offcanvas({ isOffCanvas, handleOffCanvas }) {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="/assets/img/logo/veravalonline-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={handleOffCanvas}>
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-lg-block">
                We specialize in delivering industry-compliant solutions
                tailored to your company’s unique needs. Whether your business
                is large or small, our focus is on enhancing productivity and
                streamlining workflows.
              </p>
              <div className="d-none d-md-block d-lg-none">
                <MobileMenu />
              </div>

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" href="#">
                        {" "}
                        India- 312 Broadway Signature, Sevasi Canal Road,
                        Vadodara – 391101, <br></br>
                        Gujarat – India.
                      </Link>
                    </div>
                  </li>
                  {/* <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt" /> 
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link target="_blank" href="#"> USA: 1007 N Orange St. 4th Floor Suite #1246, Wilmington, Delaware 19801, United States.</Link>
                                        </div>
                                    </li> */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="/mailto:hi@veravalonline.com">
                        <span className="mailto:hi@veravalonline.com">
                          hi@veravalonline.com
                        </span>
                      </Link>
                    </div>
                  </li>
                  {/* <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link target="_blank" href="#">Mod-friday, 09am -05pm</Link>
                                        </div>
                                    </li> */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="/tel:917016549503">+91-7016549503 </Link>
                      <br></br>
                      <Link href="/tel:+16303490895 "> +1-6303490895 </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    {/* <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone" />
                                        </div> */}
                    {/* <div className="offcanvas__contact-text">
                                            <Link href="/tel:+16303490895 "> +1-6303490895 </Link>
                                        </div> */}
                  </li>
                </ul>
                {/* <div className="header-button mt-4">
                                    <Link href="/contact" className="theme-btn text-center">
                                        <span>get A Quote<i className="fa-solid fa-arrow-right-long" /></span>
                                    </Link>
                                </div> */}
                <div className="social-icon d-flex align-items-center">
                  <Link
                    href="https://www.facebook.com/veravalonline"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link
                    href="https://x.com/i/flow/login?redirect_after_login=%2Fveravalonline"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/veravalonlinepvtltd/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/user/veravalonline"
                    target="_blank"
                  >
                    <i className="fa-brands fa-youtube" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/veravalonline/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`}
        onClick={handleOffCanvas}
      />
    </>
  );
}

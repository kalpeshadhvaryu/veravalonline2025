import Link from "next/link";
import Menu from "../Menu";
import OnePageNav from "../OnePageNav";

export default function Header1({
  scroll,
  isOffCanvas,
  handleOffCanvas,
  isSearch,
  handleSearch,
  onePageNav,
}) {
  return (
    <>
      <header>
        <div className="header-top-section fix">
          <div className="container-fluid">
            <div className="header-top-wrapper">
              <ul className="contact-list">
                <li>
                  <i className="far fa-envelope" />
                  <Link href="/mailto:info@example.com" className="link">
                    hi@veravalonline.com
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-phone-volume" />
                  <Link href="tel:7016549503">
                    Call or WhatsApp: +1-6303490895
                  </Link>{" "}
                  |{" "}
                  <Link href="tel:7863042495">International: +91-7863042495</Link>
                </li>
              </ul>
              <div className="top-right">
                <div className="social-icon d-flex align-items-center">
                  <span>Follow Us:</span>
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
        <div
          id="header-sticky"
          className={`header-1 ${scroll ? " " : ""}`}
        >
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main style-2">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <img
                        src="/assets/img/logo/veravalonline-logo.png"
                        alt="logo-img"
                        style={{ width: "100px" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        {onePageNav ? <OnePageNav /> : <Menu />}
                      </nav>
                    </div>
                  </div>
                  {/* <a onClick={handleSearch} className="search-trigger search-icon"><i className="fal fa-search" /></a>
                                    <div className="header-button">
                                        <Link href="/contact" className="theme-btn">
                                            <span>
                                                get A Quote
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </span>
                                        </Link>
                                    </div> */}
                  <div className="header__hamburger d-xl-block my-auto">
                    <div className="sidebar__toggle" onClick={handleOffCanvas}>
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

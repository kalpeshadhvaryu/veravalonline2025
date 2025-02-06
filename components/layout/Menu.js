import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul>
                
                
                <li>
                    <Link href="/">
                        Home
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li><Link href="/about">About VO</Link></li>
                        <li><Link href="/service-carousel">Career</Link></li>
                        <li><Link href="/service-details">Accounts & Payments</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/service">
                        Services
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                    <li><Link href="/service-details">Webmaster</Link></li>
                        <li><Link href="/service-details">SAAS Development</Link></li>
                        <li><Link href="/service-details">Dev Ops</Link></li>
                        <li><Link href="/service-details">ERP/CRM</Link></li>
                        <li><Link href="/service-details">Open Source</Link></li>
                        <li><Link href="/service-details">Android/IOS Apps</Link></li>
                        <li><Link href="/service-details">Designing</Link></li>
                        <li><Link href="/service-details">Digital Marketing</Link></li>
                        

                    </ul>
                </li>
                {/* <li>
                    <Link href="/">
                    Service Industry
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                    <li><Link href="/service-details">Astra TMS </Link></li>
                        <li><Link href="/service-carousel">Insurance Management System  </Link></li>
                        <li><Link href="/service">  POS / KIOSK</Link></li>
                        <li><Link href="/service-details">  Recruitment Portal</Link></li>
                        <li><Link href="/service-details">Field Worker Tracking  </Link></li>
                        <li><Link href="/service-details">Export Document</Link></li>
                        <li><Link href="/service-details">Cloud File Storage  </Link></li>
                    
                        

                    </ul>
                </li> */}
                <li>
                    <Link href="/project">
                        Solutions
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                    <li><Link href="/project-details">Track Sales Team </Link></li>
                        <li><Link href="/project-details">Order Management</Link></li>
                        <li><Link href="/project-details">Logistics & Transport</Link></li>
                        <li><Link href="/project-details">Recruitment & HR</Link></li>
                        <li><Link href="/project-details">Insurance Management</Link></li>
                        <li><Link href="/project-details">Appointment & Booking</Link></li>
                    
                        

                    </ul>
                </li>
                {/* <li className="has-dropdown active menu-thumb">
                    <Link href="/news">
                        Solutions
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu has-homemenu">
                        <li>
                            <div className="homemenu-items">
                               
                        <ul>
                            <li><Link href="/index-3">Team Tracking</Link></li>
                            <li><Link href="/index-three-page">Insurance Management</Link></li>
                            <li><Link href="/index-4">Hiring & Recruitment</Link></li>
                            <li><Link href="/index-four-page">Astra TMS</Link></li>
                        </ul>
                               
                                <div className="homemenu">
                                    
                                    <div className="homemenu-content text-center">
                                    <h4>More Home Variants</h4>
                        <ul>
                            <li><Link href="/index-3">Multi Page - Home 03</Link></li>
                            <li><Link href="/index-three-page">One Page - Home 03</Link></li>
                            <li><Link href="/index-4">Multi Page - Home 04</Link></li>
                            <li><Link href="/index-four-page">One Page - Home 04</Link></li>
                        </ul>
                                    </div>
                                </div>
                                <div className="homemenu">
                                    <div className="homemenu-thumb mb-15">
                                       
                                    </div>
                                    <div className="homemenu-content text-center">
                                    <h4>More Home Variants</h4>
                        <ul>
                            <li><Link href="/index-3">Multi Page - Home 03</Link></li>
                            <li><Link href="/index-three-page">One Page - Home 03</Link></li>
                            <li><Link href="/index-4">Multi Page - Home 04</Link></li>
                            <li><Link href="/index-four-page">One Page - Home 04</Link></li>
                        </ul>
                                    </div>
                                </div>
                                <div className="homemenu">
                                    
                                    <div className="homemenu-content text-center">
                                    <h4>More Home Variants</h4>
                        <ul>
                            <li><Link href="/index-3">Multi Page - Home 03</Link></li>
                            <li><Link href="/index-three-page">One Page - Home 03</Link></li>
                            <li><Link href="/index-4">Multi Page - Home 04</Link></li>
                            <li><Link href="/index-four-page">One Page - Home 04</Link></li>
                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li> */}
                <li className="has-dropdown">
                    <Link href="/project-carousel">
                      Our Work
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li className="has-dropdown">
                            <Link href="/project">
                                Projects
                                {/* <i className="fas fa-angle-down ps-1" /> */}
                            </Link>
                            {/* <ul className="submenu">
                                <li><Link href="/service-carousel">Project</Link></li>
                                <li><Link href="/project-carousel">Project Carousel</Link></li>
                                <li><Link href="/project-details">Project Details</Link></li>
                                <li><Link href="/team-carousel">Project Details</Link></li>
                            </ul> */}
                        </li>
                        <li className="has-dropdown">
                            <Link href="/team">
                                Team
                                {/* <i className="fas fa-angle-down ps-1" /> */}
                            </Link>
                            {/* <ul className="submenu">
                                <li><Link href="/team">Our Team</Link></li>
                                <li><Link href="/team-carousel">Team Carousel</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul> */}
                        </li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        {/* <li><Link href="/faq">Faq's</Link></li> */}
                        {/* <li><Link href="/404">404 Page</Link></li> */}
                    </ul>
                </li>
                <li>
                    <Link href="/blogs">
                        Blog
                        {/* <i className="fas fa-angle-down ps-1" /> */}
                    </Link>
                    {/* <ul className="submenu">
                        <li><Link href="/news">Blog Grid</Link></li>
                        <li><Link href="/news-standard">Blog Standard</Link></li>
                        <li><Link href="/news-details">Blog Details</Link></li>
                    </ul> */}
                </li>
                <li>
                    <Link href="https://portfolio.veravalonline.com" target="_blank">Portfolio</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}

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
                        <li><Link href="/service">About VO</Link></li>
                        <li><Link href="/service-carousel">Career</Link></li>
                        <li><Link href="/service-details">Accounts & Payments</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/">
                        Services
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                    <li><Link href="/service-details">Webmaster</Link></li>
                        <li><Link href="/service-carousel">SAAS Development</Link></li>
                        <li><Link href="/service">Dev Ops</Link></li>
                        <li><Link href="/service-details">ERP/CRM</Link></li>
                        <li><Link href="/service-details">Open Source</Link></li>
                        <li><Link href="/service-details">Android/IOS Apps</Link></li>
                        

                    </ul>
                </li>
                <li>
                    <Link href="/">
                        Services
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                    <li><Link href="/service-details">Webmaster</Link></li>
                        <li><Link href="/service-carousel">SAAS Development</Link></li>
                        <li><Link href="/service">Dev Ops</Link></li>
                        <li><Link href="/service-details">ERP/CRM</Link></li>
                        <li><Link href="/service-details">Open Source</Link></li>
                        <li><Link href="/service-details">Android/IOS Apps</Link></li>
                        

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
                    <Link href="/news">
                        Pages
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li className="has-dropdown">
                            <Link href="/project">
                                Projects
                                <i className="fas fa-angle-down ps-1" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/project">Project</Link></li>
                                <li><Link href="/project-carousel">Project Carousel</Link></li>
                                <li><Link href="/project-details">Project Details</Link></li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link href="/team">
                                Team
                                <i className="fas fa-angle-down ps-1" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/team">Our Team</Link></li>
                                <li><Link href="/team-carousel">Team Carousel</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/faq">Faq's</Link></li>
                        <li><Link href="/404">404 Page</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/news">
                        Blog
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li><Link href="/news">Blog Grid</Link></li>
                        <li><Link href="/news-standard">Blog Standard</Link></li>
                        <li><Link href="/news-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/about">Portfolio</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}

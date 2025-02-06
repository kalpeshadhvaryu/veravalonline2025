
import Link from 'next/link'

export default function Pricing1() {
    return (
        <>
            <section className="pricing-section section-bg fix section-padding">
                <div className="left-shape">
                    <img src="/assets/img/pricing-left-shape.png" alt="shape-img" />
                </div>
                <div className="right-shape">
                    <img src="/assets/img/pricing-right-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="pricing-wrapper">
                        <div className="section-title-area">
                            <div className="section-title">
                                <span className="wow fadeInUp">FLEXIBLE PRICING PLAN</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    We’ve Offered the best <br /> pricing for you
                                </h2>
                            </div>
                            <ul className="nav" role="tablist">
                                <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                                    <Link href="/#monthly" data-bs-toggle="tab" className="nav-link active" aria-selected="true" role="tab">
                                        Monthly
                                    </Link>
                                </li>
                                <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                                    <Link href="/#yearly" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabIndex={-1}>
                                        Yearly
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div id="monthly" className="tab-pane fade show active" role="tabpanel">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="pricing-items">
                                            <div className="tag">
                                                <h6>Intro  </h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>₹10k</h2>
                                                <span>Upto 20 Hours  </span>
                                                <p>
                                                For Startups and New Business
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <h5 className='pb-2'>Web Development & Maintenance
                                                </h5>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Dynamic Website
                                                </li>
                                                 
                                            </ul>
                                            <ul className="pricing-list">
                                                <h5 className='pb-2'> SEO Service </h5>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Upto 10 Keywords
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Upto 100 Supportive Keywords
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Metadata Alteration
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    10 Directory Submission
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    10 Q&A
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    1 Article
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    1 Presenter Video
                                                </li>
                                            </ul>
                                            <ul className="pricing-list">
                                                <h5 className='pb-2'> Social Media</h5>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Social Media Handles

                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Social Media Handles
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    10 Posts

                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    4 Stories/Videos
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Paid Promotion*
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Reviews*
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Comments*
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    WhatsApp Communication
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Hosting Support
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Monthly Report
                                                </li>
                                            </ul>
                                            <div className="pricing-button">
                                                <p>Up to 10 users + 1.99 per user</p>
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    choose Plan
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                     
                                        <div className="pricing-items active">
                                            <div className="tag">
                                                <h6>Most Popular Business</h6>
                                            </div>
                                          
                                            
                                            <div className="pricing-header">
                                                <h2>₹15k</h2>
                                                <span>Upto 30 Hours  </span>
                                                <p>
                                                For Startups and New Business
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <h5 className='pb-2'>Web Development & Maintenance
                                                </h5>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Dynamic Website
                                                </li>
                                                 
                                            </ul>
                                            <ul className="pricing-list">
                                                <h5 className='pb-2'> SEO Service </h5>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Upto 15 Keywords
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Upto 150 Supportive Keywords
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Metadata Alteration
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    15 Directory Submission
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    15 Q&A
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    1 Article
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    1 Presenter Video
                                                </li>
                                            </ul>
                                            <ul className="pricing-list">
                                                <h5 className='pb-2'> Social Media</h5>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Social Media Handles

                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Social Media Handles
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    15 Posts

                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    4 Stories/Videos
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Paid Promotion*
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Reviews*
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Comments*
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    WhatsApp Communication
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Hosting Support
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Monthly Report
                                                </li>
                                            </ul>
                                            <div className="pricing-button">
                                                <p>Up to 10 users + 1.99 per user</p>
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    choose Plan
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="pricing-items">
                                            <div className="tag">
                                                <h6>Enterprise</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>₹20k</h2>
                                                <span>Upto 45 Hours  </span>
                                                <p>
                                                For Startups and New Business
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <h5 className='pb-2'>Web Development & Maintenance
                                                </h5>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Dynamic Website
                                                </li>
                                                 
                                            </ul>
                                            <ul className="pricing-list">
                                                <h5 className='pb-2'> SEO Service </h5>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Upto 20 Keywords
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Upto 200 Supportive Keywords
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Metadata Alteration
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    20 Directory Submission
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    20 Q&A
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    1 Article
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    1 Presenter Video
                                                </li>
                                            </ul>
                                            <ul className="pricing-list">
                                                <h5 className='pb-2'> Social Media</h5>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Social Media Handles

                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Social Media Handles
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    20 Posts

                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    4 Stories/Videos
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Paid Promotion*
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Reviews*
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Comments*
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    WhatsApp Communication
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Hosting Support
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Monthly Report
                                                </li>
                                            </ul>
                                            <div className="pricing-button">
                                                <p>Up to 10 users + 1.99 per user</p>
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    choose Plan
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="yearly" className="tab-pane fade" role="tabpanel">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-items">
                                            <div className="tag">
                                                <h6>Basic Plan</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>$149</h2>
                                                <span>Par month</span>
                                                <p>
                                                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Branding and design Identity
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Web site Marketing Solutions
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Free 15 GB Linux Hosting
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    24/7 system Monitoring
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    unlimited Download Data
                                                </li>
                                            </ul>
                                            <div className="pricing-button">
                                                <p>Up to 10 users + 1.99 per user</p>
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    choose Plan
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-items active">
                                            <div className="tag">
                                                <h6>Most Popular</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>$179</h2>
                                                <span>Par month</span>
                                                <p>
                                                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Branding and design Identity
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Web site Marketing Solutions
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Free 15 GB Linux Hosting
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    24/7 system Monitoring
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    unlimited Download Data
                                                </li>
                                            </ul>
                                            <div className="pricing-button">
                                                <p>Up to 10 users + 1.99 per user</p>
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    choose Plan
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-items">
                                            <div className="tag">
                                                <h6>Premium</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>$199</h2>
                                                <span>Par month</span>
                                                <p>
                                                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Branding and design Identity
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Web site Marketing Solutions
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Free 15 GB Linux Hosting
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    24/7 system Monitoring
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    unlimited Download Data
                                                </li>
                                            </ul>
                                            <div className="pricing-button">
                                                <p>Up to 10 users + 1.99 per user</p>
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    choose Plan
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
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



{/* <div className="col-xl-12 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
<div className="pricing-items">
    <div className="tag">
        <h6>Intro  </h6>
    </div>
    <div className="pricing-header">
        <h2>10,000</h2>
        <span>Par month</span>
        <p>
        For Startups and New Business
        </p>
    </div>
    <div className="row">
        <div className='col-6'>
        <ul className="pricing-list">
        <h5 className='pb-2'>Web Development & Maintenance
        </h5>
        <li>
            <i className="fa-solid fa-check" />
            Dynamic Website
        </li>
         
    </ul>
    <ul className="pricing-list">
        <h5 className='pb-2'> SEO Service </h5>
        <li>
            <i className="fa-solid fa-check" />
            Upto 10 Keywords
        </li>
        <li>
            <i className="fa-solid fa-check" />
            Upto 100 Supportive Keywords
        </li>
        <li>
            <i className="fa-solid fa-check" />
            Metadata Alteration
        </li>
        <li>
            <i className="fa-solid fa-check" />
            10 Directory Submission
        </li>
        <li>
            <i className="fa-solid fa-check" />
            10 Q&A
        </li>
        <li>
            <i className="fa-solid fa-check" />
            1 Article
        </li>
        <li>
            <i className="fa-solid fa-check" />
            1 Presenter Video
        </li>
    </ul>
        </div>
       
        <div className='col-4'>
        <ul className="pricing-list">
        <h5 className='pb-2'> Social Media</h5>
        <li>
            <i className="fa-solid fa-check" />
            Social Media Handles

        </li>
        <li>
            <i className="fa-solid fa-check" />
            Social Media Handles
        </li>
        <li>
            <i className="fa-solid fa-check" />
            10 Posts

        </li>
        <li>
            <i className="fa-solid fa-check" />
            4 Stories/Videos
        </li>
        <li>
            <i className="fa-solid fa-check" />
            Paid Promotion*
        </li>
        <li>
            <i className="fa-solid fa-check" />
            Reviews*
        </li>
        <li>
            <i className="fa-solid fa-check" />
            Comments*
        </li>
        <li>
            <i className="fa-solid fa-check" />
            WhatsApp Communication
        </li>
        <li>
            <i className="fa-solid fa-check" />
            Hosting Support
        </li>
        <li>
            <i className="fa-solid fa-check" />
            Monthly Report
        </li>
    </ul>
        </div>
    </div>
  
   
  
    <div className="pricing-button">
        <p>Up to 10 users + 1.99 per user</p>
        <Link href="/contact" className="pricing-btn mt-4">
            choose Plan
            <i className="fa-solid fa-arrow-right-long" />
        </Link>
    </div>
</div>
</div> */}
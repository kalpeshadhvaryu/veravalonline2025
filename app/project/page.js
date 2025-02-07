
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Project() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project">
                <section className="project-section section-padding fix">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/01.jpg" alt="project-img" />
                                        <div className="project-content">
                                             
                                            <h4>
                                            <Link href="/TrackSalesTeam">Track Sales Team </Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/02.jpg" alt="project-img" />
                                        <div className="project-content">
                                       
                                            <h4>
                                            <Link href="/OrderManagement">Order Management</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/03.jpg" alt="project-img" />
                                        <div className="project-content">
                                             
                                            <h4>
                                            <Link href="/LogisticsTransport">Logistics & Transport</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/04.jpg" alt="project-img" />
                                        <div className="project-content">
                                             
                                            <h4>
                                            <Link href="/RecruitmentHR">Recruitment & HR</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/10.jpg" alt="project-img" />
                                        <div className="project-content">
                                             
                                            <h4>
                                            <Link href="/InsuranceManagement">Insurance Management</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/11.jpg" alt="project-img" />
                                        <div className="project-content">
                                            
                                            <h4>
                                            <Link href="/AppointmentBooking">Appointment & Booking</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}
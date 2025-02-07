import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function ProjectDetails() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Appointment & Booking  "
      >
        <section className="Project-details-section fix section-padding">
          <div className="container">
            <div className="project-details-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="project-details-items">
                    {/* <div className="details-image">
                      <img src="/assets/img/project/details.jpg" alt="img" />
                    </div> */}
                    <div className="row g-4 justify-content-between">
                      <div className="col-lg-12">
                        <div className="details-content pt-5">
                          <h3>
                            {" "}
                            Streamline Scheduling with Our Appointment & Booking
                            Solutions
                          </h3>
                          <p>
                            Efficient appointment and booking management is
                            essential for businesses that rely on scheduling
                            services, from healthcare providers to salons,
                            consultants, and educational institutions.
                            VeravalOnline’s Appointment & Booking Solutions
                            offer a seamless and user-friendly platform to
                            automate scheduling, manage appointments, and
                            optimize customer bookings. With our solution, you
                            can reduce no-shows, improve customer satisfaction,
                            and save time by automating the entire booking
                            process. Whether you're managing single or multiple
                            locations, our solution is designed to meet the
                            unique needs of your business.
                          </p>
                        </div>
                      </div>
                      {/* <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <h3>Project Info: </h3>
                                                    <ul>
                                                        <li>
                                                            Client:
                                                            <span>Ralph Edwards</span>
                                                        </li>
                                                        <li>
                                                            Category:
                                                            <span>IT Management</span>
                                                        </li>
                                                        <li>
                                                            Location:
                                                            <span>Landon</span>
                                                        </li>
                                                        <li>
                                                            Share:
                                                            <span>
                                                                <i className="fa-brands fa-facebook-f me-3" />
                                                                <i className="fa-brands fa-instagram me-3" />
                                                                <i className="fa-brands fa-linkedin-in" />
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> */}
                    </div>
                    <div className="details-content pt-3">
                      <h3>
                        The Importance of Efficient Appointment & Booking
                        Management
                      </h3>
                      <p>
                        In today's fast-paced world, businesses must offer
                        flexible, convenient, and hassle-free booking options to
                        meet customer expectations. VeravalOnline’s Appointment
                        & Booking Solutions allow customers to book appointments
                        online, making it easier for both businesses and clients
                        to manage their schedules. Our platform integrates with
                        your existing systems, offers real-time availability,
                        and provides customers with the flexibility to schedule,
                        reschedule, or cancel appointments at their convenience.
                        By reducing administrative overhead, eliminating
                        double-bookings, and ensuring accurate scheduling, you
                        can focus more on delivering exceptional service to your
                        clients.
                      </p>
                    </div>
                    {/* <div className="row g-4 pt-5">
                                            <div className="col-lg-3 col-md-6">
                                                <ul className="list">
                                                    <li>
                                                        <i className="fa-regular fa-circle-check" />
                                                        Branding and design Identity
                                                    </li>
                                                    <li>
                                                        <i className="fa-regular fa-circle-check" />
                                                        Web site Marketing Solutions
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <ul className="list">
                                                    <li>
                                                        <i className="fa-regular fa-circle-check" />
                                                        Branding and design Identity
                                                    </li>
                                                    <li>
                                                        <i className="fa-regular fa-circle-check" />
                                                        Web site Marketing Solutions
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <ul className="list">
                                                    <li>
                                                        <i className="fa-regular fa-circle-check" />
                                                        Branding and design Identity
                                                    </li>
                                                    <li>
                                                        <i className="fa-regular fa-circle-check" />
                                                        Web site Marketing Solutions
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> */}
                    <div className="service-wrapper mb-0">
                      <div className="row">
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="service-box-items box-shadow"
                            style={{
                              paddingBottom: "62px",
                            }}
                          >
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-1.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Online Booking System</h4>
                              <p>
                                Allow customers to easily book, reschedule, or
                                cancel appointments through an intuitive online
                                interface, 24/7.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div
                            className="service-box-items box-shadow  "
                            style={{
                              paddingBottom: "62px",
                            }}
                          >
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-2.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Real-Time Availability</h4>
                              <p>
                                Automatically update your availability in
                                real-time, ensuring that customers can only book
                                available slots and preventing overbooking.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <div className="service-box-items box-shadow">
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-3.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Automated Reminders</h4>
                              <p>
                                Streamline underwriting by integrating risk
                                assessment tools and Send automated appointment
                                reminders via email or SMS to reduce no-shows
                                and last-minute cancellations.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".9s"
                        >
                          <div
                            className="service-box-items box-shadow"
                            style={{
                              paddingBottom: "62px",
                            }}
                          >
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-4.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Multi-Location Support </h4>
                              <p>
                                Manage appointments across multiple locations,
                                ensuring consistent scheduling and availability
                                across your business.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="service-box-items box-shadow"
                            style={{
                              paddingBottom: "62px",
                            }}
                          >
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-10.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Customizable Booking Forms</h4>
                              <p>
                                Customize booking forms to capture essential
                                client information, allowing you to tailor your
                                services and ensure a smooth experience.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="service-box-items box-shadow">
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-11.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Payment Integration</h4>
                              <p>
                                Integrate secure payment processing into the
                                booking system, enabling customers to pay for
                                services upfront and reducing payment-related
                                issues.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="details-content pt-5">
                      <h3>
                        Unlock the Benefits of Seamless Appointment Management
                      </h3>
                      <p>
                        VeravalOnline’s Appointment & Booking Solutions
                        streamline the appointment scheduling process, improving
                        operational efficiency, reducing administrative
                        workload, and enhancing customer satisfaction. By
                        offering customers a simple, flexible way to book
                        appointments and sending automated reminders, our
                        solution helps ensure higher booking rates, fewer
                        cancellations, and a more organized business operation.
                        Whether you're in healthcare, education, beauty
                        services, or any industry requiring appointments, our
                        platform is scalable and customizable to meet the unique
                        needs of your business, boosting productivity and client
                        loyalty.
                      </p>
                    </div>
                    <div className="row g-4 pt-5">
                      <div className="col-lg-6 col-md-6">
                        <div className="thumb">
                          <img
                            src="/assets/img/project/details-2.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="thumb">
                          <img
                            src="/assets/img/project/details-3.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="preview-area">
                    <div className="preview-item">
                      <img src="/assets/img/project/p-1.png" alt="img" />
                      <div className="content">
                        <h3>Preview</h3>
                        <p>Analytic Solutions</p>
                      </div>
                    </div>
                    <div className="preview-item">
                      <div className="content text-right">
                        <h3>Next</h3>
                        <p>Software Development</p>
                      </div>
                      <img src="/assets/img/project/p-2.png" alt="img" />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

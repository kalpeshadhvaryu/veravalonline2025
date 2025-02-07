import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function ProjectDetails() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Recruitment & HR  "
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
                            Streamline Your Hiring Process with Recruitment & HR Solutions
                          </h3>
                          <p>
                          Recruiting the right talent and effectively managing human resources are crucial to the success of any organization. VeravalOnline’s Recruitment & HR Solutions provide businesses with the tools they need to streamline hiring processes, improve employee management, and optimize workforce performance. Our solutions offer end-to-end support for HR activities, from recruitment and onboarding to performance tracking and employee engagement. By automating HR tasks and providing data-driven insights, we help organizations build a high-performing workforce that drives growth and success. 
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
                      <h3>The Importance of Efficient HR Management</h3>
                      <p>
                      Efficient recruitment and human resource management are essential for attracting top talent and retaining high-performing employees. VeravalOnline’s Recruitment & HR Solutions simplify the hiring process, allowing businesses to efficiently manage candidate pipelines, conduct seamless interviews, and onboard new hires quickly. Our HR solutions also enable continuous employee development and performance monitoring, ensuring that your workforce remains motivated, productive, and aligned with company goals. With real-time insights and automation, our solutions help you make informed HR decisions and focus on building a positive organizational culture. 
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
                          <div className="service-box-items box-shadow"  >
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-1.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Efficient Recruitment Process</h4>
                              <p>
                              Automate candidate sourcing, screening, and interview scheduling to reduce the time spent on recruitment tasks and identify the best candidates faster.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="service-box-items box-shadow  "  style={{
                            paddingBottom:"63px"
                          }}>
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-2.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Seamless Onboarding</h4>
                              <p>
                              Create a smooth and engaging onboarding experience for new hires, ensuring they feel welcomed and integrated into the organization. 
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
                              <h4>Performance Management</h4>
                              <p>
                              Track and assess employee performance with easy-to-use tools that allow for setting clear goals, providing feedback, and measuring progress. 
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".9s"
                        >
                          <div className="service-box-items box-shadow"   >
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-4.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Employee Engagement</h4>
                              <p>
                              Foster a positive work culture with tools that allow employees to share feedback, participate in surveys, and feel more connected to your organization. 
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="service-box-items box-shadow"   >
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-10.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Training and Development</h4>
                              <p>
                              Offer employees opportunities for growth with integrated training and development solutions, helping them acquire new skills and advance in their careers. 
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="service-box-items box-shadow"    >
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-11.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>HR Analytics and Reporting</h4>
                              <p>
                              Use data-driven insights to make informed decisions about hiring, retention, and employee development, improving HR strategy and outcomes. 
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="details-content pt-5">
                      <h3>The Benefits of Our Recruitment & HR Solutions</h3>
                      <p>
                      VeravalOnline’s Recruitment & HR Solutions help businesses save time, reduce administrative overhead, and optimize workforce management. By automating the recruitment process, improving employee engagement, and providing powerful HR analytics, our solutions empower businesses to create a more productive, engaged, and satisfied workforce. Whether you are a small business or a large enterprise, our flexible HR solutions scale to meet your needs, ensuring that you attract the best talent and manage your employees effectively for long-term success. 
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

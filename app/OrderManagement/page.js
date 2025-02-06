import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function ProjectDetails() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Order Management"
      >
        <section className="Project-details-section fix section-padding">
          <div className="container">
            <div className="project-details-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="project-details-items">
                    <div className="details-image">
                      <img src="/assets/img/project/details.jpg" alt="img" />
                    </div>
                    <div className="row g-4 justify-content-between">
                      <div className="col-lg-12">
                        <div className="details-content pt-5">
                          <h3>
                            {" "}
                            Efficient Order Management with Our IT Solutions
                          </h3>
                          <p>
                          Managing orders efficiently is a cornerstone of a successful business. VeravalOnline’s Order Management Solutions provide a streamlined, automated approach to handle every aspect of the order lifecycle—from order processing to shipping, inventory management, and customer communication. Our solution helps businesses ensure accurate order fulfillment, reduce operational costs, and improve customer satisfaction. Whether you're a growing small business or a large enterprise, our solutions are scalable and customizable to meet your specific needs, ensuring smooth order operations from start to finish. 
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
                      <h3>Why Choose Our Order Management Solutions?</h3>
                      <p>
                      An efficient order management system is essential for businesses to provide seamless service and maintain customer satisfaction. VeravalOnline’s Order Management Solutions help you manage your orders with ease, automating key processes and providing full visibility over your order lifecycle. With real-time tracking, integrated inventory management, and automated shipping, our solution ensures that every order is processed on time and with accuracy, improving your business’s efficiency and profitability. 
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
                          <div className="service-box-items box-shadow" style={{
                            paddingBottom:"60px"
                          }}>
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-1.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Order Processing Automation</h4>
                              <p>
                              Automate the entire order process, from order receipt to fulfillment, reducing human error and speeding up order execution.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="service-box-items box-shadow  "  >
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-2.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Inventory Management Integration</h4>
                              <p>
                              Gain real-time visibility of your inventory, ensuring that stock levels are accurately tracked, and preventing overstocking or stockouts. 
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
                              <h4>Shipping Coordination</h4>
                              <p>
                              Streamline your shipping processes with integrated solutions that provide tracking information and updates to customers in real time.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".9s"
                        >
                          <div className="service-box-items box-shadow"  >
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-4.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Customer Communication Automation</h4>
                              <p>
                              Improve customer experience with automated order confirmations, shipping notifications, and delivery updates to keep your customers informed. 
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="service-box-items box-shadow" style={{
                            paddingBottom:"62px"
                          }} >
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-10.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Comprehensive Reporting</h4>
                              <p>
                              Generate reports on order history, sales trends, and performance metrics, enabling you to make data-driven decisions and refine your strategy. 
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="service-box-items box-shadow"  style={{
                            paddingBottom:"62px"
                          }} >
                            <div className="icon">
                              <img
                                src="/assets/img/service/icon/s-icon-11.svg"
                                alt="icon-img"
                              />
                            </div>
                            <div className="content  Box-Heading">
                              <h4>Scalable Solution</h4>
                              <p>
                              As your business grows, our Order Management Solutions scale with you, allowing you to handle increased order volumes without sacrificing efficiency. 
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="details-content pt-5">
                      <h3>The Benefits of Our Order Management Solutions</h3>
                      <p>
                      VeravalOnline’s Order Management Solutions help businesses reduce manual tasks, improve operational efficiency, and enhance customer satisfaction. With automated workflows, real-time tracking, and robust reporting features, you can ensure a seamless order process from start to finish. Our system integrates smoothly with existing software platforms such as CRM and ERP systems, creating a unified solution that supports business growth. By improving order accuracy and reducing delays, our solutions help you build stronger customer relationships, boost sales, and maintain a competitive edge in the market. 
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

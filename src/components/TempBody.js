import React from "react"
import {
  imageo4,
  i1,
  imageo3,
  imageo5,
  imageo2,
  imageo1,
  i2,
  i4,
  i3,
  tick,
} from "../assets/img/icons"
import SimpleSlider from "./Slider"

export const TempBody = () => {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "180px" }}>
        <div className="row">
          <div className="col-md-12 top-sec">
            <div className="col-sm-6" style={{ margin: "0px 20px" }}>
              <h5 className="s-head service-font">Services</h5>
              <h1 className="h-head">Digital Experiences</h1>
              <div className="st-desc great-font">
                Great digital experience is a critical component of business
                success. Businesses who want to survive and succeed in today’s
                continuously evolving and constantly changing environment will
                have to make sure they are offering the best digital experiences
                to their customers. Hence, we at Bright Development, follow an
                unparalleled approach to provide digital experiences that have
                aesthetically appealing designs, excellent usability, quality
                content, and high performance.
              </div>
              <button className="custm-butt">Contact Us</button>
            </div>
            <div className="col-sm-6"></div>
          </div>
          <div className="col-md-12 tqb-sec">
            <div className="col-md-12">
              <h2
                style={{
                  color: "#007da5",
                  fontFamily: "SofiaPro-SemiBold",
                  fontSize: "28px",
                  margin: "0px 20px",
                }}
              >
                About Our Offering
              </h2>
            </div>
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#profile"
                  role="tab"
                  data-toggle="tab"
                >
                  Mobile Applications
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  href="#buzz"
                  role="tab"
                  data-toggle="tab"
                >
                  UX/UI Design
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#references"
                  role="tab"
                  data-toggle="tab"
                >
                  Dashboards & Tools
                </a>
              </li>
            </ul>
            {/* <!-- Tab panes --> */}

            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane fade in "
                id="profile"
              ></div>
              <div
                role="tabpanel"
                className="tab-pane fade active show"
                id="buzz"
              >
                <div className="sky-round-bg-main"></div>
                <div
                  className="col-md-12 ux-sec-2"
                  style={{ backgroundColor: "#d0d0d2" }}
                >
                  <div className="col-md-8 ux-sec-1">
                    <h2 className="tabs-h">UX/UI Design</h2>
                    <p className="tabs-p">
                      In this era when the number of smartphone users is
                      skyrocketing, we understand the drastic difference a
                      mobile app can make for your business. That’s why Bright
                      Development builds powerful applications for iOS/Android
                      that meet your everyday business needs. With our mobile
                      app development services,we help you become a successful
                      brand with a great story to tell.
                    </p>
                    <p className="tabs-p">
                      Instead of focusing solely on technology, we examine all
                      sorts of methods to expand and enhance the customer
                      experience so that your customers can benefit fully from
                      every aspect of your product. Here’s how we do it.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-12 ux-sec-2"
                  style={{
                    backgroundColor: "#dbdcde",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                  }}
                >
                  <h2 className="tabs-h" style={{ marginBottom: "30px" }}>
                    Our Process
                  </h2>
                  <div className="row">
                    <div className="column">
                      <div className="card card-1">
                        <div className="top-s">
                          <img
                            className="card-img-top"
                            src={imageo4}
                            alt="Card image"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Step 1.</h4>
                          <h5 className="card-text">
                            Understanding your customers
                          </h5>
                          <p className="card-text">
                            We research the market and analyze your customers’
                            likes and dislikes. Understanding your customers
                            helps us see which elements attract them to your
                            product. This is essential for creating a successful
                            digital experience.
                          </p>
                        </div>
                      </div>
                      <div className="L-1">
                        <img className="im-card" src={i1} />
                      </div>
                    </div>
                    <div className="column">
                      <div className="card card-2">
                        <div className="top-s">
                          <img
                            className="card-img-top"
                            src={imageo3}
                            alt="Card image"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Step 2.</h4>
                          <h5 className="card-text">
                            Content and digital experience planning
                          </h5>
                          <p className="card-text">
                            Based on the collected data, we plan the customer
                            experience of your website or app. The idea is to
                            design your website or app in such a way that users
                            get hooked.
                          </p>
                        </div>
                      </div>
                      <div className="L-2">
                        <img className="im-card" src={i2} />
                      </div>
                    </div>
                    <div className="column">
                      <div className="card card-3">
                        <div className="top-s">
                          <img
                            className="card-img-top"
                            src={imageo5}
                            alt="Card image"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Step 3.</h4>
                          <h5 className="card-text">
                            UX/UI design and development
                          </h5>
                          <p className="card-text">
                            Based on the content plan, our UX/UI designers begin
                            creating the UXUI design of your website or app.
                          </p>
                        </div>
                      </div>
                      <div className="L-3">
                        <img className="im-card" src={i3} />
                      </div>
                    </div>
                    <div className="column">
                      <div className="card card-4">
                        <div className="top-s">
                          <img
                            className="card-img-top"
                            src={imageo2}
                            alt="Card image"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Step 4.</h4>
                          <h5 className="card-text">
                            Refining the digital experience
                          </h5>
                          <p className="card-text">
                            After the design and development, we’ll continue to
                            check your website and make necessary modifications
                            and improvements.
                          </p>
                        </div>
                      </div>
                      <div className="L-4">
                        <img className="im-card" src={i4} />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 ux-sec-3"
                  style={{ backgroundColor: "#e1e2e4" }}
                >
                  <h2 className="tabs-h tabs-h-1">
                    UX/UI Design Services We Offer
                  </h2>
                  <div
                    className="col-md-12"
                    style={{ margin: "30px 0px", paddingLeft: "0px" }}
                  >
                    <a className="L-Link" href="#">
                      Strategies for Social Media{" "}
                    </a>
                    <a className="L-Link" href="#">
                      Software development using UX methodologies
                    </a>
                  </div>
                  <div className="col-md-8 U-txt">
                    We understand customer behavior well, which is an essential
                    part of creating UI/UX services that excel in themarket. We
                    follow advanced UX research methods that are backed by
                    surveys and interviews with focus groups.
                  </div>
                </div>
                <div
                  className="col-md-12 ux-sec-3"
                  style={{ backgroundColor: "#ededed" }}
                >
                  <h2 className="tabs-h tabs-h-1">
                    Why Choose Bright Development?
                  </h2>
                  <div
                    className="col-md-12"
                    style={{ margin: "30px 0px", paddingLeft: "0px" }}
                  >
                    <ul className="custom-focus">
                      <li>
                        <img className="tick-1" src={tick} />
                        We focus on every single detail so that customers get
                        everything they want.
                      </li>
                      <li>
                        <img className="tick-1" src={tick} />
                        We ensure customers spend more time on your website and
                        consume the content.
                      </li>
                      <li>
                        <img className="tick-1" src={tick} />
                        We tell a brand story across multiple channels with your
                        interface and design.
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  role="tabpanel"
                  className="tab-pane fade"
                  id="references"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-12 serch-sec">
            <div className="sec-1" style={{ margin: "0px 15px" }}>
              <div className="left-col-1">
                <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                  <span className="ld-fh-txt"> Start Now</span>
                </h2>
                <h5
                  style={{ color: "#ffffff", textAlign: "left" }}
                  className="vc_custom_heading vc_custom_1595842755130"
                >
                  Get a project estimation.
                </h5>
              </div>
              <div className="right-col-1">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email..."
                    id="mail"
                    name="email"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">Continue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 testimonail-sec">
            <h2 className="tabs-h tabs-h-1 " style={{ margin: "20px 20px" }}>
              <span>Testimonials </span>
              <span className="trust-text">From our Trusted Client</span>
            </h2>
            <SimpleSlider />
          </div>
        </div>
      </div>
    </>
  )
}

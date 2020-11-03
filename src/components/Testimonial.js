import React from 'react'
import HomeSlider from "./HomeSlider";
import {  TestimonialArrow } from "../assets/images/images"

export const Testimonial = () => {
    return (
        <>
          <div className="row serch-sec">
              <div className="sec-1 col-md-12">
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
                  <div className="ld_sf_paragraph">
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
            </div>
            <h2 className="tabs-h tabs-heading-1 testimonial-heading">
              <span style={{ fontFamily: "helvetica_neueregular" }}>
                Testimonials{" "}
              </span>
              <span className="trust-text">
                from our
                <br />
                trusted clients
                <span style={{ fontFamily: "helvetica_neuebold" }}>.</span>
              </span>
            </h2>
            <HomeSlider />
            <p className="S-testi" style={{ left: "85%", marginTop: "-2%" }}>
              <span className="see-all">See all Testimonials</span>
              <img src={TestimonialArrow} />
            </p>
        </>
    )
}

import React from "react"
import { footerLogo } from "../assets/images/images"

export const Footer = () => {
  return (
    <section className="top-sec-N" id="section-eight">
    <div className="jumbotron text-center" style={{ marginBottom: "0" }}>
            <section id="footer">
              <div className="col-md-12">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                  <div
                    className="col-xs-12 col-sm-4 col-md-2"
                    style={{ marginLeft: "10px" }}
                  >
                    <img className="F-logo" src={footerLogo} />
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-2 custom-dix">
                    <h5>Welcome</h5>
                    <ul className="list-unstyled quick-links">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-2 custom-dix">
                    <h5>Work</h5>
                    <ul className="list-unstyled quick-links">
                      <li>
                        <a href="#">Industry</a>
                      </li>
                      <li>
                        <a href="#">Industry</a>
                      </li>
                      <li>
                        <a href="#">Industry</a>
                      </li>
                      <li>
                        <a href="#">Industry</a>
                      </li>
                      <li>
                        <a href="#">Industry</a>
                      </li>
                      <li>
                        <a href="#">Industry</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-2 custom-dix">
                    <h5>Resources</h5>
                    <ul className="list-unstyled quick-links">
                      <li>
                        <a href="#">SEO</a>
                      </li>
                      <li>
                        <a href="#">SEO</a>
                      </li>
                      <li>
                        <a href="#">SEO</a>
                      </li>
                      <li>
                        <a href="#">SEO</a>
                      </li>
                      <li>
                        <a href="#">SEO</a>
                      </li>
                      <li>
                        <a href="#">SEO</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-2 custom-dix">
                    <h5>Peoples</h5>
                    <ul className="list-unstyled quick-links">
                      <li>
                        <a href="#">Leadership</a>
                      </li>
                      <li>
                        <a href="#">our values</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-2 custom-dix">
                    <h5>Join</h5>
                    <ul className="list-unstyled quick-links">
                      <li>
                        <a href="#">Opportunities</a>
                      </li>
                      <li>
                        <a href="#">internship</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-2 custom-dix">
                    <h5>Contact</h5>
                    <ul className="list-unstyled quick-links">
                      <li>
                        <a href="#">Hours</a>
                      </li>
                      <li>
                        <a href="#">9am to 5pm EST</a>
                      </li>
                      <li>
                        <a href="#">Monday to Saturday</a>
                      </li>
                      <ul className="list-unstyled quick-links">
                        <h5
                          style={{
                            marginBottom: "0px",
                            paddingBottom: "0px",
                            marginTop: "20px",
                          }}
                        >
                          Social
                        </h5>
                        <li>
                          <a href="#">Instagram</a>
                        </li>
                        <li>
                          <a href="#">Facebook</a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2  text-white">
                    <p>
                      <u style={{ textDecoration: "none" }}>
                        <a href="#">
                          ©2020 Bright Development LLC. All Rights Reserved.
                          666th Street, Nowwhere, NW 11111
                        </a>
                      </u>
                    </p>
                    <p className="h6">
                      <span className="t-c">
                        <a href="#"></a>Terms and Conditions
                      </span>
                      <span className="t-c">Privacy policy</span>
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
            </section>
          </div>
          </section>
  )
}

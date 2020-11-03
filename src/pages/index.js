import React from "react"
import { withPrefix } from "gatsby-link"
import {
  logo,
  navStrock,
  topBg1,
  m1,
  moreArrow,
  m2,
  m3,
  arrow,
  arrowWhite,
  TestimonialArrow,
  plus,
  footerLogo,
  iphone,
  macbook,
} from "../assets/images/images"
import HomeSlider from "../components/HomeSlider"
import Particles from "react-particles-js"
import $ from "jquery"
import { Scroller } from "../components/Scroller"
import { Testimonial } from "../components/Testimonial"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"



class Home extends React.Component {
  state ={
    scrollTop : 5,
    scrollMac : 27
  }
  handleScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.setState({
        scrollTop : 5,
        scrollMac : 27
      })
    } else {
      this.setState({
        scrollTop : 10,
        scrollMac : 25
      })
    }
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    if (this.props.location.pathname === withPrefix("/")) {
      require("../assets/css/style-home2.css")
      require("../assets/fonts/stylesheet.css")
    } else {
      console.log("fail")
    }
    $({ countNum: $(".code").html() }).animate(
      { countNum: 2520 },
      {
        duration: 8000,
        easing: "linear",
        step: function () {
          $(".code").html(Math.floor(this.countNum))
        },
        complete: function () {
          $(".code").html(this.countNum)
          //alert('finished');
        },
      }
    )

    $({ countNum: $(".code_2").html() }).animate(
      { countNum: 615 },
      {
        duration: 8000,
        easing: "linear",
        step: function () {
          $(".code_2").html(Math.floor(this.countNum))
        },
        complete: function () {
          $(".code_2").html(this.countNum)
          //alert('finished');
        },
      }
    )

    $({ countNum: $(".code_3").html() }).animate(
      { countNum: 102 },
      {
        duration: 8000,
        easing: "linear",
        step: function () {
          $(".code_3").html(Math.floor(this.countNum))
        },
        complete: function () {
          $(".code_3").html(this.countNum)
          //alert('finished');
        },
      }
    )

    $({ countNum: $(".code_4").html() }).animate(
      { countNum: 3200 },
      {
        duration: 8000,
        easing: "linear",
        step: function () {
          $(".code_4").html(Math.floor(this.countNum))
        },
        complete: function () {
          $(".code_4").html(this.countNum)
          //alert('finished');
        },
      }
    )
  }
  render() {
    return (    
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Particles
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          params={{
            particles: {
              number: {
                value: 7,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: [
                  "#3f3a60",
                  "#655dc6",
                  "#10cfc9",
                  "#007da5",
                  "#ce009f",
                  "#5b6670",
                ],
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0,
                  sync: false,
                },
              },
              size: {
                value: 5,
                random: false,
                anim: {
                  enable: false,
                  speed: 4,
                  size_min: 0.3,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#3c1414",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "bubble",
                },
                onclick: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                  speed: 3,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
        {/* <!-- Navigation --> */}
        <div className="top-sec-new" id="section-one">
          <Header />
          <Scroller />
          <div className="col-md-12  C-section web-VF" id="sec-1 w-">
          
            <div className="Top-L">
              <h5 className="s-head service-font">bright development</h5>
              <h1 className="h-head">
                Your
                <span style={{ fontFamily: "helvetica_neueregular" }}>
                  {" "}
                  1-stop
                </span>
              </h1>
              <h1 className="h-head">
                <span style={{ fontFamily: "helvetica_neueregular" }}>
                  shop{" "}
                </span>
                for your
              </h1>
              <h1
                className="h-head"
                style={{ fontFamily: "helvetica_neueregular" }}
              >
                digital brand
                <span style={{ fontFamily: "helvetica_neuebold" }}>.</span>
              </h1>
            </div>
            <div className="bg-static">
              <img
                  className="img-responsive"
                  src={macbook}
                  style={{ position: "absolute", top: `${this.state.scrollMac}%`, left: "10%", transition: "1s" }}
                />
              
              <img
                  className="img-responsive child"
                  src={iphone}
                  
                  style={{ position: "absolute", top: `${this.state.scrollTop}%`, right: "10%", transition: "1s" }}
                  />
            </div>
            <div className="tx-bg">
              <img className="mobile-img img-responsive" src={topBg1} />
            </div>
          </div>
          
        </div>
        {/*  <!-- Page Content --> */}
        <div className="container-fluid">
          {/* <!-- Page Features --> */}
          <section
            className="top-sec-N "
            id="section-two"
            style={{ padding: "0px" }}
          >
            <h5 className="s-head">The Process</h5>
            <h1 className="h-head">
              From
              <span style={{ fontFamily: "helvetica_neueregular" }}>
                {" "}
                roots{" "}
              </span>
              to{" "}
              <span style={{ fontFamily: "helvetica_neueregular" }}>
                success
                <span style={{ fontFamily: "helvetica_neuebold" }}>.</span>
              </span>
            </h1>
            <div className="MD-gap">
              <div className="row botm-strock">
                <div className="col-lg-4 col-md-6 mb-4 color-stock cool-link">
                  <div className="column-new column-1">
                    <div className="card new card-1">
                      <div className="Strock-1">
                        <div className="">
                          <img
                            className="card-img-top"
                            src={m1}
                            alt="Card image"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title new">Crafting the Brand</h4>
                          <p className="card-text">
                            We start by establishing who you are, what you
                            represent, where you want to go, and how we’ll get
                            there
                          </p>
                        </div>
                      </div>
                      <p className="nxt-tbss">
                        <a className="R-MM" href="#">
                          Learn more
                        </a>
                        <img className="D-sc" src={moreArrow} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 color-stock cool-link">
                  <div className="column-new column-2">
                    <div className="card new card-2">
                      <div className="Strock-2">
                        <div className="">
                          <img
                            className="card-img-top m-uu1"
                            src={m2}
                            alt="Card image"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title new">
                            The Perfect Solution
                          </h4>
                          <p className="card-text">
                            With a well-crafted brand as your beaker, we create
                            & blend every of your digital experience
                          </p>
                        </div>
                      </div>
                      <p
                        className="nxt-tbss"
                        style={{ position: "relative", top: "6%" }}
                      >
                        <a className="R-MM" href="#">
                          Learn more
                        </a>
                        <img className="D-sc" src={moreArrow} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 color-stock cool-link">
                  <div className="column-new column-3">
                    <div className="card new card-3">
                      <div className="Strock-3">
                        <div className="">
                          <img
                            className="card-img-top m-uu2"
                            src={m3}
                            alt="Card image"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title new">Lift Of</h4>
                          <p className="card-text">
                            It’s time to take your incredible content, socials,
                            and site and share it with the world - and we
                            deliver results.
                          </p>
                        </div>
                      </div>
                      <p className="nxt-tbss">
                        <a className="R-MM" href="#">
                          Learn more
                        </a>
                        <img className="D-sc" src={moreArrow} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="top-sec-N" id="section-three">
            <div className="row">
              <div className="col-md-12 p-0">
                <div className="parallax"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  className="top-pllx"
                >
                  <path
                    fill="#fff"
                    fillOpacity="1"
                    d="M0,256L48,240C96,224,192,192,288,154.7C384,117,480,75,576,74.7C672,75,768,117,864,154.7C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  className="bottom-pllx"
                >
                  <path
                    fill="#bbdfe9"
                    fillOpacity="1"
                    d="M0,256L60,213.3C120,171,240,85,360,58.7C480,32,600,64,720,106.7C840,149,960,203,1080,213.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                  ></path>
                </svg>
                <div
                  className="row"
                  style={{
                    /* background:
                      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(200,229,237,1) 52%, rgba(187,223,233,1) 94%)", */
                    background: "rgb(187, 223, 233)",
                    marginTop: "-220px",
                    padding: "30px",
                  }}
                >
                  <div className="col-lg-4 col-md-4 mb-12"></div>
                  <div className="img-new-sec col-lg-8 col-md-8 mb-12">
                    <h5
                      className="s-head service-font"
                      style={{ color: "#007da5" }}
                    >
                      About Us
                    </h5>
                    <h1 className="h-head">
                      <span style={{ fontFamily: "helvetica_neueregular" }}>
                        Communication
                      </span>
                      <br />
                      you’ll appreciate,
                      <br />
                      <span style={{ fontFamily: "helvetica_neueregular" }}>
                        results{" "}
                      </span>
                      you’ll{" "}
                      <span style={{ fontFamily: "helvetica_neueregular" }}>
                        love
                        <span style={{ fontFamily: "helvetica_neuebold" }}>
                          .
                        </span>
                      </span>
                    </h1>
                    <p className="card-text-nn">
                      The founder of Bright Development, Greg Jacoby, met client
                      after client who had marketing horror stories. He noticed
                      that the common thread between each of these reports was
                      the lack of communication. The foundation of our success,
                      and the first step of our every strategy, is creating a
                      seamless understanding between you, us, and the goal. We
                      look forward to connecting with you.
                    </p>
                    <div className="X-l1">
                      <div className="plx-s">
                        <img className="px-s1" src={arrow} />
                        <img className="px-s2" src={arrowWhite} />
                      </div>
                      Hear from our founder
                    </div>
                    {/* <div className="X-l1">
                      <div className="plx-s">
                        <img className="px-s1" src={arrow} />
                        <img className="px-s2" src={arrowWhite} />
                      </div>
                      Hear from our founder
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="top-sec-N" id="section-four">
            <div className="sect-gap">
              <h5 className="s-head service-font">Services</h5>
              <h1 className="h-head" style={{ marginBottom: "60px" }}>
                <span style={{ fontFamily: "helvetica_neueregular" }}>
                  Best solutions{" "}
                </span>
                for you
                <span style={{ fontFamily: "helvetica_neuebold" }}>.</span>
              </h1>
              <div className="MD-gap-2">
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-12 p-0">
                    <div className="l-cl">
                      <div className="t-1">
                        <img className="s-s1" src={arrow} />
                        <img className="h-s1" src={arrowWhite} />
                      </div>
                      <span className="F-IMG-1">Digital Marketing</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-12 p-0">
                    <div className="l-cl">
                      <div className="t-1">
                        <img className="s-s1" src={arrow} />
                        <img className="h-s1" src={arrowWhite} />
                      </div>
                      <span className="F-IMG-1">Branding</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-12 p-0">
                    <div className="l-cl">
                      <div className="t-1">
                        <img className="s-s1" src={arrow} />
                        <img className="h-s1" src={arrowWhite} />
                      </div>
                      <span className="F-IMG-1">eCommerce</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-12 p-0">
                    <div className="l-cl">
                      <div className="t-1">
                        <img className="s-s1" src={arrow} />
                        <img className="h-s1" src={arrowWhite} />
                      </div>
                      <span className="F-IMG-1">Digital Experience</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="S-testi" style={{ left: "86%" }}>
                <span className="see-all">See all services</span>
                <img src={TestimonialArrow} />
              </p>
            </div>

            <div className="row">
              <div className="col-md-12 tqb-sec-1 C-section p-0">
                <div className="MD-gap blue-bg">
                  <div className="row num-count">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 col-md-2 mb-12-tst  c-tst">
                      <div className="item-animate">
                        <h2 className="code">0</h2>
                        <h2 className="code-1">Projects done</h2>
                      </div>
                    </div>
                    <div className="col-lg-auto col-md-auto mb-12-tst c-tst" style={{marginLeft: "10px"}}>
                      <div className="item-animate">
                        <h2 className="code_2">0</h2>
                        <h2 className="code-1">Happy Customers</h2>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 mb-12-tst  c-tst">
                      <div className="item-animate">
                        <h2 className="code_3">0</h2>
                        <h2 className="code-1">Awards</h2>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 mb-12-tst  c-tst">
                      <div className="item-animate">
                        <h2 className="code_4">0</h2>
                        <h2 className="code-1">Employees Worldwide</h2>
                      </div>
                    </div>
                    <div className="col-lg-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="top-sec-N" id="section-five">
            <h5 className="s-head service-font">Work</h5>
            <h1 className="h-head">
              Our latest
              <span style={{ fontFamily: "helvetica_neueregular" }}>
                {" "}
                work<span style={{ fontFamily: "helvetica_neuebold" }}>
                  .
                </span>{" "}
              </span>
            </h1>
            <div className="MD-gap-1">
              <div className="row  accordion" id="accordionExample">
                <div className="col-md-4"></div>
                <div
                  //onclick="myFunction()"
                  className="accr-1 col-md-4"
                  id="headingOne"
                >
                  <p data-toggle="collapse" data-target="#collapseOne">
                    <a>
                      Category
                      <img className="plx" src={plus} />
                    </a>
                  </p>
                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p className="acc-text">Lorem Ipsum</p>
                      <p className="acc-text">Lorem Ipsum</p>
                      <p className="acc-text">Lorem Ipsum</p>
                      <p className="acc-text">Lorem Ipsum</p>
                      <p className="acc-text">Lorem Ipsum</p>
                    </div>
                  </div>
                </div>
                <div
                  //onclick="myFunctionone()"
                  className="accr-1 col-md-4 "
                  id="headingtwo"
                >
                  <p data-toggle="collapse" data-target="#collapseTwo">
                    <a>
                      Sector
                      <img className="plx" src={plus} />
                    </a>
                  </p>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingtwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p className="acc-text">Lorem Ipsum</p>
                      <p className="acc-text">Lorem Ipsum</p>
                      <p className="acc-text">Lorem Ipsum</p>
                      <p className="acc-text">Lorem Ipsum</p>
                      <p className="acc-text">Lorem Ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 mb-12 p-0">
                  <div className="s-cl  one">
                    <div className="t-1">
                      <img className="s-s1" src={arrow} />
                      <img className="h-s1" src={arrowWhite} />
                    </div>
                    <span className="F-IMG-1">Dahl & Di Luca</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mb-12  p-0">
                  <div className="s-cl  two">
                    <div className="t-1">
                      <img className="s-s1" src={arrow} />
                      <img className="h-s1" src={arrowWhite} />
                    </div>
                    <span className="F-IMG-1">EasyWebinar</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mb-12  p-0">
                  <div className="s-cl three">
                    <div className="t-1">
                      <img className="s-s1" src={arrow} />
                      <img className="h-s1" src={arrowWhite} />
                    </div>
                    <span className="F-IMG-1">Windwalker Footwear</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 mb-12  p-0">
                  <div className="s-cl four">
                    <div className="t-1">
                      <img className="s-s1" src={arrow} />
                      <img className="h-s1" src={arrowWhite} />
                    </div>
                    <span className="F-IMG-1">Dahl & Di Luca</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mb-12  p-0">
                  <div className="s-cl five">
                    <div className="t-1">
                      <img className="s-s1" src={arrow} />
                      <img className="h-s1" src={arrowWhite} />
                    </div>
                    <span className="F-IMG-1">Stephanie Dreyer</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mb-12  p-0">
                  <div className="s-cl six">
                    <div className="t-1">
                      <img className="s-s1" src={arrow} />
                      <img className="h-s1" src={arrowWhite} />
                    </div>
                    <span className="F-IMG-1">Dahl & Di Luca</span>
                  </div>
                </div>
              </div>
              <p className="S-testi" style={{ left: "84%" }}>
                <span className="see-all">See all case studies</span>
                <img src={TestimonialArrow} />
              </p>
            </div>
          </section>
          <section
            className="top-sec-N"
            id="section-six"
            style={{ marginTop: "75px" }}
          >
            <h5 className="s-head service-font">Resources</h5>
            <h1 className="h-head">
              Our latest{" "}
              <span style={{ fontFamily: "helvetica_neueregular" }}>
                articles
                <span style={{ fontFamily: "helvetica_neuebold" }}>.</span>
              </span>
            </h1>
            <div className="col-lg-5 col-md-5 mb-12 spcc">
              <p className="card-text-1" style={{ color: "#3f3a60" }}>
                Great digital experience is a critical component of business
                success. Businesses who want to survive and succeed in today’s
                continuously evolving and constantly changing environment will
                have to make sure they are offering the best digital experiences
                to their customers.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 mb-12 p-0">
                <div className="l-dl one">
                  <div className="t-1">
                    <img className="s-s1" src={arrow} />
                    <img className="h-s1" src={arrowWhite} />
                  </div>
                  <span className="F-IMG-2">2020.03.26</span>
                  <span className="F-IMG-1 articles">
                    Actionable Guide to Improve Your Content Marketing Game
                  </span>
                  <span className="F-IMG-3">
                    <button
                      style={{ marginRight: "10px" }}
                      className="btn success"
                    >
                      Marketing
                    </button>
                    <button className="btn success">SEO</button>
                  </span>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 mb-12 p-0">
                <div className="l-dl two">
                  <div className="t-1">
                    <img className="s-s1" src={arrow} />
                    <img className="h-s1" src={arrowWhite} />
                  </div>
                  <span className="F-IMG-2">2020.02.26</span>
                  <span className="F-IMG-1 articles">
                    How to Start a Social Media Marketing Agency
                  </span>
                  <span className="F-IMG-3">
                    <button
                      style={{ marginRight: "10px" }}
                      className="btn success"
                    >
                      Marketing
                    </button>
                    <button className="btn success">Seo</button>
                  </span>
                </div>
              </div>
              <div className="col-lg-12 col-md-12` mb-12 p-0">
                <div className="l-dl three">
                  <div className="t-1">
                    <img className="s-s1" src={arrow} />
                    <img className="h-s1" src={arrowWhite} />
                  </div>
                  <span className="F-IMG-2">2020.01.26</span>
                  <span className="F-IMG-1 articles">
                    Tips for Communicating with Clients in 2020
                  </span>
                  <span className="F-IMG-3">
                    <button
                      style={{ marginRight: "10px" }}
                      className="btn success"
                    >
                      Marketing
                    </button>
                    <button className="btn success">Seo</button>
                  </span>
                </div>
              </div>
            </div>
            <p className="S-testi">
              <span className="see-all">See all case resources</span>
              <img src={TestimonialArrow} />
            </p>
          </section>
          <section className="top-sec-N" id="section-seven">
            <Testimonial />
          </section>
        </div>
      
        {/*  <!-- Footer --> */}
          <Footer />
        
      </div>
    )
  }
}
export default Home

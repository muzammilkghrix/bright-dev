import React, { useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  quotes,
  leftArrow,
  rightArrow,
  quoteFilled,
} from "../assets/images/images"

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <img
      className={className}
      style={{
        display: "block",
        left: "0.5%",
        height: "125px",
        zIndex: "5",
        background: "transparent",
        width: "67px",
      }}
      onClick={onClick}
      src={leftArrow}
    />
  )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <img
      className={className}
      style={{
        display: "block",
        background: "transparent",
        right: " 0.5%",
        width: "67px",
        height: "125px",
      }}
      onClick={onClick}
      src={rightArrow}
    />
  )
}
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    }
    return (
      <Slider {...settings}>
        <div>
          <div className="testimonial ">
            <div className="testimonial-content new testimonial-1">
              <div className="testimonial-icon">
                <img className="Q-class" src={quotes} />
              </div>
              <p className="description">
                Their uncompromising quality and commitment to seamless
                communication shone through as they brought results to the table
                year after year.
              </p>
              <div className="b-tn">
                <h3 className="title">Lisa Dahl, Executive</h3>
                <span className="post">
                  Chef and Owner of Dahl Restaurant Group
                </span>
                <span className="web-text">
                  <a className="b1-u" style={{ color: "#fff" }} href="">
                    dahlrestaurant.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="testimonial ">
            <div className="testimonial-content new testimonial-2">
              <div className="testimonial-icon">
                <img className="Q-class" src={quoteFilled} />
              </div>
              <p className="description-1">
                Greg and his team have been great to work with. They were able
                to do develop a simple solution to a complex problem with their
                willingness to listen and understand our needs as opposed to
                making assumptions and jumping to conclusions.
              </p>
              <div className="b-tn">
                <h3 className="title" style={{ color: "#5b6670" }}>
                  Noah Krimm, CEO of
                </h3>
                <span className="post" style={{ color: "#5b6670" }}>
                  Hindon Industries
                </span>
                <span className="web-text" style={{ color: "#5b6670" }}>
                  <a className="b1-t" style={{ color: "#5b6670" }} href="">
                    hindon.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="testimonial ">
            <div className="testimonial-content new testimonial-3">
              <div className="testimonial-icon">
                <img className="Q-class" src={quotes} />
              </div>
              <p className="description">
                Very responsive, excellent service. Bright Development completed
                the project successfully by improving 3 pages on our website.
                Already seeing an increase in traffic! Greg and Peter understand
                best practices when it comes to Wordpress, Hubspot, and creative
                a positive user experience.
              </p>
              <div className="b-tn">
                <h3 className="title">Jake Pinkus, CEO of</h3>
                <span className="post">
                  Pinkus Partners
                  <br />
                  dahlrestauant.com
                </span>
                <span className="web-text">
                  <a className="b1-u" style={{ color: "#fff" }} href="">
                    pinkus.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="testimonial ">
            <div className="testimonial-content new testimonial-4">
              <div className="testimonial-icon">
                <img className="Q-class" src={quoteFilled} />
              </div>
              <p className="description-1">
                Bright was a pleasure to work with. Very professional,
                communicative and super quick with the job.
              </p>
              <div className="b-tn">
                <h3 className="title" style={{ color: "#5b6670" }}>
                  Lisa Dahi,Executive
                </h3>
                <span className="post" style={{ color: "#5b6670" }}>
                  Chef and Owner
                  <br />
                  of Dahl Restaurant
                  <br />
                  Group
                  <br />
                  <a className="b1-t" style={{ color: "#5b6670" }} href="">
                    dahlrestauant.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="testimonial ">
            <div className="testimonial-content new testimonial-5">
              <div className="testimonial-icon">
                <img className="Q-class" src={quotes} />
              </div>
              <p className="description">
                Bright Development was a dream to work with! They were hired to
                finish a website that they did not start. They truly are the
                trifecta: knows their stuff, able to communicate clearly and
                punctual with deadlines. I will definitely work with Bright
                again.
              </p>
              <div className="b-tn">
                <h3 className="title">Lisa Dahi,Executive</h3>
                <span className="post">
                  Chef and Owner
                  <br />
                  of Dahl Restaurant
                  <br />
                  Group
                  <br />
                  <a className="b1-u" style={{ color: "#fff" }} href="">
                    dahlrestauant.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="testimonial ">
            <div className="testimonial-content new testimonial-6">
              <div className="testimonial-icon">
                <img className="Q-class" src={quoteFilled} />
              </div>
              <p className="description-1">
                Bright was a pleasure to work with. Very professional,
                communicative and super quick with the job.
              </p>
              <div className="b-tn">
                <h3 className="title" style={{ color: "#5b6670" }}>
                  Lisa Dahi,Executive
                </h3>
                <span className="post" style={{ color: "#5b6670" }}>
                  Chef and Owner
                  <br />
                  of Dahl Restaurant
                  <br />
                  Group
                  <br />
                  <a className="b1-t" style={{ color: "#5b6670" }} href="">
                    dahlrestauant.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    )
  }
}

export default SimpleSlider

import React from "react"
import Scrollspy from "react-scrollspy"
import { Link } from "gatsby"
import { navStrock } from "../assets/images/images"

export const Scroller = () => {
  return (
    <Scrollspy
      items={[
        "section-one",
        "section-two",
        "section-three",
        "section-four",
        "section-five",
        "section-six",
        "section-seven",
        "section-eight",
      ]}
      currentClassName="navactive"
      className="sidenav"
      id="myDIV"
      componentTag={"div"}
    >
      <Link className="btn-1" to="/#section-one">
        <span className="txt-nav">Hello!</span>
        <span className="num-ber">01</span>
        <img className="H-ide" src={navStrock} />
      </Link>
      <Link className="btn-1" to="/#section-two">
        <span className="txt-nav">Hello!</span>
        <span className="num-ber">02</span>
        <img className="H-ide" src={navStrock} />
      </Link>
      <Link className="btn-1" to="/#section-three">
        <span className="txt-nav">Hello!</span>
        <span className="num-ber">03</span>
        <img className="H-ide" src={navStrock} />
      </Link>
      <Link className="btn-1" to="/#section-four">
        <span className="txt-nav">Hello!</span>
        <span className="num-ber">04</span>
        <img className="H-ide" src={navStrock} />
      </Link>
      <Link className="btn-1" to="/#section-five">
        <span className="txt-nav">Hello!</span>
        <span className="num-ber">05</span>
        <img className="H-ide" src={navStrock} />
      </Link>
      <Link className="btn-1" to="/#section-six">
        <span className="txt-nav">Hello!</span>
        <span className="num-ber">06</span>
        <img className="H-ide" src={navStrock} />
      </Link>
      <Link className="btn-1" to="/#section-seven">
        <span className="txt-nav">Hello!</span>
        <span className="num-ber">07</span>
        <img className="H-ide" src={navStrock} />
      </Link>
      <Link className="btn-1" to="/#section-eight">
        <span className="txt-nav">Hello!</span>
        <span className="num-ber">08</span>
        <img className="H-ide" src={navStrock} />
      </Link>
    </Scrollspy>
  )
}

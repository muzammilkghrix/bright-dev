import React from "react"
import logo from "../assets/img/logo.png"
import { Link } from "gatsby"

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark-1 navbar-dark">
      <img className="l-img" src={logo} />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="f12 collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <a className="nav-link nav-link-1" href="#">
              Work
            </a> */}
            <Link to={"/blog"} className="nav-link nav-link-1">
              Work
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-1" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-1" href="#">
              Resources
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-1" href="#">
              People
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-1" href="#">
              Join
            </a>
          </li>
        </ul>
        <div className="ipad">
          <div className="header-module">
            <button className="custm-butt">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

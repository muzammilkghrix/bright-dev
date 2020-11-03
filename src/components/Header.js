import React from "react"
import {  logo } from "../assets/images/images"
import { Link } from "gatsby"

export const Header = ({location}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
              <img className="logo-img" src={logo} alt="logo" />
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar1"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="f12 collapse navbar-collapse"
                id="collapsibleNavbar1"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link nav-link-1" to="/" activeClassName="active">
                      Welcome
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav-link-1" to="/work" activeClassName="active" >
                      Work
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-1" href="#">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav-link-1" to="/resources" activeClassName="active">
                      Resources
                    </Link>
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
                <div className="ipad mobi-v">
                  <div className="header-module">
                    <button className="custm-butt">Contact Us</button>
                  </div>
                </div>
              </div>
              <div className="ipad web-v">
                <div className="header-module">
                  <button className="custm-butt">Contact Us</button>
                </div>
              </div>
            </div>
          </nav>
  )
}

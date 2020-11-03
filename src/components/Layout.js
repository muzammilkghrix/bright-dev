import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Helmet } from "react-helmet"
import { Testimonial } from "./Testimonial"
import '../assets/css/style-home2.css'
import '../assets/fonts/stylesheet.css'

export const Layout = ({ children }) => {
  return (
    <>
      <div className="resource-main" id="">
        <div className="resource-inner" id="">
          <Header />
            {children}
          <Testimonial />
          <Footer />
        </div>
      </div>
    </>
  )
}

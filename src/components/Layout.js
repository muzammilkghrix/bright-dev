import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { TempBody } from "./TempBody"
import { Helmet } from "react-helmet"

export const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css"
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

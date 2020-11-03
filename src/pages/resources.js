import React from "react"
import { Layout } from "../components/Layout"
import { withPrefix } from "gatsby-link"
import {Link} from 'gatsby'
import "../assets/css/resources.css"
import {
  arrow,
  arrowWhite,

} from "../assets/images/images"

export default ({ location }) => {

  return (
    <Layout>
      <div className="container-fluid custom-article-page">
  	  
      <section className="top-sec-N artic-sec1" id="section-six" style={{marginTop: "75px"}}>
        <div className="row" style={{marginLeft: "-10px"}}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h5 className="s-head service-font">Resources</h5>
            <h1 className="h-head">Our latest<span style={{fontFamily: "helvetica_neueregular"}}> articles</span>.</h1>
          </div>
        </div>
        <div className="row" style={{marginLeft: "-10px"}}>
        <div className="col-lg-5 col-md-5 mb-12 spcc">
          <p className="card-text-1" style={{color:"#3f3a60"}}>
              Great digital experience is a critical component of business success.
              Businesses who want to survive and succeed in today’s continuously
              evolving and constantly changing environment will have to make sure
              they are offering the best digital experiences to their customers.
          </p>
        </div>            
        </div>
                    
          <div className="row">
               <div className="col-lg-12 col-md-12 mb-12 p-0">
                  <div className="l-dl one">
                     <div className="t-1">
                        <img className="s-s1" src={arrow} />
                        <img className="h-s1" src={arrowWhite} />
                      </div>
                      <span className="F-IMG-2">2020.03.26</span><Link to="/resource-article"><span className="F-IMG-1 resources">Actionable Guide to Improve Your Content Marketing Game</span></Link><span className="F-IMG-3">
                      <button style={{marginRight: "10px"}} className="btn success">Marketing</button>
                      <button className="btn success">Seo</button></span>
                  </div>
               </div>
               <div className="col-lg-12 col-md-12 mb-12 p-0">
                  <div className="l-dl two">
                     <div className="t-1"><img className="s-s1" src={arrow} /><img className="h-s1" src={arrowWhite} /></div>
                     <span className="F-IMG-2">2020.02.26</span><Link to="/resource-article"><span className="F-IMG-1 resources">How to Start a Social Media Marketing Agency</span></Link><span className="F-IMG-3"><button  style={{marginRight: "10px"}} className="btn success">Marketing</button><button className="btn success">Seo</button></span>
                  </div>
               </div>
               <div className="col-lg-12 col-md-12 mb-12 p-0">
                  <div className="l-dl three">
                     <div className="t-1"><img className="s-s1" src={arrow} /><img className="h-s1" src={arrowWhite} /></div>
                     <span className="F-IMG-2">2020.01.26</span><Link to="/resource-article"><span className="F-IMG-1 resources">Tips for Communicating with Clients in 2020</span></Link><span className="F-IMG-3"><button  style={{marginRight: "10px"}} className="btn success">Marketing</button><button className="btn success">Seo</button></span>
                  </div>
               </div>
          </div>            
      </section>
      </div>
    </Layout>
  )
}


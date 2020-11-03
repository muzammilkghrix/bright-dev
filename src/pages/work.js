import React from 'react'
import { Layout } from "../components/Layout"
import {
   arrow,
   arrowWhite,
   TestimonialArrow,
   plus,
 } from "../assets/images/images"
 import '../assets/css/work.css'
import { Link } from 'gatsby'

export default () => {
    return (
       <Layout>
        <div class="container-fluid custom-article-page custom-work-page">
  	  
        <section className="top-sec-N work-sec1" id="section-five">
        <h1 class="h-head">Work</h1>
			<div class="col-lg-5 col-md-5 mb-12 spcc">
				<p class="card-text-1" style={{color:"#3f3a60"}}>Great digital experience is a critical component of business success.
               Businesses who want to survive and succeed in today’s continuously
               evolving and constantly changing environment will have to make sure
               they are offering the best digital experiences to their customers.</p>
			 </div> 
			 <div class="worktop-button"><button class="work-custm-butt custm-butt">Contact Us</button></div>
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
                    <Link to="/case-study"><span className="F-IMG-1">Dahl & Di Luca</span></Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mb-12  p-0">
                  <div className="s-cl  two">
                    <div className="t-1">
                      <img className="s-s1" src={arrow} />
                      <img className="h-s1" src={arrowWhite} />
                    </div>
                    <Link to="/case-study"><span className="F-IMG-1">EasyWebinar</span></Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mb-12  p-0">
                  <div className="s-cl three">
                    <div className="t-1">
                      <img className="s-s1" src={arrow} />
                      <img className="h-s1" src={arrowWhite} />
                    </div>
                    <Link to="/case-study"><span className="F-IMG-1">Windwalker Footwear</span></Link>
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
                    <Link to="/case-study"><span className="F-IMG-1">Dahl & Di Luca</span></Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mb-12  p-0">
                  <div className="s-cl five">
                    <div className="t-1">
                      <img className="s-s1" src={arrow} />
                      <img className="h-s1" src={arrowWhite} />
                    </div>
                    <Link to="/case-study"><span className="F-IMG-1">Stephanie Dreyer</span></Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mb-12  p-0">
                  <div className="s-cl six">
                    <div className="t-1">
                      <img className="s-s1" src={arrow} />
                      <img className="h-s1" src={arrowWhite} />
                    </div>
                    <Link to="/case-study"><span className="F-IMG-1">Dahl & Di Luca</span></Link>
                  </div>
                </div>
              </div>
              {/* <p className="S-testi" style={{ left: "84%" }}>
                <span className="see-all">See all case studies</span>
                <img src={TestimonialArrow} />
              </p> */}
            </div>
          </section>
         </div>
         </Layout>
    )
}

import React from 'react'
import { Layout } from "../components/Layout"
import {
  caseStudyTopLeft,
  caseStudyImg1,
  caseStudyImg2,
  caseStudyImg3,
  projectArrowLeft,
  projectArrowRight
 } from "../assets/images/images"
import '../assets/css/case-study.css'
import { Link } from 'gatsby'

export default () => {
    return (
       <Layout>
           <div className="container-fluid custom-work-inr-main"> 	  
         <section className="work-inr-sec1">		 
		     <div className="row wi-sec1-row1">
				<div className="col-lg-12 col-md-12 col-sm-12">
					<Link to="/work"><p><span><img src={caseStudyTopLeft} /></span>See all Projects</p></Link>
				</div>
			</div>			
			 <div className="row wi-sec1-row2">
				<div className="col-lg-3 col-md-3 col-sm-12">
					<h3>The College Audition</h3>
					<ul>
						<li><span>Sector: </span> Lifestyle</li>
						<li><span>Client: </span> TIm Evanicki</li>
						<li><span>Location </span> Planet Earth</li>
					</ul>					
				</div>  
				<div className="col-lg-3 col-md-3 col-sm-12">
					<h3>Scope</h3>
					<ul>
						<li>SEO</li>
						<li>Brand audit</li>
						<li>Brand contents</li>
						<li>Logo</li>
						<li>Visual identity</li>
						<li>Website</li>
						<li>OOH advertising</li>
					</ul>						
				</div>   
				<div className="col-lg-6 col-md-6 col-sm-12">
				<h1>Making The College <br /> Audition the first <br /> search result on <br />Google</h1>
					<p>When you search ‘college audition coach’ on Google, you’ll see
					Tim Evanicki’s website, The College Audition, right away. Not only
					is it on the first page, it’s the first result on the first page. But that
					wasn’t always the case.</p>
					<p>The College Audition is a small business started by renowned Juilliard-
					educated voice teacher and singer, TIm Evanicki. He offers
					nation-wide services as well as local services in Orlando, Florida.</p>
				</div>		
			 </div>                                  
         </section>
		 
		 <section className="work-inr-sec2">		 
		     <div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12">
					<p><span><img src={caseStudyImg1} /></span></p>
				</div>
			</div>			                                  
         </section>
		 
		 <section className="work-inr-sec3">		 
		     <div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12">
					<p><span><img src={caseStudyImg2} /></span></p>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12">
					<p><span><img src={caseStudyImg3} /></span></p>
				</div>
			</div>			                                  
         </section>
		 
		 <section className="work-inr-sec4">		 
		     <div className="row work-inr-r1">
				<div className="col-lg-12 col-md-12 col-sm-12">
					<p>	Just a few years ago The College Audition was showing up on a negligible
						page on Google, while the top competitor (who’s been operating for 10+
						years) had the number one spot secured.</p>
					<p> While Tim coached his students, we worked backstage so-to-speak. We decided
						to re-make his website entirely based on extensive strategy and search
						engine research. We then used that research to make a social media content
						creation schedule with well-optimized posts and supporting media.</p>
				</div>
			</div>	

		     <div className="row work-inr-r2">
				<div className="col-lg-12 col-md-12 col-sm-12">
					<ul>
						<li><a><span><img src={projectArrowLeft} /></span>Project 1</a></li>
						<li><Link to="/work"><a>See all Projects</a></Link></li>
						<li><a>Project 3<span><img src={projectArrowRight} /></span></a></li>
					</ul>
				</div>				
			</div>				
         </section>
         </div>
       </Layout>
    )
}
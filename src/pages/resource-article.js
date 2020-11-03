import React, { useEffect,useRef, useState } from "react"
import { Layout } from "../components/Layout"
import '../assets/css/resource-article.css'
import {demoRightImg, quotes} from '../assets/images/images'


export default ({ location }) => {
    const inputRef = useRef();
    let [leftClass, setLeftClass] = useState('')
    let [rightClass, setRightClass] = useState('')

    function isInViewport(offset = 0) {
       

        const {top, bottom} = inputRef.current.getBoundingClientRect()
        console.log(inputRef.current.getBoundingClientRect())
        if(top <= 0 && top >= -bottom){
     
            setLeftClass('split')
            setRightClass('right-scroll')
        }else{
           
            setLeftClass('')
            setRightClass('')
        }
      }
    useEffect(() => {
        window.addEventListener("scroll", isInViewport);
        return () => {
            window.removeEventListener("scroll", isInViewport);
        };
    }, [])
  return (
    <Layout>
      <div className="container-fluid">
			
            <section className="resource-sec-1" id="">
                <div className="row resource-sec-1-row">
                    <div className="col col-md-12 col-lg-12 col-sm-12 resource-sec-1-col">
                        <div className="resource-sec-1-data">
                            <p className="date">2020.02.16</p>
                            <h1>Big headline lorem ipsum ut <br /> wisi enim consequat </h1>
                            <ul>
                            <li className="r-active"><a>Categories</a></li>
                            <li><a>Marketing</a></li>
                            <li><a>SEO</a></li>
                            </ul>
                        
                        </div>
                
                    </div>
                </div>
            </section>
            
            <section className="resource-sec-2" id="">
                <div className="row resource-sec-2-row">			
                 <div className="resource-sec-2-row-inner">	
                 
                    
                    <div className={`col col-md-4 col-lg-4 col-sm-12 resource-col-left ${leftClass}`}>
                        <h4>Share</h4>	
                            <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            </ul>
                        <h4>More Resources</h4>	
                            <p className="lead">Actionable Guide To <br /> Website Content: Branded <br /> Ecommerce</p>
                            <p className="lead">Bright Development  <br /> Improve Your Content <br /> Marketing Game: Updated  <br />For 2020 </p>						
                            <p className="lead">How To Start A Social Media  <br /> Marketing Agency</p>
                        <h4>Table of Contents</h4>
                            <ul className="tbcon">	
                            <li className="active-tbcon">1. Subheadline </li>
                            <li>2. Subheadline </li>
                            <li>3. Subheadline </li>
                            <li>4. Subheadline </li>
                            <li>5. Subheadline </li>
                            </ul>
                    </div>
                           									
                    <div className={`col col-md-8 col-lg-8 col-sm-12 resource-col-right ${rightClass}`} ref={inputRef}>						
                            <ul className="col-r1">
                                <li className="lead-previ">Author</li>
                                <li className="lead-active hash"># Minute Read</li>
                            </ul>
                            <p className="summ">Summary intro sentence. Lorem ipsum dolor sit <br /> amet, consectetuer adipiscing elit, sed diam  <br /> nonummy nibh euismod tincidunt ut laoreet  <br />dolore magna aliquam erat volutpat. </p>	
                            <p className="lead-small">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper  <br /> suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem <br /> vel eum iriure dolor in hendre rit in vulputate velit esse molestie conse <br /> quat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan <br /> et iuto odio dignissim qui blandit praesent luptatum zzril deleni </p>	
                            
                            <ul className="col-r2">
                                <li className="lead"><span> 1. </span> Something </li>
                                <li className="lead"><span> 2. </span> Something Else </li>
                                <li className="lead"><span> 3. </span> Something Cool </li>
                                <li className="lead"><span> 4. </span> Something Sucks </li>
                                <li className="lead"><span> 5. </span> Something Great </li>
                                <li className="lead"><span> 6. </span> Something High </li>
                                <li className="lead"><span> 7. </span> Something Fun </li>
                                <li className="lead"><span> 8. </span> Something Dumb </li>
                            </ul>
                            <h2>1. Sub Headline #1</h2>
                            <p className="lead-small">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam  <br /> nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam <br /> erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation  <br /> ullamcorper. </p>
                            
                            <p><img src={demoRightImg} width="100%" /></p>
                            
                            <h3>Sub Sub Headline #1</h3>	
                            <p className="lead"><span>Something:</span>  3,000,291</p>
                            <p className="lead"><span>Something Else:</span>   22,889</p>
                            <p className="lead gap-btm"><span>Something Smart:</span>  9,952,602</p>
                            <p className="lead-small">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br />nonummy nibh euismod tincidunt ut laoreet dolore magna aliqu lor sit  <br /> amet, consectetuer adipiscing elit, sed di</p>
                            
                            <h3>Sub Sub Headline #1</h3>	
                            <p className="lead-small">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br />nonummy nibh euismod tincidunt ut laoreet dolore magna aliqu lor sit  <br /> amet, consectetuer adipiscing elit, sed di</p>
                            
                            <p className="lead-small">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br />nonummy nibh euismod tincidunt ut laoreet dolore magna aliqu lor sit  <br /> amet, consectetuer adipiscing elit, sed di</p>	

                            		
                    </div>	  
                    </div>
                								
                </div>
            </section>
            </div>
    </Layout>
  )
}


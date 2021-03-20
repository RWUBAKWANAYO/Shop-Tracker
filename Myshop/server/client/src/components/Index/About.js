import React, { Component } from 'react'
import Info from './Info'
import Footer from './Footer'
import {Link} from 'react-router-dom'


export class About extends Component {
    render() {
        return (
            <div>
                <Info/>
                <div className="about-container">
                    
                    <div className="about-svg">
                    <div className="about-description">
                        <h6>About Web</h6>
                        <p>This is website build to assist ownersof the shop to manage and track business activities</p>
                        <p>By get real time information of every sold products,access every products  in stock</p>
                        <p>Notified to products running low in stock, agenda to keep owner schedule update, etc....</p>
                        <br/>
                        <h4> Start with </h4>
                        <p>* For boss : <span>Boss </span> as username and <span>test </span> as password</p>
                        <p>* For employee : <span>user </span>as username and <span>test </span> as password</p>
                    </div>
                    <h1>Contact Us</h1>
                    <div className="contact-media">
                    <Link to="https://twitter.com/rwubakwanayo"> <i class="fab fa-twitter"></i></Link>
                    <Link to="https://www.instagram.com/rwubakwanayo/"><i class="fab fa-instagram"></i></Link>
                    <Link to="https://www.linkedin.com/in/rwubakwanayo-olivier-434461206/"> <i class="fab fa-linkedin-in"></i></Link>
                    <Link to="https://github.com/team"><i class="fab fa-github"></i></Link>
                   
                    
                   
                    
                    </div>
                    <div className="about-triangle2">

                    </div>
                    <div className="about-triangle3">

                    </div>
                   
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" ><path d="M0.00,49.98 C-51.06,389.30 -53.33,417.92 508.17,30.09 L503.67,461.34 L-34.14,160.36 Z" style={{stroke: "none", "fill": "#222"}}></path></svg>
                    </div>
                    

                </div>
                <Footer/>
            </div>
            
        )
    }
}

export default About

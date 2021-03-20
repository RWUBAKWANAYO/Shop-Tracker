import React, { Component } from 'react'
import logo from '../img/other/logo.png'

export class Footer extends Component {
    render() {
        return (
            <div className="svg-wrapper2">

                 <div className="footer-distributed">
                    <div className="logo-container">
                        <img src={logo}/>
                        <h3 >Contact<span>Rwubakwanayo</span></h3>
                    </div>
                   <div className="footer-bottom">

                   <div  id="footer-info">
        
        <div className="footer-center"  >
            <div>
                <i className="fa fa-map-marker"></i>
                  <p><span>
                     KN153 st-Nyamirambo </span>
                     Nyarugenge-Kigali</p>
            </div>

            <div style={{margin: "1.5% 0"}}>
                <i className="fa fa-phone"></i>
                <p>+250780338830</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="https://webmail.au.syrahost.com/" target="_blank">rwubakwanayoolivier@gmail.com</a></p>
            </div>
        </div>
        
        <div className="footer-right">
            <p className="footer-personal-about">
                <span>How Does it works?</span>
                Let's have a quick discussion, Creating Outline Of Work and Delivering the strategy,Deliver the website and do testing.
                Complete all required modifications if there and track if customers are satisfied with our services
            </p>
            <div className="footer-icons">
                <a href="https://twitter.com/rwubakwanayo" target="blank"> <i className="fab fa-twitter"></i></a>
                <a href="https://web.facebook.com/sleck.warble" target="blank"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/rwubakwanayo/" target="blank"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/rwubakwanayo-olivier-434461206/" target="blank"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/team" target="blank"><i className="fab fa-github"></i></a>
                <a href="#"> <i className="fab fa-slack"></i></a>

               
                
                
                
                
               
               

                    </div>
                    </div>
        
                    </div>
                    <div id="personal-name-div"> <p className="footer-personal-name"><span >©</span> 2021 Rwubakwanayo Olivier</p></div>
                   </div>
                        </div> 
                


            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="svg-item2"><path d="M-0.27,2.47 C220.37,8.39 271.72,61.67 502.54,50.81 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#000"}}></path></svg>
            </div>
        )
    }
}

export default Footer

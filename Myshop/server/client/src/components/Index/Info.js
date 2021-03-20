import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import phone from '../img/other/phone.png'
import computer from '../img/other/computer.png'
import workshop from '../img/other/workshop.jpg'
import NavigateBar from './NavigateBar'

export class Info extends Component {
    render() {
        return (
            <div>
                 <div className="curved-wrapper">
                     
                <div class="curved-div">
               <NavigateBar/>
                <div className="hideImg"></div>
               <div className="advertise-container">

               <div className="advertise"  id="workshop">
               <p>My Shop</p>
                 <img src={workshop}/>
                </div>

               <div className="advertise"  id="phone">
                   <p>Shop on Phone</p>
                 <img src={phone}/>
                </div>
               <div className="advertise"  id="computer">
               <p>Shop on Computer</p>
                 <img src={computer}/>
                </div>
               
                

               </div>
                    
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" ><path d="M-4.22,54.77 C166.76,37.00 179.17,142.59 359.76,96.20 L510.44,149.50 L-5.36,154.44 Z" style={{stroke: "none", "fill": "#fff"}}></path></svg>
                </div>
                </div>
                <div id="chat"><Link to="/Contact" className="chatLink"><h3>Let talk <i class="fas fa-arrow-right"></i></h3></Link></div>
            
               
            </div>
        )
    }
}

export default Info

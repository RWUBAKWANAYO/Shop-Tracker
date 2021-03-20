import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Signin extends Component {
    render() {
        return (
            <div className="userContainer" >
            <div className="userWrapper">
            <i className="fas fa-user-tie"></i>
            <div className="userInfo">
                <p className="paragraph1">Hello</p>
                <p className="paragraph2">Sign in</p>
            </div>
            </div>

            
           <div className="user-wrapper">
           <div className="userOptions">
                                    <h2>Login</h2>
                                    <button>
                                        <Link className="optionLink" to="/Login"> <h3>As Boss</h3></Link></button>
                                    
                                    <button
                                    ><Link className="optionLink" to="/LoginGuest"> <h3>As Employee</h3></Link></button>
        
                                </div>
           
            
            </div>

        </div>
        )
    }
}

export default Signin

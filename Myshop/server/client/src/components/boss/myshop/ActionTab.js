import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Bell from '../notifications/Bell'

 class ActionTab extends Component {
     handleClick = ()=>{
        localStorage.setItem("icon",0)
     }
    render() {
        return (
           <div>
                <div className="admin-container">
                <NavigationBar/>
                <div className="adminWrapper">
            <ul>
            
             <li><Link className="navDisplay" to="/AdminWrapper"><i  i class="fas fa-home"style={{fontSize:"18px"}}></i></Link></li>
             <li><Link className="navDisplay" to="/Mystock">My Stock</Link></li>
             <li><Link className="navDisplay" to="/Addnew">New Product</Link></li>
             <li><Link className="navDisplay" to="/Notification"
             onClick={this.handleClick}><Bell/><i className="far fa-bell" style={{fontSize:"22px"}}></i></Link></li>
             <li><Link className="navDisplay" to="/Agenda">Agenda</Link></li>
             
            </ul>
            </div>
            </div>
          
           </div>
            
        )
    }
}

export default ActionTab

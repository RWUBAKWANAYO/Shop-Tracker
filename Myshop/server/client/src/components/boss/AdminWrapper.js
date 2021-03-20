import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Index/Footer'
import Products from '../products/Products'
import SoldProducts from '../products/SoldProducts'
import SlidingPage from '../slidingImg/Sliding'
import ActionTab from './myshop/ActionTab'


 class AdminWrapper extends Component {
     handleClick = ()=>{
        localStorage.setItem("Alert",false)
     }
    render() {
        return (
           <div >
            <ActionTab/>{ }
            <div className="infoWrapper2">
                    <p>Click on About to get more user experience. &nbsp; <Link className="docLink" to ="/About">Click now</Link> </p>
                    <Products/>
                    </div>
                    <SlidingPage/>
                    <SoldProducts/>
            <Footer/>
           </div>
            
        )
    }
}

export default AdminWrapper

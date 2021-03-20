import React, { Component } from 'react';
import SoldProducts from './products/SoldProducts'

import Products from './products/Products';
import SlidingPage from './slidingImg/Sliding';
import {Link} from 'react-router-dom';
import Footer from './Index/Footer';

import Logout from './validation/Logout'




 class Home extends Component {


  state = {
    shownav: '',  
    shownborder: '',
    openmenu:"none",
    closemenu:"none",
    showmenu:'flex',
    hidemenu:'none',
    
      
    
  };



  componentWillMount() {
    window.addEventListener('load', this.handleResize)
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('location', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
   
  }

  

  handleResize=()=>{
    if(window.innerWidth < 640){
     
      this.setState({openmenu:"flex",closemenu:"none",showmenu:"none"})
    }
    else if(window.innerWidth > 640){
      this.setState({openmenu:"none",closemenu:"none",showmenu:"flex"})
    
    }
    else{
      this.setState({openmenu:"none",closemenu:"flex",showmenu:"flex"})
    }
    
  }


      handleclicking=()=>{
       this.setState({ openmenu:"none",closemenu:"flex",showmenu:"flex"})
       

      }
   
    
       render() {    
        return (
        <div>
            <div className="nav-col"
            style={{position:"fixed",top:"0",left:"0",
            width:"100%",height:"20%",background:"rgb(25,185,92)",zIndex:"9"}}></div>
          <div className="nav-div"
          
          style={{
                      backgroundColor: `rgb(25, 185, 92)`,
                      borderBottom: `1px #fff solid`,
                      
                    }}
          >
                      <div className="logo"><h1><span>My </span> Shop</h1></div>
                    
          
                  
                      <ul className="nav-ul"
                      style={{display:`${this.state.showmenu}`}}>
                          <li><Link className="link-item" to="/HomePage">Home</Link></li>
                          <li><Link className="link-item" to="/About">About</Link></li>
                          <li><Link className="link-item" to="/Contact">Contact</Link></li>
                          <li>
                          <Logout/>
                          </li>
                      </ul>
                      <div className="media-container">
                    <div className="media-open"><i className="fas fa-align-justify"
                    style={{display:`${this.state.openmenu}`}}
                    onClick = {this.handleclicking}></i></div>
                    <div className="media-close"><i className="fas fa-times"
                    style={{display:`${this.state.closemenu}`}}
                    onClick = {()=>{this.setState({ openmenu:"flex",closemenu:"none"})
                                    this.setState({showmenu:"none"})}}></i></div>
                    </div>
  
                  </div >
                  <div style={{width:"100%"}}>
                  <div style={{width:"100%"}}>
                          <div className="infoWrapper">
                                <p >Click on About to get more user experience. &nbsp; <Link className="docLink" to ="/About">Click now</Link> </p>
                                 <Products/>
                                 </div>
                                 <SlidingPage/>
                                 <SoldProducts/>
                        </div>
                        <Footer/>
                  </div>
                  </div>
         );
       }




   
}

export default Home

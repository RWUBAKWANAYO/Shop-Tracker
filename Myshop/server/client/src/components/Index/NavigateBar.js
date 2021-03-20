import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Signin from './Signin'




 class NavigateBar extends Component {
 
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

        handleScroll = () => {
          if (window.scrollY > 10) {
              
            this.setState({ shownav: 'rgb(25, 185, 92)',shownborder:'1px #fff solid' });
          } else {
            this.setState({ shownav: 'transparent', shownborder:'none' });
            
          }
        };
     
      
         render() {    
           
          return (
            <div className="nav-div"
            
              style={{
                backgroundColor: `${this.state.shownav}`,
                borderBottom: `${this.state.shownborder}`,
                transition: '0.5s linear',
              }}
            >
                        <div className="logo"><h1><span>My </span> Shop</h1></div>
                      
            
                    
                        <ul className="nav-ul"
                        style={{display:`${this.state.showmenu}`}}
                        >
                            <li><Link className="link-item" to="/HomePage">Home</Link></li>
                            <li><Link className="link-item" to="/About">About</Link></li>
                            <li><Link className="link-item" to="/Contact">Contact</Link></li>
                            <li>
                               <Signin/>
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
                      
                    </div>
           );
         }
       }

export default  NavigateBar






import {Link} from 'react-router-dom'
import Footer from '../Index/Footer'
 import React, { Component } from 'react'
import NavigationBar from './myshop/NavigationBar'
import ActionTab from './myshop/ActionTab'
import Loader from '../LoadingBar'
 
 export class Mystock extends Component {

 state = {
        allpost: null,
        allnotification:null,
        hello : "hey"
         }

    componentDidMount(){
        fetch('/allpost')
         .then(res=>res.json())
         .then((result)=>{
           this.setState({allpost: result.posts})
        }
         )
         .catch(err=>console.log(err))
         fetch('/allnotification')
         .then(res=>res.json())
         .then((result)=>{
           
           this.setState({allnotification: result.notification})
        }
         )
         .catch(err=>console.log(err))
    }
    

render() {


   
  let testify;  
  let picture;
  let recentPost = this.state.allpost ?(
    
      
        
         
              
               

                <div>
        
        <div className="myshop-wrapper">
          <div className="myshop-sub-wrapper" >
            <h1>All Products Stock <span></span></h1>
            <div className="myshop-info">
            <th >Items Remains</th>
              <th >Products Name</th>
              <th >Image</th>
              <th >Price</th>
              
              <th >Add to Agenda</th>
            </div>
           



    {
    
    this.state.allpost.map((post)=>{

      if(post.quantity ==0){testify =<div id="testify1" key={post.id}><span ><i className="fas fa-exclamation-triangle"></i>&nbsp;&nbsp;</span>{post.quantity}&nbsp;Pieces</div> }
      else if(post.quantity <=10){testify = <div id="testify2" key={post.id}><span ><i className="fas fa-check-circle"></i>&nbsp;&nbsp;</span>{post.quantity}&nbsp; Pieces</div>}
       else{ testify = <div id="testify3" key={post.id}><span ><i className="fas fa-check-circle"></i>&nbsp;&nbsp;</span>{post.quantity}&nbsp;Pieces</div>}

       if(post.photo=="No Image" ||post.photo==undefined){
        {picture  = <i className="fas fa-file-image" style={{fontSize:"80px",width:"70px", height:"100px",color:"#000"}} ></i>
             }
       }
       else{
        {picture = <img src={post.photo} className="product-img" key={post.id}/>}
       }


       return (
         <div className="myshop-box"key={post.id}> 
            <div className="myshop-container" >
                <tr><th > {testify} </th></tr>
                <tr><th> {post.title}</th></tr>
                <tr>{picture}</tr>
                <tr><th >{post.amount}&nbsp; Rwf</th></tr>
                
                <tr><th ><Link to="Agenda" ><button className="agenda-link">+ Add now</button></Link></th></tr>
            </div>
        </div> 
       )})}
    </div>
        
        </div>
        <Footer/>
        </div>
              

      ):(

      <Loader/>
  )
  return (
    <div style={{position:"relative",width:"100%"}}>
      <div >
          <NavigationBar/>
          <ActionTab/>
      <div style={{marginTop:"200px",height:"50vh",width:"100%"}}>
          
          {recentPost}
      </div>
    
      </div>
     

      </div>

  )
}
}
export default Mystock







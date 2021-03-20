// import React, { Component } from 'react';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {useEffect, useState} from 'react';
import React from 'react'
import Footer from '../../Index/Footer'
import ActionTab from '../myshop/ActionTab'
import Loader from '../../LoadingBar';

 const Notification = ()=> {
    dayjs.extend(relativeTime)
    const [data, setData] = useState([])
    const [allNot, setAllNot] = useState(
      {height:"203vh"}
    )

    useEffect(()=>{
        fetch('/allnotification')
        .then((res)=>res.json())
        .then((result)=>{
          console.log(result)
          setData(result.notification)
        }
        ).catch(err=>console.log(err))
      
        
      
      },[])

      const handleClick = ()=>{
        setAllNot({height:"auto"})
      }
      
      console.log(data.length)

   if(data.length == 0 ){

    return <Loader/>
   }
   else{
    return (
      <div style={{width:"100%"}}>
     <div>
       <ActionTab/>
       <div className="notification-wrapper">
         <div className="not-sub-wrapper" style={allNot}>
           <h1>Notifications of all sold products</h1>
           <div className="notification-info">
             <h4>Products Name</h4>
             <h4>Number of Pieces</h4>
             <h4>Paid Amount</h4>
             <h4>Time </h4>
           </div>
       {
           data.map(item=>{
               
               return (
                 <div className="noti-box"> 
                 <div className="notification-container" >
                       
                       
                       <p>{item.title} </p>
                       <p> {item.quantity}&nbsp; Pieces</p>
                       <p>{item.amount}&nbsp; Rwf &nbsp; </p>
                       <p>&nbsp; {dayjs(item.createdAt).fromNow()} </p>
                       
                 
                 </div>
                 
                 </div>
                 
             
               )
               
             })
           }
       
       </div>
       <div className="all-noti"><button onClick={handleClick}>View All &nbsp; &nbsp;<i class="fas fa-chevron-down"></i></button></div>
       </div>
       
       </div>
       <Footer/>
       </div> 
   )
   }
}
export default Notification




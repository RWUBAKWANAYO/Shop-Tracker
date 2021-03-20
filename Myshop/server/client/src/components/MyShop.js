import React, {useState,useEffect } from 'react'
import {Link,useHistory} from 'react-router-dom'
import LoadingBar from './LoadingBar'

 const MyShop = ()=> {
    
    const history = useHistory()
  
    useEffect(() => {
      setTimeout(() => {
        history.push('/HomePage')
      }, 3000) 
    }, []);
  
    return (
      <div id="loading">
      <h1><span>My </span> Shop</h1>
      <div id="load-container">
          <div id="loading-animate"></div>
      </div>
  </div>
    )
  };

export default MyShop

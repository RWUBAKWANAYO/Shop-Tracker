import React, {useState, useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import myImage from '../../img/other/myImage.png'
import {UserContext} from '../../../App' 



const Login = ()=> {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const [ dispErr, setDispErr] = useState('')
    const [ password, setPassword] = useState('')
    const [ name, setName] = useState('')

const postData = ()=>{
    fetch("/signin", {
                method:"post",
                headers:{
                        "Content-Type": "application/json",
                        "Authorization":"Bearer" + localStorage.getItem("jwt")
                  },
                body:JSON.stringify({
                    password,
                    name
                    })
          })
          .then(res=>res.json())
          .then(data=>{
           
              if(data.error){
                console.log('invalid email or password')
                console.log(data.error)
                setDispErr(data.error)
             }
             else{
                
                localStorage.setItem("jwt", data.token);
                localStorage.setItem("admin", data.admin);
                localStorage.setItem("user", JSON.stringify(data.user))
                   dispatch({type: "USER", payload:data.user})
                
                history.push('/')
                
             }
            })
          .catch(err=>{console.log (err)})

    
      }

        return(
            
        <div className="login-main">
        <Link  to="./HomePage" className="login-link"><i class="fas fa-arrow-alt-circle-left"></i></Link>
        <div className="login-toast"><p>Back to home</p></div>
        <div className="login-wrapper" >

          

            <div className="loginBox" >
            <div className="owner-wrapper">
                <h1><span>My </span> Shop</h1>
                <img className="avatar" src={myImage}/>
            </div>
                <form >
                    <p>Username</p>
                    <input type="text" name="" placeholder="Enter your name"value={name}
                           onChange={(e)=>{setName(e.target.value)
                                           setDispErr('')}}/>

                    <p>Password</p>
                    <input type="password" name="" placeholder="Enter your Password"value={password}
                           onChange={(e)=>{setPassword(e.target.value)
                                           setDispErr('')}}/>
                    <div ><h6>{dispErr}</h6></div>
                </form>
                <input type="submit" name="" value="Submit"
                onClick ={()=>postData()}/>
                <Link className="loginLink" to="/LoginGuest">Switch Account</Link>
            </div>
            <div className="svg-wrapper"><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="svg-item"><path d="M0.00,49.98 C156.59,86.34 297.11,86.34 500.84,52.78 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "rgb(25, 185, 92)"}}></path></svg></div>
        </div>
        </div>

    )
}


export default Login;







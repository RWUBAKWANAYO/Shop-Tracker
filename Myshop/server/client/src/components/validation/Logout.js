import React from 'react'
import {useHistory} from 'react-router-dom'


export default function Logout() {
    const history = useHistory()
    const logout = ()=>{
        
        // localStorage.setItem("jwt",null)
        localStorage.removeItem("jwt")
        localStorage.removeItem("user")
        localStorage.removeItem("admin")
        history.push('./HomePage')
        
    }
    return (
        <div onClick={logout}>
            <h2 style={{cursor:"pointer",fontWeight:"700",fontSize:"16px"}}>Logout</h2>
        </div>
    )
}

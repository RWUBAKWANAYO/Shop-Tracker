import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import LoginOptions from '../validation/login/LoginOptions';
import {UserContext} from '../../App'



const NavBar = () => {
    const {state, dispatch} = useContext(UserContext)
    const renderList = ()=>{
        if(state){

        return[

            <li><Link className="navDisplay" to="/">Home</Link></li>,
            // <li><Link className="navDisplay" to="/Addnew">New PRODUCT</Link></li>,
            // <li><Link className="navDisplay" to="/UpdateProducts">My Shop</Link></li>,

        ]
    }
    else{
           return[
           
            

            // <li><Link className="navDisplay" to="/TestOut">IMAGE</Link></li>,
            // <li><Link className="n" to="/HomePage">home</Link></li>,
            // <li><Link className="navDisplay" to="/Mystock">My Stock</Link></li>,
            

            
           ]
    }
    }
    
    return (
        <div >
        <div className="navWrapper">
        <ul>
            {/* <li><Link className="navDisplay" to="/">Home</Link></li>
            <li><Link className="navDisplay" to="/Signup">Signup</Link></li>
            <li><Link className="navDisplay" to="/Notification">Notification</Link></li>
            <li><Link className="navDisplay" to="/Agenda">Agenda</Link></li> */}
            {renderList()}
            
            {/* <li><Link className="navDisplay" to={ state ? "/Signup" : "/Login"}>Signup</Link></li> */}
        </ul>
        </div>
        {/* <LoginOptions/> */}
        </div>
    )
}


export default NavBar;
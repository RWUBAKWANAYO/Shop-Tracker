
import React, { useEffect, createContext, useReducer} from 'react';
import './App.css';
import Login from './components/validation/login/Login'
import LoginGuest from './components/validation/login/LoginGuest'
import Notification from './components/boss/notifications/Notification'
import Mystock from './components/boss/Mystock'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import {reducer, initialState} from './components/reducer/UserReducer'
import Home from './components/Home';
import ViewProducts from './components/boss/ViewProducts'
import Addnew from './components/boss/myshop/Addnew'
import Agenda from './components/boss/agenda/Agenda'
import AdminWrapper from './components/boss/AdminWrapper'
import About from './components/Index/About'
import Contact from './components/Index/Contact'
import HomePage from './components/Index/HomePage'
import Loader from './components/LoadingBar'
import MyShop from './components/MyShop';





export const UserContext = createContext()
const Routing = ()=>{
  const history = useHistory()
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    const admin = localStorage.getItem("admin")
    if(user){
      if(admin=="true"){
        history.push('/AdminWrapper')
      }
      else{
        history.push('/')
      }
      
    }
    else{
      history.push('/MyShop')
      
    }
  }) 
  return(
    <Switch>
    

    <Route exact path="/"><Home/></Route>
     <Route exact path="/Login"><Login/></Route>
     <Route exact path="/LoginGuest"><LoginGuest/></Route>
     <Route exact path="/Notification" ><Notification/></Route>
     <Route exact path="/Mystock" ><Mystock/></Route>
     <Route exact path="/ViewProducts"><ViewProducts/></Route>
     <Route exact path="/Addnew"><Addnew/></Route>
     <Route exact path="/Agenda"><Agenda/></Route>
     <Route exact path="/AdminWrapper"><AdminWrapper/></Route>
     <Route exact path="/About"><About/></Route>
     <Route exact path="/Contact"><Contact/></Route>
     <Route exact path="/HomePage"><HomePage/></Route>
     <Route exact path="/Loader"><Loader/></Route>
     <Route exact path="/MyShop"><MyShop/></Route>
     
     
     </Switch>

  )
}


const App=()=> {
  const [state, dispatch] = useReducer(reducer, initialState)
 return (
    <UserContext.Provider value={{state, dispatch}}>
    
    
     <BrowserRouter>
     <Routing/>
     

     </BrowserRouter>

     </UserContext.Provider>
  );
}





export default App; 
 
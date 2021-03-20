
import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Footer from '../../Index/Footer'
import ActionTab from '../myshop/ActionTab';




class Agenda extends Component{
  state = {

    todos:[
    
    

  ]
};


componentDidMount(){
  fetch('/allagenda')
         .then(res=>res.json())
         .then((result)=>{
          this.setState({todos: result.agenda})
        }
         )
         .catch(err=>console.log(err))
        
}

markComplete = (id)=>{
  this.setState({todos:this.state.todos.map((todo)=>{
    if(todo.id === id){
      todo.completed = !todo.completed
      fetch("/updateagenda/:", {
        method:"put",
        headers:{
                "Content-Type": "application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
                
          },
        body:JSON.stringify({
          id:id,
          completed:todo.completed
            })
    })
    .then(res=>res.json())
    .then(data=>{
      
     
      if(data.error){
        
        console.log(data.error)
        
     }
     else{
      console.log(true)
      
     }
    })
    .catch(err=>{console.log (err)})
     
    }
    return todo
  })})
  
  
}

delTodo = (id)=>{
  fetch("/deleteagenda/:", {
    method:"delete",
    headers:{
            "Content-Type": "application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
            
      },
    body:JSON.stringify({
      id:id
        })
})
.then(res=>res.json())
.then(data=>{
  this.setState({todos: [...this.state.todos.filter(todo =>todo.id != id)]})

  if(data.error){
    
    console.log(data.error)
    
 }
 else{
    console.log(true)
 }
})
.catch(err=>{console.log (err)})
 

  
   
}

addTodo = (title)=>{
   
    fetch("/createagenda", {
      method:"post",
      headers:{
              "Content-Type": "application/json",
              "Authorization":"Bearer "+localStorage.getItem("jwt")
              
        },
      body:JSON.stringify({
        title:title
          })
})
.then(res=>res.json())
.then(data=>{
  this.setState({todos : [...this.state.todos, data.agenda]})
  
    if(data.error){
      
      console.log(data.error)
      
   }
   else{
      console.log(true)
   }
  })
  .catch(err=>{console.log (err)})
   

    
}

  render() {
    return (
      <div >
        <ActionTab/>
        <div className="delete-container">
        <div  className="delete-wrapper">
        
        <AddTodo addTodo = {this.addTodo} />
        <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/>
      </div>
      </div>
      <Footer/>
      </div>
      
    )
  }















}

export default Agenda;

import React, { Component } from 'react'
import TodoItem from './TodoItem';






 class Todos extends Component {
  
  render() {
    return this.props.todos.map((todo)=>(
      
      <TodoItem todo = {todo}  key = {todo.id} markComplete={this.props.markComplete} delTodo = {this.props.delTodo}/>
                
              ))
   
  }
}

export default Todos

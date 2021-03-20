

import React, { Component } from 'react'

 class TodoItem extends Component {

  
   

    render() {
        const{id, title } = this.props.todo;

        const markTodo = this.props.todo.completed ? (
            <div className="markComp" style={{textDecoration:"line-through"}}>
                
                <p>
            <input type = 'checkbox'  checked  onChange = {this.props.markComplete.bind(this, id)}/>{' '}
                    {title}
                    <button onClick = {this.props.delTodo.bind(this, id)} className="delete-agenda"><i className="far fa-trash-alt"></i></button>
                    </p>
            </div>

        ) : (
            <div className="markComp" >
                
                <p>
            <input type = 'checkbox'    onChange = {this.props.markComplete.bind(this, id)}/>{' '}
                    {title}
                    <button onClick = {this.props.delTodo.bind(this, id)} className="delete-agenda" ><i className="far fa-trash-alt"></i></button>
                    </p>
            </div>
        )
        return (
            <div >
                {markTodo}
            </div>
        )
    }
}


export default TodoItem

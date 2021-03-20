
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class AddTodo extends Component {
    state ={
        title: ''
    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
       
    }
    onChange = (e)=> this.setState({ [e.target.name]: e.target.value});
        
    render() {
        return (
           <form onSubmit = {this.onSubmit}  className="agenda-form">
               <input type="text" 
               name="title" 
               placeholder="Add schedule ........."
               value = {this.state.title}
               onChange = {this.onChange}
               required
               className="agenda-text"
               
               />
                <input type="submit"
                 value = "Submit"
                 className ="agenda-submit-btn"
                 

                 /> 
           </form>
           
        )
    }
}


AddTodo.propTypes={
    addTodo: PropTypes.func.isRequired,
}  

export default AddTodo

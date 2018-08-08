import React, { Component } from 'react';
import './ToDoAdd.css';

export default class ToDoAdd extends Component{
    state={
        task:''
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]:event.target.value});
    }
    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <form className="col-lg-6 col-centered x" onSubmit={this.props.handleSubmit(this.state.task)}>
                        <div className="form-group">
                            <label>New Task</label>
                            <input type="text" name='task' className="form-control" placeholder="Write a new task" value={this.state.task} onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary"><i className="far fa-paper-plane"></i> Submit</button>
                    </form>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-centered plate2"></div>
                </div>
            </div>

        );
    }

}
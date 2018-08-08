import React, { Component } from 'react';
import './ToDoList.css';
import { ListGroup } from 'reactstrap';
import ToDoElement from '../ToDoElement/ToDoElement';

export default class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div className="container toDoBody">
                
                <ListGroup flush>
                    {this.props.todoElements.map( element => <ToDoElement 
                                                                data={{...element}} 
                                                                handleDelete={this.props.handleDelete} 
                                                                handleComplete={this.props.handleComplete} />)}
                    
                </ListGroup>
                
                
                
            </div>
        );

    }
}


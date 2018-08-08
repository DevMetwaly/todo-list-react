import React from 'react';
import './ToDoElement.css';
import { ListGroupItem } from 'reactstrap';
import Aux from '../Hoc/AUXX';

export default function ToDoElement(props){
    return (
        <Aux>
            <ListGroupItem color={(props.data.completed)?'success':''}>
            <div className="row">
                    <div className="col-lg-1">
                        {props.data.completed?<i className="fas fa-check"></i>:null}
                    </div>
                    <div className="col-lg-8">
                        {props.data.name}
                    </div>
                    <div className="col-lg-3">
                        <button className="btn btn-success" onClick={props.handleComplete(props.data.id)}><i className="fas fa-check"></i></button>
                        <button className="btn btn-danger" onClick={props.handleDelete(props.data.id)}><i className="fas fa-times"></i></button>
                    </div>
                </div>
            </ListGroupItem>
        </Aux>
    );
}

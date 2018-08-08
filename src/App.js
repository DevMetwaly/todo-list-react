import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import ToDoList from './ToDoList/ToDoList';
import ToDoAdd from './ToDoAdd/ToDoAdd';
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoElements:[]
    };
  }

  getData = () => {
    axios.get(`https://todolist-f5aff.firebaseio.com/todoList.json`)
    .then(res => {
      
      let arr=[];
      for(let key in res.data){
        let obj = {...res.data[key]};
        obj.id = key;
        arr.push(obj);
      }
      this.setState({todoElements:arr});
    })

  }

  componentDidMount(){
    this.getData();
  }

  calProgress = () => {
    const numberOfItems = this.state.todoElements.length;
    const numberOfCompleted = this.state.todoElements.filter( ele => ele.completed ).length;
    return numberOfCompleted/numberOfItems*100;
    
  }

  handleSubmit = (data) => (event) =>{
    event.preventDefault();
    const getData =  this.getData;

    const arr = [...this.state.todoElements];
    const newData = {name:data, completed:false, id: new Date().valueOf()}
    arr.push(newData);
    
    axios.post(`https://todolist-f5aff.firebaseio.com/todoList.json`,newData)
    .then(res => {
      getData();
    })
  }

  handleComplete = (id) => (event) =>{
    
    let arr = [...this.state.todoElements];
    const index = arr.findIndex(ele => ele.id === id);
    arr[index]['completed'] = !arr[index]['completed'];
    this.setState({todoElements:arr});
    axios.put(`https://todolist-f5aff.firebaseio.com/todoList/${id}.json`,arr[index])
    .then(res => {
      
    })
  }

  handleDelete = (id) => (event) =>{
    let arr = [...this.state.todoElements]; 
    arr = arr.filter(ele => ele.id !== id);
    this.setState({todoElements:arr});
    axios.delete(`https://todolist-f5aff.firebaseio.com/todoList/${id}.json`)
    .then(res => {
      
    })
  }

	render() {
		return (
			<div className="App">
      
        <div className="page-wraper" style={{margin:"25px 0 0 0"}}>
          <div className="container" >
            <Header progress={this.calProgress()}/>
            <ToDoList 
              todoElements={this.state.todoElements} 
              handleDelete={this.handleDelete} 
              handleComplete={this.handleComplete}/>
            <ToDoAdd handleSubmit={this.handleSubmit} />
          </div>
        </div>
			</div>
		);
  };
}
  
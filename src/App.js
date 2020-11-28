import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { Component } from 'react';
import Header from './Header';
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Todos from './Todos'



class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Learn React',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Build React Project',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Deploy Project',
        completed: false
      },
    ]
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  //delete todo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
  //Add tod
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })

  }



  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
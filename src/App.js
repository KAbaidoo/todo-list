import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import axios from 'axios';

import React, { Component } from 'react';
import Header from './Header';
import AddTodo from './AddTodo'

import './App.css';
import Todos from './Todos'
import About from './pages/About';





class App extends Component {
  state = {
    todos: [

    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }))


  }

  //Add tod
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }))




  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    )
  }
}

export default App
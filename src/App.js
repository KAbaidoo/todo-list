import './App.css';
import Todos from './Todos'
import React, { Component } from 'react';




class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Learn React',
        completed: false
      },
      {
        id: 2,
        title: 'Build React Project',
        completed: false
      },
      {
        id: 3,
        title: 'Deploy Project',
        completed: false
      },
    ]
  }





  render() {
    return (
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App
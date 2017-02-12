import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { addTodo, generateId } from './lib/todoHelpers';

import { TodoForm, TodoList } from './components/todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: 'Learn JSX', isComplete: true },
        { id: 2, name: 'Build An Awesome App', isComplete: false },
        { id: 3, name: 'Ship It!', isComplete: false }
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ currentTodo: e.target.value });
  }

  handleSubmit(e) {
    if (this.state.currentTodo) {
      e.preventDefault();
      const newId = generateId();
      const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false };
      const updatedTodos = addTodo(this.state.todos, newTodo);
      this.setState({ todos: updatedTodos, currentTodo: '', errorMessage: '' });
    } else {
      
    }
  }

  handleEmptySubmit(e) {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    });
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm
            handleSubmit={submitHandler}
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo} />
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;

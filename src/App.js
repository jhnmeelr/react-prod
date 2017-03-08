import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos } from './lib/todoHelpers';
import { pipe, partial } from './lib/utils';
import { loadTodos, createTodo } from './lib/todoService';

import { TodoForm, TodoList, Footer } from './components/todo';

class App extends Component {
  state = {
    todos: [],
    currentTodo: ''
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({ todos }));
  }

  handleRemove = (id, e) => {
    e.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({ todos: updatedTodos });
  }

  handleInputChange = (e) => {
    this.setState({ currentTodo: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newId = generateId();
    const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false };
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({ todos: updatedTodos, currentTodo: '', errorMessage: '' });
    createTodo(newTodo)
      .then(() => console.log('Todo added'));
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    });
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos));
    const updatedTodos = getUpdatedTodos(id, this.state.todos);
    this.setState({ todos: updatedTodos });
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route);

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
          <TodoList handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
            todos={displayTodos}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

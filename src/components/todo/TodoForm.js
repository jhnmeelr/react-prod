import React from 'react';

export const TodoForm = ({ handleInputChange, currentTodo, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input onChange={handleInputChange} value={currentTodo} type="text"/>
  </form>
);

React.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
}
import React from 'react';

import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, handleToggle, handleRemove }) => (
  <div className="Todo-List">
    <ul>
      {todos.map(todo => <TodoItem handleToggle={handleToggle} key={todo.id} {...todo} handleRemove={handleRemove} />)}
    </ul>
  </div>
);

React.propTypes = {
  todos: React.PropTypes.array.isRequired,
  handleToggle: React.PropTypes.func.isRequired
}
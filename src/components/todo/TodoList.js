import React from 'react';

import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, handleToggle }) => (
  <div className="Todo-List">
    <ul>
      {todos.map(todo => <TodoItem handleToggle={handleToggle} key={todo.id} {...todo} />)}
    </ul>
  </div>
);

React.propTypes = {
  todos: React.PropTypes.array.isRequired,
  handleToggle: React.PropTypes.func.isRequired
}
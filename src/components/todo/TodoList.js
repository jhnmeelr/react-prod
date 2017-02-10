import React from 'react';

import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => (
  <div className="Todo-List">
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </ul>
  </div>
);

React.propTypes = {
  todos: React.PropTypes.array.isRequired,
}
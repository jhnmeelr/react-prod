import React from 'react';

import { partial } from '../../lib/utils';

export const TodoItem = ({ id, name, isComplete, handleToggle, handleRemove }) => {
  const toggleHandler = partial(handleToggle, id);
  const removeHandler = partial(handleRemove, id);
  return (
    <li>
      <span className="delete-item">
        <a href="#" onClick={removeHandler}>x</a>
      </span>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={toggleHandler}/>{name}
    </li>
  );
};

React.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool.isRequired,
  handleToggle: React.PropTypes.func.isRequired
}
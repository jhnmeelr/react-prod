import React from 'react';

export const TodoItem = ({ name, isComplete }) => (
  <li>
    <input
      type="checkbox"
      defaultChecked={isComplete}/>{name}
  </li>
);

React.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool.isRequired,
}
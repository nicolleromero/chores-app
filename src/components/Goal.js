import React from 'react';

import { DeleteButton } from './DeleteButton';
import { Points } from './Points';

import './Goal.css';

export function Goal(props) {
  const [editing, setEditing] = React.useState(false);

  function handleFocus() {
    setEditing(!editing);
  }

  function handleBlur() {
    setEditing(!editing);
  }

  return (
    <form
      className="list-item"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex md:items-center border-b border-b-2 border-blue-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Type goal here"
          value={props.goal.value}
          onChange={(e) => props.onChange(props.goal.id, 'value', e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {editing && (
          <DeleteButton
            onClick={() => props.onDelete(props.goal.id)}
          />
        )}
        <Points
          value={props.goal.points}
          onChange={(e) => props.onChange(props.goal.id, 'points', Number(e.target.value))}
        />
      </div>
    </form >
  );
}

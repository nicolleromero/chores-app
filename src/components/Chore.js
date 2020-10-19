import React, { useState } from 'react';

import { DeleteButton } from './DeleteButton';
import { Points } from './Points';

import './Chore.css';

export const Chore = React.forwardRef((props, ref) => {
  const [editing, setEditing] = useState(false);

  function handleFocus() {
    setEditing(!editing);
  }

  function handleBlur() {
    setEditing(!editing);
  }

  return (
    <form
      className="list-item"
      ref={ref}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex md:items-center border-b border-b-2 border-blue-500 py-2">
        <input className="mr-2 leading-tight" type="checkbox"
          checked={props.item.complete}
          onChange={(e) => props.onChange(props.item.id, 'complete', e.target.checked)}
        />
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Type chore here"
          value={props.item.value}
          onChange={(e) => props.onChange(props.item.id, 'value', e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {editing && (
          <DeleteButton
            onClick={() => props.onDelete(props.item.id)}
          />
        )}
        <Points
          value={props.item.points}
          onChange={(e) => props.onChange(props.item.id, 'points', Number(e.target.value))}
        />
      </div>
    </form>
  );
});

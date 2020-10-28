import React from 'react';
import { useDispatch } from "react-redux";
import { addGoal, deleteGoal, changeGoal } from "../redux/actions";

import { DeleteButton } from './DeleteButton';
import { Points } from './Points';

import './Goal.css';

export function Goal(props) {
  const dispatch = useDispatch();
  const [editing, setEditing] = React.useState(false);

  function handleFocus() {
    setEditing(!editing);
  }

  function handleBlur() {
    setEditing(!editing);
  }

  function handleAddGoal(event, newGoal) {
    event.preventDefault()

    dispatch(addGoal(newGoal));
  }

  function handleDeleteGoal(goalId) {
    dispatch(deleteGoal(goalId));
  };

  function handleChangeGoal(goalId, key, value) {
    dispatch(changeGoal(goalId, key, value));
  }

  return (
    <form
      className="list-item"
      onSubmit={handleAddGoal}
    >
      <div className="flex md:items-center border-b border-b-2 border-blue-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Type goal here"
          value={props.goal.value}
          onChange={(e) => handleChangeGoal(props.goal.id, 'value', e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {editing && (
          <DeleteButton
            onClick={() => handleDeleteGoal(props.goal.id)}
          />
        )}
        <Points
          value={props.goal.points}
          onChange={(e) => handleChangeGoal(props.goal.id, 'points', Number(e.target.value))}
        />
      </div>
    </form >
  );
}

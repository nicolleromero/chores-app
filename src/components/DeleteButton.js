/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import './DeleteButton.css';

export function DeleteButton(props) {

  return (
    <button
      className="btn btn-sm delete-button"
      onClick={props.onClick}
      onMouseDown={(e) => e.preventDefault()}
    >
      ❌
    </button>
  );
}

/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import './DeleteButton.css';

export class DeleteButton extends React.Component {

  render() {
    return (
      <button
        className="btn btn-sm delete-button"
        onClick={this.props.onClick}
        onMouseDown={(e) => e.preventDefault()}
      >
        ❌
      </button>
    );
  }
}
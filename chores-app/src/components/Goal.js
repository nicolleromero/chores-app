import React from 'react';

import './Goal.css';
import { Points } from './Points';

export class Goal extends React.Component {
  state = {
    editing: false,
  }

  handleFocus = () => {
    this.setState({ editing: true });
  }

  handleBlur = () => {
    this.setState({ editing: false });
  }

  render() {
    return (
      <form
        class="w-full max-w-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <div class="flex md:items-center border-b border-b-2 border-blue-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Type goal here"
            value={this.props.goal.value}
            onChange={(e) => this.props.onChange(this.props.goal.id, 'value', e.target.value)}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          {this.state.editing && (
            <button
              className="btn btn-sm m-2"
              onClick={() => this.props.onDelete(this.props.goal.id)}
              onMouseDown={(e) => e.preventDefault()}
            >
              ❌
            </button>
          )}
          <Points
            value={this.props.goal.points}
            onChange={(e) => this.props.onChange(this.props.goal.id, 'points', Number(e.target.value))}
          />
        </div>
      </form>
    );
  }
}

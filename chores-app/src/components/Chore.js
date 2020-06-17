import React from 'react';
import { Badge, Button, InputGroup, FormControl } from 'react-bootstrap';
import { InputGroupPrepend } from 'react-bootstrap/InputGroup';

import './Chore.css'

export class Chore extends React.Component {
  state = {
    editing: false,
  }

  handleFocus = () => {
    this.setState({ editing: true });
  }

  handleBlur = () => {
    // setTimeout(() => {
    this.setState({ editing: false });
    // }, 100);
  }

  render() {
    return (
      <React.Fragment>
        <form class="w-full max-w-lg">
          <div class="flex md:items-center border-b border-b-2 border-blue-500 py-2">
            <input class="mr-2 leading-tight" type="checkbox"
              checked={this.props.item.complete}
              onChange={(e) => this.props.onChange(this.props.item.id, 'complete', e.target.checked)}
            />
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Type chore here"
              value={this.props.item.value}
              onChange={(e) => this.props.onChange(this.props.item.id, 'value', e.target.value)}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            {this.state.editing && (
              <button
                className="btn btn-sm m-2"
                onClick={() => this.props.onDelete(this.props.item.id)}
                onMouseDown={(e) => e.preventDefault()}
              >
                ❌
              </button>
            )}
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none points-input"
              type="text"
              placeholder="Points"
              value={this.props.item.points}
              onChange={(e) => this.props.onChange(this.props.item.id, 'points', e.target.value)}
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

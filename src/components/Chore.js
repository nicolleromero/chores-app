import React from 'react';

import { DeleteButton } from './DeleteButton';
import { Points } from './Points';

import './Chore.css';

export class Chore extends React.Component {
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
      <React.Fragment>
        <form
          class="list-item"
          onSubmit={(e) => e.preventDefault()}
        >
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
              <DeleteButton
                onClick={() => this.props.onDelete(this.props.item.id)}
              />
            )}
            <Points
              value={this.props.item.points}
              onChange={(e) => this.props.onChange(this.props.item.id, 'points', Number(e.target.value))}
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

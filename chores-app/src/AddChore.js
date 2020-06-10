import React from 'react';

import './AddChore.css';

export class AddChore extends React.Component {
  state = {
    inputValue: "",
  }

  addItem() {
    //create item with unique id
    let undoneList = [];
    const newItem = {
      id: Date.now(),
      value: this.state.inputValue,
      assignee: null,
      complete: false,
      points: 0,

    }

    this.props.onAddItem(newItem);

    undoneList.push(this.props.newItem) /* Need to create array "list" */

    this.setState({inputValue: ""});
  }

  updateInput(value) {
    this.setState({
      inputValue: value,
    });
  }

  render() {
    return (
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <div className="button-text">Add Chore</div>

        <input
          type="text"
          placeholder="Type chore here..."
          value={this.state.inputValue}
          onChange={(e) => this.updateInput(e.target.value)}
        />

        <button
          className="add-btn btn-floating"
          onClick={() => this.addItem()}
          // disabled = {this.state.newItem.length}
        >
          <i class="material-icons"> + </i>
        </button>
      </form>
    );
  }
}
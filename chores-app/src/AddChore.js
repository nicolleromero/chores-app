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

    this.setState({ inputValue: "" });
  }

  updateInput(value) {
    this.setState({
      inputValue: value,
    });
  }

  render() {
    return (
      <div>
        <div class="card-deck mb-3 text-center">
          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Add Chore</h4>
            </div>
            <div class="card-body">
              <div class="col-sm">
                <form class="form-inline card-title pricing-card-title" onSubmit={(e) => e.preventDefault()}>
                  <div class="form-group mb-2">
                    <input
                      type="text"
                      placeholder="Type chore here..."
                      value={this.state.inputValue}
                      onChange={(e) => this.updateInput(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit" class="btn btn-primary mb-2"
                    onClick={() => this.addItem()}
                  >
                    +
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

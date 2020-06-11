import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './AddChore.css';

export class AddChore extends React.Component {
  state = {
    inputValue: "",
    assignee: null
  }

  addItem() {
    //create item with unique id
    let undoneList = [];
    const newItem = {
      id: Date.now(),
      value: this.state.inputValue,
      assignee: this.state.assignee,
      complete: false,
      points: 0,

    }

    this.props.onAddItem(newItem);

    undoneList.push(this.props.newItem) /* Need to create array "list" */

    this.setState({
      inputValue: "",
      assignee: null,
    });
  }

  updateInput(value) {
    this.setState({
      inputValue: value,
    });
  }

  updateAssignee(value) {
    this.setState({
      assignee: value,
    });
  }

  render() {
    return (
      <div>
        <div class="card-header">
          <h4 class="my-0 font-weight-normal text-center">Add a Chore</h4>
        </div>
        <div class="card-body">
          <div class="col-sm">
            <form class="form-inline card-title pricing-card-title" onSubmit={(e) => e.preventDefault()}>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Type chore here"
                  value={this.state.inputValue}
                  onChange={(e) => this.updateInput(e.target.value)}
                />

                <Dropdown
                  value={this.state.assignee}
                  onSelect={(key) => this.updateAssignee(key)}
                >
                  <Dropdown.Toggle variant="primary" id="assignee">
                    Assignee
                      </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {this.props.assignees.map((kid) => {
                      return (
                        <Dropdown.Item key={kid} eventKey={kid}>{kid}</Dropdown.Item>
                      )
                    })}
                  </Dropdown.Menu>
                </Dropdown>

                <button
                  type="submit" class="btn btn-primary"
                  onClick={() => this.addItem()}
                >
                  Add +
                    </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

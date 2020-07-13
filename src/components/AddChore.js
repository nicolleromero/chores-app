import React from 'react';
import { Button, Col, Dropdown, DropdownButton, Form, FormControl, InputGroup } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

import './AddChore.css';
import { DropdownSelect } from './DropdownSelect';

export class AddChore extends React.Component {
  state = {
    inputValue: '',
    inputPoints: '',
    assigneeId: null,
  }

  addItem() {
    const newItem = {
      id: Date.now(),
      value: this.state.inputValue.trim(),
      assignee: this.state.assigneeId,
      complete: false,
      points: Number(this.state.inputPoints),
    }

    this.props.onAddItem(newItem);

    this.setState({
      inputValue: '',
      inputPoints: '',
    });
  }

  updateInput(value) {
    this.setState({
      inputValue: value.trimStart(),
    });
  }

  updatePoints(value) {
    this.setState({
      inputPoints: value.replace(/^0+|\D/g, ''),
    });
  }

  updateAssignee(value) {
    this.setState({
      assigneeId: value,
    });
  }

  render() {
    return (
      <div>
        <div className="align-items-center">
          <h4 class="chore-maintitle text-center">🌟 Add a Chore</h4>
        </div>
        <div class="row">
          <div class="card-body">

            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Row className="align-items-center">
                <Col lg={true}>
                  <InputGroup className="align-items-center">
                    <TextField
                      style={{ width: 500 }}
                      id="outlined-required"
                      label="Chore"
                      value={this.state.inputValue}
                      onChange={(e) => this.updateInput(e.target.value)}
                      defaultValue="Type chore here"
                      variant="outlined"
                    />
                    <DropdownSelect
                      assignees={this.props.assignees}
                      selected={this.state.assigneeId}
                      onSelect={(key) => this.updateAssignee(key)}
                    />
                    <TextField
                      style={{ width: 200 }}
                      id="outlined-required"
                      label="Points"
                      type="text"
                      placeholder="Points"
                      defaultValue="Points"
                      value={this.state.inputPoints}
                      onChange={(e) => this.updatePoints(e.target.value)}
                      variant="outlined"
                    />
                  </InputGroup>
                </Col>
                <Col sm="auto">
                  <InputGroup className="align-items-center">

                  </InputGroup>
                </Col>
                <Button
                  disabled={
                    // !this.state.assigneeId ||
                    !this.state.inputValue ||
                    !this.state.inputPoints
                  }
                  type="submit" class="btn btn-primary"
                  onClick={() => this.addItem()}
                >
                  +
              </Button>
              </Form.Row>
            </Form>
          </div>
        </div>
      </div >
    );
  }
}
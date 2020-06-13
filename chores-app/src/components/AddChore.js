import React from 'react';
import { Button, Col, Dropdown, DropdownButton, Form, FormControl, InputGroup } from 'react-bootstrap';


import './AddChore.css';

export class AddChore extends React.Component {
  state = {
    inputValue: '',
    inputPoints: '',
    assignee: null,
  }

  addItem() {
    //create item with unique id
    const newItem = {
      id: Date.now(),
      value: this.state.inputValue,
      assignee: this.state.assignee,
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
      inputValue: value,
    });
  }

  updatePoints(value) {
    this.setState({
      inputPoints: value,
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

          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Row className="align-items-center">
              <Col lg={true}>
                <InputGroup className="align-items-center">
                  <FormControl
                    type="text"
                    placeholder="Type chore here"
                    value={this.state.inputValue}
                    onChange={(e) => this.updateInput(e.target.value)}
                  />
                  <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-primary"
                    title={this.state.assignee || 'Assignee'}
                    id="input-group-dropdown"
                    value={this.state.assignee}
                    onSelect={(key) => this.updateAssignee(key)}
                  >
                    {this.props.assignees.map((kid) => {
                      return (
                        <Dropdown.Item key={kid} eventKey={kid}>{kid}</Dropdown.Item>
                      )
                    })}
                  </DropdownButton>
                </InputGroup>
              </Col>

              <Col sm="auto">
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="Points"
                    value={this.state.inputPoints}
                    onChange={(e) => this.updatePoints(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Button
                disabled={!this.state.assignee || !this.state.inputValue || !this.state.inputPoints || this.state.inputPoints < 0}
                type="submit" class="btn btn-primary"
                onClick={() => this.addItem()}
              >
                +
              </Button>
            </Form.Row>
          </Form>
        </div>
      </div >
    );
  }
}

import React from 'react';
import { Button, Col, Dropdown, DropdownButton, Form, FormControl, InputGroup } from 'react-bootstrap';


import './AddChore.css';

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
      assigneeId: '',
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
    let currentAssignee = this.props.assignees.find((assignee) => {
      return assignee.id === this.state.assigneeId;
    })

    return (
      <div>
        <div class="card-header">
          <h4 class="chore-maintitle text-center">🌟 Add a Chore</h4>
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
                    variant="outline-secondary"
                    title={currentAssignee ? currentAssignee.name : 'Assignee'}
                    id="input-group-dropdown"
                    value={this.state.assigneeId}
                    onSelect={(key) => this.updateAssignee(key)}
                  >
                    {this.props.assignees.map((assignee) => {
                      return (
                        <Dropdown.Item key={assignee.id} eventKey={assignee.id}>
                          {assignee.name}
                        </Dropdown.Item>
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
                disabled={
                  !this.state.assigneeId ||
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
      </div >
    );
  }
}
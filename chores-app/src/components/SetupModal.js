import React from 'react';
import FlipMove from 'react-flip-move';
import { Button, Form, InputGroup, ListGroup, Modal } from 'react-bootstrap';

import { DeleteButton } from './DeleteButton';

import './SetupModal.css';


export class SetupModal extends React.Component {
  state = {
    inputValue: '',
    editing: false,
  }

  addAssignee() {
    const newAssignee = {
      id: Math.random().toString(36).slice(2),
      name: this.state.inputValue.trim(),
    }

    this.props.onAddAssignee(newAssignee);

    this.setState({
      inputValue: '',
    });
  }

  updateInput(value) {
    this.setState({
      inputValue: value.trimStart(),
    });
  }

  updateBoardName(value) {
    this.props.onChangeBoardName(value.trimStart());
  }

  handleFocus = () => {
    this.setState({ editing: true });
  }

  handleBlur = (assignee) => {
    this.setState({ editing: false });

    if (!assignee.name) {
      this.props.onDelete(assignee.id);
    }
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Modal.Header className="align-items-center">
          <h4 class="chore-maintitle text-center align-items-center">👨‍👩‍👧‍👦 Update Board Name</h4>
        </Modal.Header>
        <div class="card-body text-center">
          <Modal.Body>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Row controlId="formBasicEmail">
                <InputGroup className="align-items-center">
                  <Form.Control
                    class="appearance-none bg-transparent border-none w-full text-center text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    value={this.props.boardName}
                    onChange={(e) => this.updateBoardName(e.target.value)}
                    placeholder="Enter name for board"
                  />
                </InputGroup>
              </Form.Row>
            </Form>
          </Modal.Body>
        </div>

        <Modal.Header className="align-items-center">
          <h4 class="chore-maintitle text-center align-items-center">😀 Update Assignees</h4>
        </Modal.Header>
        <div class="card-body text-center">
          <Modal.Body>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Row controlId="formBasicEmail">
                <InputGroup className="align-items-center">
                  <Form.Control
                    class="appearance-none bg-transparent border-none w-full text-center text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    value={this.state.inputValue}
                    onChange={(e) => this.updateInput(e.target.value)}
                    placeholder="Enter new assignee's name 👋"
                  />
                  <Button
                    disabled={!this.state.inputValue}
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => this.addAssignee()}
                  >
                    +
                  </Button>
                </InputGroup>
              </Form.Row>
            </Form>

            <div class="card-body text-center">
              <ListGroup variant="flush">
                <div className="align-text-center current-assignees">
                  Current Assignees
              </div>
                <FlipMove duration={350} easing="ease-out">
                  {this.props.assignees.map((assignee) => {
                    return (
                      <form
                        class="w-full max-w-lg"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <div class="flex md:items-center border-b border-b-2 border-blue-500 py-2">
                          <input
                            class="text-center bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            value={assignee.name}
                            onChange={(e) => this.props.onChange(assignee.id, 'name', e.target.value)}
                            onFocus={this.handleFocus}
                            onBlur={() => this.handleBlur(assignee)}
                          />
                          {this.state.editing && (
                            <DeleteButton
                              onClick={() => this.props.onDelete(assignee.id)}
                            />
                          )}
                        </div>
                      </form>
                    );
                  })}
                </FlipMove>
              </ListGroup>
            </div>
          </Modal.Body>
        </div>
        <Modal.Footer>
          <Button
            type="submit"
            class="btn btn-secondary"
            variant="secondary"
            disabled={!this.props.assignees.length}
            onClick={this.props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

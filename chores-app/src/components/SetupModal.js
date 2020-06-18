/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import FlipMove from 'react-flip-move';
import { Button, Form, InputGroup, ListGroup, Modal, Row } from 'react-bootstrap';


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
                    value={this.state.inputBoardNamee}
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


            <ListGroup variant="flush">
              <FlipMove duration={350} easing="ease-out">
                {this.props.assignees.map((assignee) => {
                  return (
                    <form
                      class="w-full max-w-lg"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div class="flex md:items-center border-b border-b-2 border-blue-500 py-2">
                        <input
                          class="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          value={assignee.name}
                          onChange={(e) => this.props.onChange(assignee.id, 'name', e.target.value)}
                          onFocus={this.handleFocus}
                          onBlur={() => this.handleBlur(assignee)}
                        />
                        {this.state.editing && (
                          <button
                            className="btn btn-sm m-2"
                            onClick={() => this.props.onDelete(assignee.id)}
                            onMouseDown={(e) => e.preventDefault()}
                          >
                            ❌
                          </button>
                        )}
                      </div>
                    </form>
                  );
                })}
              </FlipMove>
            </ListGroup>

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

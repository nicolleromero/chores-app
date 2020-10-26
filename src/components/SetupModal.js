import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import FlipMove from 'react-flip-move';
import { Button, Form, InputGroup, ListGroup, Modal } from 'react-bootstrap';

import { DeleteButton } from './DeleteButton';
import { setBoardName, addAssignee, changeAssignee, deleteAssignee, closeSetup } from "../redux/actions";

import './SetupModal.css';


export function SetupModal(props) {
  const dispatch = useDispatch();
  const boardName = useSelector(state => state.boardName);
  const assignees = useSelector(state => state.assignees);
  const [inputValue, setInputValue] = React.useState('');
  const [editing, setEditing] = React.useState(false);


  function handleAddAssignee() {
    const newAssignee = {
      id: Math.random().toString(36).slice(2),
      name: inputValue.trim(),
    }

    dispatch(addAssignee(newAssignee));

    setInputValue('');
  }

  function handleDeleteAssignee(assigneeId) {
    dispatch(deleteAssignee(assigneeId));
  }

  function updateInput(value) {
    setInputValue(value.trimStart());
  }

  const handleSetBoardName = (boardName) => {
    dispatch(setBoardName(boardName.trimStart()));
  }

  function handleFocus() {
    setEditing(!editing);
  }

  function handleBlur(assignee) {
    setEditing(!editing);

    if (!assignee.name) {
      dispatch(deleteAssignee(assignee.id));
    }
  }

  const handleCloseSetup = () => {
    dispatch(closeSetup());
  }

  return (
    <Modal
      show={props.showSetup}
    >
      <Modal.Header className="align-items-center align-self-center">
        <h4 className="chore-maintitle text-center align-items-center text-center">Update Board Name</h4>
      </Modal.Header>
      <div className="card-body text-center">
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Row controlId="formBasicEmail">
              <InputGroup className="align-items-center">
                <Form.Control
                  className="appearance-none bg-transparent border-none w-full text-center text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  value={boardName}
                  onChange={(e) => handleSetBoardName(e.target.value)}
                  placeholder="Enter name for board"
                />
              </InputGroup>
            </Form.Row>
          </Form>
        </Modal.Body>
      </div>

      <Modal.Header className="align-items-center align-self-center">
        <h4 className="chore-maintitle text-center align-items-center">Update Assignees</h4>
      </Modal.Header>
      <div className="card-body text-center">
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Row controlId="formBasicEmail">
              <InputGroup className="align-items-center" variant="flush">
                <Form.Control
                  className="appearance-none bg-transparent border-none w-full text-center text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  value={inputValue}
                  onChange={(e) => updateInput(e.target.value)}
                  placeholder="Enter new assignee's name 👋"
                />
                <Button
                  disabled={!inputValue}
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => handleAddAssignee()}
                >
                  +
                  </Button>
              </InputGroup>
            </Form.Row>
          </Form>

          <div className="card-body text-center">
            <ListGroup variant="flush">
              <div className="align-text-center current-assignees">
                Current Assignees
              </div>
              <FlipMove duration={350} easing="ease-out">
                {assignees.map((assignee) => {
                  return (
                    <form
                      key={assignee.id}
                      className="w-full max-w-lg"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="flex md:items-center border-b border-b-2 border-blue-500 py-2">
                        <input
                          className="text-center bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          value={assignee.name}
                          onChange={(e) => props.onChange(assignee.id, 'name', e.target.value)}
                          onFocus={handleFocus}
                          onBlur={() => handleBlur(assignee)}
                        />
                        {editing && (
                          <DeleteButton
                            onClick={() => handleDeleteAssignee(assignee.id)}
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
          className="btn btn-secondary"
          variant="secondary"
          disabled={!assignees.length}
          onClick={handleCloseSetup}
        >
          Close
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Button, Col, Form, InputGroup } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

import './AddChore.css';
import { DropdownSelect } from './DropdownSelect';
import { addChore } from "../redux/actions";

export function AddChore() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [inputPoints, setInputPoints] = useState('');
  const [assigneeId, setAssigneeId] = useState(undefined);

  function handleAddChore() {
    const newChore = {
      id: Date.now(),
      value: inputValue.trim(),
      assignee: assigneeId,
      complete: false,
      points: Number(inputPoints),
    }
    dispatch(addChore(newChore));

    setInputValue('');
    setInputPoints('');

  }

  function updateInput(value) {
    setInputValue(value.trimStart());
  }

  function updatePoints(value) {
    setInputPoints(value.replace(/^0+|\D/g, ''));
  }

  function updateAssignee(value) {
    setAssigneeId(value);
  }

  console.log('assignedId', assigneeId);

  return (
    <div>
      <div>
        <h4 className="chore-maintitle text-center">Add a Chore</h4>
      </div>
      <div className="d-flex flex-wrap align-items-center offset-2">
        <div className="card-body d-flex flex-wrap align-items-center">

          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Row className="d-flex flex-wrap align-items-center align-items-center">
              <Col lg={true}>
                <InputGroup className="align-items-center align-self-center">
                  <TextField
                    className="text-align-center"
                    style={{ width: 500, marginRight: 10 }}
                    id="outlined-required"
                    label="Chore"
                    value={inputValue}
                    onChange={(e) => updateInput(e.target.value)}
                    placeholder="Type chore here"
                    variant="outlined"
                  />
                  <DropdownSelect
                    style={{ marginRight: 10 }}
                    selected={assigneeId}
                    onSelect={(key) => updateAssignee(key)}
                  />
                  <TextField
                    style={{ width: 200, marginLeft: 10 }}
                    id="outlined-required"
                    label="Points"
                    type="text"
                    placeholder="Points"
                    value={inputPoints}
                    onChange={(e) => updatePoints(e.target.value)}
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
                  !inputValue ||
                  !inputPoints
                }
                type="submit" className="btn btn-primary"
                onClick={() => handleAddChore()}
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

import React from 'react';
import { Button, Form, FormControl, Modal } from 'react-bootstrap';


export class SetupModal extends React.Component {

  addAssignee() {
    const newAssignee = {

    }

    this.props.onAddAssignee(newAssignee);

    this.setState({
      inputAssignee: '',
    });
  }

  render() {
    return (
      <div>

        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add an assignee</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>New Assignee</Form.Label>
                <Form.Control type="text" placeholder="Enter assignee's name" />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button disabled={!this.state.assignee}
              type="submit" class="btn btn-primary"
              onClick={() => this.addAssignee()}>
              +
              </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

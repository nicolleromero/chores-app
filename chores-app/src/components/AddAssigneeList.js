import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


export class AddAssigneeList extends React.Component {
  const[show, setShow] = useState(false);

  handleClose = () => setShow(false);

  handleShow = () => setShow(true);

  render() {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter the name of an assignee:</Form.Label>
                <Form.Control placeholder="Enter name" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
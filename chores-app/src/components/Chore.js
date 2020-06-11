import React from 'react';
import { ListGroup } from 'react-bootstrap';

export class Chore extends React.Component {

  render() {
    return (
      <React.Fragment>
        <ListGroup.Item
          action variant="light"
        >
          {this.props.item.value}
          <button
            className="btn btn-floating"
            onClick={() => this.props.onDelete(this.props.item.id)}
          >
            <i class="material-icons">X</i>
          </button>
          <button
            className="btn btn-floating"
            onClick={() => this.completeItem(this.props.item.complete)}
          >
            <i class="material-icons">Complete</i>
          </button>
        </ListGroup.Item>
      </React.Fragment>
    );
  }
}
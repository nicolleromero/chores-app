import React from 'react';
import { Col } from 'react-bootstrap';

import { ChoreList } from './ChoreList';
import { Goals } from './Goals';

export class KidCard extends React.Component {

  calculatePointsTotal() {
    return this.props.list
      .filter((chore) => chore.complete)
      .reduce((sum, chore) => sum + chore.points, 0);
  }

  render() {


    return (
      <Col xs={6}>
        <div class="card mb-4 shadow-sm">
          <ChoreList
            assignee={this.props.assignee}
            list={this.props.list}
            onDelete={this.props.onDelete}
            onChange={this.props.onChange}
          />
          <Goals
            assignee={this.props.assignee}
            completedPoints={this.calculatePointsTotal()}
          />
        </div>
      </Col>
    );
  }
}

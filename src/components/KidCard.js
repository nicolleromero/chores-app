import React from 'react';
import { Col } from 'react-bootstrap';

import { ChoreList } from './ChoreList';
import { GoalLists } from './GoalLists';

export function KidCard(props) {
  return (
    <Col xs={6}>
      <ChoreList
        assignee={props.assignee}
      />
      <GoalLists
        assignee={props.assignee}
      />
    </Col>
  );
}

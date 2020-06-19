import React from 'react';
import { Col } from 'react-bootstrap';

import { ChoreList } from './ChoreList';
import { GoalLists } from './GoalLists';

export class KidCard extends React.Component {

  calculatePointsTotal() {
    return this.props.list
      .filter((chore) => chore.complete)
      .reduce((sum, chore) => sum + Number(chore.points), 0);
  }

  render() {
    return (
      <Col xs={6}>
        <ChoreList
          assignee={this.props.assignee}
          list={this.props.list}
          onDelete={this.props.onDelete}
          onChange={this.props.onChange}
        />

        <GoalLists
          assignee={this.props.assignee}
          completedPoints={this.calculatePointsTotal()}
          goalList={this.props.goalList}
          onAddGoal={this.props.onAddGoal}
          onChangeGoal={this.props.onChangeGoal}
          onGoalCompleted={this.props.onGoalCompleted}
        />
      </Col>
    );
  }
}

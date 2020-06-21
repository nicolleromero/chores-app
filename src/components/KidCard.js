import React from 'react';
import { Col } from 'react-bootstrap';

import { ChoreList } from './ChoreList';
import { GoalLists } from './GoalLists';

export class KidCard extends React.Component {

  calculatePointsTotal() {
    return this.props.choreList
      .filter((chore) => chore.complete)
      .reduce((sum, chore) => sum + Number(chore.points), 0);
  }

  render() {
    let completedGoalsList = [];
    let incompleteGoalsList = [];

    let remainingPoints = this.calculatePointsTotal();
    let incomplete = false;

    for (let goal of this.props.goalList) {
      if (!incomplete && goal.points && remainingPoints >= goal.points) {
        completedGoalsList.unshift(goal);
        remainingPoints = remainingPoints - goal.points;
      } else {
        incompleteGoalsList.push(goal);
        incomplete = true;
      }
    }

    return (
      <Col xs={6}>
        <ChoreList
          assignee={this.props.assignee}
          choreList={this.props.choreList}
          onDelete={this.props.onDelete}
          onChange={this.props.onChange}
        />

        <GoalLists
          assignee={this.props.assignee}
          completedPoints={remainingPoints}
          completedGoalsList={completedGoalsList}
          incompleteGoalsList={incompleteGoalsList}
          onAddGoal={this.props.onAddGoal}
          onDeleteGoal={this.props.onDeleteGoal}
          onChangeGoal={this.props.onChangeGoal}
          onGoalCompleted={this.props.onGoalCompleted}
        />
      </Col>
    );
  }
}

import React from 'react';
import { Col } from 'react-bootstrap';

import { ChoreList } from './ChoreList';
import { GoalLists } from './GoalLists';

export function KidCard(props) {

  function calculatePointsTotal() {
    return props.choreList
      .filter((chore) => chore.complete)
      .reduce((sum, chore) => sum + Number(chore.points), 0);
  }

  let completedGoalsList = [];
  let incompleteGoalsList = [];

  let remainingPoints = calculatePointsTotal();
  let incomplete = false;

  for (let goal of props.goalList) {
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
        assignee={props.assignee}
        choreList={props.choreList}
        onDelete={props.onDelete}
        onChange={props.onChange}
      />

      <GoalLists
        assignee={props.assignee}
        completedPoints={remainingPoints}
        completedGoalsList={completedGoalsList}
        incompleteGoalsList={incompleteGoalsList}
        onAddGoal={props.onAddGoal}
        onDeleteGoal={props.onDeleteGoal}
        onChangeGoal={props.onChangeGoal}
        onGoalCompleted={props.onGoalCompleted}
      />
    </Col>
  );
}

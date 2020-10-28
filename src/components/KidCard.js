import React from 'react';
import { useSelector } from "react-redux";
import { Col } from 'react-bootstrap';

import { ChoreList } from './ChoreList';
import { GoalLists } from './GoalLists';

export function KidCard(props) {
  const choreList = useSelector(state => state.choreList);
  const goalList = useSelector(state => state.goalList);

  function calculatePointsTotal() {
    return choreList
      .filter((chore) => chore.assignee === props.assignee.id)
      .filter((chore) => chore.complete)
      .reduce((sum, chore) => sum + Number(chore.points), 0);
  }

  let completedGoalsList = [];
  let incompleteGoalsList = [];

  let remainingPoints = calculatePointsTotal();
  let incomplete = false;

  let filteredGoalList = goalList.filter((goal) => goal.assignee === props.assignee.id);

  for (let goal of filteredGoalList) {
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
      />
      <GoalLists
        assignee={props.assignee}
        completedPoints={remainingPoints}
        completedGoalsList={completedGoalsList}
        incompleteGoalsList={incompleteGoalsList}
      />
    </Col>
  );
}

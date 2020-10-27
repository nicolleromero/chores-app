import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Col } from 'react-bootstrap';
import { addGoal, deleteGoal, changeGoal, showConfettiFall } from "../redux/actions";

import { ChoreList } from './ChoreList';
import { GoalLists } from './GoalLists';

export function KidCard(props) {
  const dispatch = useDispatch();
  const choreList = useSelector(state => state.choreList);
  const goalList = useSelector(state => state.goalList);

  const handleAddGoal = (newGoal) => {
    dispatch(addGoal(newGoal));
  }

  const handleDeleteGoal = (goalId) => {
    dispatch(deleteGoal(goalId));
  };

  const handleChangeGoal = (goalId, key, value) => {
    dispatch(changeGoal(goalId, key, value));
  }

  function calculatePointsTotal() {
    return choreList
      .filter((chore) => chore.complete)
      .reduce((sum, chore) => sum + Number(chore.points), 0);
  }

  const handleGoalCompleted = () => {
    dispatch(showConfettiFall(true));
  }

  let completedGoalsList = [];
  let incompleteGoalsList = [];

  let remainingPoints = calculatePointsTotal();
  let incomplete = false;

  for (let goal of goalList) {
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
        onAddGoal={handleAddGoal}
        onDeleteGoal={handleDeleteGoal}
        onChangeGoal={handleChangeGoal}
        onGoalCompleted={handleGoalCompleted}
      />
    </Col>
  );
}

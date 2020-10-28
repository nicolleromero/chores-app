import React, { useEffect } from "react";
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addGoal } from "../redux/actions";
import { getCompletedGoalsList, getIncompleteGoalsList, getRemainingPoints } from '../redux/selectors'


import { Goal } from './Goal';
import { GoalProgressBar } from './GoalProgressBar';
import './GoalLists.css';

export function GoalLists(props) {
  const dispatch = useDispatch();
  const completedGoalsList = useSelector((state) => getCompletedGoalsList(state, props.assignee.id));
  const incompleteGoalsList = useSelector((state) => getIncompleteGoalsList(state, props.assignee.id));
  const remainingPoints = useSelector((state) => getRemainingPoints(state, props.assignee.id));

  function handleAddGoal(newGoal) {
    dispatch(addGoal(newGoal));
  }

  useEffect(() => {
    if (!incompleteGoalsList.length) {
      const newGoal = {
        id: Math.random().toString(36).slice(2),
        value: '',
        assignee: props.assignee.id,
        complete: false,
        points: 0,
      };

      handleAddGoal(newGoal);
    }
  }, [incompleteGoalsList]);

  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <h4 className="chore-maintitle text-center">
          <span role="img" aria-label="rocket">🚀</span> Current Goal
          </h4>
      </div>
      <div className="card-body text-center">
        <ListGroup variant="flush">
          {incompleteGoalsList.map((goal, index) => {
            return (index === 0 || goal.value) && (
              <React.Fragment key={goal.id}>
                <Goal
                  className="align-items-center"
                  key={goal.id}
                  goal={goal}
                />
                {index === 0 && (
                  <div className="card-body text-center">
                    <GoalProgressBar
                      className="align-items-center"
                      percentage={goal.points ? remainingPoints / goal.points : 0}
                    />
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </ListGroup>
      </div>

      {completedGoalsList.length > 0 && (
        <div className="card-body text-center">
          <ListGroup variant="flush">
            <div className="align-text-center completedgoals-title">
              Completed goals
            </div>
            {completedGoalsList.map((goal, index) => {
              return (
                <div key={index}>
                  <Goal
                    key={goal.id}
                    goal={goal}
                  />
                  {/* Added logic to show 100% bar for first goal in completed list */}
                  {index === 0 && incompleteGoalsList[0] && !incompleteGoalsList[0].points && (
                    <div className="card-body text-center">
                      <GoalProgressBar
                        className="align-items-center"
                        percentage={1}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </ListGroup>
        </div>
      )}
    </div>
  );
}

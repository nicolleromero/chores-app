import React, { useEffect } from "react";
import { ListGroup } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { addGoal, showConfettiFall } from "../redux/actions";

import { Goal } from './Goal';
import { GoalProgressBar } from './GoalProgressBar';
import './GoalLists.css';

export function GoalLists(props) {
  const dispatch = useDispatch();

  function handleGoalCompleted() {
    dispatch(showConfettiFall(true));
  }

  function handleAddGoal(newGoal) {
    dispatch(addGoal(newGoal));
  }

  useEffect(() => {
    if (!props.incompleteGoalsList.length) {
      const newGoal = {
        id: Math.random().toString(36).slice(2),
        value: '',
        assignee: props.assignee.id,
        complete: false,
        points: 0,
      };

      handleAddGoal(newGoal);
    }
  }, [props.incompleteGoalsList]);

  function componentDidUpdate(prevProps) {
    if (props.completedGoalsList.length > prevProps.completedGoalsList.length) {
      handleGoalCompleted();
    }
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <h4 className="chore-maintitle text-center">
          <span role="img" aria-label="rocket">🚀</span> Current Goal
          </h4>
      </div>
      <div className="card-body text-center">
        <ListGroup variant="flush">
          {props.incompleteGoalsList.map((goal, index) => {
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
                      percentage={goal.points ? props.completedPoints / goal.points : 0}
                    />
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </ListGroup>
      </div>

      {props.completedGoalsList.length > 0 && (
        <div className="card-body text-center">
          <ListGroup variant="flush">
            <div className="align-text-center completedgoals-title">
              Completed goals
            </div>
            {props.completedGoalsList.map((goal, index) => {
              return (
                <div>
                  <Goal
                    key={goal.id}
                    goal={goal}
                  />
                  {/* Added logic to show 100% bar for first goal in completed list */}
                  {index === 0 && props.incompleteGoalsList[0] && !props.incompleteGoalsList[0].points && (
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

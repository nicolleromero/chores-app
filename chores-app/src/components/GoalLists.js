import React from "react";
import FlipMove from 'react-flip-move';
import { ListGroup } from 'react-bootstrap';

import { Goals } from './Goals';
import { GoalProgressBar } from './GoalProgressBar';
import './GoalLists.css';

export class GoalLists extends React.Component {

  render() {
    let completedGoalsList = [];
    let incompleteGoalsList = [];

    let remainingPoints = this.props.completedPoints;

    for (let goal of this.props.goalList) {
      if (goal.points && remainingPoints - goal.points >= 0) {
        completedGoalsList.push(goal);
        remainingPoints = remainingPoints - goal.points;
      } else {
        incompleteGoalsList.push(goal);
      }
    }

    if (!incompleteGoalsList.length) {
      incompleteGoalsList.push(null);
    }

    return (
      <div class="card shadow-sm">
        <div class="card-header">
          <h4 class="chore-maintitle text-center">
            🚀 Current Goal
          </h4>
        </div>
        <div class="card-body text-center">
          <ListGroup variant="flush">
            <FlipMove duration={350} easing="ease-out">
              {incompleteGoalsList.map((goal, index) => {
                return (
                  <div>
                    <Goals
                      assignee={this.props.assignee}
                      goal={goal}
                      completedPoints={remainingPoints}
                      onAddGoal={this.props.onAddGoal}
                      onChangeGoal={this.props.onChangeGoal}
                      onGoalCompleted={this.props.onGoalCompleted}
                    />
                    {index === 0 && goal && (
                      <div class="card-body text-center">
                        <GoalProgressBar
                          className="align-items-center"
                          percentage={remainingPoints / goal.points}
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </FlipMove>
          </ListGroup>
        </div>

        <div class="card-body text-center">
          <ListGroup variant="flush">
            <div className="align-text-center completedgoals-title">
              Completed goals
            </div>
            <FlipMove duration={350} easing="ease-out">
              {completedGoalsList.map(item => {
                return (
                  <Goals
                    assignee={this.props.assignee}
                    goal={item}
                    completedGoalsList={this.props.completedGoalsList}
                    incompleteGoalsList={this.props.incompleteGoalsList}
                    completedPoints={this.props.completedPoints}
                    onAddGoal={this.props.onAddGoal}
                    onChangeGoal={this.props.onChangeGoal}
                    onGoalCompleted={this.props.onGoalCompleted}
                  />
                );
              })}
            </FlipMove>
          </ListGroup>
        </div>
      </div>
    );
  }

}
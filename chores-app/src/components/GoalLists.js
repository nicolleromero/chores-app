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
    let incomplete = false;

    for (let goal of this.props.goalList) {
      if (!incomplete && goal.points && remainingPoints >= goal.points) {
        completedGoalsList.push(goal);
        remainingPoints = remainingPoints - goal.points;
      } else {
        incompleteGoalsList.push(goal);
        incomplete = true;
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
            {/* <FlipMove duration={350} easing="ease-out"> */}
            {incompleteGoalsList.map((goal, index) => {
              return (index === 0 || goal.value) && (
                <div>
                  <Goals
                    key={goal ? goal.id : index}
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
                        percentage={goal.points ? remainingPoints / goal.points : 0}
                      />
                    </div>
                  )}
                </div>
              )
            })}
            {/* </FlipMove> */}
          </ListGroup>
        </div>

        <div class="card-body text-center">
          <ListGroup variant="flush">
            <div className="align-text-center completedgoals-title">
              Completed goals
            </div>
            {/* <FlipMove duration={350} easing="ease-out"> */}
            {completedGoalsList.map((goal) => {
              return (
                <Goals
                  key={goal.id}
                  assignee={this.props.assignee}
                  goal={goal}
                  completedGoalsList={this.props.completedGoalsList}
                  incompleteGoalsList={this.props.incompleteGoalsList}
                  completedPoints={this.props.completedPoints}
                  onAddGoal={this.props.onAddGoal}
                  onChangeGoal={this.props.onChangeGoal}
                  onGoalCompleted={this.props.onGoalCompleted}
                />
              );
            })}
            {/* </FlipMove> */}
          </ListGroup>
        </div>
      </div>
    );
  }

}
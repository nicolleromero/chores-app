import React from "react";
import FlipMove from 'react-flip-move';
import { ListGroup } from 'react-bootstrap';

import { Goals } from './Goals'
import './GoalLists.css';

export class GoalLists extends React.Component {

  render() {
    let completedGoalsList = [];
    let uncompletedGoalsList = [];

    for (let item of this.props.goalList) {
      if (item['complete']) {
        completedGoalsList.push(item);
      } else {
        uncompletedGoalsList.push(item);
      }
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
              <Goals
                assignee={this.props.assignee}
                goal={uncompletedGoalsList[0]}
                completedPoints={this.props.completedPoints}
                onAddGoal={this.props.onAddGoal}
                onChangeGoal={this.props.onChangeGoal}
                onGoalCompleted={this.props.onGoalCompleted}
              />
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
import React from "react";
import { ListGroup } from 'react-bootstrap';

import { Goal } from './Goal';
import { GoalProgressBar } from './GoalProgressBar';
import './GoalLists.css';

export class GoalLists extends React.Component {

  addGoal() {
    const newGoal = {
      id: Math.random().toString(36).slice(2),
      value: '',
      assignee: this.props.assignee.id,
      complete: false,
      points: 0,
    }

    this.props.onAddGoal(newGoal);
  }

  componentDidMount() {
    if (!this.props.incompleteGoalsList.length) {
      this.addGoal();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.completedGoalsList.length > prevProps.completedGoalsList.length) {
      this.props.onGoalCompleted();
    }
    if (!this.props.incompleteGoalsList.length) {
      this.addGoal();
    }
  }

  render() {
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
            {this.props.incompleteGoalsList.map((goal, index) => {
              return (index === 0 || goal.value) && (
                <div>
                  <Goal
                    key={goal.id}
                    assignee={this.props.assignee}
                    goal={goal}
                    onChange={this.props.onChangeGoal}
                    onDelete={this.props.onDeleteGoal}
                  />
                  {index === 0 && (
                    <div class="card-body text-center">
                      <GoalProgressBar
                        className="align-items-center"
                        percentage={goal.points ? this.props.completedPoints / goal.points : 0}
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
            {this.props.completedGoalsList.map((goal) => {
              return (
                <Goal
                  key={goal.id}
                  assignee={this.props.assignee}
                  goal={goal}
                  onDeleteGoal={this.props.onDeleteGoal}
                  onChangeGoal={this.props.onChangeGoal}
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
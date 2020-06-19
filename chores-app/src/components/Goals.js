import React from 'react';
import { GoalProgressBar } from './GoalProgressBar'

import './Goals.css';

export class Goals extends React.Component {

  componentDidMount() {
    if (!this.props.goal) {
      this.addGoal();
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.goal) {
      this.addGoal();
      return;
    }

    if (
      this.props.completedPoints >= this.props.goal.points &&
      prevProps.goal &&
      prevProps.goal.points &&
      prevProps.completedPoints < prevProps.goal.points
    ) {
      this.props.onGoalCompleted();
    }
  }

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

  render() {
    if (!this.props.goal) {
      return null;
    }

    return (
      <React.Fragment>
        <form
          class="w-full max-w-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <div class="flex md:items-center border-b border-b-2 border-blue-500 py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Type goal here"
              value={this.props.goal.value}
              onChange={(e) => this.props.onChangeGoal(this.props.goal.id, 'value', e.target.value)}
            />
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none points-input"
              type="text"
              placeholder="Points"
              value={this.props.goal.points || ''}
              onChange={(e) => this.props.onChangeGoal(this.props.goal.id, 'points', Number(e.target.value))}
            />
          </div>
        </form>
        <div class="card-body text-center">
          {/* {this.props.goal && this.props.completedGoalsList && !this.props.completedGoalsList.includes(this.props.goal.id) && ( */}
          <GoalProgressBar
            className="align-items-center"
            percentage={this.props.completedPoints / this.props.goal.points}
            onGoalCompleted={(e) => this.props.updateGoalComplete(this.props.goal.id)}
          />
          {/* )} */}
        </div>
      </React.Fragment>
    );
  }
}

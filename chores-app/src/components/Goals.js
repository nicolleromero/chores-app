import React from 'react';
import { Button, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import { GoalProgressBar } from './GoalProgressBar'
import FlipMove from 'react-flip-move';

import './Goals.css';

export class Goals extends React.Component {

  componentDidMount() {
    if (!this.props.goal) {
      this.addGoal();
    }
  }

  addGoal() {
    const newGoal = {
      id: Math.random().toString(36).slice(2),
      value: '',
      assignee: this.props.assignee,
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
      <div>
        <div class="card-header">

          <h4 class="chore-maintitle text-center">
            🚀 Current Goal</h4>
        </div>
        <div class="card-body">
          <InputGroup className="align-items-center">
            <FormControl
              type="text"
              placeholder="Type goal here"
              value={this.props.goal.value}
              onChange={(e) => this.props.onChangeGoal(this.props.goal.id, 'value', e.target.value)}
            />
            <FormControl
              type="text"
              placeholder="Total Points to Achieve Goal"
              value={this.props.goal.points}
              onChange={(e) => this.props.onChangeGoal(this.props.goal.id, 'points', e.target.value)}
            />
          </InputGroup>
        </div>
        <div class="card-body text-center">
          <GoalProgressBar
            className="align-items-center"
            percentage={this.props.completedPoints / this.props.goal.points}
          />
        </div>
      </div >
    );
  }
}

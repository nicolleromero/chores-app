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
            <svg class="inline-block fill-current text-grey h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z" /></svg>
            &nbsp;&nbsp;
            Current Goal</h4>
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

import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { GoalProgressBar } from './GoalProgressBar'


export class Goals extends React.Component {
  state = {
    inputGoal: '',
    inputGoalPoints: '',
  }

  updateGoal(value) {
    this.setState({
      inputGoal: value,
    });
  }

  updateGoalPoints(value) {
    this.setState({
      inputGoalPoints: value,
    });
  }

  render() {
    return (

      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal text-center">{this.props.assignee}'s Goals</h4>
        </div>
        <div class="card-body">
          <InputGroup className="align-items-center">
            <FormControl
              type="text"
              placeholder="Type goal here"
              value={this.state.inputGoal}
              onChange={(e) => this.updateGoal(e.target.value)}
            />
            <FormControl
              type="text"
              placeholder="Total Points to Achieve Goal"
              value={this.state.inputGoalPoints}
              onChange={(e) => this.updateGoalPoints(e.target.value)}
            />
          </InputGroup>
        </div>
        <div class="card-body">
          <GoalProgressBar
            percentage={this.props.completedPoints / this.state.inputGoalPoints}
          />
        </div>
      </div>

    );
  }
}
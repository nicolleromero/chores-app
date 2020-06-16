import React from "react";
import FlipMove from 'react-flip-move';
import { ListGroup } from 'react-bootstrap';

import { Goals } from './Goals'

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
        <ListGroup>
          <FlipMove duration={350} easing="ease-out">
            <Goals
              assignee={this.props.assignee}
              goal={uncompletedGoalsList[0]}
              completedPoints={this.props.completedPoints}
              onAddGoal={this.props.onAddGoal}
              onChangeGoal={this.props.onChangeGoal}
            />
          </FlipMove>
        </ListGroup>
      </div>
    );
  }

}
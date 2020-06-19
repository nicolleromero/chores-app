import React from 'react';

import { ProgressBar } from 'react-bootstrap';

export class GoalProgressBar extends React.Component {

  handleGoalTotal(percent) {
    let now = Math.round(percent * 100);
    if (!now) {
      return 0;
    } else if (now >= 100) {
      return 100;
    } else {
      return Number(now);
    }
  }

  render() {
    const now = this.handleGoalTotal(this.props.percentage);
    return (
      <ProgressBar animated now={now} label={`${now}%`} />
    );
  }
}
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
      return now;
    }
  }

  render() {
    const now = this.handleGoalTotal(this.props.percentage);
    // const now = Math.round(this.props.percentage * 100) || 0;
    const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
    return (
      <div style={{ width: 400 }}>
        {progressInstance}
      </div>
    );
  }
}
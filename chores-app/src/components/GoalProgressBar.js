import React from 'react';

import { ProgressBar } from 'react-bootstrap';

export class GoalProgressBar extends React.Component {

  handleGoalTotal() {

  }

  render() {
    const now = Math.round(this.props.percentage * 100) || 0;
    const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
    return (
      <div style={{ width: 400 }}>
        {progressInstance}
      </div>
    );
  }
}
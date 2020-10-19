import React from 'react';

import { ProgressBar } from 'react-bootstrap';

export function GoalProgressBar(props) {

  function handleGoalTotal(percent) {
    let now = Math.round(percent * 100);
    if (!now) {
      return 0;
    } else if (now >= 100) {
      return 100;
    } else {
      return Number(now);
    }
  }

  const now = handleGoalTotal(props.percentage);
  return (
    <ProgressBar animated now={now} label={`${now}%`} />
  );
}

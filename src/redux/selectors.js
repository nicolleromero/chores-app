// Status = done or undone
export function getChoreStatusList(state, assigneeId, done) {
  return getChoreList(state)
    .filter((chore) => chore.assignee === assigneeId)
    .filter((item) => item['complete'] === done);
}

export function getChoreList(state, assigneeId) {
  const list = state.choreList;

  return assigneeId
    ? list.filter((chore) => chore.assignee === assigneeId)
    : list;
}

export function getGoalList(state, assigneeId) {
  const list = state.goalList;

  return assigneeId
    ? list.filter((goal) => goal.assignee === assigneeId)
    : list;
}

export function getPointsTotal(state, assigneeId) {
  return getChoreList(state, assigneeId)
    .filter((chore) => chore.complete)
    .reduce((sum, chore) => sum + Number(chore.points), 0);
}

export function getCompletedGoalsList(state, assigneeId) {
  const list = getGoalList(state, assigneeId);
  let remainingPoints = getPointsTotal(state, assigneeId);
  const completedGoalsList = [];

  for (let goal of list) {
    if (goal.points && remainingPoints >= goal.points) {
      completedGoalsList.unshift(goal);
      remainingPoints = remainingPoints - goal.points;
    } else {
      break;
    }
  }

  return completedGoalsList;
}

export function getIncompleteGoalsList(state, assigneeId) {
  const list = getGoalList(state, assigneeId);
  const completedList = getCompletedGoalsList(state, assigneeId);

  return list.slice(completedList.length);
}

export function getRemainingPoints(state, assigneeId) {
  const points = getPointsTotal(state, assigneeId);
  const completedList = getCompletedGoalsList(state, assigneeId);
  const completedPoints = completedList.reduce((sum, goal) => sum + goal.points, 0);

  return points - completedPoints;
}

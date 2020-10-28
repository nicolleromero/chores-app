

export const getChoreList = state => state.choreList;

// Status = done or undone
export function getStatusList(state, assigneeId, done) {
  return getChoreList(state)
    .filter((chore) => chore.assignee === assigneeId)
    .filter((item) => item['complete'] === done);
}

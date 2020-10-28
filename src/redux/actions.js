import {
  ADD_BOARDNAME,
  ADD_ASSIGNEE,
  DELETE_ASSIGNEE,
  CHANGE_ASSIGNEE,
  ADD_CHORE,
  DELETE_CHORE,
  CHANGE_CHORE,
  ADD_GOAL,
  DELETE_GOAL,
  CHANGE_GOAL,
  SHOW_SETUPMODAL,
} from "./actionTypes";

export const setBoardName = (boardName) => {
  return {
    type: ADD_BOARDNAME,
    payload: boardName,
  };
}

export const addChore = (newChore) => {
  return {
    type: ADD_CHORE,
    payload: newChore,
  };
}

export const deleteChore = (itemId) => {
  return {
    type: DELETE_CHORE,
    payload: itemId,
  };
};

export const changeChore = (itemId, key, value) => {
  return {
    type: CHANGE_CHORE,
    payload: { itemId, key, value },
  };
}

export const addAssignee = (newAssignee) => {
  return {
    type: ADD_ASSIGNEE,
    payload: newAssignee,
  };
};

export const changeAssignee = (assigneeId, key, value) => {
  return {
    type: CHANGE_ASSIGNEE,
    payload: { assigneeId, key, value },
  };
}

export const deleteAssignee = (assigneeId) => {
  return {
    type: DELETE_ASSIGNEE,
    payload: assigneeId,
  };
};

export const addGoal = (newGoal) => {
  return {
    type: ADD_GOAL,
    payload: newGoal,
  };
}

export const deleteGoal = (goalId) => {
  return {
    type: DELETE_GOAL,
    payload: goalId,
  };
};

export const changeGoal = (goalId, key, value) => {
  return {
    type: CHANGE_GOAL,
    payload: { goalId, key, value },
  };
}

export const showSetupModal = () => {
  return {
    type: SHOW_SETUPMODAL,
    payload: true,
  };
}

export const closeSetup = () => {
  return {
    type: SHOW_SETUPMODAL,
    payload: false,
  };
}
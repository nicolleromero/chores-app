import { combineReducers } from "redux";
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
  SHOW_SETUPMODAL
} from "../actionTypes";

export const INITIAL_STATE = {
  boardName: '',
  assignees: [],
  choreList: [],
  goalList: [],
  showConfetti: false,
  showSetupModal: false,
}

// import visibilityFilter from "./visibilityFilter";
// import todos from "./todos";

// export default combineReducers({ todos, visibilityFilter });

const STORAGE_KEY = 'ChoresApp';

function getLocalStorage() {
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value ? JSON.parse(value) : {};
}

function setLocalStorage(state) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export const initialState = {
  INITIAL_STATE,
  ...getLocalStorage()
}

export function reducer(state = initialState, action) {

  if (action.type === ADD_BOARDNAME) {
    const newBoardName = action.payload;

    return {
      ...state,
      boardName: newBoardName,
    };

  } else if (action.type === SHOW_SETUPMODAL) {
    const newState = action.payload;

    return {
      ...state,
      showSetupModal: newState,
    };

  } else if (action.type === ADD_ASSIGNEE) {
    const newAssignee = action.payload;

    return {
      ...state,
      assignees: [...state.assignees, newAssignee],
    };

  } else if (action.type === DELETE_ASSIGNEE) {
    const assigneeId = action.payload;
    const newAssignees = state.assignees.filter((c) => c.id !== assigneeId);

    return {
      ...state,
      assignees: newAssignees,
    };

  } else if (action.type === CHANGE_ASSIGNEE) {
    const { assigneeId, key, value } = action.payload;
    const newAssignees = state.assignees.map((assignee) => {
      if (assignee.id === assigneeId) {
        return { ...assignee, [key]: value };
      }
      return assignee;
    });

    return {
      ...state,
      assignees: newAssignees,
    };

  } else if (action.type === ADD_CHORE) {
    const newChore = action.payload;

    return {
      ...state,
      choreList: [...state.choreList, newChore],
    };

  } else if (action.type === DELETE_CHORE) {
    const itemId = action.payload;
    const newChoreList = state.choreList.filter((c) => c.id !== itemId);

    return {
      ...state,
      choreList: newChoreList,
    };

  } else if (action.type === CHANGE_CHORE) {
    const { itemId, key, value } = action.payload;
    const newChoreList = state.choreList.map((listItem) => {
      if (listItem.id === itemId) {
        return { ...listItem, [key]: value };
      }
      return listItem;
    });

    return {
      ...state,
      choreList: newChoreList,
    };

  } else if (action.type === ADD_GOAL) {
    const newGoal = action.payload;

    return {
      ...state,
      goalList: [...state.goalList, newGoal],
    };

  } else if (action.type === DELETE_GOAL) {
    const goalId = action.payload;
    const newGoalList = state.goalList.filter((c) => c.id !== goalId);

    return {
      ...state,
      goalList: newGoalList,
    };

  } else if (action.type === CHANGE_GOAL) {
    const { goalId, key, value } = action.payload;
    const newGoalList = state.goalList.map((goal) => {
      if (goal.id === goalId) {
        return { ...goal, [key]: value };
      }
      return goal;
    });

    return {
      ...state,
      goalList: newGoalList,
    };
  }

  return state;
}
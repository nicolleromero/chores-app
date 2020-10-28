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
  showSetup: false,
}

export function reducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case ADD_BOARDNAME: {
      const newBoardName = action.payload;

      return {
        ...state,
        boardName: newBoardName,
      };
    }

    case SHOW_SETUPMODAL: {
      const newState = action.payload;

      return {
        ...state,
        showSetup: newState,
      };
    }

    case ADD_ASSIGNEE: {
      const newAssignee = action.payload;

      return {
        ...state,
        assignees: [...state.assignees, newAssignee],
      };
    }

    case DELETE_ASSIGNEE: {
      const assigneeId = action.payload;
      const newAssignees = state.assignees.filter((c) => c.id !== assigneeId);

      return {
        ...state,
        assignees: newAssignees,
      };
    }

    case CHANGE_ASSIGNEE: {
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
    }

    case ADD_CHORE: {
      const newChore = action.payload;

      return {
        ...state,
        choreList: [...state.choreList, newChore],
      };
    }

    case DELETE_CHORE: {
      const itemId = action.payload;
      const newChoreList = state.choreList.filter((c) => c.id !== itemId);

      return {
        ...state,
        choreList: newChoreList,
      };
    }

    case CHANGE_CHORE: {
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
    }

    case ADD_GOAL: {
      const newGoal = action.payload;

      return {
        ...state,
        goalList: [...state.goalList, newGoal],
      };
    }

    case DELETE_GOAL: {
      const goalId = action.payload;
      const newGoalList = state.goalList.filter((c) => c.id !== goalId);

      return {
        ...state,
        goalList: newGoalList,
      };
    }

    case CHANGE_GOAL: {
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

    default:
      return state;
  }
}
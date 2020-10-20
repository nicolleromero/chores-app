import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Confetti from 'react-confetti';

import { Title } from './Title';
import { SetupModal } from './SetupModal';
import { KidCard } from './KidCard';
import { AddChore } from './AddChore';

const STORAGE_KEY = 'ChoresApp';

function getLocalStorage() {
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value ? JSON.parse(value) : {};
}

function setLocalStorage(state) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

const initialState = {
  boardName: '',
  assignees: [],
  choreList: [],
  goalList: [],
  showConfetti: false,
  showSetupModal: false,
  ...getLocalStorage()
}

const ADD_BOARDNAME = 'ADD_BOARDNAME';
const ADD_ASSIGNEE = 'ADD_ASSIGNEE';
const DELETE_ASSIGNEE = 'DELETE_ASSIGNEE';
const CHANGE_ASSIGNEE = 'CHANGE_ASSIGNEE';
const ADD_CHORE = 'ADD_CHORE';
const DELETE_CHORE = 'DELETE_CHORE';
const CHANGE_CHORE = 'CHANGE_CHORE';
const ADD_GOAL = 'ADD_GOAL';
const DELETE_GOAL = 'DELETE_GOAL';
const CHANGE_GOAL = 'CHANGE_GOAL';
const SHOW_CONFETTI = 'SHOW_CONFETTI';
const SHOW_SETUPMODAL = 'SHOW_SETUPMODAL';


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

export const App = () => {
  const dispatch = useDispatch();
  const boardName = useSelector(state => state.boardName);
  const assignees = useSelector(state => state.assignees);
  const choreList = useSelector(state => state.choreList);
  const goalList = useSelector(state => state.goalList);
  const showConfetti = useSelector(state => state.showConfetti);
  const showSetupModal = useSelector(state => state.showSetupModal);

  useEffect(() => {
    if (!assignees.length) {
      handleSetup();
    }
  }, []);

  const componentDidUpdate = () => {
    setLocalStorage(reducer());
  }

  const handleSetBoardName = (chosenName) => {
    dispatch({
      type: ADD_BOARDNAME,
      payload: boardName,
    });
  }

  const handleAddItem = (newChore) => {
    dispatch({
      type: ADD_CHORE,
      payload: newChore,
    });
  }

  const handleAddAssignee = (newAssignee) => {
    dispatch({
      type: ADD_ASSIGNEE,
      payload: newAssignee,
    });
  };

  const handleChangeAssignee = (assigneeId, key, value) => {
    dispatch({
      type: CHANGE_ASSIGNEE,
      payload: { assigneeId, key, value },
    });
  }

  const handleDeleteAssignee = (assigneeId) => {
    dispatch({
      type: DELETE_ASSIGNEE,
      payload: assigneeId,
    });
  };

  const handleAddGoal = (newGoal) => {
    dispatch({
      type: ADD_GOAL,
      payload: newGoal,
    });
  }

  const handleDeleteGoal = (goalId) => {
    dispatch({
      type: DELETE_GOAL,
      payload: goalId,
    });
  };

  const handleChangeGoal = (goalId, key, value) => {
    dispatch({
      type: CHANGE_GOAL,
      payload: { goalId, key, value },
    });
  }

  const handleDeleteChore = (itemId) => {
    dispatch({
      type: DELETE_CHORE,
      payload: itemId,
    });
  };

  const handleChange = (itemId, key, value) => {
    dispatch({
      type: CHANGE_CHORE,
      payload: { itemId, key, value },
    });
  }

  const handleGoalCompleted = () => {
    dispatch({
      type: SHOW_CONFETTI,
      payload: true,
    });
  }

  const handleConfettiComplete = () => {
    dispatch({
      type: SHOW_CONFETTI,
      payload: false,
    });
  }

  const handleSetup = () => {
    dispatch({
      type: SHOW_SETUPMODAL,
      payload: true,
    });
  }

  const handleCloseSetup = () => {
    dispatch({
      type: SHOW_SETUPMODAL,
      payload: false,
    });
  }

  return (
    <React.Fragment>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
        <img className="inline-block h-8 w-8 rounded-full" src="https://github.com/nicolleromero.png?size=40" alt="" />
        <div className="mr-md-auto navbar-subtitle">&nbsp;&nbsp;NR Productions</div>
        <nav className="my-2 my-md-0 mr-md-3"></nav>
        <button
          className="flex"
          onClick={handleSetup}
        >
          <svg className="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.783 12c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 0 0-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 0 0-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615-.58.172-1.14.403-1.671.691.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 0 0 3.6 9.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643.173.58.404 1.14.691 1.672 1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711.532.288 1.092.52 1.672.693.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 0 0 1.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883.287-.532.52-1.092.692-1.672-.973-.569-1.619-1.395-1.619-2.442zM12 15.652a3.653 3.653 0 1 1 0-7.306 3.653 3.653 0 0 1 0 7.306z" fillRule="nonzero" /></svg>
        </button>
      </div>
      <div className="container">
        <div className="row">
          <Title
            boardName={boardName}
          />
        </div>
        <div>
          <AddChore
            assignees={assignees}
            onAddItem={handleAddItem}
          />
        </div>
      </div>


      <div className="container">
        <div className="row">
          {assignees.map((assignee) => {
            return (
              <KidCard
                assignee={assignee}
                key={assignee.id}
                choreList={choreList.filter((chore) => {
                  return chore.assignee === assignee.id;
                })}
                goalList={goalList.filter((goal) => {
                  return goal.assignee === assignee.id;
                })}
                onDelete={handleDeleteChore}
                onChange={handleChange}
                onAddGoal={handleAddGoal}
                onDeleteGoal={handleDeleteGoal}
                onChangeGoal={handleChangeGoal}
                onGoalCompleted={handleGoalCompleted}
              />
            )
          })}
        </div>
      </div>


      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal"><br /></h5>
        <nav className="my-2 my-md-0 mr-md-3"></nav>
      </div>

      {
        showConfetti && (
          <Confetti
            recycle={false}
            style={{ position: 'fixed' }}
            numberOfPieces={1500}
            onConfettiComplete={handleConfettiComplete}
          />
        )
      }
      <SetupModal
        show={showSetupModal}
        assignees={assignees}
        onHide={handleCloseSetup}
        onDelete={handleDeleteAssignee}
        onChange={handleChangeAssignee}
        onAddAssignee={handleAddAssignee}
        boardName={boardName}
        onChangeBoardName={handleSetBoardName}
      />
    </React.Fragment >
  )
};

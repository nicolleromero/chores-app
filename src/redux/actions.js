import { useSelector, useDispatch } from "react-redux";
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
} from "./actionTypes";



export const setBoardName = (boardName) => {
  return {
    type: ADD_BOARDNAME,
    payload: boardName,
  };
}

// export const handleAddItem = (newChore) => {
//   dispatch({
//     type: ADD_CHORE,
//     payload: newChore,
//   });
// }

// export const handleAddAssignee = (newAssignee) => {
//   dispatch({
//     type: ADD_ASSIGNEE,
//     payload: newAssignee,
//   });
// };

// export const handleChangeAssignee = (assigneeId, key, value) => {
//   dispatch({
//     type: CHANGE_ASSIGNEE,
//     payload: { assigneeId, key, value },
//   });
// }

// export const handleDeleteAssignee = (assigneeId) => {
//   dispatch({
//     type: DELETE_ASSIGNEE,
//     payload: assigneeId,
//   });
// };

// export const handleAddGoal = (newGoal) => {
//   dispatch({
//     type: ADD_GOAL,
//     payload: newGoal,
//   });
// }

// export const handleDeleteGoal = (goalId) => {
//   dispatch({
//     type: DELETE_GOAL,
//     payload: goalId,
//   });
// };

// export const handleChangeGoal = (goalId, key, value) => {
//   dispatch({
//     type: CHANGE_GOAL,
//     payload: { goalId, key, value },
//   });
// }

// export const handleDeleteChore = (itemId) => {
//   dispatch({
//     type: DELETE_CHORE,
//     payload: itemId,
//   });
// };

// export const handleChange = (itemId, key, value) => {
//   dispatch({
//     type: CHANGE_CHORE,
//     payload: { itemId, key, value },
//   });
// }

// // export const handleGoalCompleted = () => {
// //   dispatch({
// //     type: SHOW_CONFETTI,
// //     payload: true,
// //   });
// // }

// // export const handleConfettiComplete = () => {
// //   dispatch({
// //     type: SHOW_CONFETTI,
// //     payload: false,
// //   });
// // }

// export const handleSetup = () => {
//   dispatch({
//     type: SHOW_SETUPMODAL,
//     payload: true,
//   });
// }

// export const handleCloseSetup = () => {
//   dispatch({
//     type: SHOW_SETUPMODAL,
//     payload: false,
//   });
// }
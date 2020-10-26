import { createStore } from "redux";
import { reducer, INITIAL_STATE } from "./reducers/combinedReducers";

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

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  setLocalStorage(store.getState());
});

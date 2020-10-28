import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Title } from './Title';
import { SetupModal } from './SetupModal';
import { KidCard } from './KidCard';
import { AddChore } from './AddChore';
import { ConfettiAction } from './ConfettiAction';
import { showSetupModal } from "../redux/actions";

import './App.css';

export const App = () => {
  const dispatch = useDispatch();
  const showSetup = useSelector(state => state.showSetup);
  const assignees = useSelector(state => state.assignees);

  useEffect(() => {
    if (!assignees.length) {
      handleSetup();
    }
  }, []);

  const handleSetup = () => {
    dispatch(showSetupModal());
  }

  return (
    <React.Fragment>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
        <img className="inline-block h-8 w-8 rounded-full" src="https://github.com/nicolleromero.png?size=40" alt="" />
        <div className="mr-md-auto avitar">NR Productions</div>
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
          <Title />
        </div>
        <div>
          <AddChore />
        </div>
      </div>


      <div className="container">
        <div className="row">
          {assignees.map((assignee) => {
            return (
              <KidCard
                assignee={assignee}
                key={assignee.id}
              />
            )
          })}
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <nav className="my-2 my-md-0 mr-md-3"></nav>
      </div>
      <ConfettiAction />
      <SetupModal
        showSetup={showSetup}
      />
    </React.Fragment >
  )
};

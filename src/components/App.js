import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Title } from './Title';
import { SetupModal } from './SetupModal';
import { KidCard } from './KidCard';
import { AddChore } from './AddChore';
import { ConfettiAction } from './ConfettiAction';
import { showSetupModal } from "../redux/actions";
import { gear } from '../img/gear';

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
          <svg className="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={gear} fillRule="nonzero" /></svg>
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

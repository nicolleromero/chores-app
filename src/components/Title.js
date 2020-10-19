import React from 'react';

import './Title.css';

function getCurrentWeek() {
  let newDate = new Date();
  newDate.setDate(newDate.getDate() - newDate.getDay());

  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${month}/${date}/${year}`;
}


export function Title(props) {

  return (
    <React.Fragment>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="app-title">🗒 {props.boardName || 'Family'} Chores List</h1>
        <p className="app-subtitle">Week of {getCurrentWeek()}</p>
      </div>
    </React.Fragment>
  );
}

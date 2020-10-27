import React from "react";
import FlipMove from 'react-flip-move';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from "react-redux";

import { Chore } from './Chore'

import './ChoreList.css';

export function ChoreList(props) {
  const assignees = useSelector(state => state.assignees);
  const choreList = useSelector(state => state.choreList);


  function formatChoreListTitles(list, completed) {
    let title = "";

    if (list.length !== 1) {
      if (!completed) {
        title = `${list.length} chores to do`;
      } else {
        title = `${list.length} chores completed`;
      }
    } else {
      if (!completed) {
        title = `1 chore to do`;
      } else {
        title = `1 chore completed`;
      }
    }
    return title;
  }

  let doneList = [];
  let undoneList = [];

  doneList = choreList
    .filter((item) => item['complete'])
    .filter((chore) => chore.assignee === props.assignee.id);
  undoneList = choreList
    .filter((item) => !item['complete'])
    .filter((chore) => chore.assignee === props.assignee.id);

  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <h4 className="chore-maintitle text-center">
          <span role="img" aria-label="broom">🧹</span> {props.assignee.name}'s Chores
          </h4>
      </div>
      <div className="card-body text-center">
        <ListGroup variant="flush">

          <div className="align-text-center chore-title">
            {formatChoreListTitles(undoneList, false)}</div>
          <FlipMove duration={350} easing="ease-out">
            {undoneList.map(item => {
              return (
                <Chore
                  item={item}
                  key={item.id}
                />
              );
            })}
          </FlipMove>
        </ListGroup>
      </div>
      <div className="card-body text-center">
        <ListGroup variant="flush">
          <div className="align-text-center chore-title">
            {formatChoreListTitles(doneList, true)}</div>
          <FlipMove duration={350} easing="ease-out">
            {doneList.map(item => {
              return (
                <Chore
                  item={item}
                  key={item.id}
                />
              );
            })}
          </FlipMove>
        </ListGroup>
      </div>
    </div>
  );
}

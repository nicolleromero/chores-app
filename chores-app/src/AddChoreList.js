import React from 'react';
import AddChore from "./AddChore";
import './AddChoreList.css';

export class AddChoreList extends React.Component {

  formatChoreListTitles(list, completed) {
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

  render() {
    let doneList = [];
    let undoneList = [];

    for (let item of this.props.list) {
      if (item['complete']) {
        doneList.push(item);
      } else {
        undoneList.push(item);
      }
    }

    return (
      <div className="outer-list-container">
        <h1 className="list-title">CHORES</h1>
          <div className="inner-list-container>">
            <h1 className="list-text">{this.formatChoreListTitles(undoneList, false)}</h1>
          </div>
          <div className="inner-list-container>">
            <h1 className="list-text">{this.formatChoreListTitles(doneList, true)}</h1>
          </div>
      </div>

    );
  }
}
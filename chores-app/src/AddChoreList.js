import React from 'react';

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
      <div>
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">{this.props.assignee}'s Chores</h4>
        </div>
        <div class="card-body">
          <h1 className="list-text">{this.formatChoreListTitles(undoneList, false)}</h1>
          <h1 className="list-text">{this.formatChoreListTitles(doneList, true)}</h1>
        </div>
        <ul>
          {this.props.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  className="btn btn-floating"
                  onClick={() => this.deleteItem(item.id)}
                >
                  <i class="material-icons">X</i>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
import React from 'react';


export class AddKidList extends React.Component {

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
          <h4 class="my-0 font-weight-normal">CHORES</h4>
        </div>
        <div class="card-body">
          <h1 className="list-text">{this.formatChoreListTitles(undoneList, false)}</h1>
          <h1 className="list-text">{this.formatChoreListTitles(doneList, true)}</h1>
        </div>
      </div>
    );
  }
}
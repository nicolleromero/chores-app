import React from 'react';

import { Title } from './Title';
import { AddChore } from './AddChore';
import { ChoreList } from './ChoreList';
// import { AddProgressBar } from './AddProgressBar';
// import { DisplayGoal } from './DisplayGoal';
// import { Settings } from './Settings';

import './App.css';

export class App extends React.Component {
  state = {
    assignees: ['Sam', 'Ari'],
    list: []
  }

  addItemToList(newItem) {
    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
    })
  }

  handleDelete = (itemId) => {
    const list = this.state.list.filter((c) => c.id !== itemId);
    this.setState({ list });
  };

  render() {
    return (
      <React.Fragment>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 class="my-0 mr-md-auto font-weight-normal">NR Productions</h5>
          <nav class="my-2 my-md-0 mr-md-3"></nav>
          <button class="btn btn-outline-primary">Setup</button>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <Title name="Romero" date="6/6/2020" />
            </div>
            <div class="col">
              <div class="card mb-4 shadow-sm">
                <AddChore
                  assignees={this.state.assignees}
                  onAddItem={(item) => this.addItemToList(item)}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            {this.state.assignees.map((kid) => {
              return (
                <ChoreList
                  assignee={kid}
                  list={this.state.list.filter((item) => {
                    return item.assignee === kid;
                  })}
                  onDelete={this.handleDelete}
                />
              )
            })}
          </div>
        </div>

      </React.Fragment>
    );
  }
}

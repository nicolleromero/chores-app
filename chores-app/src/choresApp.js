import React from 'react';

import { Title } from './Title';
import { AddChore } from './AddChore';
import { AddChoreList } from './AddChoreList';
// import { AddProgressBar } from './AddProgressBar';
// import { DisplayGoal } from './DisplayGoal';
// import { Settings } from './Settings';

import './choresApp.css';

export class App extends React.Component {
  state = {
    children: [
      {
        name: 'Ari',
      },
      {
        name: 'Sam',
      }
    ],
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

  deleteItem(id) {
    //copy of current list of items
    const list = this.state.list;

    //filter out item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({list: updatedList});
  }

  render() {
    return (
      <div className="container">
        <div className="top-container">
          <Title name="Romero" date="6/6/2020" />

            <div>
              <AddChore onAddItem={(item) => this.addItemToList(item)} />
              <AddChoreList list={this.state.list} />
              <ul>
                {this.state.list.map(item => {
                  return (
                    <li key = {item.id}>
                    {item.value}
                    <button
                      className="btn btn-floating"
                      onClick = {() => this.deleteItem(item.id)}
                    >
                      <i class="material-icons">X</i>
                    </button>
                    </li>
                  );
                })}
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

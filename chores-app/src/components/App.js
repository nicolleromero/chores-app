import React from 'react';

import { KidCard } from './KidCard';
import { Title } from './Title';
import { AddChore } from './AddChore';
// import { GoalProgressBar } from './GoalProgressBar'
// import useWindowSize from 'react-use/lib/useWindowSize'
// import Confetti from 'react-confetti'

import './App.css';

export class App extends React.Component {
  state = {
    assignees: ['Sam', 'Ari'],
    list: []
  }

  addItemToList(newItem) {
    const list = [...this.state.list, newItem];

    this.setState({ list });
  }

  handleDelete = (itemId) => {
    const list = this.state.list.filter((c) => c.id !== itemId);
    this.setState({ list });
  };

  handleChange = (itemId, key, value) => {
    const list = this.state.list.map((listItem) => {
      if (listItem.id === itemId) {
        return { ...listItem, [key]: value };
      }
      return listItem;
    });
    this.setState({ list });
  }

  // handleConfetti = (goalProgress) => {
  //   const { width, height } = useWindowSize();
  //   if (goalProgress >= 100) {
  //     return (
  //       <Confetti
  //         width={width}
  //         height={height}
  //       />
  //     );
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        {/* onGoalReached={(this.props.now) => this.handleConfetti(this.props.now)} */}

        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 class="my-0 mr-md-auto font-weight-normal">NR Productions</h5>
          <nav class="my-2 my-md-0 mr-md-3"></nav>
          <button class="btn btn-outline-primary">Setup</button>
        </div>
        <div class="container">
          <div class="row">
            <Title name="Romero" />
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card mb-4 shadow-sm">
                <AddChore
                  assignees={this.state.assignees}
                  onAddItem={(item) => this.addItemToList(item)}
                />
              </div>
            </div>
          </div>

          <div class="row">
            {this.state.assignees.map((assignee) => {
              return (
                <KidCard
                  assignee={assignee}
                  list={this.state.list.filter((item) => {
                    return item.assignee === assignee;
                  })}
                  onDelete={this.handleDelete}
                  onChange={this.handleChange}
                />
              )
            })}
          </div>
        </div>
      </React.Fragment >
    );
  }
}

import React from 'react';

import { KidCard } from './KidCard';
import { Title } from './Title';
import { AddChore } from './AddChore';
import { SetupModal } from './SetupModal';

// import './tailwind.generated.css';

export class App extends React.Component {
  state = {
    assignees: ['Sam', 'Ari'],
    list: [],
    goalList: [],
    showSetupModal: false,
  }

  handleAddItem = (newItem) => {
    const list = [...this.state.list, newItem];

    this.setState({ list });
  }

  handleAddAssignee = (newKid) => {
    const assignees = [...this.state.assignees, newKid];

    this.setState({ assignees });
  }

  handleAddGoal = (newGoal) => {
    this.setState((state) => {
      return {
        goalList: [...state.goalList, newGoal],
      };
    });
  }

  handleChangeGoal = (goalId, key, value) => {
    const goalList = this.state.goalList.map((goal) => {
      if (goal.id === goalId) {
        return { ...goal, [key]: value };
      }
      return goal;
    });
    this.setState({ goalList });
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

  handleSetup = () => {
    this.setState({ showSetupModal: true });
  }

  render() {
    return (
      <React.Fragment>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
          <div class="mr-md-auto navbar-subtitle">NR Productions</div>
          <img class="inline-block h-8 w-8 rounded-full" src="https://github.com/nicolleromero.png?size=40" alt="" />
          <nav class="my-2 my-md-0 mr-md-3"></nav>
          <button
            class="flex -mb-px"
            onClick={this.handleSetup}
          >
            <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.783 12c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 0 0-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 0 0-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615-.58.172-1.14.403-1.671.691.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 0 0 3.6 9.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643.173.58.404 1.14.691 1.672 1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711.532.288 1.092.52 1.672.693.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 0 0 1.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883.287-.532.52-1.092.692-1.672-.973-.569-1.619-1.395-1.619-2.442zM12 15.652a3.653 3.653 0 1 1 0-7.306 3.653 3.653 0 0 1 0 7.306z" fill-rule="nonzero" /></svg>
          </button>
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
                  onAddItem={this.handleAddItem}
                />
              </div>
            </div>
          </div>

          <div class="row">
            {this.state.assignees.map((assignee) => {
              return (
                <KidCard
                  assignee={assignee}
                  list={this.state.list.filter((chore) => {
                    return chore.assignee === assignee;
                  })}
                  goalList={this.state.goalList.filter((goal) => {
                    return goal.assignee === assignee;
                  })}
                  onDelete={this.handleDelete}
                  onChange={this.handleChange}
                  onAddGoal={this.handleAddGoal}
                  onChangeGoal={this.handleChangeGoal}
                />
              )
            })}
          </div>
        </div>

        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 class="my-0 mr-md-auto font-weight-normal"><br /></h5>
          <nav class="my-2 my-md-0 mr-md-3"></nav>
        </div>

      </React.Fragment >
    );
  }
}

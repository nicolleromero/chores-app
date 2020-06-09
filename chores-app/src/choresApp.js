import React from 'react';

import { Title } from './Title';
import { AddChore } from './AddChore';

import './choresApp.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [
        {
          name: 'Ari',
        },
        {
          name: 'Sam',
        }
      ],
      list: []
    };
  }

  // //incorporating local storage
  // componentDidMount() {
  //   this.hydrateStateWithLocalStorage();

  //   // add event listener to save state to localStorage
  //   // when user leaves/refreshes the page
  //   window.addEventListener(
  //     "beforeunload",
  //     this.saveStateToLocalStorage.bind(this)
  //   );
  // }

  // componentWillUnmount() {
  //   window.removeEventListener(
  //     "beforeunload",
  //     this.saveStateToLocalStorage.bind(this)
  //   );

  //   // saves if component has a chance to unmount
  //   this.saveStateToLocalStorage();
  // }

  // hydrateStateWithLocalStorage() {
  //   // for all items in state
  //   for (let key in this.state) {
  //     // if the key exists in localStorage
  //     if (localStorage.hasOwnProperty(key)) {
  //       // get the key's value from localStorage
  //       let value = localStorage.getItem(key);

  //       // parse the localStorage string and setState
  //       try {
  //         value = JSON.parse(value);
  //         this.setState({ [key]: value });
  //       } catch (e) {
  //         // handle empty string
  //         this.setState({ [key]: value });
  //       }
  //     }
  //   }
  // }

  // saveStateToLocalStorage() {
  //   // for every item in React state
  //   for (let key in this.state) {
  //     // save to localStorage
  //     localStorage.setItem(key, JSON.stringify(this.state[key]));
  //   }
  // }

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
    const list = [...this.state.list];

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
              <AddChore onAddItem={(item) => this.addItemToList(item)} />
              <AddChore onAddItem={(item) => this.addItemToList(item)} />
              <AddChore onAddItem={(item) => this.addItemToList(item)} />
              {/* Need to call AddItem w/ value from component file */}
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

        <div className="list-container">
        </div>
      </div>
    );
  }
}


export default App;

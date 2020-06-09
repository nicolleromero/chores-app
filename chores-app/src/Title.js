import React from 'react';

import './Title.css';

// Title(props) {
//   return <h1>{props.name} Chores List</h1>,
//     <h2 className="app-subtitle">Week of {props.date}</h2>;
// }

export function getCurrentDate(separator=''){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}/${month<10?`0${month}`:`${month}`}/${date}`
}


export class Title extends React.Component {
  render() {
    return (
      <div className="title-container">
        <h1 className="app-title">{this.props.name} Chores List</h1>
        <h2 className="app-subtitle">Week of {this.props.date}</h2>
      </div>

    );
  }
}

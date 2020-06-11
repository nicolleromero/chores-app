import React from 'react';

import './Title.css';

// Title(props) {
//   return <h1>{props.name} Chores List</h1>,
//     <h2 className="app-subtitle">Week of {props.date}</h2>;
// }

export function getCurrentDate(separator = '') {

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}/${month < 10 ? `0${month}` : `${month}`}/${date}`
}


export class Title extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 class="my-0 mr-md-auto font-weight-normal">NR Productions</h5>
          <nav class="my-2 my-md-0 mr-md-3">
          </nav>
          <a class="btn btn-outline-primary" href="#">Add kids!</a>
        </div>


        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">{this.props.name} Chores List</h1>
          <p className="lead">Week of {this.props.date}</p>
        </div>
      </React.Fragment>
    );
  }
}

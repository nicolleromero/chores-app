// import React from 'react';
import React, { useState, Card } from "react";
import FlipMove from 'react-flip-move';
import { ListGroup } from 'react-bootstrap';

import { Chore } from './Chore'


import './ChoreList.css';

export class ChoreList extends React.Component {

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
      <div class="card shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal text-center">{this.props.assignee}'s Chores</h4>
        </div>
        <div class="card-body text-center">
          <ListGroup variant="flush">
            <ListGroup.Item className="align-text-center text-primary">{this.formatChoreListTitles(undoneList, false)}</ListGroup.Item>
            <FlipMove duration={350} easing="ease-out">
              {undoneList.map(item => {
                return (
                  <Chore
                    item={item}
                    onDelete={this.props.onDelete}
                    onChange={this.props.onChange}
                  />
                );
              })}
            </FlipMove>
          </ListGroup>
        </div>
        <div class="card-body text-center">
          <ListGroup variant="flush">
            <ListGroup.Item className="align-text-center text-primary">{this.formatChoreListTitles(undoneList, false)}</ListGroup.Item>
            <FlipMove duration={350} easing="ease-out">
              {doneList.map(item => {
                return (
                  <Chore
                    item={item}
                    onDelete={this.props.onDelete}
                    onChange={this.props.onChange}
                  />
                );
              })}
            </FlipMove>
          </ListGroup>
        </div>
      </div>
    );
  }
}
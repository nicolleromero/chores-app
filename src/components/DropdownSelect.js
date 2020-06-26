import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import './DropdownSelect.css';

const styles = {
  root: {
    '& .MuiSelect-root': {
      width: 70,
    },
  },
};

class InnerDropdownSelect extends React.Component {

  render() {
    let currentAssignee = this.props.assignees.find((assignee) => {
      return assignee.id === this.props.selected;
    })

    return (
      <TextField
        className={this.props.classes.root}
        id="outlined-select-assignee"
        select
        label="Assignee"
        title={currentAssignee ? currentAssignee.name : 'Assignee'}
        value={this.props.selected}
        onChange={(e) => this.props.onSelect(e.target.value)}
        variant="outlined"
      >
        {this.props.assignees.map((assignee) => {
          return (
            <MenuItem key={assignee.id} value={assignee.id}>
              {assignee.name}
            </MenuItem>
          )
        })}
      </TextField>
    );
  }
}

export const DropdownSelect = withStyles(styles)(InnerDropdownSelect);

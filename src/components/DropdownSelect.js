import React from 'react';
import { useSelector } from "react-redux";

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

function InnerDropdownSelect(props) {
  const assignees = useSelector(state => state.assignees);

  let currentAssignee = assignees.find((assignee) => {
    return assignee.id === props.selected;
  })

  return (
    <TextField
      className={props.classes.root}
      id="outlined-select-assignee"
      select
      label="Assignee"
      title={currentAssignee ? currentAssignee.name : 'Assignee'}
      value={props.selected}
      onChange={(e) => props.onSelect(e.target.value)}
      variant="outlined"
    >
      {assignees.map((assignee) => {
        return (
          <MenuItem key={assignee.id} value={assignee.id}>
            {assignee.name}
          </MenuItem>
        )
      })}
    </TextField>
  );
}

export const DropdownSelect = withStyles(styles)(InnerDropdownSelect);

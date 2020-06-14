import React from 'react';
import { Badge, Button, InputGroup, FormControl } from 'react-bootstrap';
import { InputGroupPrepend } from 'react-bootstrap/InputGroup';


export class Chore extends React.Component {

  render() {
    return (
      <div>
        <InputGroup CLASS="clearfix">
          <InputGroup.Prepend>
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              checked={this.props.item.complete}
              onChange={(e) => this.props.onChange(this.props.item.id, 'complete', e.target.checked)}
            />
          </InputGroup.Prepend>
          <FormControl
            value={this.props.item.value}
            onChange={(e) => this.props.onChange(this.props.item.id, 'value', e.target.value)}
          />
          <span class="badge m-2 badge-primary">{this.props.item.points}</span>
        </InputGroup>
      </div>
    );
  }
}

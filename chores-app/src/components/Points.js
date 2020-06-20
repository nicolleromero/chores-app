import React from 'react';

export class Points extends React.Component {

  state = {
    inputValue: null,
  }

  handleBlur = (event) => {
    if (Number(event.target.value)) {
      this.props.onChange(event);
    }

    this.setState({ inputValue: null });
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value.replace(/^0+|\D/g, ''),
    });
  }

  render() {
    return (
      <input
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none points-input"
        type="text"
        placeholder="Points"
        value={this.state.inputValue == null ? (this.props.value || '') : this.state.inputValue}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
      />
    );
  }
}
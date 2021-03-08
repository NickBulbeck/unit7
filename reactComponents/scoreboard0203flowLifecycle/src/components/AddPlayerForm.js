import React, { Component } from 'react';
// React handles forms differently fae normal HTML. The problem is that forms typically handle
// state by definition; when you enter stuff into a form, it changes the state of the form. To 
// manage the state of, say, an input field, we need what's called a controlled component. It
// renders an element that controls what happens to the form on subsequent user input. That is, 
// it's a form element whose value is controlled by React using state. To do this:
//  - initialise the state for the value of the input;
//  - Listen for updates on the input
//  - create an event handler that updates the value


class AddPlayerForm extends Component {

state = {
  value: ''
}

handleValueChange = (event) => {
  this.setState({value : event.target.value})
}

handleSubmit = (event) => {
  event.preventDefault(); // it's a form, after all
  this.props.addPlayer(this.state.value);
  this.setState({value: ''});
}


// the onChange and onSubmit events are built into React. 
render() {
  console.log(this.state.value)
  return (
    <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleValueChange}
        placeholder="Enter a player's name"
      />
      <input
        type="submit"
        value="Add player"
      />
    </form>
    );
  }
}

export default AddPlayerForm;
import React, { Component } from 'react';

class AddPlayerForm extends Component {

  // state = {
  //   value: ''
  // };

// This is how you create a reference. This is just for training purposes;
// with only a single element to target, you'd just use a controlled component.
  playerInput = React.createRef();
// you then pass this ref as an attribute in the render method.
  // handleValueChange = (e) => {
  //   this.setState({ value: e.target.value });
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.addPlayer(this.state.value);
    this.props.addPlayer(this.playerInput.current.value);
    // Although the above looks like more typing, it means you don't need the 'value'
    // state. The .current property of this.playerInput is the DOM object the
    // playerInput reference is attached to; because it's a form element, it has
    // a .value property (like any form element does).
    // this.setState({ value: '' });
    e.currentTarget.reset(); // This is a black box bit of React, that removes the
                             // value and shows the placeholder again.
  }

  render() {
// Note how this is displayed:    
    console.log(this.playerInput)
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          ref={this.playerInput}
          // value={this.state.value}
          // onChange={this.handleValueChange}
          placeholder="Enter a player's name"
        />
        
        <input 
          type="submit"
          value="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;
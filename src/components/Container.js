import React, { Component } from 'react';
import './Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColour: props.bgColour
    };
  };

  render() {
    return (
      <header className="App-header" style={{backgroundColor: this.state.bgColour}}>
          {this.props.children}
      </header>
    );
  }
}

export default Container;
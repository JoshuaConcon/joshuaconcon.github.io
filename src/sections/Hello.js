import React, { Component } from 'react';
import Container from '../components/Container';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColour: props.bgColour,
      contentColour: props.contentColour
    }
  }

  render() {
    return (
      <Container bgColour={this.state.bgColour}>
          <font color={this.state.contentColour}>
            <p>Howdy, I'm</p>
            <h2>Joshua Concon</h2>
            <p>Student | Software Developer</p>
            <p>Scroll down to learn more about me!</p>
          </font>
      </Container>
      
    );
  }
}

export default Hello;
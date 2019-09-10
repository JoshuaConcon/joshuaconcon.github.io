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
            <h2>Howdy, I'm Joshua Concon</h2>
          </font>
      </Container>
      
    );
  }
}

export default Hello;
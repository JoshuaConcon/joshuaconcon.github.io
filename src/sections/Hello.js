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
            <p>howdy, i'm</p>
            <h1>joshua concon</h1>
            <p>Scroll down to learn more about me!</p>
          </font>
      </Container>
      
    );
  }
}

export default Hello;

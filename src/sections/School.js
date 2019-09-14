import React, { Component } from 'react';
import Container from '../components/Container';

class School extends Component {
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
            <h3>I'm studying Computer Science at the University of Toronto</h3>
            <h4>I graduate on November 2020</h4>
            <h5>Currently build games to monitor congitive functions in dementia patients and the elderly at Centivizer, a spin-off company from the Interactive Media Lab at UofT</h5>
          </font>
      </Container>
    );
  }
}

export default School;
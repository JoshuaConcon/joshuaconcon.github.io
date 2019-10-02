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
            <h4>Planning to Graduate in June 2021 (Classes finish on December 2020)</h4>
            <h4>Currently working at Centivizer, a spin-off company from the Interactive Media Lab at UofT</h4>
          </font>
      </Container>
    );
  }
}

export default School;
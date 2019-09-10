import React, { Component } from 'react';
import Container from '../components/Container';

class Altice extends Component {
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
          <h3>Did backend development at A4Media (an Altice USA company)</h3>
          <h4>preparing their new advertising platform for launch</h4>
          </font>
        </Container>
    );
  }
}

export default Altice;
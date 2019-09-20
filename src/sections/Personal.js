import React, { Component } from 'react';
import Container from '../components/Container';

class Personal extends Component {
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
            <h3>I've been watching a lot of Initial D so I'm into Eurobeat right now</h3>
            <h3>Recently got into fashion and graphic design, currently looking for my aesthetic</h3>
          </font>
      </Container>
      
    );
  }
}

export default Personal;
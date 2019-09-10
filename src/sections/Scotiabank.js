import React, { Component } from 'react';
import Container from '../components/Container';

class Scotiabank extends Component {
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
            <h3>Also did an year-long internship at scotiabank</h3>
            <h4>building upon their risk management systems</h4>
          </font>
        </Container>
    );
  }
}

export default Scotiabank;
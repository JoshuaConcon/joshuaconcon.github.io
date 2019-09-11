import React, { Component } from 'react';
import Container from '../components/Container';
import './Hello.css';

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
            <h2>Howdy, I'm Joshua Concon!</h2>
            <p>Scroll down to learn more about me!</p>
            <span color="white"><i class="fas fa-chevron-down"></i></span>
          </font>
      </Container>
      
    );
  }
}

export default Hello;
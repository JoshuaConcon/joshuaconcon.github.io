import React, {Component} from 'react';
import Container from '../components/Container';

class Experience extends Component {
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
            <h1>experience</h1>
          </font>
      </Container>
    );
  }
}

export default Experience;

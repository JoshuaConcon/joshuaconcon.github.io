import React, {Component} from 'react';
import Container from '../components/Container';
import './Hello.css';

/**
 * Introductory Section
 */
class Hello extends Component {
  /**
   * constructor for Introductory Section
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      bgColour: props.bgColour,
      contentColour: props.contentColour,
    };
  }

  /**
   * Render function for Introductory Section
   * @return {*} HTML Content for Introductory Section
   */
  render() {
    return (
      <Container bgColour={this.state.bgColour}>
        <font color={this.state.contentColour}>
          howdy, i'm
          <h1>
            joshua concon
          </h1>
          scroll down to learn more about me!
        </font>
      </Container>
    );
  }
}

export default Hello;

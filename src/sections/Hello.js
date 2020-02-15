import React, {Component} from 'react';
import Container from '../components/Container';
import './Section.css';

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
        <div className="centered">
          <font color={this.state.contentColour}>
            howdy, i'm
            <h1>
              joshua concon
            </h1>
            <h4>
            a software developer based in toronto
            </h4>
            scroll down to learn more about me!
          </font>
        </div>
      </Container>
    );
  }
}

export default Hello;

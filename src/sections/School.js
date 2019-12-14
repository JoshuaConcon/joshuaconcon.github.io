import React, {Component} from 'react';
import Container from '../components/Container';

/**
 * Education portion of website
 */
class School extends Component {
  /**
   * Constructor Function
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
   * Render Function
   * @return {*} rendered HTML
   */
  render() {
    return (
      <Container bgColour={this.state.bgColour}>
        <font color={this.state.contentColour}>
          <h1>education</h1>
          <div class="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true, "wrapAround": true, "autoPlay": true }'>
            <div class="carousel-cell">
              i'm studying computer science at the university of toronto (2021).
              <br />
              i was a teaching assistant for discrete math and intro to programming.
            </div>
          </div>
        </font>
      </Container>
    );
  }
}

export default School;

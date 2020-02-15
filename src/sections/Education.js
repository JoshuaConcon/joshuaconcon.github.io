import React, {Component} from 'react';
import Container from '../components/Container';
import './Flickty.css';
import './Section.css';

/**
 * Education portion of website
 */
class Education extends Component {
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
          <div className="centered">
            <h2>education</h2>
          </div>
          <div
            className="main-carousel"
            data-flickity='{ "cellAlign": "left", "contain": true, "wrapAround": true, "autoPlay": 7500, "imagesLoaded": true, "draggable": true }'>
            <div className="utoronto-bg-image carousel-cell">
              <div className="overlap-shape"></div>
              <div className="overlap-title">
                university of toronto
              </div>
              <div className="overlap-text">
                i'm studying <a href="https://web.cs.toronto.edu/">
                  computer science at the university of toronto
                </a> (graduating june 2021).
                i was a teaching assistant for
                discrete math, intro to programming and data structures.
              </div>
            </div>
          </div>
        </font>
      </Container>
    );
  }
}

export default Education;

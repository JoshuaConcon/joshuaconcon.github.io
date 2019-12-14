import React, {Component} from 'react';
import Container from '../components/Container';
import './Flickty.css';

/**
 * Experience Section
 */
class Experience extends Component {
  /**
   * constructor for Experience Section
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
   * render function
   * @returns {*} Experience Section HTML Content
   */
  render() {
    return (
      <Container bgColour={this.state.bgColour}>
        <font color={this.state.contentColour}>
          <h1>experience</h1>
          <div class="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true, "wrapAround": true, "autoPlay": true }'>
            <div class="carousel-cell">currently working at centivizer, a spin-off company from the interactive media lab at uoft</div>
            <div class="carousel-cell">did backend development at a4 media (an altice usa company) preparing their new advertising platform for launch</div>
            <div class="carousel-cell">also did an year-long internship at scotiabank doing development on their risk management systems</div>
          </div>
        </font>
      </Container>
    );
  }
}

export default Experience;

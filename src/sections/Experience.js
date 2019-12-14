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
            <div class="carousel-cell">Currently working at Centivizer, a spin-off company from the Interactive Media Lab at UofT</div>
            <div class="carousel-cell">Did backend development at a4 Media (an Altice USA company) preparing their new advertising platform for launch</div>
            <div class="carousel-cell">Also did an year-long internship at Scotiabank doing development on their risk management systems</div>
          </div>
        </font>
      </Container>
    );
  }
}

export default Experience;

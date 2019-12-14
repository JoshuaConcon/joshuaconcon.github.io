import React, { Component } from 'react';
import Container from '../components/Container';
import './Flickty.css';

/**
 * Hobby Section of Website
 */
class Personal extends Component {
  /**
   * constructor function for Hobbies
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
   * @return {*} HTML content
   */
  render() {
    return (
      <Container bgColour={this.state.bgColour}>
        <font color={this.state.contentColour}>
          <h1>hobbies</h1>
          <div className="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true, "wrapAround": true, "autoPlay": true, "imagesLoaded": true }'>
            <div className="carousel-cell">
              i'm into manga and anime. been watching initial d and reading kingdom recently
            </div>
            <div className="carousel-cell">
              recently got into fashion and graphic design, currently looking for my aesthetic
            </div>
          </div>
        </font>
      </Container>
    );
  }
}

export default Personal;

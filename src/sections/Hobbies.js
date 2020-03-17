import React, {Component} from 'react';
import Container from '../components/Container';
import './Flickty.css';

/**
 * Hobby Section of Website
 */
class Hobbies extends Component {
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
          <div className="title-shape"></div>
          <h2>hobbies</h2>
          <div className="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true, "wrapAround": true, "autoPlay": 7500, "imagesLoaded": true }'>
            <div className="manga-bg-image carousel-cell">
              <div className="overlap-shape"></div>
              <div className="overlap-title">
                manga and anime
              </div>
              <div className="overlap-text">
                i'm into manga and anime. been watching <a href="https://en.wikipedia.org/wiki/Initial_D">initial d</a> and reading <a href="https://en.wikipedia.org/wiki/Kingdom_(manga)">kingdom</a> recently
              </div>
            </div>
            <div className="aesthetic-bg-image carousel-cell">
              <div className="overlap-shape"></div>
              <div className="overlap-title">
                graphic design
              </div>
              <div className="overlap-text">
                i recently got into graphic design, currently experimenting with off-white colours
              </div>
            </div>
            <div className="fashion-bg-image carousel-cell">
              <div className="overlap-shape"></div>
              <div className="overlap-title">
                fashion
              </div>
              <div className="overlap-text">
                recently got into fashion too, my palette is usually earth tones. i also try my best to support sustainable and slow fashion
              </div>
            </div>
          </div>
        </font>
      </Container>
    );
  }
}

export default Hobbies;

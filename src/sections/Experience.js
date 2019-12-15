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
   * @return {*} Experience Section HTML Content
   */
  render() {
    return (
      <Container bgColour={this.state.bgColour}>
        <font color={this.state.contentColour}>
          <div className="title-shape"></div>
          <h2>experience</h2>
          <div
            className="main-carousel"
            data-flickity='{ "cellAlign": "left", "contain": true, "wrapAround": true, "autoPlay": true, "imagesLoaded": true }'>
            <div className="centivizer-bg-image carousel-cell">
              <div className="overlap-shape"></div>
              <div className="overlap-title">
                centivizer
              </div>
              <div className="overlap-text">
                currently working at <a href="https://www.centivizer.com/">centivizer</a>, a spin-off
                company from the <a href="https://imedia.mie.utoronto.ca/">interactive media lab at uoft</a>,
                building games that monitor motor controls
                of dementia patients and the elderly
              </div>
            </div>
            <div className="altice-bg-image carousel-cell">
              <div className="overlap-shape"></div>
              <div className="overlap-title">
                altice usa
              </div>
              <div className="overlap-text">
                did backend development at <a href="https://a4media.com/">a4 media</a> (an <a href="https://www.alticeusa.com/">altice usa</a> company) preparing their
                new advertising platform for launch
              </div>
            </div>
            <div className="scotiabank-bg-image carousel-cell">
              <div className="overlap-shape"></div>
              <div className="overlap-title">
                scotiabank
              </div>
              <div className="overlap-text">
                also did an year-long internship at <a href="https://www.scotiabank.com/">scotiabank</a> doing development on their risk
                management systems and improving accessibility of a profit and loss web application
              </div>
            </div>
            <div className="bioinformatics-bg-image carousel-cell">
              <div className="overlap-shape"></div>
              <div className="overlap-title">
                university of toronto scarborough
              </div>
              <div className="overlap-text">
                my first gig was writing python and bash scripts
                for processing DNA sequences as a bioinformatics research
                assistant for the <a href="https://www.utsc.utoronto.ca/~lovejoy/">lovejoy lab at utsc</a>
              </div>
            </div>
          </div>
        </font>
      </Container>
    );
  }
}

export default Experience;

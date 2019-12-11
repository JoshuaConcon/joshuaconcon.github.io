import React, {Component} from 'react';
import Container from '../components/Container';
import './Experience.css';

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
            <div class="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true }'>
              <div class="carousel-cell">ok</div>
              <div class="carousel-cell">yes</div>
              <div class="carousel-cell">hi</div>
            </div>
          </font>
          
      </Container>
    );
  }
}

export default Experience;

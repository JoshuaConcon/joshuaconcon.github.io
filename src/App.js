import React, { Component } from 'react';
import Container from './components/Container';
import Now from './sections/Now';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container bgColour="#291C7B">
          <h2>
            <font color="#E6FFC5">
              Howdy, I'm Joshua Concon
            </font>
          </h2>
        </Container>
        <Container bgColour="#E6FFC5">
          <font color="#291C7B">
            <h3>I'm studying Computer Science at the University of Toronto</h3>
            <p>(planning to graduate on Nov 2020)</p>
          </font>
        </Container>
        <Container bgColour="#291C7B">
          <font color="#E8AA3C">
            <h3>Did backend development at A4Media (an Altice USA company)</h3>
            <h4>preparing their new advertising platform for launch</h4>
          </font>
        </Container>
        <Container bgColour="#FF4F6A">
          <font color="#291C7B">
            <h3>Also did an year-long internship at scotiabank</h3>
            <h4>building upon their risk management systems</h4>
          </font>
        </Container>
        <Now bgColour="#291C7B" contentColour="#FF4F6A"/>
      </div>
    );
  }
}

export default App;

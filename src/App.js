import React, { Component } from 'react';
import Container from './components/Container';
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
        <Container bgColour="#291C7B">
          <font color="#FF4F6A">
            <h3>Status: Looking for full-time new graduate positions starting in Sep 2020</h3>
            <h4>open to offers in Toronto, New York City and San Francisco Bay Area (will require sponsorship for USA)</h4>
            <p>
              <span color="#FF4F6A"><a href="mailto:joshua.concon@mail.utoronto.ca"><i class="far fa-envelope fa-lg"></i></a></span>&nbsp;
              <span color="#FF4F6A"><a href="https://linkedin.com/in/joshuaconcon"><i class="fab fa-linkedin fa-lg"></i></a></span>&nbsp;
              <span color="#FF4F6A"><a href="https://github.com/JoshuaConcon"><i class="fab fa-github-square fa-lg"></i></a></span>&nbsp;
              <span color="#FF4F6A"><a href="https://github.com/JoshuaConcon/resume/blob/master/resume.pdf"><i class="far fa-file-alt fa-lg"></i></a></span>&nbsp;
              <span color="#FF4F6A"><a href="https://instagram.com/joshuaconcon"><i class="fab fa-instagram fa-lg"></i></a></span>&nbsp;
              <span color="#FF4F6A"><a href="https://facebook.com/joshuaconcon"><i class="fab fa-facebook-square fa-lg"></i></a></span>
              <span color="#FF4F6A"><a href="https://twitter.com/Joshua_Concon"><i class="fab fa-twitter-square fa-lg"></i></a></span>
            </p>
          </font>
        </Container>
      </div>
    );
  }
}

export default App;

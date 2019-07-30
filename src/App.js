import React, { Component } from 'react';
import Container from './components/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h2>howdy <span role="img" aria-label="Cowboy">🤠</span>, im joshua concon</h2>
        </Container>
        <Container bgColour="#00204e">
          <h3>im studying computer science at <a href="https://www.utoronto.ca/">@utoronto</a></h3>
          <p>(planning to graduate on nov 2020)</p>
        </Container>
        <Container bgColour="#0066ff">
          <h3>currently doing backend dev at <a href="http://a4media.com/">@a4media</a></h3>
          <h4>(an <a href="http://alticeusa.com/">@alticeusa</a> company)</h4>
        </Container>
        <Container bgColour="#EC101A">
          <h3>did an internship for a year at <a href="https://www.scotiabank.com/">@scotiabank</a></h3>
        </Container>
        <Container>
          <p>status: looking for part-time workstudy positions starting from sep 2019 and full-time positions starting at sep 2020 (preferably in toronto).</p>
          <p>open to offers in nyc and sfba (will require sponsorship)</p>
          <p>
            <a href="mailto:joshua.concon@mail.utoronto.ca"><i class="far fa-envelope fa-lg"></i></a>&nbsp;
            <a href="https://linkedin.com/in/joshuaconcon"><i class="fab fa-linkedin fa-lg"></i></a>&nbsp;
            <a href="https://github.com/JoshuaConcon"><i class="fab fa-github-square fa-lg"></i></a>&nbsp;
            <a href="https://github.com/JoshuaConcon/resume/raw/master/resume.pdf"><i class="far fa-file-alt fa-lg"></i></a>&nbsp;
            <a href="https://instagram.com/joshuaconcon"><i class="fab fa-instagram fa-lg"></i></a>&nbsp;
            <a href="https://facebook.com/joshuaconcon"><i class="fab fa-facebook-square fa-lg"></i></a>
            <a href="https://twitter.com/Joshua_Concon"><i class="fab fa-twitter-square fa-lg"></i></a>
          </p>
        </Container>
      </div>
    );
  }
}

export default App;

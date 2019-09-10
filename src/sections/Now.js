import React, { Component } from 'react';
import Container from '../components/Container';
import Link from '../components/Link';
import './Now.css'

class Now extends Component {
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
            <h3>
              Status: Looking for full-time new graduate positions starting in Sep 2020
            </h3>
            <h4>
              open to offers in Toronto, New York City and San Francisco Bay Area (will require sponsorship for USA)
            </h4>
            <Link
              hyperlink="mailto:joshua.concon@mail.utoronto.ca"
              iconName="fas fa-envelope-square"
              colour={this.state.contentColour}/>
            <Link
              hyperlink="https://linkedin.com/in/joshuaconcon"
              iconName="fab fa-linkedin"
              colour={this.state.contentColour}/>
            <Link
              hyperlink="https://github.com/JoshuaConcon"
              iconName="fab fa-github-square"
              colour={this.state.contentColour}/>
            <Link
              hyperlink="https://github.com/JoshuaConcon/resume/blob/master/resume.pdf"
              iconName="far fa-file-alt"
              colour={this.state.contentColour}/>
            <Link
              hyperlink="https://instagram.com/joshuaconcon"
              iconName="fab fa-instagram"
              colour={this.state.contentColour}/>
            <Link
              hyperlink="https://www.facebook.com/joshua.aaron.concon"
              iconName="fab fa-facebook-square"
              colour={this.state.contentColour}/>
            <Link
              hyperlink="https://instagram.com/joshuaconcon"
              iconName="fab fa-twitter-square"
              colour={this.state.contentColour}/>
          </font>
        </Container>
    );
  }
}

export default Now;
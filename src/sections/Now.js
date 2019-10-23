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
              Status: Looking for internship positions for Summer 2020
            </h3>
            <h4>
              preferably in Toronto, New York City or San Francisco Bay Area
            </h4>
            <h5>
              (will require sponsorship for USA)
            </h5>
            <Link
              hyperlink="mailto:me@joshuaconcon.ca"
              iconName="far fa-envelope"
              colour={this.state.contentColour}/>
            <Link
              hyperlink="https://linkedin.com/in/joshuaconcon"
              iconName="fab fa-linkedin-in"
              colour={this.state.contentColour}/>
            <Link
              hyperlink="https://github.com/JoshuaConcon"
              iconName="fab fa-github"
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
              iconName="fab fa-facebook-f"
              colour={this.state.contentColour}/>
            <Link
              hyperlink="https://twitter.com/Joshua_Concon"
              iconName="fab fa-twitter"
              colour={this.state.contentColour}/>
            <Link
              hyperlink="https://angel.co/joshuaconcon"
              iconName="fab fa-angellist"
              colour={this.state.contentColour}/>
          </font>
        </Container>
    );
  }
}

export default Now;
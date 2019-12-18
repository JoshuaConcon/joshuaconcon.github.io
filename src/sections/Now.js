import React, {Component} from 'react';
import Container from '../components/Container';
import Link from '../components/Link';

/**
 * Now and Contact Section
 */
class Now extends Component {
  /**
   * Constructor for Section
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
   * @return {*} HTML Content for Now and Contact Section
   */
  render() {
    return (
      <Container bgColour={this.state.bgColour}>
        <font color={this.state.contentColour}>
          <div className="title-shape"></div>
          <h2>contact + now</h2>
          <p>
            status: looking for internship
            positions for fall (sept - dec) 2020 in toronto
            <br />
            <br />
            im planning on working in the industry for a few years after
            graduating and then potentially pursuing grad school in
            computational biology and machine learning
            <br />
            <br />
            feel free to take a look at my links or contact me
          </p>
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

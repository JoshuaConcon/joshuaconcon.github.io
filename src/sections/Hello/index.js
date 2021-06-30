import React, {Component} from 'react';
import './Hello.css';
import Link from './Link';

/**
 * Introductory Section
 */
class Hello extends Component {
  /**
   * Render function for Introductory Section
   * @return {*} HTML Content for Introductory Section
   */
  render() {
    return (
      <div className="hello-bg-image large-piece">
        <font color="white">
          <div className="overlap-shape"></div>
          <div className="title">
            joshua concon
          </div>
          <div className="normal">
            a software engineer (swe) based in toronto
          </div>
          <br />
          <br />
          <br />
          <div className="overlap-shape"></div>
          <div className="heading">
            education
          </div>
          <div className="normal">
            - computer science at the university of toronto
          </div>
          <br />
          <br />
          <br />
          <div className="overlap-shape"></div>
          <div className="heading">
            experience
          </div>
          <div className="normal">
            <b>current:</b>
          </div>
          <div className="normal">
            - incoming swe at restaurant brands international
          </div>
          <div className="normal">
            <b>previous:</b>
          </div>
          <div className="normal">
            - product intern at scotiabank
          </div>
          <div className="normal">
            - swe intern at centivizer
          </div>
          <div className="normal">
            - swe intern at altice usa
          </div>
          <div className="normal">
            - swe intern at scotiabank
          </div>
          <br />
          <br />
          <br />
          <div className="overlap-shape"></div>
          <div className="heading">
            hobbies
          </div>
          <div className="normal">
            - fashion
          </div>
          <div className="normal">
            - graphic design
          </div>
          <div className="normal">
            - manga and anime
          </div>
          <div className="normal">
            - videogames
          </div>
          <br />
          <br />
          <br />
          <div className="overlap-shape"></div>
          <div className="heading">
            now
          </div>
          <div className="normal">
            status: awaiting to start the rbi new grad program in sept
          </div>
          <br />
          <br />
          <br />
          <div className="overlap-shape"></div>
          <div className="heading">
            contact
          </div>
          <div className="normal">
            feel free to contact me
          </div>
          <div className="normal">
          <Link
            hyperlink="https://linkedin.com/in/joshuaconcon"
            iconName="fab fa-linkedin-in"
            colour="#FEFFF1"/>
          <Link
            hyperlink="https://github.com/JoshuaConcon"
            iconName="fab fa-github"
            colour="#000000"/>
          <Link
            hyperlink="https://github.com/JoshuaConcon/resume/blob/master/resume.pdf"
            iconName="far fa-file-alt"
            colour="#000000"/>
          <Link
            hyperlink="https://twitter.com/Joshua_Concon"
            iconName="fab fa-twitter"
            colour="#000000"/>
          </div>
        </font>
      </div>
    );
  }
}

export default Hello;

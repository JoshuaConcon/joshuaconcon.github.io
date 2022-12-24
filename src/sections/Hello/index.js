import React, {Component} from 'react';
import './Hello.css';
import Link from './Link';
import { LiquidDistortion } from "./Distort";

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
            <LiquidDistortion text={"joshua concon"} />
          </div>
          <div className="normal">
            i'm a software developer based in toronto!
          </div>
          <br />
          <br />
          <br />
          <div className="overlap-shape"></div>
          <div className="heading">
            education
          </div>
          <div className="normal">
            computer science at the university of toronto
          </div>
          <div className="normal">
            teaching assistant: intro to programming, discrete math and data structures
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
            software development engineer ii on the loyalty team at restaurant brands international
          </div>
          <div className="normal">
            <b>previous:</b>
          </div>
          <div className="normal">
            product design intern on the cloud operations team at scotiabank
          </div>
          <div className="normal">
            software developer intern on the cognitive centivizer team at centivizer
          </div>
          <div className="normal">
            software developer intern on the a4 platform team at altice usa
          </div>
          <div className="normal">
            software developer intern on the market risk team at scotiabank
          </div>
          <br />
          <br />
          <br />
          <div className="overlap-shape"></div>
          <div className="heading">
            hobbies
          </div>
          <div className="normal">
            fashion (i'm a big fan of earth tones)
          </div>
          <div className="normal">
            manga and anime (re-reading kingdom)
          </div>
          <div className="normal">
            videogames (mostly smash bros)
          </div>
          <div className="normal">
            kpop (mainly loona, itzy, twice)
          </div>
          <div className="normal">
            olympic weightlifting
          </div>
          <br />
          <br />
          <br />
          <div className="overlap-shape"></div>
          <div className="heading">
            fun facts
          </div>
          <div className="normal">
            i always second guess myself when i spell out "pieces"
          </div>
          <div className="normal">
            i used to work at costco for 2 years and so far it has been the most chaotic place ive worked at
          </div>
          <div className="normal">
            im married to fides linga
          </div>
          <br />
          <br />
          <br />
          <div className="overlap-shape"></div>
          <div className="heading">
            now
          </div>
          <div className="normal">
            status: started at restaurant brands international in their new grad program in sept. i'm also still in school.
          </div>
          <br />
          <br />
          <br />
          <div className="overlap-shape"></div>
          <div className="heading">
            contact
          </div>
          <div className="normal">
            feel free to contact me below! i'm pretty friendly!
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
            <Link
              hyperlink="https://angel.co/joshuaconcon"
              iconName="fab fa-angellist"
              colour="#000000"/>
          </div>
        </font>
      </div>
    );
  }
}

export default Hello;

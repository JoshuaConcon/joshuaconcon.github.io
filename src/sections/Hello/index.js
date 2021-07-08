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
            i'm a software developer based in toronto
          </div>
          <br />
          <br />
          <br />
          <div className="overlap-shape"></div>
          <div className="heading">
            education
          </div>
          <div className="normal">
            i'm currently doing my degree in computer science at the university of toronto
          </div>
          <div className="normal">
            there, i was also a teaching assistant for intro to programming, discrete math and data structures
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
            i will be joining the technical development program at restaurant brands international starting on sept 2021
          </div>
          <div className="normal">
            <b>previous:</b>
          </div>
          <div className="normal">
            i worked on improving internal sales for scotiabank's cloud operations team
          </div>
          <div className="normal">
            i worked on a cognitive research project at centivizer
          </div>
          <div className="normal">
            i worked on a new advertising platform at altice usa
          </div>
          <div className="normal">
            i worked on reporting tools for scotiabank's market risk department
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
            manga and anime (re-reading kingdom, watching naruto)
          </div>
          <div className="normal">
            videogames (mostly smash bros and animal crossing)
          </div>
          <div className="normal">
            kpop (yeah)
          </div>
          <div className="normal">
            olympic weightlifting (currently stretching to get into the deep squat and front rack positions)
          </div>
          <br />
          <br />
          <br />
          <div className="overlap-shape"></div>
          <div className="heading">
            now
          </div>
          <div className="normal">
            status: i'm still awaiting to start the restaurant brands international new grad program in sept. i'm also still in school.
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

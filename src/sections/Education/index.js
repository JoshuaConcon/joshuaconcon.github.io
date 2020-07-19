import React, {Component} from 'react';
import './Education.css';

/**
 * Education portion of website
 */
class Education extends Component {
  /**
   * Constructor Function
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
   * @return {*} rendered HTML
   */
  render() {
    return (
      <div className="education-bg-image medium-piece">
        <font color="white">
          <div className="edu-title">
            i study cs at uoft
          </div>
          <div className="edu-subtitle">
            was a TA for discrete math, intro to cs & data structures
          </div>
        </font>
      </div>
    );
  }
}

export default Education;

import React, {Component} from 'react';
import Now from './Now';
import School from './School';
import Hello from './Hello';
import Personal from './Personal';
import Experience from './Experience';

/**
 * Sections Component
 */
class Sections extends Component {
  /**
   * Render function for Sections Component
   * @return {*} HTML Content for Sections
   */
  render() {
    return (
      <div className="App">
        <Hello bgColour="#FEFFF1" contentColour="#000000"/>
        <School bgColour="#FEFFF1" contentColour="#000000"/>
        <Experience bgColour="#FEFFF1" contentColour="#000000"/>
        <Personal bgColour="#FEFFF1" contentColour="#000000"/>
        <Now bgColour="#FEFFF1" contentColour="#000000"/>
      </div>
    );
  }
}

export default Sections;

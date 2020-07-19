import React, {Component} from 'react';
import Hello from './Hello/';
import Education from './Education/';
import Now from './Now/';

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
        <Hello />
        <Education />
        <Now />
      </div>
    );
  }
}

export default Sections;

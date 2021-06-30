import React, {Component} from 'react';
import Hello from './Hello/';

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
      </div>
    );
  }
}

export default Sections;

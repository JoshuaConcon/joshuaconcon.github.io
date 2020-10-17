import React, {Component} from 'react';
import './Now.css';

/**
 * Introductory Section
 */
class Now extends Component {
  /**
   * Render function for Introductory Section
   * @return {*} HTML Content for Introductory Section
   */
  render() {
    return (
      <div className="large-piece">
        <div className="blurb">
          status: looking for dev new grad positions
          <br />
          <br />
          starting May 2021 in toronto or remote
          <br />
          <br />
          here's my contact info, feel free to reach out
          <br />
          <br />
          resume linkedin github angellist email
        </div>
      </div>
    );
  }
}

export default Now;

import React, {Component} from 'react';
import './Hello.css';

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
          <div className="title">
            hey, i'm josh
          </div>
          <div className="blurb">
            a software developer based in toronto
          </div>
          <div className="scroll-down">
            scroll down to learn more about me
          </div>
        </font>
      </div>
    );
  }
}

export default Hello;

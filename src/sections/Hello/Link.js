import React, { Component } from 'react';
import './Link.css';

class Link extends Component {
  constructor(props) {
    super(props);
    const iconStyle = " icon";
    const fontAwesomeTag = " fa-lg";
    const className = props.iconName + fontAwesomeTag + iconStyle;
    this.state = {
      hyperlink: props.hyperlink,
      className,
      colour: "orange"
    }
  };

  render() {
    return (
      <a href={this.state.hyperlink}>
        <span color={this.state.colour}>
          <i className={this.state.className}>
          </i>
        </span>
      </a>
    );
  }
}

export default Link;
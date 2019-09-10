import React, { Component } from 'react';

class Link extends Component {
  constructor(props) {
    super(props);
    const className = props.iconName + " fa-lg";
    this.state = {
      hyperlink: props.hyperlink,
      className,
      colour: props.colour
    }
  };

  render() {
    return (
      <a href={this.state.hyperlink}>
        <span color={this.state.colour}>
          <i class={this.state.className}>
          </i>
        </span>
      </a>
    );
  }
}

export default Link;
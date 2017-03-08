import React, { Component } from 'react';

export class Link extends Component {
  handleClick = (e) => {
    e.preventDefault();
    history.pushState(null, '', this.props.to);
  }
  render() {
    return (
      <a href="#" onClick={this.handleClick}>{this.props.children}</a>
    );
  }
}

Link.propTypes = {
  to: React.PropTypes.string.isRequired
}
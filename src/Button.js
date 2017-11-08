import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {type,value}  = this.props;
    return (
      <button type={type}>{value}</button>
    );
  }
}

export default Button;

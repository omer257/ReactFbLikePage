import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {type,value,className}  = this.props;
    return (
      <button type={type} className={className}>{value}</button>
    );
  }
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default Button;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {value,type,placeholder,id,required,onChange,className}  = this.props;
    return (
      <input required={required?'true':'false'} className={className} onChange={onChange} type={type} id={id} value={value} placeholder={placeholder} />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;

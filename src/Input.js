import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {value,type,placeholder,id,required,onChange}  = this.props;
    return (
      <input required={required?'true':'false'} onChange={onChange} type={type} id={id} value={value} placeholder={placeholder} />
    );
  }
}

export default Input;

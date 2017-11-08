import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {userData:''}
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(event){
    event.preventDefault();
    this.props.addItem(this.state.userData);
  }
  onChange(event){
    this.setState({[event.target.id]:event.target.value});
  }
  render() {
    const {userData} = this.state;
    return (
      <div className="form">
        <form onSubmit={this.onSubmit}>
          <Input id="userData" className="" onChange={this.onChange} required={true} type="text" value={userData} placeholder="Please enter something" />
          <Button type="submit" className="" value="Add post"/>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default Form;

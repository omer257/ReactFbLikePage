import React, { Component } from 'react';
import Card from './Card';
import Posts from './Posts';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {userData:''}
  }
  componentDidMount() {    
  var that = this;
  var url = 'https://api.myjson.com/bins/162vrt'

  fetch(url)
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    that.setState({ userData: data });
  });
}
  render() {
    const {profile,feed} = this.state.userData;
    return (
      <div className="App">
        <Card profile={profile}/>
        <Form/>
        <Posts feed={feed}/>
      </div>
    );
  }
}

export default App;

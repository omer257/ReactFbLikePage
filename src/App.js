import React, { Component } from 'react';
import Card from './Card';
import Posts from './Posts';
import Form from './Form';
import Header from './Header';
import Loading from './Loading';
import 'reset-css/reset.css';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

class App extends Component {
  constructor(props){
    super(props)
    this.state = {profile:{},feed:[]}
    this.addItem = this.addItem.bind(this)
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
      that.setState({ profile: data.profile,feed: data.feed });
    });
  }

  addItem(data){
    const {first_name,last_name,photo} = this.state.profile;
    var newObject = {creator:{},text:0,likes:0,shares:0,comments:0};
    newObject.creator = {name: first_name + ' ' +last_name, photo: photo}
    newObject.text = data;

    this.setState(prevState => ({
      feed: [...prevState.feed, newObject]
    }))
  }
  
  render() {
    const {profile,feed} = this.state;
    if (!profile.first_name) {
      return <Loading ref='button'/>;
    }
    return (
      <div className="container flex flexwrap border_shadow">
        <Card profile={profile}/>
        <Posts feed={feed}>
          <Form addItem={this.addItem}/>
        </Posts>
      </div>
    );
  }
}

export default App;

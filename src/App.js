import React, { Component } from 'react';
import Card from './Card';
import Posts from './Posts';
import Form from './Form';
import './App.css';

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
    return (
      <div className="container">
        <Card profile={profile}/>
        {/* <div className="flex_break"></div> */}
        <Form addItem={this.addItem}/>
        <Posts feed={feed}/>
      </div>
    );
  }
}

export default App;

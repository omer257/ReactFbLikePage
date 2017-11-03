import React, { Component } from 'react';
import Loading from './Loading';


class Card extends Component {
  render() {
    const {profile} = this.props;
    if (!profile) {
      return <Loading/>;
    }
    return (
      <div className="App">
      <img style={{width:300}} src={profile.photo} alt={profile.first_name}/>
      <h1>{profile.first_name} {profile.last_name}</h1>
      <h3>{profile.last_name}</h3>
      </div>
    );
  }
}

export default Card;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class Card extends Component {
  
  render() {
    const {profile} = this.props;
   
    if (!profile.first_name) {
      return <Loading/>;
    }
    
    var bannersDisplay = profile.banners.map((item,index)=>{
      return <div key={index} style={{backgroundImage: `url(${item.photo})`}}>{item.text}</div>
    })
    var groupsDisplay = profile.groups.map((item,index)=>{
      return <li key={index}>{item}</li>
    })
    var interestsDisplay = profile.interests.map((item,index)=>{
      return <li key={index}>{item}</li>
    })
    return (
      <div className="card border_shadow">
        <div>
          <img style={{width:300}} src={profile.photo} alt={profile.first_name}/>
        </div>
        <div>
          <h1>{profile.first_name} {profile.last_name}</h1>
          age:{profile.age} <br/>
          <b>Interests: </b><ul className="ul">{interestsDisplay}</ul>
          <b>Groups: </b><ul className="ul">{groupsDisplay}</ul>
          <b>Banners: </b><ul className="ul">{bannersDisplay}</ul>
          {profile.location.contry} - {profile.location.city}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Card;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';


class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {fade:false}
    this.fadingDone = this.fadingDone.bind(this)
  }
  componentDidMount () {
    const elm = this.refs.button
    elm.addEventListener('animationend', this.fadingDone)
  }
  componentWillUnmount () {
    const elm = this.refs.button
    elm.removeEventListener('animationend', this.fadingDone)
  }
  fadingDone () {
    // will re-render component, removing the animation class
    this.setState({fade: false})
  }
  mapProps(item){
    return item.map((itemData,index)=>{
      return <li key={index}>{itemData}</li>
    })
  }
  mapBanners(item){
    return item.map((item,index)=>{
      return <div key={index} style={{backgroundImage: `url(${item.photo})`}}>{item.text}</div>
    })
  }
  render() { 
    const {profile} = this.props;
    const {fade} = this.state
    
    var bannersDisplay = this.mapBanners(profile.banners)
    var groupsDisplay = this.mapProps(profile.groups)
    var interestsDisplay = this.mapProps(profile.interests)
    return (
      <div className="card flex flexwrap"> 
        <div className="image">
        {/* <div className="img" style={{backgroundImage: "url(" + profile.photo + ")"}}></div> */}

          <img src={profile.photo} alt={profile.first_name}/>
        </div>
        <div className="content">
          <h1>{profile.first_name} {profile.last_name}</h1> 
          <span className="expandBtn" ref='button' onClick={() => this.setState({fade: !this.state.fade})}>
          <FontAwesome name={fade ? 'minus' : 'plus'} /> {fade ? 'Less' : 'More'} details 
          </span>
          <div className={fade ? 'floatLeft show' : 'floatLeft hide'}>
              <b>Location: </b>{profile.location.country} - {profile.location.city}
          </div>
          <div className={fade ? 'show' : 'hide'}>
             <b>Age: </b>{profile.age}
          </div>
          <div className={fade ? 'Interests show' : 'Interests hide'}>
             <b>Interests: </b><ul className="ul">{interestsDisplay}</ul>
          </div>
          <div className={fade ? 'Groups show' : 'Groups hide'}>
             <b>Groups: </b><ul className="ul">{groupsDisplay}</ul>
          </div>  
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Card;

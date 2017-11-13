import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class Post extends Component {
  render() {
    var {item} = this.props;
    return (
      <div className="post border_shadow">
      {item.text} - <em>{item.creator.name}</em>
      
      <div className="img hide" style={{backgroundImage: "url(" + item.creator.photo + ")"}}></div>
      
      
      <ul className="footer hide">
        <li>likes ({item.likes}) <FontAwesome name='like' /></li>
        <li>comments ({item.comments}) <FontAwesome name='comment' /></li>
        <li>Shares ({item.shares}) <FontAwesome name='share' /></li>
      </ul>
      </div>
    );
  }
}

Post.propTypes = {
  item: PropTypes.object.isRequired
};

export default Post;

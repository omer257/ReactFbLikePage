import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class Posts extends Component {
  render() {
    const {feed} = this.props;
    if (!feed) {
      return <Loading/>;
    }
    var postsLength = feed.length;
    var posts = feed.map((item,index)=>{
      return <div key={index}>{item.text}{item.creator.name}<br/>
      comments:{item.comments}<br />
      likes:{item.likes}<br />
      shares:{item.shares}<br />
      <img style={{width:300}} src={item.creator.photo} alt={item.creator.photo}/></div>
    }) 
    return (
      <div className="posts">
      {postsLength} posts <br/> 

      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
      {posts}
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Posts.propTypes = {
  feed: PropTypes.array.isRequired
};

export default Posts;

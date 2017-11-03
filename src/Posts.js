import React, { Component } from 'react';
import Loading from './Loading';

class Posts extends Component {
  render() {
    const {feed} = this.props;
    if (!feed) {
      return <Loading/>;
    }
    var posts = feed.map((item,index)=>{
      return <div key={index}>{item.text}{item.creator.name}<br/>
      comments:{item.comments}<br />
      likes:{item.likes}<br />
      shares:{item.shares}<br />
      <img style={{width:300}} src={item.creator.photo} alt={item.creator.photo}/></div>
    })
    console.log(this.props)
    return (
      <div className="App">
      {posts}
      </div>
    );
  }
}

export default Posts;

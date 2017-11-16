import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import FontAwesome from 'react-fontawesome';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import scrollToComponent from 'react-scroll-to-component';


const Fade = ({ children, ...props }) => (
  <CSSTransition {...props} timeout={1000} classNames="fade">
    {children}
  </CSSTransition>
);

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {fade:true}
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
		this.setState({fade: false})
	}

  componentWillReceiveProps(nextProps){
    scrollToComponent(this.refs.bottom);
  }
  render() {
    const fade = this.state.fade;
    const {feed} = this.props; 
    var posts = feed.map((item, i) => (
      <Fade key={item.text}>
        <Post item={item} ref={item}/>
      </Fade>
    ))
    return (
      <div className="posts"> 
      <div className='header' ref='button'  onClick={() => this.setState({fade: !this.state.fade})}
        >User feed  <FontAwesome className="hide" name='plus' />
        </div>
      <div className={fade ? 'hide' : 'show'} >
        {this.props.children}
      </div>
      <TransitionGroup>
          {posts}
        </TransitionGroup><br/>
        <div ref="bottom"></div>
      </div>
    );
  }
}

Posts.propTypes = {
  feed: PropTypes.array.isRequired
};

export default Posts;

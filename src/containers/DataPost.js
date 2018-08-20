import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLike } from '../actions/index';
import Like from './../components/Like';

class DataPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false
    };
  }
  switchLike() {
    //this.props.switchLike(this.props.activePhoto, this.props.idUser);
  }
  render () {
    return (
      <div className="data-post data-post-flex">
        <div className="data-post_like-comment-mark data-post_like-comment-mark-flex">
          <li onClick={ this.switchLike.bind(this) } className="far fa-heart fa-2x icon-like icon-like-unactive" />
          <li className="far fa-comment icon-comment fa-2x" />
        </div>
        <div className="data-post_likes">{ this.props.likes } likes</div>
        <div className="data-post_date">{ this.props.datePost }</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    photos: state.photos,
    activePhoto: state.activePhoto
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    switchLike: selectLike
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DataPost); 
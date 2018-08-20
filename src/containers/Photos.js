import React, { Component } from 'react';
import { connect } from 'react-redux';
import Photo from './../components/Photo';
import { bindActionCreators } from 'redux';
import { select } from '../actions/index';

class Photos extends Component {
  showPhoto(){
    return this.props.photos.map((photo, index) => {
      return (
        <Photo onClick={() => this.props.select(photo)} key={ photo.idPost } idPost={ photo.idPost } srcImg={ photo.img } size="m" />
      );
    })
  }

  render () {
  	return (
  	  <div className="photos photos-flex">
  	    { this.showPhoto() }
  	  </div>
  	);
  }
}

function mapStateToProps (state) {
  return {
  	photos: state.photos
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({ 
  	select: select
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Photos);
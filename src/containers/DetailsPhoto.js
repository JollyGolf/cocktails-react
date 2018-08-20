import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Photo from './../components/Photo';
import DetailsComments from './../components/DetailsComments';
import { bindActionCreators } from 'redux';
import { closeDetailsView } from '../actions/index';

class DetailsPhoto extends Component {
  render () {
  	if (!this.props.photo) {
      return null;
  	}
    return (
  	  <Fragment>
       <div className="details-field details-field-flex">
        <div className="details-block-info details-block-info-flex">
          <Photo key={ this.props.photo.idPost } idPost={ this.props.photo.idPost } srcImg={ this.props.photo.img } size="l" />
          <DetailsComments users={ this.props.users } idPost={ this.props.photo.idPost } idUser={ this.props.photo.idUser } datePost={ this.props.photo.date } likes={ this.props.photo.likes } />
        </div>
       </div>
       <li onClick={ () => this.props.close() } className="fas fa-times close-details-button fa-2x" />
      </Fragment>
  	);
  }
}

function mapStateToProps (state) {
  return {
  	photo: state.activePhoto,
    users: state.users
  };
}
function matchDispatchToProps (dispatch) {
  return bindActionCreators({ 
    close: closeDetailsView
  }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(DetailsPhoto); 
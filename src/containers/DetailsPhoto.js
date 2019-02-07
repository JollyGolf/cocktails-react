import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Photo from './../components/Photo';
import DetailsComments from './../components/DetailsComments';
import { bindActionCreators } from 'redux';
import { closeDetailsView } from '../actions/index';

class DetailsPhoto extends Component {
  render () {
    const {photo, users, close} = this.props;
  	if (!photo) {
      return null;
  	}
    return (
  	  <Fragment>
       <div className="details-field details-field-flex">
        <div className="details-block-info details-block-info-flex">
          <Photo key={ photo.idPost } idPost={ photo.idPost } srcImg={ photo.img } size="l" />
          <DetailsComments users={ users } idPost={ photo.idPost } idUser={ photo.idUser } datePost={ photo.date } likes={ photo.likes } />
        </div>
       </div>
       <li onClick={ () => close() } className="fas fa-times close-details-button fa-2x" />
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
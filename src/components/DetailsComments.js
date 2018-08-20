import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './../containers/Comments';
import DataPost from './../containers/DataPost';
import AddComment from './../containers/AddComment';

export default class DetailsComments extends Component {
  render () {
   	const isUser = this.props.users.filter((user, index) => user.id === this.props.idUser);
    return (
  	  <div className="details-photo details-photo-flex">
        <div className="details-header details-header">
       	  <Photo srcImg={ isUser[0].avatar } key={ isUser[0].id } idPost={ this.props.idPost } size="xs"/>
       	  <div className="details-login">{ isUser[0].login }</div>
        </div>
        <Comments size="l" idPost={ this.props.idPost } />
       	<DataPost idUser={ isUser[0].id }  size="l" idPost={ this.props.idPost } datePost={ this.props.datePost } likes={ this.props.likes } />
       	<AddComment idPost={ this.props.idPost } idUser={ isUser[0].id }/>
      </div>
  	);
  }
}

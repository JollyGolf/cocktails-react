import React, { Component } from 'react';

export default class Comment extends Component {
  showComment(){ 
  	return this.props.users.map((user, index) => {
      if(user.id === this.props.idUser) {
        return (
          <div key={ index } id={ this.props.idComment } className="comment comment-flex">
            <div className="comment-title">{ user.login  }</div>
            <div className="comment-text">{ this.props.textComment }</div>
          </div>
        );
      } return null;
    });
  }
  render () {
    return this.showComment()
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Comment from './../components/Comment';
import { addComment } from '../actions/index';

class Comments extends Component {
  showComments(){
    const {comments, idPost, users} = this.props;
    return comments.map((comment, index) => {
      if(comment.idPost === idPost){
        return (
          <Comment 
            key={ comment.idComments } 
            idComments={ comment.idComments } 
            idPost={ comment.idPost } 
            idUser={ comment.idUser } 
            textComment={ comment.text } 
            size="m"
            users={ users }
          />
        );
      } return null;
    })
  }
  render () {
    return (
  	  <div className={`comments-size-${this.props.size} comments-flex`}>
        { this.showComments() }
      </div>
  	);
  }
}

function mapStateToProps (state) {
  return {
    comments: state.comments,
    users: state.users
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({ 
    commentsList: addComment
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Comments);
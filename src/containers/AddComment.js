import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment } from '../actions/index';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  setComment(){
    const {idPost, idUser, addComment} = this.props;
    const {inputValue} = this.state;
  	if(inputValue !== "") {
  	  addComment({
  	    idComments: Date.now(),
  	    idPost: idPost,
  	    idUser: idUser,
  	    likes: 0,
  	    text: inputValue
      });
      this.setState({inputValue : ""});
    }
  }
  render () {
    const {inputValue} = this.state;
    return (
      <div className="add-comment add-comment-flex">
        <input value={inputValue} onChange={evt => this.updateInputValue(evt)} className="comment-disable write-comment-input" placeholder="Add comment..."/>
        <li onClick={this.setComment.bind(this) } className="fa fa-paper-plane-o fa-2x icon-send"/>
      </div>
    );
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
}

function mapStateToProps (state) {
  return {
  	comments: state.comments
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({ 
  	addComment: addComment
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(AddComment); 
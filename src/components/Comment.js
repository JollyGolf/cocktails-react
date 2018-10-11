import React from 'react';

const Comment = ({users, idUser, idComment, textComment}) => (
  users.map((user, index) => {
    if(user.id === idUser) {
      return (
        <div key={ index } id={ idComment } className="comment comment-flex">
          <div className="comment-title">{ user.login  }</div>
          <div className="comment-text">{ textComment }</div>
        </div>
      );
    } return null;
  })
)
export default Comment;
import React from 'react';
import Photo from './Photo';
import Comments from './../containers/Comments';
import DataPost from './../containers/DataPost';
import AddComment from './../containers/AddComment';

const DetailsComments = ({users, idUser, idPost, datePost, likes}) => {
  const isUser = users.filter((user, index) => user.id === idUser);
  return (
    <div className="details-photo details-photo-flex">
      <div className="details-header details-header">
        <Photo srcImg={ isUser[0].avatar } key={ isUser[0].id } idPost={ idPost } size="xs"/>
        <div className="details-login">{ isUser[0].login }</div>
      </div>
      <Comments size="l" idPost={ idPost } />
      <DataPost idUser={ isUser[0].id }  size="l" idPost={ idPost } datePost={ datePost } likes={ likes } />
      <AddComment idPost={ idPost } idUser={ isUser[0].id }/>
    </div>
  );
}
export default DetailsComments;
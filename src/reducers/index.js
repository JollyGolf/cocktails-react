import { combineReducers } from 'redux';
import Users from './users';
import Photos from './photos';
import Comments from './comments';
import ActivePhoto from './photo-active';
import ActiveUser from './user-active';

const allReducers = combineReducers ({
  users: Users,
  photos: Photos,
  comments: Comments,
  activePhoto: ActivePhoto, 
  activeUser: ActiveUser
});

export default allReducers;
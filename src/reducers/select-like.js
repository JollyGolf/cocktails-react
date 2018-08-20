import Photos from './photos.js';

export default function (state = Photos, action) {
  switch (action.type) {
    case "SELECT_LIKE":
      return (
        [...state, {
      	idComments: action.payload.idComments,
  	    idPost: action.payload.idPost,
  	    idUser: action.payload.idUser,
  	    likes: action.payload.likes,
  	    text: action.payload.text
      }
     ])
    default: return state
  }
}
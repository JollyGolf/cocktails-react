export const select = (photo) => {
  return {
  	type: "PHOTO_SELECTED",
  	payload: photo
  }
}

export const closeDetailsView = () => {
  return {
  	type: "CLOSE_DETAILS_VIEW",
  	payload: "Close details view"
  }
}

export const switchUser = (user) => {
  return {
  	type: "SWITCH_USER",
  	payload: user
  }
}

export const addComment = (comment) => {
  return {
  	type: "ADD_COMMENT",
  	payload: comment
  }
}

export const selectLike = (post, idUser) => {
  return {
    type: "SELECT_LIKE",
    payload: post,
    currentUser: idUser
  }
}
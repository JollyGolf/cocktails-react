export default function (state = null, action) {
  switch (action.type) {
  	case "PHOTO_SELECTED": return action.payload;
  	case "CLOSE_DETAILS_VIEW": return null;
  	default: return state;
  }
}
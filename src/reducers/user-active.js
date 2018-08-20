export default function (state = null, action) {
  switch (action.type) {
  	case "SWITCH_USER": return action.payload;
  	default: return {
  	  type: "DEFAULT_USER",
  	  payload: 1
  	};
  }
}
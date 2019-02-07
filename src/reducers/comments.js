export const initialState = [
  	{
      idComments: 1,
  	  idPost: 1,
  	  idUser: 1,
  	  likes: 0,
      text: "Looks like another world"
  	},
  	{
      idComments: 2,
  	  idPost: 1,
  	  idUser: 3,
  	  likes: 0,
      text: "How are you?"
  	},
  	{
      idComments: 3,
  	  idPost: 1,
  	  idUser: 1,
  	  likes: 0,
      text: "There are many variation"
  	},
  	{
      idComments: 4,
  	  idPost: 1,
  	  idUser: 3,
  	  likes: 0,
      text: "Oh, okay, sorry"
  	},
  	{
      idComments: 5,
  	  idPost: 2,
  	  idUser: 3,
  	  likes: 0,
      text: "Hello"
  	},
  	{
      idComments: 6,
  	  idPost: 2,
  	  idUser: 1,
  	  likes: 0,
      text: "Hello too"
  	}
  ]

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, {
      	idComments: action.payload.idComments,
  	    idPost: action.payload.idPost,
  	    idUser: action.payload.idUser,
  	    likes: action.payload.likes,
  	    text: action.payload.text
      }
     ]
    default: return state
  }
}
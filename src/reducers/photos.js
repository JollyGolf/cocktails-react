import photos from '../image/image';

export const initialState = [
  	{
  	  idPost: 1,
  	  idUser: 1,
  	  likes: 0,
  	  date: "JULY 1",
      img: photos['photo_1'],
      statusLike: "unactive"
  	},
    {
      idPost: 2,
      idUser: 1,
      likes: 0,
      date: "JULY 2",
      img: photos['photo_2'],
      statusLike: "unactive"
    },
    {
      idPost: 3,
      idUser: 1,
      likes: 0,
      date: "JULY 3",
      img: photos['photo_3'],
      statusLike: "unactive"
    },
    {
      idPost: 4,
      idUser: 1,
      likes: 0,
      date: "JULY 4",
      img: photos['photo_4'],
      statusLike: "unactive"
    },
    {
      idPost: 5,
      idUser: 1,
      likes: 0,
      date: "JULY 5",
      img: photos['photo_5'],
      statusLike: "unactive"
    },
    {
      idPost: 6,
      idUser: 1,
      likes: 0,
      date: "JULY 6",
      img: photos['photo_6'],
      statusLike: "unactive"
    }
  ]

export default function (state = initialState, action) {
  switch (action.type) {
    case "SELECT_LIKE":
      return state.map((post, index) => {
        if(post.idPost === action.payload.idPost) {
          return [...state, {
            idPost: action.payload.idPost,
            idUser: action.payload.idUser,
            likes: action.payload.likes + 1,
            date: action.payload.date,
            img: action.payload.img,
            statusLike: "active"
            }
          ]
        }
        return null;
      });
    default: return state
  }
}
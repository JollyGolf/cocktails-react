import photos from '../image/image';

export default function() {
  return [
  	{
  	  id: 1,
  	  avatar: photos['photo_1'],
  	  login: "zhigamovsky_nikita",
  	  posts: 0,
  	  likes: 0,
  	  name: "Nikita Zhigamovsky",
  	  bio: "Sumy"
  	},
    {
      id: 2,
      avatar: photos['photo_2'],
      login: "shepeliev_dmytro",
      posts: 0,
      likes: 0,
      name: "Dmytro Shepeliev",
      bio: "Sumy"
    }
    ,
    {
      id: 3,
      avatar: photos['photo_3'],
      login: "redya_artem",
      posts: 0,
      likes: 0,
      name: "Artem Redya",
      bio: "Sumy"
    }
  ]
}
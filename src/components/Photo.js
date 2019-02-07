import React from 'react';

const Photo = ({onClick, idPost, srcImg, size}) => (
  <img 
    onClick={onClick } 
    id={idPost } 
    src={srcImg } 
    alt="photography" 
    className={`photo-size-${size}`} 
  />
)
export default Photo;

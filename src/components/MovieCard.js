import React from 'react';
import { IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({ posterPath, originalTitle }) => {
  // console.log(posterPath,'posterPath');
  // console.log(originalTitle,'originalTitle');
  if(!posterPath) return null;

  return (
    <li className='m-2 w-max'>
      <h4 className='text-center font-medium'>{originalTitle}</h4>
      <div>{posterPath && <img src={IMG_CDN_URL + posterPath} alt="Movie Name" className='m-auto' />}</div>
    </li>
  );
}

export default MovieCard;

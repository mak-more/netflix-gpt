import React from 'react';
import { IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({ posterPath }) => {
  console.log(posterPath,'posterPath')

  return (
    <>
      <div>
        <img src={IMG_CDN_URL + posterPath} alt="Movie Name" />
      </div>
    </>
  );
}

export default MovieCard;

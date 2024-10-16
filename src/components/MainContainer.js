import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBg from './VideoBg';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  
  // if (movies === null) return; //same shortcut code wrote just below 
  if (!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const {original_title, overview, id} = mainMovie;

  return (
    <div className='relative'>
      <VideoBg movie_id={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
}

export default MainContainer;

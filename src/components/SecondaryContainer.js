import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector (store => store.movies)
  // console.log(movies,'NowPlaying')

  return (
    <div className='pt-5 bg-gray-200'>
      <div className='mb-5'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
      <div className='mb-5'>
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
      <div className='mb-5'>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;

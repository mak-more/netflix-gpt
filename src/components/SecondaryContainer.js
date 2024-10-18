import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector (store => store.movies)
  console.log(movies,'NowPlaying')

  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  );
}

export default SecondaryContainer;

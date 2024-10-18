import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log(title, 'title');
  console.log(movies,'movies');

  return (
    <div className="relative">
      <div className="container mx-auto m-4">
        <div>
          <h2>{title}</h2>
          <MovieCard />
          {/* <MovieCard posterPath={movies[1].poster_path} /> */}
          {/* {movies.map((movie) => {
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
            })} */}
        </div>
      </div>
    </div>
  );
}

export default MovieList;

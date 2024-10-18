import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  // console.log(title, 'title');
  // console.log(movies,'movies');

  return (
    <div className="relative">
      <div className="container mx-auto">
        <div>
          <h2 className='text-xl font-bold'>{title}</h2>
          <div className="overflow-x-scroll">
            <ul className='inline-flex items-stretch flex-nowrap'>
              {movies && movies?.map((movie) => (
                <MovieCard key={movie.id} originalTitle={movie?.original_title} posterPath={movie && movie?.poster_path} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieList;

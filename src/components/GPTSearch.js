import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <div className='relative md:top-20 top-32'>
      <div className='container mx-auto mt-4 text-center'>
        <GptSearchBar />
        <GptMovieSuggestions />     
      </div>
    </div>
  );
}

export default GptSearch;

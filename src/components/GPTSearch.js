import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <div className='w-max relative z-50 m-auto'>
      <GptSearchBar />
      <GptMovieSuggestions />     
    </div>
  );
}

export default GptSearch;

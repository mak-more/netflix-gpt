import React, { useRef } from 'react';
import lang from '../utils/languageConstant';
import { useDispatch , useSelector } from 'react-redux';
import openAi from '../utils/openAi';
import { API_Options } from '../utils/constant';
import { addGptMoviesResult } from '../utils/gptSlice';

const GptSearchBar = () => {
const dispatch = useDispatch();

const langKey = useSelector(store => store.config.lang);

const searchText = useRef(null);

// console.log(process.env.REACT_APP_OPEN_AI_KEY, "OpenAI Key")

// Search movie in TMDB
const searchMovieTMDB = async(movie) => {
  const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_Options);
  const json = await data.json();
  return json.results;
};

const handleGptSearchClick = async() => {
  console.log(searchText.current.value);

  //Make an API call to make the GPT results
  const gptQuery = "Act as a movie recommendations system and suggest some movies for the query :" +  searchText.current.value + '. Only give me names of 5 movies, comma separated, like the example result given ahead. Example Result: Gadar, Don, Sholay, KMG, Arjun';
  const gptResults = await openAi.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });
  console.log(gptResults.choices?.[0]?.message?.content);

  const gptSearchMovies = gptResults.choices?.[0]?.message?.content.split(",");

  //For each movie it will search from TMDB API
  const promiseArray = gptSearchMovies.map((movie) => searchMovieTMDB(movie));
  
  //Promise Array
  const tmdbResults = await Promise.all(promiseArray);
  console.log(tmdbResults);

  dispatch(addGptMoviesResult({movieNames: gptSearchMovies, movieResults: tmdbResults}));
}

  return (
    <form className='mx-auto' onSubmit={(e) => e.preventDefault()}>
      <input type="text" className='py-2 px-3 mr-3 border border-slate-500 rounded-lg w-80' placeholder={lang[langKey].gptSearchPlaceholder} ref={searchText}/>
      <button className='py-2 px-3 bg-slate-300 rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
    </form>
  );
}

export default GptSearchBar;

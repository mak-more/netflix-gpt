import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_Options } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_Options);
    const json = await data.json();
    // console.log(json);
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(()=> {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
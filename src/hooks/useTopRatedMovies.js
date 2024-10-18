import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_Options } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getTopRatedMovies = async()=>{
    const data = await fetch(' https://api.themoviedb.org/3/movie/top_rated?page=1', API_Options);
    const json = await data.json();
    // console.log(json);
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(()=> {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
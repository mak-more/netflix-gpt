import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_Options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies); //added this line for API calling once

  const getNowPlayingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options);
    const json = await data.json();
    // console.log(json);
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=> {
    // Below any two methods use for API calling at only ONCE if it is there
    // if(!nowPlayingMovies) getNowPlayingMovies(); //Method One
    !nowPlayingMovies && getNowPlayingMovies();//Method Two
    // getNowPlayingMovies();
  }, []);

  // console.log(process.env.REACT_APP_TMDB_KEY, "TMDB Key")
};

export default useNowPlayingMovies;
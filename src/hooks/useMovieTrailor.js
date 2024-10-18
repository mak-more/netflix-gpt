import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from '../utils/constant';
import { addTrailorVideo } from '../utils/movieSlice';

const useMovieTrailor = (movie_id) => {
  //fetching trailor video & updating the store
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/videos?language=en-US", API_Options);
    const json = await data.json();
    console.log(json);
  
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailor = filterData.length ? filterData[0] : json.results[0];
    console.log(trailor, 'filter trailor');
  
    dispatch(addTrailorVideo(trailor));
  };
  
  useEffect(() => {
    getMovieVideos();
  }, [] );
}

export default useMovieTrailor;
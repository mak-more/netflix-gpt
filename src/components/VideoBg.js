import React, { useEffect } from 'react';
import { API_Options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailorVideo } from '../utils/movieSlice';

const VideoBg = ({movie_id}) => {
  
  const trailorVideo = useSelector(store => store.movies?.trailorVideo);
  const dispatch = useDispatch();
  
  const getMovieVideos = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/933260/videos?language=en-US', API_Options);
  const json = await data.json();
  console.log(json);

  const filterData = json.results.filter((video) => video.type === "Trailer");
  const trailor = filterData.length ? filterData[0] : json.results[0];
  console.log(trailor, 'filter trailor');

  dispatch(addTrailorVideo(trailor));
};

useEffect(() => {
  getMovieVideos();
}, [] )

  return (
    <div className='absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70'>
      <div>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/LNlrGhBpYjc?si=ZDWfxq42WyC2WVyK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailorVideo?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>      
    </div>
  );
}

export default VideoBg;

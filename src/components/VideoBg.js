import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailor from '../hooks/useMovieTrailor';

const VideoBg = ({movie_id}) => {
  
  const trailorVideo = useSelector(store => store.movies?.trailorVideo);
  useMovieTrailor(movie_id);

  return (    
    <div className='relative'>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/LNlrGhBpYjc?si=ZDWfxq42WyC2WVyK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
      <iframe className='w-full aspect-video' src={"https://www.youtube.com/embed/" + trailorVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
}

export default VideoBg;

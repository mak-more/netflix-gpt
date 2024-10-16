import React from 'react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='m-6 w-1/2 relative'>
      <h2 className='text-3xl font-bold text-white'>{title}</h2>
      <p className='text-lg text-white'>{overview}</p>
      <div className='mt-6'>
        <button className='px-3 py-1 text-white bg-gray-700 bg-opacity-80 rounded-lg'>Play</button>
        <button className='px-3 py-1 text-white bg-gray-700 bg-opacity-80 rounded-lg ml-3'>More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;

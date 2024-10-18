import React from 'react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute top-0 w-full aspect-video bg-gradient-to-l from-black'>
      <div className='w-1/2 p-12 pt-[10%]' style={{float:'right'}}>
        <h2 className='text-3xl font-bold text-white mb-4'>{title}</h2>
        <p className='text-lg text-white'>{overview}</p>
        <div className='mt-6'>
          <button className='px-3 py-1 text-black bg-white bg-opacity-80 rounded-lg hover:bg-opacity-100'>Play</button>
          <button className='px-3 py-1 text-black bg-white bg-opacity-80 rounded-lg ml-3 hover:bg-opacity-100'>More Info</button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;

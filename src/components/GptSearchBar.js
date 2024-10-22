import React from 'react';
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
const langKey = useSelector(store => store.config.lang);

  return (
    <div className=''>
      <form className='mt-4'>
        <input type="text" className='py-2 px-3 mr-3 border border-slate-500 rounded-lg w-80' placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className='py-2 px-3 bg-slate-300 rounded-lg'>{lang[langKey].search}</button>
      </form>      
    </div>
  );
}

export default GptSearchBar;

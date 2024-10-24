import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO , SUPPORTED_LANGUAGES } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
const dispatch = useDispatch();

const showGptSearch = useSelector(store => store.gpt.showGptSearch);
const handleGptSearchBtn = () => {
  dispatch(toggleGptSearchView());
};
const handleLanguageChange = (e) => {
  // console.log(e.target.value);
  dispatch(changeLanguage(e.target.value));
}

  return (
    <div className='relative z-50'>
      <div className='fixed top-0 left-0 right-0 bg-white shadow-md px-4 py-4'>
        <div className='flex justify-between items-center md:flex-row flex-col'>
          <div className="w-60 md:mb-0 mb-3"><img src={LOGO} alt="Logo" className="" width="340" height="70" /></div>
          <div className="">
            {showGptSearch && (
              <select className='py-1 px-3 bg-slate-300 rounded-lg' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang => 
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              )}
            </select>
            )}
            <button className='py-1 px-3 mx-3 bg-slate-300 rounded-lg' onClick={handleGptSearchBtn}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
            <Link to='/' title='Signout'>Signout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

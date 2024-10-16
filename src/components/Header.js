import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='relative z-50'>
      <div className='fixed top-0 left-0 right-0 bg-white shadow-md px-4 py-4'>
        <div className='flex justify-between'>
          <div className="w-60"><img src="https://www.tradebulls.in/images/tradebulls-logo.svg" alt="Logo" className="" width="340" height="70" /></div>
          <div className=""><Link to='/' title='Signout'>Signout</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Header;

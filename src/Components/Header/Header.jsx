import React from 'react';

import './Header.scss';

function Header() {
  return (
    <div className='header-container'>
      <h1>MOOVIE LIBRARY</h1>
    </div>
  );
}

export default React.memo(Header);

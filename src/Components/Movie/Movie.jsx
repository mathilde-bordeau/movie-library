import React from 'react';

import './Movie.scss';

import { Image } from 'react-bootstrap';

function Movie() {
  return (
    <div className='movie-container'>
      <div className="presentation-container">
        <Image src='' alt='' />
      </div>
      <div className="description-container">

      </div>
    </div>
  );
}

export default React.memo(Movie);

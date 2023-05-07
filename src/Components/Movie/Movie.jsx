import React from 'react';
import PropTypes from 'prop-types';

import './Movie.scss';

import { Image } from 'react-bootstrap';

const urlBaseImage = 'https://image.tmdb.org/t/p/original/';

function Movie({
  movie
}) {

  if (movie) {
    return (
      <div className='movie-container'>
        <h2>{movie.title}</h2>
        <div className="presentation-container">
          <Image 
            src={urlBaseImage+movie.poster_path}
            alt='poster du film' 
            className='poster-image'
          />
          <div className="informations-container">
            <div className="informations-part1">
              <h3>Popularité :</h3>
              <p className='caracteristic'>{movie.popularity}</p>
              <h3>Public + 18ans :</h3>
              <p className='caracteristic'>{movie.adult}</p>
              <h3>Date de de parution :</h3>
              <p className='caracteristic'>{movie.release_date}</p>
              <h3>Genre :</h3>
              {movie.genres.map((genre) =>
                <p 
                  key={genre.id}
                  className='caracteristic'
                >{genre.name}</p>
              )}
            </div>
            {/* <div className="informations-part2">
              <h3>Réalisation :</h3>
              <p className='caracteristic'>Steven Spielberg</p>
              <h3>Casting :</h3>
              <p className='caracteristic'>Brad Pitt, <br/> Cate Blanchette, <br/>Edward Norton,</p>
            </div> */}
          </div>
        </div>
        <div className="description-container">
          <p>{movie.overview}</p>
        </div>
      </div> 
    );
  }

}

Movie.propTypes = {
  movie: PropTypes.object,
};

export default React.memo(Movie);

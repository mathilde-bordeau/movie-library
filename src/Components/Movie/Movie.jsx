import React from 'react';
import PropTypes from 'prop-types';

import './Movie.scss';

import { Badge, Image } from 'react-bootstrap';
import { BsCardImage } from 'react-icons/bs';

const urlBaseImage = 'https://image.tmdb.org/t/p/original/';

function Movie({
  movie
}) {

  if (movie) {
    return (
      <div className='movie-container'>
        <h2>{movie.title}</h2>
        <div className="presentation-container">
          {movie.poster_path ? (
            <Image 
              src={urlBaseImage+movie.poster_path}
              alt='poster du film' 
              className='poster-image'
            />) : (
            <div className="poster-container">
              <BsCardImage className='default-image' size={100}  />
            </div>
          )}
          <div className="informations-container">
            <div className="informations-part1">
              <h4>Note :</h4>
              <Badge className='caracteristic badge vote-count'>{movie.vote_average}</Badge>
              <h4>Titre original :</h4>
              <p className='caracteristic'>{movie.original_title}</p>
              <h4>Date de de parution :</h4>
              <p className='caracteristic'>{movie.release_date}</p>
              <h4>Genre :</h4>
              {movie.genres.map((genre) =>
                <Badge
                  key={genre.id}
                  className='caracteristic badge'
                >
                  {genre.name}
                </Badge> 
                  
              )}
            </div>
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

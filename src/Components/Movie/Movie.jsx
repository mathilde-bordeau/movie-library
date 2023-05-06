import React from 'react';

import './Movie.scss';

import { Image } from 'react-bootstrap';

import moviesData from '../../Data/movies.json';
const movies = moviesData.results;

const urlBaseImage = 'https://image.tmdb.org/t/p/original/';

function Movie() {

  console.log(movies);
  const movieId = 278;
  const movie = movies.find((movie) => movie.id === movieId);

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
            <h3>Durée :</h3>
            <p className='caracteristic'>2h56</p>
            <h3>Année de parution :</h3>
            <p className='caracteristic'>1989</p>
            <h3>Genre :</h3>
            <p className='caracteristic'>Action - Psychologie</p>
          </div>
          <div className="informations-part2">
            <h3>Réalisation :</h3>
            <p className='caracteristic'>Steven Spielberg</p>
            <h3>Casting :</h3>
            <p className='caracteristic'>Brad Pitt, <br/> Cate Blanchette, <br/>Edward Norton,</p>
          </div>
        </div>
      </div>
      <div className="description-container">
        <p>{movie.overview}</p>
      </div>
    </div> 
  );
}

export default React.memo(Movie);

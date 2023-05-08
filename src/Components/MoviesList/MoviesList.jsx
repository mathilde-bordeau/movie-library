import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';

import moviesRequest from '../../requests/requests';

import { ListGroup, Button } from 'react-bootstrap';

function MoviesList({
  query,
  movies,
  setMovies,
  setMovie
}) {

  const moonLanding = new Date('2023-04-14');

  console.log(moonLanding.getFullYear());

  const [ pageNb, setPageNb ] = useState(1);
  const [ loadingMore, setLoadingMore ] = useState(true);

  useEffect(() => {
    setPageNb(1);
    setLoadingMore(true);
  }, [query]);

  const getMovie = async (id) => {
    try {
      const movieResult = await moviesRequest.getMovieById(id);
      setMovie(movieResult);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = async () => {
    console.log(pageNb);
    try {
      const moviesResults = await moviesRequest.getMoviesBySearch(query, pageNb+1);
      if (moviesResults.length > 0) {
        setPageNb(pageNb +1);
        setMovies((oldstate)=> ([...oldstate, ...moviesResults]));
        console.log(movies);
      } else {
        console.log(movies);
        setLoadingMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (movies) {
    return (
      <div className='movieslist-container'>
        <div className="movieslist-detail">
          <ListGroup>
            {movies.map((movie) =>
              <ListGroup.Item 
                key={movie.id}
                onClick={() => getMovie(movie.id)}
              >
                <p>
                  {movie.title} - ({new Date(movie.release_date).getFullYear()})
                </p>
              </ListGroup.Item>
            )}
          </ListGroup>
        </div>
        {loadingMore &&
        <Button 
          className="more-results-button"
          onClick={() => loadMore()}
        >
          Plus de résultats
        </Button>
        }
      </div>
    );
  }
  
}

MoviesList.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.object),
  setMovies: PropTypes.func,
  setMovie: PropTypes.func,
};

export default React.memo(MoviesList);

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './MoviesList.scss';

import moviesRequest from '../../requests/requests';

import { ListGroup, Button } from 'react-bootstrap';

function MoviesList({
  query,
  result,
  setMovie
}) {

  const [ movies, setMovies ] = useState([]);
  const [ pageNb, setPageNb ] = useState(1);
  const [ hiddenLoadingMore, setHiddenLoadingMore ] = useState(true);
  const [ disabledLoadingMore, setDisabledLoadingMore ] = useState(false);

  useEffect(() => {
    if(result.total_pages != undefined && result.total_pages === result.page) {
      setDisabledLoadingMore(true);
    } else {
      setDisabledLoadingMore(false);
    }
    if(result.results) {
      setMovies(result.results);
      setHiddenLoadingMore(false);
    }
    setPageNb(1);
  }, [result]);

  const getMovie = async (id) => {
    try {
      const movieResult = await moviesRequest.getMovieById(id);
      setMovie(movieResult);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = async () => {
    try {
      const moviesResults = await moviesRequest.getMoviesBySearch(query, pageNb+1);
      setPageNb(moviesResults.page);
      setMovies((oldstate)=> ([...oldstate, ...moviesResults.results]));
      if (moviesResults.page >= moviesResults.total_pages) {
        setDisabledLoadingMore(true);
        console.log(movies);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='movieslist-container'>
      <div className="movieslist-detail-container">
        <div className="movieslist-detail">
          <ListGroup>
            {movies.map((movie) =>
              <ListGroup.Item 
                key={movie.id}
                onClick={() => getMovie(movie.id)}
              >
                <p>
                  {movie.title}{movie.release_date ? ` - (${new Date(movie.release_date).getFullYear()})` : '' }
                </p>
              </ListGroup.Item>
            )}
          </ListGroup>
        </div>
      </div>  
      <Button 
        className={classnames('more-results-button', 
          hiddenLoadingMore ? 'button-hidden': '', 
          disabledLoadingMore ? 'button-disabled' : '')}
        disabled={disabledLoadingMore}
        onClick={() => loadMore()}
      >
        Plus de résultats
      </Button>
    </div>
  );

}
  
MoviesList.propTypes = {
  query: PropTypes.string,
  result: PropTypes.object,
  setMovie: PropTypes.func,
};

export default React.memo(MoviesList);

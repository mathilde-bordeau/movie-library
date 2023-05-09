import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './MoviesList.scss';

import moviesRequest from '../../requests/requests';

import { ListGroup, Button } from 'react-bootstrap';

function MoviesList({
  query,
  result,
  setMovie,
  message,
  setMessage
}) {

  const [ movies, setMovies ] = useState([]);
  const [ pageNb, setPageNb ] = useState(1);
  const [ hiddenLoadingMore, setHiddenLoadingMore ] = useState(true);
  const [ disabledLoadingMore, setDisabledLoadingMore ] = useState(false);

  useEffect(() => {

    if (result.total_pages != undefined && result.total_pages === 1) {
      setDisabledLoadingMore(true);
    } else {
      setDisabledLoadingMore(false);
    }

    if (result && result.total_results === 0) {
      setMessage('Pas de résultat pour votre recherche');
      setHiddenLoadingMore(true);
      setMovies([]);
    } else if (result && result.total_results > 0) {
      setMovies(result.results);
      setMessage('');
      setHiddenLoadingMore(false);
    }

    setPageNb(1);
  }, [result]);


  /**
   * selection du film à afficher
   * @param id 
   */
  const getMovie = async (id) => {
    try {
      const movieResult = await moviesRequest.getMovieById(id);
      setMovie(movieResult);
    } catch (error) {
      setMessage('Problème serveur, réessayer plus tard.');
    }
  };

  
  /**
   * récupération des films la page suivante  
   */
  const loadMore = async () => {
    try {
      const moviesResults = await moviesRequest.getMoviesBySearch(query, pageNb+1);
      setPageNb(moviesResults.page);
      setMovies((oldstate)=> ([...oldstate, ...moviesResults.results]));
      if (moviesResults.page >= moviesResults.total_pages) {
        setDisabledLoadingMore(true);
      }
    } catch (error) {
      setMessage('Problème serveur, réessayer plus tard.');
    }
  };

  return (
    <div className='movieslist-container'>
      <div className="message-container">
        <p>{message}</p>
      </div>
      <div className={classnames('movieslist-detail-container', 
        (result.page === undefined || result.total_results === 0) ? 'no-display' : '')}>
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
  message: PropTypes.string,
  setMessage: PropTypes.func,
};

export default React.memo(MoviesList);

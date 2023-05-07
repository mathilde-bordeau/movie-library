import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';

import moviesRequest from '../../requests/requests';

import { 
  OverlayTrigger, 
  Tooltip, 
  Figure, 
  ListGroup, 
  Button
} from 'react-bootstrap';

const urlBaseImage = 'https://image.tmdb.org/t/p/original/';


function MoviesList({
  query,
  movies,
  setMovies,
  setMovie
}) {

  const [ pageNb, setPageNb ] = useState(1);
  const [ loadingMore, setLoadingMore ] = useState(true);

  useEffect(() => {
    setPageNb(1);
    setLoadingMore(true);
  }, [query, setPageNb]);

  const renderTooltip = (poster) => (
    <Tooltip id="button-tooltip">
      <Figure>
        <Figure.Image
          className='poster-figure'
          alt="poster du film"
          src={urlBaseImage+poster}
        />
      </Figure>
    </Tooltip>
  );

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
        return ;
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (movies) {
    return (
      <div className='movieslist-container'>
        <h3>Liste des films</h3>
        <div className="movieslist-detail">
          <ListGroup>
            {movies.map((movie) =>
              <OverlayTrigger
                placement="left"
                delay={{ show: 200, hide: 100 }}
                overlay={renderTooltip(movie.poster_path)}
                key={movie.id}
              >
                <ListGroup.Item 
                  className='list-item' 
                  onClick={() => getMovie(movie.id)}
                >
                  {movie.title}
                </ListGroup.Item>
              </OverlayTrigger>
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

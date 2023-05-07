import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';

import { 
  OverlayTrigger, 
  Tooltip, 
  Figure, 
  ListGroup 
} from 'react-bootstrap';

const urlBaseImage = 'https://image.tmdb.org/t/p/original/';

function MoviesList({
  movies
}) {

  const renderTooltip = (poster) => (
    <Tooltip id="button-tooltip">
      <Figure>
        <Figure.Image
          className='poster-figure'
          alt="171x180"
          src={urlBaseImage+poster}
        />
      </Figure>
    </Tooltip>
  );

  if (movies) {
    return (
      <div className='movieslist-container'>
        <h3>Liste des films</h3>
        <div className="movieslist-detail">
          <ListGroup defaultActiveKey="#link1">
            {movies.map((movie) =>
              <OverlayTrigger
                placement="left"
                delay={{ show: 200, hide: 100 }}
                overlay={renderTooltip(movie.poster_path)}
                key={movie.id}
              >
                <ListGroup.Item className='list-item' href="#link1">{movie.title}</ListGroup.Item>
              </OverlayTrigger>
            )}
          </ListGroup>
        </div>
      </div>
    );
  }
  
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default React.memo(MoviesList);

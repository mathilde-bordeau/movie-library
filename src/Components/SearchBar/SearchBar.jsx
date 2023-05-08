import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.scss';

import { Form } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

import moviesRequest from '../../requests/requests';

function SearchBar({
  setQuery,
  setMovies
}) {

  const [ searchString, setSearchString] = useState();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(searchString);
    if (!searchString) {
      alert('Veuillez entrer au moins un caractère');   
    }
    setQuery(searchString);
    try {
      const moviesResults = await moviesRequest.getMoviesBySearch(searchString, 1);
      setMovies(moviesResults);
    } catch (error) {
      console.log(error);
    }
    
  };
  
  return (
    <div className='searchbar-container'>
      <Form className="d-flex searchbar-form" onSubmit={handleOnSubmit} >
        <input
          type="search"
          placeholder="Rechercher un film"
          className="me-2 searchbar-bar"
          aria-label="Search"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button type="submit" className="searchbar-button"><BsSearch className='searchbar-icon'/></button>
      </Form>
    </div>
  );
}

SearchBar.propTypes = {
  setQuery: PropTypes.func,
  setMovies: PropTypes.func,
};

export default React.memo(SearchBar);
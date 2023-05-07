import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.scss';

import { Form, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

import moviesRequest from '../../requests/requests';

function SearchBar({
  setMovies
}) {

  const [ searchString, setSearchString] = useState();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(searchString);
    if (!searchString) {
      alert('Veuillez entrer au moins un caractère');   
    }
    try {
      const moviesResults = await moviesRequest.getMoviesBySearch(searchString);
      setMovies(moviesResults);
    } catch (error) {
      console.log(error);
    }
    
  };
  
  return (
    <div className='searchbar-container'>
      <Form className="d-flex searchbar-form" onSubmit={handleOnSubmit} >
        <Form.Control
          type="search"
          placeholder="Rechercher par le titre"
          className="me-2 searchbar-bar"
          aria-label="Search"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <Button type="submit" className="searchbar-button"><BsSearch /></Button>
      </Form>
    </div>
  );
}

SearchBar.propTypes = {
  setMovies: PropTypes.func,
};

export default React.memo(SearchBar);
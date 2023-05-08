import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.scss';

import { Form } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

import moviesRequest from '../../requests/requests';

function SearchBar({
  setQuery,
  setResult
}) {

  const [ searchString, setSearchString] = useState();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!searchString) {
      alert('Veuillez entrer au moins un caractère');   
    } else {
      setQuery(searchString);
      try {
        const moviesResults = await moviesRequest.getMoviesBySearch(searchString, 1);
        setResult(moviesResults);
      } catch (error) {
        console.log(error);
      }
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
  setResult: PropTypes.func,
};

export default React.memo(SearchBar);
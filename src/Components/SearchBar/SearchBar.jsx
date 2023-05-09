import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.scss';

import { Form } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

import moviesRequest from '../../requests/requests';

function SearchBar({
  setQuery,
  setResult,
  setMessage
}) {

  const [ searchString, setSearchString] = useState();


  /**
   * 
   * @param {*} e 
   */
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!searchString) {
      alert('Veuillez entrer au moins un caractère');   
    } else {
      setQuery(searchString);
      try {
        const moviesResults = await moviesRequest.getMoviesBySearch(searchString, 1);
        if (moviesResults.results.length === 0) {
          setMessage('Pas de résultat pour votre recherche');
        }
        setResult(moviesResults);
      } catch (error) {
        setMessage('Problème serveur, réessayer plus tard.');
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
  setMessage: PropTypes.func,
};

export default React.memo(SearchBar);
import React from 'react';

import './SearchBar.scss';

import { Form, Button } from 'react-bootstrap';

function SearchBar() {
  return (
    <div className='searchBar-container'>
      <Form className="d-flex search-form" >
        <Form.Control
          type="search"
          placeholder="Rechercher par le titre"
          className="me-2 search-bar"
          aria-label="Search"
          // value={searchName}
          // onChange={(e) => setSearchName(e.target.value)}
        />
        <Button type="submit" className="search-button">Valider</Button>
      </Form>
    </div>
  );
}

export default React.memo(SearchBar);
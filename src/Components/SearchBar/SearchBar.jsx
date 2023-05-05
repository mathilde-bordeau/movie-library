import React from 'react';

import './SearchBar.scss';

import { Form, Button } from 'react-bootstrap';

function SearchBar() {
  return (
    <div className='searchbar-container'>
      <Form className="d-flex searchbar-form" >
        <Form.Control
          type="search"
          placeholder="Rechercher par le titre"
          className="me-2 searchbar-bar"
          aria-label="Search"
          // value={searchName}
          // onChange={(e) => setSearchName(e.target.value)}
        />
        <Button type="submit" className="searchbar-button">Valider</Button>
      </Form>
    </div>
  );
}

export default React.memo(SearchBar);
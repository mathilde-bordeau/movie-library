import React from 'react';

import './MoviesList.scss';

import { ListGroup } from 'react-bootstrap';

function MoviesList() {
  return (
    <div className='movieslist-container'>
      <h2>Liste des films</h2>
      <div className="movieslist-detail">
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item  href="#link1">
            Link 1
          </ListGroup.Item>
          <ListGroup.Item href="#link2">
            Link 2
          </ListGroup.Item>
          <ListGroup.Item href="#link3" >
            Link 3
          </ListGroup.Item>
          <ListGroup.Item  href="#link4">
            Link 1
          </ListGroup.Item>
          <ListGroup.Item href="#link5">
            Link 2
          </ListGroup.Item>
          <ListGroup.Item href="#link6" >
            Link 3
          </ListGroup.Item>
          <ListGroup.Item  href="#link7">
            Link 1
          </ListGroup.Item>
          <ListGroup.Item href="#link8">
            Link 2
          </ListGroup.Item>
          <ListGroup.Item href="#link9" >
            Link 3
          </ListGroup.Item>
          <ListGroup.Item  href="#link10">
            Link 1
          </ListGroup.Item>
          <ListGroup.Item href="#link11">
            Link 2
          </ListGroup.Item>
          <ListGroup.Item href="#link12" >
            Link 3
          </ListGroup.Item>
          <ListGroup.Item  href="#link13">
            Link 1
          </ListGroup.Item>
          <ListGroup.Item href="#link14">
            Link 2
          </ListGroup.Item>
          <ListGroup.Item href="#link15" >
            Link 3
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default React.memo(MoviesList);

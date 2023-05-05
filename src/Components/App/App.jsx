import React from 'react';
import './App.scss';

import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Movie from '../Movie/Movie';
import MoviesList from '../MoviesList/MoviesList';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <div className="search-movie-container">
          <SearchBar />
          <MoviesList />
        </div>
        <div className="movie-detail-container">
          <Movie />
        </div>
      </div>
    </div>
  );
}

export default React.memo(App);

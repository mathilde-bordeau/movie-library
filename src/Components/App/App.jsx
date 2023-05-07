import React, { useState } from 'react';
import './App.scss';

// import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
// import Movie from '../Movie/Movie';
import MoviesList from '../MoviesList/MoviesList';

function App() {

  const [ movies, setMovies ] = useState([]);

  return (
    <div className="app-container">
      <div className="main-container">
        <div className="search-movie-container">
          <h1>Les meilleurs films à voir</h1>
          <SearchBar setMovies={setMovies}/>
          <MoviesList movies={movies}/>
        </div>
        <div className="movie-detail-container">
          {/* <Movie /> */}
        </div>
      </div>
    </div>
  );
}

export default React.memo(App);

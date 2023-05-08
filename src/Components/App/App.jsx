import React, { useState } from 'react';
import './App.scss';

// import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Movie from '../Movie/Movie';
import MoviesList from '../MoviesList/MoviesList';

function App() {

  const [ query, setQuery ] = useState();
  const [ result, setResult ] = useState({});
  const [ movie, setMovie ] =useState();

  return (
    <div className="app-container">
      <div className="main-container">
        <div className="search-movie-container">
          <h1>Les meilleurs films à voir</h1>
          <SearchBar 
            setResult={setResult}
            setQuery={setQuery}
          />
          <MoviesList
            query={query}
            result={result}
            setMovie={setMovie}
          />
        </div>
        <div className="movie-detail-container">
          <Movie 
            query={query}
            movie={movie}
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(App);

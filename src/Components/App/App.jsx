import React, { useState } from 'react';

import './App.scss';

import SearchBar from '../SearchBar/SearchBar';
import Movie from '../Movie/Movie';
import MoviesList from '../MoviesList/MoviesList';

function App() {

  const [ query, setQuery ] = useState();
  const [ result, setResult ] = useState({});
  const [ movie, setMovie ] =useState();
  const [ message, setMessage ] = useState('');

  return (
    <div className="app-container">
      <div className="main-container">
        <div className="search-movie-container">
          <h1>Les meilleurs films à voir</h1>
          <SearchBar 
            setResult={setResult}
            setQuery={setQuery}
            setMessage={setMessage}
          />
          <MoviesList
            query={query}
            result={result}
            setMovie={setMovie}
            message={message}
            setMessage={setMessage}
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

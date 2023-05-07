import api from '../api';

const moviesRequest = {

  getMoviesBySearch: async (query) => {
    try {
      const movies = await api.get(`search/movie?api_key=${process.env.REACT_APP_API_TMDB}&query=${query}`);
      return (movies.data.results);
    } catch (error) {
      console.log(error);
    }
  },

};


export default moviesRequest;
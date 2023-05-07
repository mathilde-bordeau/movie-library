import api from '../api';

const moviesRequest = {

  getMoviesBySearch: async (query) => {
    try {
      const results = await api.get(`search/movie?api_key=${process.env.REACT_APP_API_TMDB}&query=${query}`);
      return (results.data.results);
    } catch (error) {
      console.log(error);
    }
  },

  getMovieById: async (id) => {
    try {
      const result = await api.get(`movie/${id}?api_key=${process.env.REACT_APP_API_TMDB}`);
      console.log(result);
      return (result.data);
    } catch (error) {
      console.log(error);
    }
  }

};


export default moviesRequest;
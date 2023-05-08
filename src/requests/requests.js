import api from '../api';

const moviesRequest = {

  getMoviesBySearch: async (query, pageNb) => {
    try {
      const results = await api.get(`search/movie?api_key=${process.env.REACT_APP_API_TMDB}&language=fr-FR&query=${query}&page=${pageNb}`);
      return (results.data.results);
    } catch (error) {
      console.log(error);
    }
  },

  getMovieById: async (id) => {
    console.log('moviebyid');
    try {
      const result = await api.get(`movie/${id}?api_key=${process.env.REACT_APP_API_TMDB}&language=fr-FR`);
      console.log(result);
      return (result.data);
    } catch (error) {
      console.log(error);
    }
  }

};


export default moviesRequest;
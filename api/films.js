import axios from 'axios';

const tmdbApiKey = process.env.TMDB_API_KEY; 

export const getPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}`;
    const response = await axios.get(url);
    return response.data.results;
  };


  export const searchMovies = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${query}`;
    const response = await axios.get(url);
    return response.data.results;
  };
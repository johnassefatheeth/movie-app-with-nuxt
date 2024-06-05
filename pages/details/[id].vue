<template>
    <div>
      <div v-if="movie">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.overview }}</p>
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie Poster">
        <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
        <p><strong>Rating:</strong> {{ movie.vote_average }}</p>
        <div v-if="trailer">
          <h2>Trailer</h2>
          <iframe
            :src="'https://www.youtube.com/embed/' + trailer.key"
            width="560"
            height="315"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  
  const router = useRoute();
  const movie = ref(null);
  const trailer = ref(null);
  
  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: '83393ab8ab75bb658f2250fece439a12'  // Replace with your actual TMDB API key
        }
      });
      movie.value = response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };
  
  const fetchMovieTrailer = async (id) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
        params: {
          api_key: '83393ab8ab75bb658f2250fece439a12'  // Replace with your actual TMDB API key
        }
      });
      const trailers = response.data.results;
      trailer.value = trailers.find(video => video.type === 'Trailer' && video.site === 'YouTube');
    } catch (error) {
      console.error('Error fetching movie trailer:', error);
    }
  };
  
  onMounted(() => {
    const movieId = router.params.id;
    fetchMovieDetails(movieId);
    fetchMovieTrailer(movieId);
  });
  </script>
  
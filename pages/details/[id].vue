<template >
    <div class="bg-gradient-to-r from-gray-900 to-black text-white">
      <div v-if="movie"  class="p-12 "> 
        
        <h1 class="text-6xl font-bold font-mono text-center mb-4 ">{{ movie.title }}</h1>
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path" alt="Movie Poster" class="w-[500px]  object-cover ">
        <!-- <div class="w-full h-[400px] bg-gradient-to-b from-black absolute top-0"></div> -->
      <div class="mt-2 w-[500px]">
        <div class="flex w-full ">
            <div v-for="gener in movie.genres" :key="movie.genres.id">
            <div class="bg-gray-700 w-fit m-3 p-2 rounded-lg">{{gener.name}}</div>
        </div>
        </div>
        
        
            <p class="font-light">{{ movie.overview }}</p>
            <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
            <p><strong>Rating:</strong> {{ movie.vote_average }}</p>
        </div>
        <div v-if="trailer">
          <h2 class="text-xl">watch Trailer</h2>
          <iframe
            class="m-6"
            :src="'https://www.youtube.com/embed/' + trailer.key"
            width="700"
            height="500"
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
  
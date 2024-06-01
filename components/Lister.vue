<template>
    <div class="w-full px-14">
      <!-- <Movie/><Movie/><Movie/>
      <Movie/><Movie/> -->
      <div v-if="data === null">Loading...</div>
      <div v-else>
        <div v-for="movie in data" :key="movie.id">{{ movie.title }}</div>
        <!-- <div class="bottom-0 w-full text-center">{{data[0]}}</div> -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const tmdbApiKey = process.env.TMDB_API_KEY;
  const data = ref(null);
  
  const getPopularMovies = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=83393ab8ab75bb658f2250fece439a12`;
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  onMounted(async () => {
    data.value = await getPopularMovies();
  });
  </script>
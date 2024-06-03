<template>
    <div class="flex">
      <!-- Sidebar -->
      <div class="p-4 h-screen w-[300px]  bg-blue-900">
        <h1 class="text-2xl font-semibold mb-4 text-white">Discover Movies</h1>
        <div class="m-4">
          <label for="sortBy" class="m-2 text-white">Sort By:</label>
          <select v-model="sortBy" id="sortBy" class="border rounded px-2 py-1">
            <option value="popularity.desc">Popularity</option>
            <option value="release_date.desc">Release Date</option>
            <option value="vote_average.desc">Rating</option>
            <option value="revenue.desc">Revenue</option>
            <option value="original_title.asc">alphabet</option>
            <option value="vote_count.desc">vote</option>
            <!-- Add more options as needed -->
          </select>
        </div>
        <div class="mb-4">
          <label for="minVote" class="mr-2 text-white">Minimum Vote Average:</label>
          <input v-model="minVote" type="number" id="minVote" class="border rounded px-2 py-1">
        </div>
        <div class="mb-4">
          <label for="genre" class="mr-2 text-white">Genre:</label>
          <select v-model="genre" id="genre" class="border rounded px-2 py-1">
            <option value="" disabled selected>Select Genre</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="releaseYear" class="mr-2 text-white">Release Year:</label>
          <input v-model="releaseYear" type="number" id="releaseYear" class="border rounded px-2 py-1">
        </div>
        <button @click="fetchMovies" class="bg-blue-500 text-white py-2 px-4 rounded">Fetch Movies</button>
      </div>
  
      <!-- Main Content -->
      <div class="container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-4">Results:</h2>
        <div v-if="movies.length > 0">
          <div v-for="movie in movies" :key="movie.id" class="mb-4">
            <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" class="w-[200px] h-auto mr-2 rounded">
            <div>
              <h3 class="text-lg font-bold">{{ movie.title }}</h3>
              <p>{{ movie.overview }}</p>
            </div>
          </div>
        </div>
        <div v-else>No results found.</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import axios from 'axios';
  
  const sortBy = ref('popularity.desc');
  const minVote = ref(7);
  const genre = ref('');
  const releaseYear = ref(2020);
  const movies = ref([]);
  const genres = ref([]);
  
  const fetchMovies = async () => {
    try {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=83393ab8ab75bb658f2250fece439a12&sort_by=${sortBy.value}&include_adult=false&vote_average.gte=${minVote.value}&with_genres=${genre.value}&primary_release_year=${releaseYear.value}`;
      const response = await axios.get(url);
      movies.value = response.data.results;
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchGenres = async () => {
    try {
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=83393ab8ab75bb658f2250fece439a12`;
      const response = await axios.get(url);
      genres.value = response.data.genres;
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(() => {
    fetchGenres();
  });
  
  watch([sortBy, minVote, genre, releaseYear], () => {
    fetchMovies();
  });
  </script>
  
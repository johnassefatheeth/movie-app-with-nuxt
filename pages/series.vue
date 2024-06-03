<template>
    <div class="flex bg-gradient-to-r from-gray-900 to-black min-h-screen">
      <!-- Sidebar -->
      <div class="p-4 h-screen w-[300px] fixed text-white bg-gradient-to-r from-gray-900 to-black ">
        <h1 class="text-2xl font-semibold mb-4">Discover TV Series</h1>
        <div class="m-4">
          <label for="sortBy" class="m-2">Sort By:</label>
          <select v-model="sortBy" id="sortBy" class="border rounded px-2 py-1 bg-slate-600">
            <option value="popularity.desc">Popularity</option>
            <option value="first_air_date.desc">First Air Date</option>
            <option value="vote_average.desc">Rating</option>
            <option value="vote_count.desc">Vote Count</option>
            <!-- Add more options as needed -->
          </select>
        </div>
        <div class="mb-4 ">
          <label for="minVote" class="mr-2">Minimum Vote Average:</label>{{ minVote }}
          <input v-model="minVote" type="range" min="0" max="10" step="1" id="minVote" class="border rounded px-2 py-1 bg-slate-600">
        </div>
        <div class="mb-4">
          <label for="genre" class="mr-2">Genre:</label>
          <select v-model="genre" id="genre" class="border rounded px-2 py-1 bg-slate-600">
            <option value="" disabled selected>Select Genre</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="releaseYear" class="mr-2">First Air Year:</label>
          <input v-model="firstAirYear" type="number" id="firstAirYear" class="border rounded px-2 py-1 bg-slate-600">
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="container mx-auto px-4 py-8 ml-[300px]  text-white">
        <h2 class="text-3xl font-bold mb-4">Results:</h2>
        <div v-if="series.length > 0" class="flex flex-wrap">
          <div v-for="serie in series" :key="serie.id" class="mb-4">
            <img :src="'https://image.tmdb.org/t/p/w500' + serie.poster_path" class="w-[200px] h-auto mr-2 rounded">
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
  const minVote = ref(0);
  const genre = ref('');
  const firstAirYear = ref(2020);
  const series = ref([]);
  const genres = ref([]);
  
  const fetchSeries = async () => {
    try {
      const url = `https://api.themoviedb.org/3/discover/tv?api_key=83393ab8ab75bb658f2250fece439a12&sort_by=${sortBy.value}&include_adult=false&vote_average.gte=${minVote.value}&with_genres=${genre.value}&first_air_date_year=${firstAirYear.value}`;
      const response = await axios.get(url);
      series.value = response.data.results;
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchGenres = async () => {
    try {
      const url = `https://api.themoviedb.org/3/genre/tv/list?api_key=83393ab8ab75bb658f2250fece439a12`;
      const response = await axios.get(url);
      genres.value = response.data.genres;
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(() => {
    fetchGenres();
  });
  
  watch([sortBy, minVote, genre, firstAirYear], () => {
    fetchSeries();
  });
  </script>
  
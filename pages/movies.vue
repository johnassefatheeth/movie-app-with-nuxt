html
Copy code
<template>
  <div class="flex bg-gradient-to-r from-gray-900 to-black min-h-screen">
    <!-- Sidebar -->
    <div
      :class="['p-4 h-fit pb-24 fixed text-white bg-gradient-to-r from-gray-900 to-black transition-transform duration-300 ease-in-out', isSidebarOpen ? 'translate-x-0' : '-translate-x-full', 'lg:translate-x-0 lg:w-[300px]']"
      class="z-50"
    ><br><br>
      <h1 class="text-2xl font-semibold mb-4">Discover Movies</h1>
      <div class="m-4">
        <label for="sortBy" class="m-2">Sort By:</label>
        <select v-model="sortBy" id="sortBy" class="border rounded px-2 py-1 bg-slate-600">
          <option value="popularity.desc">Popularity</option>
          <option value="release_date.desc">Release Date</option>
          <option value="vote_average.desc">Rating</option>
          <option value="revenue.desc">Revenue</option>
          <option value="original_title.asc">alphabet</option>
          <option value="vote_count.desc">vote</option>
        </select>
      </div>
      <div class="mb-4">
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
        <label for="releaseYear" class="mr-2">Release Year:</label>
        <input v-model="releaseYear" type="number" id="releaseYear" class="border rounded px-2 py-1 bg-slate-600">
      </div>
    </div>

    <!-- Sidebar Toggle Button -->
    <button
      @click="toggleSidebar"
      class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
    >
      <svg v-if="!isSidebarOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <!-- Main Content -->
     <br>
    <div class="container mx-auto px-4 py-8 lg:ml-[300px] text-white transition-all duration-300 ease-in-out">
      <br>
      <h2 class="text-3xl font-bold mb-4">Results:</h2>
      <div v-if="movies.length > 0" class="flex flex-wrap">
        <div v-for="movie in movies" :key="movie.id" class="mb-4">
          <MovieCard :imagepath="movie.poster_path" :overview="movie.overview" :movieRating="movie.vote_average" :movieId="movie.id" />
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
const isSidebarOpen = ref(true);

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

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

onMounted(() => {
  fetchGenres();
});

watch([sortBy, minVote, genre, releaseYear], () => {
  fetchMovies();
});
</script>

<style scoped>
/* Additional styles can be added here */
</style>
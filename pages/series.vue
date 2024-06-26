html
Copy code
<template>
  <div class="flex bg-gradient-to-r from-gray-900 to-black min-h-screen">
    <!-- Sidebar -->
    <div
      :class="['p-4 h-fit pb-24 fixed text-white bg-gradient-to-r from-gray-900 to-black transition-transform duration-300 ease-in-out', isSidebarOpen ? 'translate-x-0' : '-translate-x-full', 'lg:translate-x-0 lg:w-[300px]']"
    class="z-50"
      ><br><br>
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
        <label for="releaseYear" class="mr-2">First Air Year:</label>
        <input v-model="firstAirYear" type="number" id="firstAirYear" class="border rounded px-2 py-1 bg-slate-600">
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
    <div class="container mx-auto px-4 py-8 lg:ml-[300px] text-white transition-all duration-300 ease-in-out pt-16">
      
      <h2 class="text-3xl font-bold mb-4">Results:</h2>
      <div v-if="series.length > 0" class="flex flex-wrap">
        <div v-for="serie in series" :key="serie.id" class="mb-4">
          <!-- <img :src="'https://image.tmdb.org/t/p/w500' + " class="w-[200px] h-auto mr-2 rounded"> -->
          <MovieCard :imagepath="serie.poster_path" :movieRating="serie.vote_average" :overview="serie.overview" :movieId="serie.id" type="tv"/>
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
const isSidebarOpen = ref(false);

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

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

onMounted(() => {
  fetchGenres();
  fetchSeries();
});

watch([sortBy, minVote, genre, firstAirYear], () => {
  fetchSeries();
});
</script>

<style scoped>
/* Additional styles can be added here */
</style>
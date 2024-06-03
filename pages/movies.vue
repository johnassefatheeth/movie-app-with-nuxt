<template>
    <div class="flex">
      <!-- Sidebar -->
      <div class="sidebar p-4">
        <h1 class="text-2xl font-semibold mb-4">Discover Movies</h1>
        <div class="mb-4">
          <label for="sortBy" class="mr-2">Sort By:</label>
          <select v-model="sortBy" id="sortBy" class="border rounded px-2 py-1">
            <option value="popularity.desc">Popularity Descending</option>
            <option value="popularity.asc">Popularity Ascending</option>
            <!-- Add more options as needed -->
          </select>
        </div>
        <div class="mb-4">
          <label for="minVote" class="mr-2">Minimum Vote Average:</label>
          <input v-model="minVote" type="number" id="minVote" class="border rounded px-2 py-1">
        </div>
        <div class="mb-4">
          <label for="genre" class="mr-2">Genre:</label>
          <select v-model="genre" id="genre" class="border rounded px-2 py-1">
            <option value="" disabled selected>Select Genre</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="releaseYear" class="mr-2">Release Year:</label>
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
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'DiscoverMovies',
    data() {
      return {
        sortBy: 'popularity.desc',
        minVote: 7,
        genre: '',
        releaseYear: 2020,
        movies: [],
        genres: []
      };
    },
    mounted() {
      this.fetchGenres();
    },
    methods: {
      async fetchMovies() {
        try {
          const url = `https://api.themoviedb.org/3/discover/movie?api_key=83393ab8ab75bb658f2250fece439a12&sort_by=${this.sortBy}&include_adult=false&vote_average.gte=${this.minVote}&with_genres=${this.genre}&primary_release_year=${this.releaseYear}`;
          const response = await axios.get(url);
          this.movies = response.data.results;
        } catch (error) {
          console.error(error);
        }
      },
      async fetchGenres() {
        try {
          const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=83393ab8ab75bb658f2250fece439a12`;
          const response = await axios.get(url);
          this.genres = response.data.genres;
        } catch (error) {
          console.error(error);
        }
      }
    },
    watch: {
      sortBy() {
        this.fetchMovies();
      },
      minVote() {
        this.fetchMovies();
      },
      genre() {
        this.fetchMovies();
      },
      releaseYear() {
        this.fetchMovies();
      }
    }
  };
  </script>
  
  <style>
  .sidebar {
    width: 300px;
    background-color: #f3f4f6;
  }
  </style>
  
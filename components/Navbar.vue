<template>
  <div
    @mouseleave="hoverOnBrowse = false"
    class="absolute opacity-80 z-20 w-full h-20 bg-gray-800 top-0 transition-all duration-300 ease-in-out hover:opacity-100"
  >
    <div class="w-1/5 h-20 float-left">
      <!-- <img class="h-full ml-4" src="../assets/image/food.png" alt=""> -->
    </div>
    <div class="m-4 lg:hidden">
      hambuger
    </div>
    <ul class="flex justify-evenly items-center h-full float-right mr-4">
      <li
        @mouseover="hoverOnBrowse = false"
        class="hover:text-white transition-all duration-300 ease-in-out m-4 mr-8"
      >
        <NuxtLink to="/" class="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">HOME</NuxtLink>
      </li>
      <li class="m-4 hover:text-white transition-all duration-300 ease-in-out mr-8">
        <NuxtLink to="/movies" class="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">MOVIES</NuxtLink>
      </li>
      <li class="m-4 hover:text-white transition-all duration-300 ease-in-out mr-8">
        <NuxtLink to="/series" class="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">SERIES</NuxtLink>
      </li>
      <li class="m-4 hover:text-white transition-all duration-300 ease-in-out mr-8">
        <NuxtLink to="/about" class="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">ABOUT</NuxtLink>
      </li>
      <li>
        <div class="relative">
          <div class="w-[300px] h-[30px] bg-white rounded-full flex">
            
            <input
              type="text"
              placeholder="search"
              class="h-full float-end w-full rounded-full pb-1 pl-8"
              v-model="searchQuery"
              @input="searchContent"
            >
          </div>
          <div v-if="searchResults.length > 0" class="absolute bg-white w-[300px] mt-1 rounded-lg shadow-lg text-black">
            <div v-for="result in searchResults" :key="result.id" class="p-2 border-b hover:bg-gray-200">
              <NuxtLink :to="`details/${result.media_type}/${result.id}`">
                {{ result.title || result.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const searchQuery = ref('');
const searchResults = ref([]);
const hoverOnBrowse = ref(false);
const isMenuOpen = ref(false);

const searchContent = async () => {
  if (searchQuery.value.length > 2) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/multi`, {
        params: {
          api_key: '83393ab8ab75bb658f2250fece439a12', // Replace with your actual TMDB API key
          query: searchQuery.value,
        },
      });
      searchResults.value = response.data.results.filter(
        result => result.media_type === 'movie' || result.media_type === 'tv'
      );
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  } else {
    searchResults.value = [];
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
/* Additional styles can be added here */
</style>

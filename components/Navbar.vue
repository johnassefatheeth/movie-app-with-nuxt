<template>
  <div
    @mouseleave="hoverOnBrowse = false"
    class="absolute opacity-80 z-20 w-full p-2 lg:h-20 bg-gray-800 top-0 transition-all duration-700  hover:opacity-100 "
  >
    <div class="w-1/5 h-20 float-left">
      <!-- <img class="h-full ml-4" src="../assets/image/food.png" alt=""> -->
    </div>
    <div class="m-8 lg:hidden float-end transition-all duration-700" @click="toggleMenu">
      
      <svg v-if="!isMenuOpen"
            class="w-6 h-6"
            fill="#ffffff"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <svg v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          
    </div>
    <ul class="flex flex-col justify-evenly items-center lg:h-full float-right mr-4 lg:flex-row transition-all duration-200" :class="isMenuOpen?'h-full':'h-0 overflow-clip'">
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

</script>

<style scoped>
/* Additional styles can be added here */
</style>

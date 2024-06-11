<template>
  <div class="bg-gradient-to-r from-gray-900 to-black text-white">
    <div v-if="content" class="p-12">
      <h1 class="text-6xl font-bold font-mono text-center mb-4">{{ content.title || content.name }}</h1>
      <div class="w-full flex">
        <img :src="'https://image.tmdb.org/t/p/w500' + content.backdrop_path" alt="Poster" class="w-[500px] mx-12 object-cover float-left">
        <div class="mt-2 w-[500px] float-end h-[500px] ml-24">
          <div class="flex w-full">
            <div v-for="genre in content.genres" :key="genre.id">
              <div class="bg-gray-700 w-fit m-3 p-2 rounded-lg">{{ genre.name }}</div>
            </div>
          </div>
          <p class="font-light text-2xl">{{ content.overview }}</p>
          <p class="text-3xl" v-if="content.release_date"><strong>Release Date:</strong> {{ content.release_date }}</p>
          <p class="text-3xl" v-if="content.first_air_date"><strong>First Air Date:</strong> {{ content.first_air_date }}</p>
          <p class="text-3xl"><strong>Rating:</strong> {{ content.vote_average }}</p>
        </div>
      </div>
      <div v-if="trailer">
        <h2 class="text-4xl mt-12 ml-24">Watch Trailer</h2>
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

const route = useRoute();
const content = ref(null);
const trailer = ref(null);
const type = ref('');

const fetchDetails = async (id, type) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}`, {
      params: {
        api_key: '83393ab8ab75bb658f2250fece439a12'  // Replace with your actual TMDB API key
      }
    });
    content.value = response.data;
  } catch (error) {
    console.error(`Error fetching ${type} details:`, error);
  }
};

const fetchTrailer = async (id, type) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos`, {
      params: {
        api_key: '83393ab8ab75bb658f2250fece439a12'  // Replace with your actual TMDB API key
      }
    });
    const trailers = response.data.results;
    trailer.value = trailers.find(video => video.type === 'Trailer' && video.site === 'YouTube');
  } catch (error) {
    console.error(`Error fetching ${type} trailer:`, error);
  }
};

onMounted(() => {
  const id = route.params.id;
  type.value = route.params.type === 'movie' ? 'movie' : 'tv'; // Assuming 'type' is passed in the route params as either 'movie' or 'tv'
  fetchDetails(id, type.value);
  fetchTrailer(id, type.value);
});
</script>

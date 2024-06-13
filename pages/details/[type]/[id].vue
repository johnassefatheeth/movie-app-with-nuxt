html
Copy code
<template>
  <div class="bg-gradient-to-r from-gray-900 to-black text-white">
    <div v-if="content" class="p-4 lg:p-12">
      <h1 class="text-4xl lg:text-6xl font-bold font-mono text-center mb-4">{{ content.title || content.name }}</h1>
      <div class="w-full flex flex-col lg:flex-row">
        <img :src="'https://image.tmdb.org/t/p/w500' + content.backdrop_path" alt="Backdrop" class="w-full lg:w-[500px] mx-0 lg:mx-12 mb-4 lg:mb-0">
        <div class="w-full lg:w-[500px] mt-2 lg:ml-24">
          <div class="flex flex-wrap">
            <div v-for="genre in content.genres" :key="genre.id" class="bg-gray-700 w-fit m-1 lg:m-3 p-2 rounded-lg">
              {{ genre.name }}
            </div>
          </div>
          <p class="font-light text-xl lg:text-2xl">{{ content.overview }}</p>
          <p class="text-xl lg:text-3xl" v-if="content.first_air_date"><strong>First Air Date:</strong> {{ content.first_air_date }}</p>
          <p class="text-xl lg:text-3xl" v-if="content.last_air_date"><strong>Last Air Date:</strong> {{ content.last_air_date }}</p>
          <p class="text-xl lg:text-3xl"><strong>Rating:</strong> {{ content.vote_average }}</p>
          <p class="text-xl lg:text-3xl"><strong>Status:</strong> {{ content.status }}</p>
          <p class="text-xl lg:text-3xl"><strong>Tagline:</strong> {{ content.tagline }}</p>
          <p v-if="type=='tv'" class="text-xl lg:text-3xl"><strong>Type:</strong> {{ content.type }}</p>
          <p v-if="type=='tv'" class="text-xl lg:text-3xl"><strong>Number of Seasons:</strong> {{ content.number_of_seasons }}</p>
          <p v-if="type=='tv'" class="text-xl lg:text-3xl"><strong>Number of Episodes:</strong> {{ content.number_of_episodes }}</p>
        </div>
      </div>
      <div class="flex flex-wrap w-full">
        <div class="w-full lg:w-1/2 p-4 lg:m-12" v-if="content.created_by && content.created_by.length">
          <h2 class="text-3xl lg:text-4xl mt-8 lg:mt-12">Created By</h2>
          <ul class="flex flex-wrap">
            <li v-for="creator in content.created_by" :key="creator.id" class="text-xl lg:text-2xl m-2 lg:m-4">
              <img v-if="creator.profile_path" :src="'https://image.tmdb.org/t/p/w200' + creator.profile_path" alt="Creator Image" class="w-24 h-24 rounded-full">
              <p>{{ creator.name }}</p>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/2 p-4 lg:m-12" v-if="content.networks && content.networks.length">
          <h2 class="text-3xl lg:text-4xl mt-8 lg:mt-12">Networks</h2>
          <ul class="flex flex-wrap bg-slate-700">
            <li v-for="network in content.networks" :key="network.id" class="text-xl lg:text-2xl m-2 lg:m-4">
              <img v-if="network.logo_path" :src="'https://image.tmdb.org/t/p/w200' + network.logo_path" alt="Network Logo" class="w-24 lg:w-32 rounded">
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/2 p-4 lg:m-12" v-if="content.production_companies && content.production_companies.length">
          <h2 class="text-3xl lg:text-4xl mt-8 lg:mt-12">Production</h2>
          <ul class="flex flex-wrap bg-slate-700">
            <li v-for="company in content.production_companies" :key="company.id" class="text-xl lg:text-2xl m-2 lg:m-4">
              <img v-if="company.logo_path" :src="'https://image.tmdb.org/t/p/w200' + company.logo_path" alt="Company Logo" class="w-24 lg:w-32 rounded">
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full lg:w-1/2 p-4 lg:m-12" v-if="content.seasons && content.seasons.length">
        <h2 class="text-3xl lg:text-4xl mt-8 lg:mt-12">Seasons</h2>
        <ul class="flex flex-wrap">
          <li v-for="season in content.seasons" :key="season.id" class="text-xl lg:text-2xl m-2 lg:m-4">
            <img v-if="season.poster_path" :src="'https://image.tmdb.org/t/p/w200' + season.poster_path" alt="Season Poster" class="w-24 lg:w-42 rounded">
            <p>{{ season.name }}</p>
          </li>
        </ul>
      </div>
      <div class="w-full lg:w-1/2 p-4 lg:m-12" v-if="content.last_episode_to_air">
        <h2 class="text-3xl lg:text-4xl mt-8 lg:mt-12">Last Episode</h2>
        <p class="text-xl lg:text-2xl"><strong>{{ content.last_episode_to_air.name }}</strong> (Season {{ content.last_episode_to_air.season_number }}, Episode {{ content.last_episode_to_air.episode_number }}): {{ content.last_episode_to_air.overview }}</p>
        <img v-if="content.last_episode_to_air.still_path" :src="'https://image.tmdb.org/t/p/w500' + content.last_episode_to_air.still_path" alt="Last Episode Image" class="w-full lg:w-52 mt-4 rounded">
      </div>
      <div class="w-full lg:w-1/2 p-4 lg:m-12" v-if="content.next_episode_to_air">
        <h2 class="text-3xl lg:text-4xl mt-8 lg:mt-12">Next Episode to Air</h2>
        <p class="text-xl lg:text-2xl"><strong>{{ content.next_episode_to_air.name }}</strong> (Season {{ content.next_episode_to_air.season_number }}, Episode {{ content.next_episode_to_air.episode_number }})</p>
      </div>
      <div v-if="trailer" class="w-full p-4 lg:p-0 lg:ml-24">
        <h2 class="text-3xl lg:text-4xl mt-8 lg:mt-12">Watch Trailer</h2>
        <iframe
          class="w-full lg:w-[700px] lg:h-[500px] m-6"
          :src="'https://www.youtube.com/embed/' + trailer.key"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div v-else>
      <Load />
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